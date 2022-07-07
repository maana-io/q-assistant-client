import { Maybe } from '../schema/common';
import { ID } from '../schema/scalars';
import {
  GraphqlOperationType,
  FunctionType,
  FieldModifiers,
  FieldType,
  OperationType,
} from '../schema/enums';

export type AddFunctionGraphFragment = {};

export type JustID = { id: ID };
export type NamedEntity = { id: ID; name: string };

export type ImplementationDetailsFragment = {
  id: ID;
  entrypoint?: Maybe<JustID>;
  operations: Array<OperationDetailsFragment>;
};

export type OperationDetailsFragment = {
  id: ID;
  type: OperationType;
  function?: Maybe<OperationFunctionDetailsFragment>;
  argumentValues: Array<{
    id: ID;
    argument?: Maybe<JustID>;
    operation?: Maybe<JustID>;
    argumentRef?: Maybe<ID>;
  }>;
};

export type OperationFunctionDetailsFragment = {
  id: ID;
  name: string;
  graphqlOperationType?: Maybe<GraphqlOperationType>;
  functionType: FunctionType;
  isGenerated: boolean;
  service?: Maybe<NamedEntity>;
  arguments: Array<{
    id: ID;
    name: string;
    type: FieldType;
    description?: Maybe<string>;
    modifiers?: Maybe<Array<Maybe<FieldModifiers>>>;
    typeKindId?: Maybe<ID>;
    kind?: Maybe<NamedEntity>;
  }>;
  implementation?: Maybe<{
    id: ID;
    operations: Array<{
      id: ID;
      function?: Maybe<{
        id: ID;
        service?: Maybe<JustID>;
      }>;
    }>;
  }>;

  outputType: FieldType;
  outputKindId?: Maybe<ID>;
  outputModifiers?: Maybe<Array<Maybe<FieldModifiers>>>;
  kind?: Maybe<NamedEntity>;
};

export type FunctionDetialsFragment = {
  id: ID;
  name: string;
  graphqlOperationType?: Maybe<GraphqlOperationType>;
  functionType: FunctionType;
  isGenerated: boolean;
  service?: Maybe<NamedEntity>;
  arguments: Array<{
    id: ID;
    name: string;
    type: FieldType;
    description?: Maybe<string>;
    modifiers?: Maybe<Array<Maybe<FieldModifiers>>>;
    typeKindId?: Maybe<ID>;
    kind?: Maybe<{
      id: ID;
      name: string;
      isGenerated: boolean;
      service?: Maybe<NamedEntity>;
    }>;
  }>;
  implementation?: Maybe<ImplementationDetailsFragment>;
  outputType: FieldType;
  outputKindId?: Maybe<ID>;
  outputModifiers?: Maybe<Array<Maybe<FieldModifiers>>>;
  kind?: Maybe<{
    id: ID;
    name: string;
    isGenerated: boolean;
    service?: Maybe<NamedEntity>;
  }>;
};

export type AddFunctionOutputFragment = {
  newFunctions: [];
  workspaceServiceReferences: ID[];
};
