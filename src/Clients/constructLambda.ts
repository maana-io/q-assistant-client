// @ts-nocheck
import * as _ from 'lodash';
import {
  QKind,
  QFunction,
  QCreateLambdaInput,
  QWorkspace,
  QFunctionArgument,
} from '../../types';
import AssistantAPIClient from '@io-maana/q-assistant-client';
import * as LambdaClient from '../../api/lambdas';
import { WorkspaceClient } from './WorkspaceClient';

interface IConstructLambda {
  workspace: QWorkspace;
  code: string;
  inventoryFunction: QFunction;
  sequenceNo: number;
}

// export const createLambda: (props: IConstructLambda) => any = async (
//   props: IConstructLambda,
// ) => {
//   const { workspace, code, inventoryFunction, sequenceNo } = props;
//   const lambdaInput: any = await constructLambda({
//     workspace,
//     inventoryFunction,
//     code,
//     sequenceNo,
//   });

//   try {
//     const lambda = await LambdaClient.createLambda(lambdaInput);
//     return lambda;
//   } catch (e) {
//     console.log('Error creating lambda: ', e);
//   }
// };

// export const createLambdas: (props: IConstructLambda[]) => any = async (
//   props: IConstructLambda[],
// ) => {
//   try {
//     let lambdaInputs = [];
//     for (let input of props) {
//       const { workspace, code, inventoryFunction, sequenceNo } = input;
//       const lambdaInput: any = await constructLambda({
//         workspace,
//         inventoryFunction,
//         code,
//         sequenceNo,
//       });

//       lambdaInputs.push(lambdaInput);
//     }

//     const lambdas = await LambdaClient.createLambdas(lambdaInputs);

//     return lambdas;
//   } catch (e) {
//     console.log('Error creating lambda: ', e);
//   }
// };

export function makeCreateLambdaInput(
  workspace: WorkspaceClient,
  code: string,
  inventoryFunction: QFunction,
  sequenceNo: number,
): Promise<QCreateLambdaInput> {
  try {
    /**
     * Given list of known kinds and list of pending kind ids get definition of all kinds used in kind hierarchy
     */
    const getPendingKinds = async ({ kinds = [], pendingKindIds = [] }) => {
      if (pendingKindIds.length === 0) return kinds;

      // Should be getting multiple kinds by multiple IDs - when it is exposed
      const pendingKinds = await Promise.all(
        pendingKindIds.map(AssistantAPIClient.getKindById),
      );

      const extraKindIdsNeeded = _.uniq(
        _.flatten(
          (pendingKinds as any).map((kind: QKind) =>
            kind.schema
              .map(field => {
                if (
                  field.type === 'KIND' &&
                  field.typeKindId && // Field is of a Kind type
                  !kinds.some(knownKind => knownKind.id === field.typeKindId) // Kind is not already known
                ) {
                  return field.typeKindId;
                } else {
                  return null;
                }
              })
              .filter(Boolean),
          ),
        ),
      );

      return getPendingKinds({
        kinds: _.union(kinds, pendingKinds),
        pendingKindIds: extraKindIdsNeeded,
      });
    };

    const knownKinds = await getPendingKinds({
      pendingKindIds: _.union(
        inventoryFunction.arguments.map(arg => arg.typeKindId),
        [inventoryFunction.outputKindId],
      ).filter(Boolean),
    });

    const duplicateNames = _.filter(
      knownKinds.map(k => k.name),
      (value, index, iteratee) =>
        _.includes(iteratee, value, parseInt(index) + 1),
    );

    if (duplicateNames.length !== 0) {
      console.warn(
        'Function is using hierarchy with duplicate kind names and may produce incorrect definition',
      );
      duplicateNames.forEach(name => {
        console.warn(
          `Kind ${name} has following definitions:`,
          JSON.stringify(knownKinds.filter(k => k.name === name)),
        );
      });
    }

    const kinds: Partial<QKind>[] = [];

    // Helper for building Q fields
    const getFieldFromField = (field: QFunctionArgument, isInput: boolean) => {
      const name = field.name;
      const modifiers = field.modifiers;
      let type = '';

      if (field.type === 'KIND') {
        const inventoryKind = knownKinds.find(k => k.id === field.kind.id);

        const { name, schema } = inventoryKind;
        type = name + `${isInput ? 'Input' : ''}`;

        // If the kind definition has not already been created, then create
        // it now.
        const existingKind = kinds.find((kind: QKind) => kind.name === type);
        if (!existingKind) {
          const kind: Partial<QKind> = {
            name: type,
          };
          kinds.push(kind);

          // Build the fields after the kind has already been added to the
          // list. This is done to prevent recursive kinds from causing an
          // infinite loop, without having to set a max depth.
          //@ts-ignore
          kind.fields = schema
            .map((field: QFunctionArgument) =>
              getFieldFromField(field, isInput),
            )
            .filter(e => e);
        }
      } else {
        type = field.type;
      }

      return {
        name,
        kind: type,
        modifiers: modifiers.filter(m => m !== 'EPHEMERAL'),
      };
    };

    const {
      id: functionId,
      name: functionName,
      outputType: inventoryFunctionOutputType,
      outputModifiers: inventoryFunctionOutputModifiers,
      outputKindId,
      graphqlOperationType,
      arguments: args,
    } = inventoryFunction;

    // Build input fields for each argument of the function
    const inputs = args
      .map(argument => {
        return getFieldFromField(argument, true);
      })
      .filter(e => e);

    // Build the output kind
    let outputKind = '';
    if (inventoryFunctionOutputType === 'KIND') {
      const inventoryKind = knownKinds.find(k => k.id === outputKindId);
      // console.log(
      // 	'🚀 ~ file: constructLambda.ts ~ line 209 ~ inventoryKind',
      // 	inventoryKind
      // )

      const { name, schema } = inventoryKind;
      const kind = {
        name,
        fields: schema.map((field: QFunctionArgument) =>
          getFieldFromField(field, false),
        ),
      };

      outputKind = name;
      kinds.push(kind);
    } else {
      // It's a scalar
      outputKind = inventoryFunctionOutputType;
    }

    // Construct Lambda
    const lambda = {
      id: functionId,
      name: functionName,
      sequenceNo,
      serviceId: `${workspace.id}`,
      // runtimeId: `${selectedHost}+${selectedLanguage}`,
      runtimeId: `Q+JavaScript`,
      graphQLOperationType: graphqlOperationType,
      code,
      input: inputs,
      outputKind,
      outputModifiers: inventoryFunctionOutputModifiers.filter(
        // Output must be tangible
        m => m !== 'EPHEMERAL',
      ),
      kinds: _.uniqBy(kinds, k => k.name),
    };

    return lambda;
  } catch (e) {
    console.log('Error: ', e);
  }
}
