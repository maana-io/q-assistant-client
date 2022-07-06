/**
 * Because I went on such a goose chase to find these types, I figured
 * I should store them separately so it's very clear where they're coming from.
 */

import { GraphqlOperationType } from '../schema';

/**
 * These types were lifted from the Workspace Dev Assistant (courtesy of Leo).
 * Leo did a lot of work to figure out what parameters were required by a number
 * of core Assistant operations. I don't know how he figured these out, I think
 * it was from a lot of trial and error..
 */
export interface QCreateFunctionInput {
  id?: string;
  name: string;
  arguments: Partial<Schema>[];
  implementation?: QImplementation | any;
  graphqlOperationType: GraphqlOperationType;
  outputType: string;
  outputKindId?: string;
  outputModifiers?: Modifier[];
  kind?: QKind;
  functionType: string;
}

export type Modifier = 'NONULL' | 'LIST'; // * Is this complete?
export type QService = {
  id: string;
  name: string;
};
export interface QKind {
  svcRef?: string;
  id: string;
  name: string;
  service?: QService;
  isGenerated?: boolean;
  schema: Schema[];
  imported?: boolean;
}

export interface QImplementation {
  id: string;
  entrypoint: { id: string };
  operations: QOperation[];
}

export interface QOperation {
  id: string;
  type: string;
  function: {
    id: string;
    name: string;
    service: {
      id: string;
      name: string;
    };
    argumentValues: QOperationArgumentValue[];
  };
}

export interface QOperationArgumentValue {
  id?: string;
  argument:
    | {
        id: string;
        name: string;
      }
    | string;
  operation: {
    id: string;
  } | null;
  argumentRef: string;
}

export interface Schema {
  id?: string;
  name: string;
  type: string;
  typeKindId: string;
  modifiers: Modifier[];
  kind?: QKind;
}
