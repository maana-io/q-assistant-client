import { Maybe } from '../schema/common';
import { ID } from '../schema/scalars';
import {
  GraphqlOperationType,
  FunctionType,
  FieldModifiers,
  FieldType,
  OperationType,
} from '../schema/enums';
import { PortalGraphType } from '../schema';
import { FieldValue } from '../schema/outputTypes';

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

export type KindDetailsFragment = {
  id: ID;
  name: string;
  description?: Maybe<string>;
  isPublic?: Maybe<boolean>;
  isGenerated: boolean;
  nameField?: Maybe<ID>;
  schema?: Promise<Maybe<Array<Maybe<FieldDetailsFragment>>>>;
  service?: Maybe<NamedEntity>;
  serviceId?: Maybe<ID>;
};

export type FieldDetailsFragment = {
  id: ID;
  name: string;
  description?: Maybe<string>;
  type: FieldType;
  typeKindId?: Maybe<ID>;
  modifiers?: Maybe<Array<Maybe<FieldModifiers>>>;
  kind?: Maybe<{
    id: ID;
    name: string;
    isGenerated: boolean;
    service?: Maybe<NamedEntity>;
  }>;
  hide?: Maybe<boolean>;
  autoFocus?: Maybe<boolean>;
  displayAs?: Maybe<Array<Maybe<string>>>;
  readonly?: Maybe<boolean>;
};

export type AssistantKindsFragment = {
  id: ID;
  name: string;
  description?: Maybe<string>;
  service?: Maybe<NamedEntity>;
  isGenerated: boolean;
  schema?: Promise<
    Maybe<
      Array<
        Maybe<{
          id: ID;
          name: string;
          type: FieldType;
          typeKindId?: Maybe<ID>;
          modifiers?: Maybe<Array<Maybe<FieldModifiers>>>;
          kind?: Maybe<{
            id: ID;
            name: string;
            service?: Maybe<NamedEntity>;
          }>;
        }>
      >
    >
  >;
};

export type AssistantPortalGraphFragment = {
  id: ID;
  name: string;
  type: PortalGraphType;
  lockedBy?: Maybe<string>;
};

export type AssistantPortalGraphNodeFragment = {
  id: ID;
  x: number;
  y: number;
  collapsed: boolean;
  knowledgeGraphNode?: Maybe<{
    id: ID;
    instance?: Maybe<InstanceDetailsFragment>;
    innerKind?: Maybe<AssistantKindsFragment>;
    innerFunction?: Maybe<AssistantFunctionsFragment>;
  }>;
  functionGraphNode?: Maybe<{ id: ID; operationId: ID }>;
};

export type AssistantFunctionsFragment = {
  id: ID;
  name: string;
  description?: Maybe<string>;
  isDeleted: boolean;
  service?: Maybe<NamedEntity>;
  arguments: Array<{
    id: ID;
    name: string;
    type: FieldType;
    modifiers?: Maybe<Array<Maybe<FieldModifiers>>>;
    typeKindId?: Maybe<ID>;
    kind?: Maybe<{
      id: ID;
      name: string;
      service?: Maybe<NamedEntity>;
    }>;
  }>;
  implementation?: Maybe<{
    id: ID;
    entrypoint?: Maybe<JustID>;
    operations: Array<{
      id: ID;
      type: OperationType;
      function?: Maybe<{
        id: ID;
        name: string;
        service?: Maybe<NamedEntity>;
      }>;
      argumentValues: Array<{
        id: ID;
        argument?: Maybe<NamedEntity>;
        operation?: Maybe<JustID>;
        argumentRef?: Maybe<ID>;
      }>;
    }>;
  }>;

  isGenerated: boolean;
  functionType: FunctionType;
  graphqlOperationType?: Maybe<GraphqlOperationType>;
  outputType: FieldType;
  outputKindId?: Maybe<ID>;
  outputModifiers?: Maybe<Array<Maybe<FieldModifiers>>>;
  kind?: Maybe<{
    id: ID;
    name: string;
    service?: Maybe<NamedEntity>;
  }>;
  graph?: Maybe<{
    id: ID;
    lockedBy?: Maybe<string>;
    nodes?: Maybe<
      Array<{
        id: ID;
        knowledgeGraphNode?: Maybe<JustID>;
        functionGraphNode?: Maybe<{ id: ID; operationId: ID }>;
      }>
    >;
  }>;
};

export type InstanceDetailsFragment = {
  id: ID;
  kindId: ID;
  fieldIds?: Maybe<Array<Maybe<ID>>>;
  fieldValues?: Maybe<Array<Maybe<FieldValue>>>;
};
