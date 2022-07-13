import { uniq, union, flatten, uniqBy } from 'lodash';
import {
  FieldInput,
  FieldType,
  FunctionInput,
  getLambdaClient,
  GraphClient,
  GraphOrAnnotationNode,
  GraphqlOperationType,
  ID,
  KindDetailsFragment,
  Lambda,
  LambdaField,
  LambdaInput,
  LambdaKind,
  LambdaModifier,
  Maybe,
  NodeType,
  OperationType,
  ServiceCategory,
  UpdateFunctionInput,
  AddFunctionNodeInput,
  AddKindNodeInput,
  AssistantAPIClient,
  FunctionClient,
  WorkspaceClient,
} from '../..';
import { randomUUID } from 'crypto';

function nonNulls<T>(xs: (Maybe<T> | undefined)[]): T[] {
  return xs.filter((x) => x != null) as T[];
}

const DEFAULT_LAMBDA_TIMEOUT = 120000;

/**
 * Test if the given collection of graph nodes contains a function with the
 * specified identifier.
 * @param activeGraphNodes The collection of nodes to search
 * @param elementId The identifier to search for
 * @returns True if and only if the collection of nodes contains a function
 *   with the given identifier
 */
function hasFunctionNode(
  activeGraphNodes: GraphOrAnnotationNode[],
  elementId: ID
): boolean {
  return activeGraphNodes.some((node) => node.innerFunction?.id === elementId);
}

/**
 * Test if the given collection of graph nodes contains a kind with the
 * specified identifier.
 * @param activeGraphNodes The collection of nodes to search
 * @param elementId The identifier to search for
 * @returns True if and only if the collection of nodes contains a kind with
 *   the given identifier
 */
function hasKindNode(
  activeGraphNodes: GraphOrAnnotationNode[],
  elementId: ID
): boolean {
  return activeGraphNodes.some((node) => node.innerKind?.id === elementId);
}

/**
 * Add a collection of nodes to a knowledge or function graph
 * @param activeGraph The graph to which the nodes will be added
 * @param nodesToAdd A collection of nodes to add.
 * @returns This function returns true if at least one node is added
 *   to the graph.   This function returns false if all the provided
 *   nodes already exist in the graph.
 * @throws If the graph does not support mutations, then this function
 *   may throw an error.
 */
async function addNodesToGraph(
  activeGraph: GraphClient,
  nodesToAdd: {
    instance: AddKindNodeInput | AddFunctionNodeInput;
    typeOf: NodeType;
  }[]
): Promise<boolean> {
  const throwErr = (reason) => {
    throw new Error(`Can't add graph nodes.  ${reason}.`);
  };
  // test if the graph supports mutations.   Exit with error if it does not.
  if (activeGraph.addNode == null) throwErr('Graph does not support mutations');

  // Iterate over the nodes of the graph, filtering out the ones that
  // already exist.
  const nodes = await activeGraph.getNodes();
  const newNodes = nodesToAdd.filter(({ instance, typeOf }) => {
    // Filter out the nodes that we don't want to add.
    if (typeOf == NodeType.KN_FUNCTION && instance.id != null)
      return !hasFunctionNode(nodes, instance.id!);
    if (typeOf == NodeType.KN_KIND && instance.id != null)
      return !hasKindNode(nodes, instance.id!);
    if (typeOf == NodeType.KN_ANNOTATION) return false;
    // The node can be added!
    return true;
  });

  // If there are no nodes to add, then exit
  if (newNodes.length === 0) return false;

  // Otherwise, add each of the new nodes
  for (let node of newNodes) {
    await activeGraph.addNode!(node.typeOf, node.instance, false);
  }
  return true;
}

/**
 * Given a Maana Q field object, convert it to the corresponding Lambda Server field
 * object.
 * @param field The Maana Q Field to convert to a Lambda Server field
 * @param isInput Is the field on an input type?   If this is set to true, then
 *   any occurrence of a kind in the field's definition will be replaced with the
 *   corresponding input type.
 * @returns
 */
function marshalFieldToLambdaField(
  knownKinds: KindDetailsFragment[],
  lambdaKinds: Partial<KindDetailsFragment>[],
  field: FieldInput,
  isInput: boolean
): LambdaField {
  const name = field.name;
  const modifiers = field.modifiers;
  let type = '';

  if (field.type === FieldType.Kind) {
    const inventoryKind = knownKinds.find((k) => k.id === field.typeKindId)!;

    const { name, schema } = inventoryKind;
    type = name + `${isInput ? 'Input' : ''}`;

    // Add the kind's definition to the list of known kinds if it does not exist
    const existingKind = lambdaKinds.find((kind) => kind.name === type);
    if (!existingKind) {
      const kind: Partial<KindDetailsFragment> = {
        name: type,
      };
      lambdaKinds.push(kind);

      // Build the fields after the kind has already been added to the
      // list. This is done to prevent recursive kinds from causing an
      // infinite loop, without having to set a max depth.
      //@ts-ignore
      kind.fields = nonNulls(schema ?? [])
        .map((field) =>
          marshalFieldToLambdaField(knownKinds, lambdaKinds, field, isInput)
        )
        .filter((e) => e);
    }
  } else {
    type = FieldType[field.type];
  }

  return {
    id: randomUUID(),
    name,
    kind: type,
    modifiers: nonNulls(modifiers ?? []).map((x) => LambdaModifier[x]),
  };
}

/**
 * Given some colleciton of kind identifiers, representing kinds that are
 * referenced as arguments or fields in the outer function, get all the
 * kind details for those kinds and any others that are referenced
 * recursively by them.   This is equivalent to an effectful tree fold that
 * accumulates the kind details.
 * @param parentKinds A list of kinds that are already known.  On the initial call
 *   this will be empty.
 * @param kindIds The identifiers of the kinds to lookup and recursively
 *   traverse.
 * @returns A collection of distinct kind details.
 */
async function getKindsRecursively(
  client: AssistantAPIClient,
  parentKinds: KindDetailsFragment[] = [],
  kindIds: ID[] = []
): Promise<KindDetailsFragment[]> {
  // If there are no kinds in this branch, then we can terminate the recursive
  // search.
  if (kindIds.length === 0) return parentKinds;

  // If there are kinds in this branch of the recursive search, then dereference
  // them
  const kinds: KindDetailsFragment[] = await Promise.all(
    kindIds.map(client.getKindById)
  );

  const knownKinds = union(kinds, parentKinds);

  // Find the identifiers of the child kinds.   To prevent infinite recursion
  // we need to ensure that they are not any of the parent kinds or kinds in
  // this branch
  const childKindIds: ID[] = uniq(
    nonNulls<ID>(
      flatten(
        kinds.map((kind) =>
          (kind.schema ?? []).map((field) => {
            if (
              field &&
              field.type === 'KIND' &&
              field.typeKindId && // Field is of a Kind type
              !knownKinds.some((knownKind) => knownKind.id === field.typeKindId) // Kind is not already known
            ) {
              return field.typeKindId;
            } else {
              return null;
            }
          })
        )
      )
    )
  );

  return getKindsRecursively(client, knownKinds, childKindIds);
}

/**
 * Convert The output type of a function to a Lambda kind and return
 * the type name.   As a side effect, add the lambda kind to the
 * collection of lambda kinds.
 * @param func - The function maana Q function for which the output
 *   kind will be converted.
 * @param knownKinds - The list of kinds that occur in the scope of
 *   the function and it's kind heirarchy.
 * @param lambdaKinds - The list of kinds that will be passed to the
 *   create lambda function.
 * @returns The name of the output kind.
 */
function marshalOutputKind(
  func: FunctionClient,
  knownKinds: KindDetailsFragment[],
  lambdaKinds: Partial<LambdaKind>[]
): string {
  if (func.outputType === FieldType.Kind) {
    const inventoryKind = knownKinds.find((k) => k.id === func.outputKindId)!;
    const { name, schema } = inventoryKind;
    const kind: LambdaKind = {
      name,
      fields: nonNulls(schema ?? []).map((field) =>
        marshalFieldToLambdaField(knownKinds, lambdaKinds, field, false)
      ),
    };

    lambdaKinds.push(kind);
    return name;
  }
  return FieldType[func.outputType];
}

/**
 * Create a lambda function that could be used as the implementation of a workspace function
 * @param client - The assistant client interface to use for making queries about the
 *   available kinds and functions.
 * @param workspace - The workspace in which the kind
 * @param outerFunction
 * @param code
 * @param sequenceNo
 * @returns
 */
export async function createCompatibleLambdaInput(
  client: AssistantAPIClient,
  workspace: WorkspaceClient,
  outerFunction: FunctionClient,
  code: string,
  sequenceNo: number
): Promise<LambdaInput> {
  try {
    const throwErr = (reason) => {
      throw new Error(`Can't create lambda function. ${reason}`);
    };

    // Get all the kinds that appear as either an argument type or return
    // type, or as a child field of one of those kinds.
    const knownKinds: KindDetailsFragment[] = await getKindsRecursively(
      client,
      [],
      nonNulls<ID>(
        union(
          outerFunction.arguments.map((arg) => arg.typeKindId),
          [outerFunction.outputKindId]
        )
      )
    );

    // Even though each found kind has a distinct id, the names may not be
    // distinct.   For example, two services define a type with the same
    // name, and both are used in the function definition.
    const distinctKinds = uniqBy(knownKinds, (x) => x.name);
    if (distinctKinds.length !== knownKinds.length)
      throwErr('Function refers to different kinds that have the same names');

    const lambdaKinds: LambdaKind[] = [];
    // Marshal the arguments and the output kind
    const inputs = outerFunction.arguments.map((arg) =>
      marshalFieldToLambdaField(knownKinds, lambdaKinds, arg, true)
    );
    const outputKind = marshalOutputKind(
      outerFunction,
      knownKinds,
      lambdaKinds
    );

    // Construct Lambda
    return {
      id: outerFunction.id,
      name: outerFunction.name,
      sequenceNo,
      serviceId: `${workspace.id}`,
      runtimeId: `Q+JavaScript`,
      graphQLOperationType:
        outerFunction.graphqlOperationType ?? GraphqlOperationType.Query,
      code,
      input: inputs,
      outputKind,
      outputModifiers: nonNulls(outerFunction.outputModifiers ?? []).map(
        (x) => LambdaModifier[x]
      ),
      kinds: lambdaKinds,
      timeout: DEFAULT_LAMBDA_TIMEOUT,
    };
  } catch (e) {
    return Promise.reject(e);
  }
}

/**
 * This helper function creates a FunctionUpdateInput that can be
 * used to rewire a function's implementation so that it uses the
 * given lambda as the implementation.
 * @param lambda - the lambda to use as the implementation
 * @param wksFunc - the workspace function being rewired
 */
export function createInputToRewireFunction(
  lambda: Lambda,
  wksFunc: FunctionClient
) {
  const operationId = randomUUID();
  const funcUpdate: UpdateFunctionInput = {
    id: wksFunc.id,
    name: wksFunc.name,
    implementation: {
      entrypoint: operationId,
      operations: [
        {
          id: operationId,
          function: lambda.id,
          type: OperationType.Apply,
          argumentValues: lambda.input.map((lambdaArgument, j) => {
            return {
              argument: lambdaArgument.id,
              operation: null,
              argumentRef: wksFunc.arguments[j].id,
            };
          }),
        },
      ],
    },
  };
  return funcUpdate;
}

/**
 * Given a collection of function declarations, create the a workspace
 * function matching each declaration and then implement the function
 * graph with the provided lambda code snippets.   If the function already
 * exists, then leave it unchanged unless the optional "updateIfExists"
 * argument is true, otherwise replace it's implementation with the
 * lambda code snippet.
 * @param client The Q Assistant client to use
 * @param input - a list of function declarations consisting of pairs of
 *   function inputs and the body of the lambda.
 * @param updateIfExists - a boolean that controls the behavior when
 *   a function matching the name or id of one of the delcarations
 *   already exists
 * @returns A promise that returns a list of identifiers of the functions
 *   actually changed.
 */
export async function upsertFunctionsWithLambdaImplementations(
  client: AssistantAPIClient,
  input: { code: string; declaration: FunctionInput }[],
  updateIfExists: boolean = false
) {
  try {
    // Get the clients for the active workspace and lambda server
    const wksClient = await client.getWorkspace();
    const lambdaClient = await getLambdaClient(client);
    // Ensure that the lambda server is imported into the current
    // workspace
    await wksClient.importService(lambdaClient.id);
    // **************
    // INITIALIZATION
    // **************
    // Ensure that the workspace has an associated lambda workspace
    // service
    const wksLambda = await client.createService({
      id: lambdaClient.id,
      name: lambdaClient.id,
      endpointUrl: lambdaClient.serviceEndpoint + wksClient.id + '/graphql',
      serviceType: ServiceCategory.External,
      isSystem: false,
    });
    wksClient.importService(wksLambda.id);
    // refresh the schema to ensure that all the workspace functions
    // and kinds are up to date and then get a collection of all the
    // functions in the workspace.
    client.refreshServiceSchema(wksLambda.id);
    const allFunctions: FunctionClient[] = await wksClient.getFunctions();

    // *******************
    // CREATING TODO LISTS
    // *******************
    const wksFuncsToCreate: number[] = [];
    const wksFuncsToUpdate: { inputIdx: number; funcIdx: number }[] = [];
    // Create a list of Work to be done.
    input.forEach((decl, inputIdx) => {
      // * Determine if the function we are about to try to create exists in the workspace and which functionId to use from here on out:
      const funcIdx = allFunctions.findIndex(
        (f) => f.name === decl.declaration.name || f.id === decl.declaration.id
      );

      // * If function exists in workspace and 'updateIfExists' is true, add function id to existingFunctionIds array:
      if (funcIdx >= 0) {
        if (updateIfExists) wksFuncsToUpdate.push({ inputIdx, funcIdx });
      } else {
        wksFuncsToCreate.push(inputIdx);
      }
    });

    // For each function declaration for which there is not an existing workspace
    // function, create the new function in the workspace.   Once it has completd
    // add the newly created function client to the collection of workspace functions
    const createdFuncs = await wksClient.createFunctions(
      wksFuncsToCreate.map((inputIdx) => allFunctions[inputIdx])
    );
    wksFuncsToCreate.map((inputIdx, i) => {
      // push newly created function to the updates list.
      wksFuncsToUpdate.push({
        inputIdx: inputIdx,
        funcIdx: allFunctions.length,
      });
      allFunctions.push(createdFuncs[i]);
    });

    // For each function being updated, we need to construct a lambda input instance
    // that can be passed to the lambda server.
    const lambdaInputs: LambdaInput[] = await Promise.all(
      wksFuncsToUpdate.map(({ inputIdx, funcIdx }) =>
        createCompatibleLambdaInput(
          client,
          wksClient,
          allFunctions[funcIdx],
          input[inputIdx].code,
          0
        )
      )
    );
    // Once this is complete, we can pass all the inputs to the lambda client to
    // construct all of the lambdas all at once.   After this is done, we need
    // to refresh the inventory so that the newly created lambdas all appear.
    const lambdas: Lambda[] = await lambdaClient.addLambdas(lambdaInputs);
    client.refreshServiceSchema(wksLambda.id);

    // Rewire the functions so that they use the lambdas as their implementations.
    const funcUpdates: UpdateFunctionInput[] = lambdas.map((lambda, i) =>
      createInputToRewireFunction(lambda, allFunctions[i])
    );
    const updatedFuncs = await wksClient.updateFunctions(funcUpdates);

    //return the identifiers of the functions that were updated;
    return updatedFuncs.map((x) => x.id);
  } catch (e) {
    Promise.reject(e);
  }
}
