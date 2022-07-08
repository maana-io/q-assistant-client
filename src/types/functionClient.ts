import {
  FieldModifiers,
  FieldType,
  FunctionType,
  GraphqlOperationType,
  Maybe,
  OperationType,
} from '../schema';
import { ID } from '../schema/scalars';
import { JustID, NamedEntity } from './Fragments';

export type FunctionClient = {
  id: ID;
  name: string;
  description?: Maybe<string>;
  isDeleted?: boolean;
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
  isGenerated?: boolean;
  functionType?: FunctionType;
  graphqlOperationType?: Maybe<GraphqlOperationType>;
  outputType?: FieldType;
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
        functionGraphNode?: Maybe<{
          id: ID;
          operationId: ID;
        }>;
        knowledgeGraphNode?: Maybe<JustID>;
      }>
    >;
  }>;

  lockedBy: () => Maybe<string>;
  canEdit: () => Promise<boolean>;
  setLocked: (
    isLocked: boolean
  ) => Promise<{ id: ID; lockedBy: Maybe<string> }>;
};
