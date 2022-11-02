import {
  Schema,
  QCreateImplementation,
  GraphqlOperationType,
  Modifier,
  QKind,
} from '.';

export interface CreateFunctionInput {
  id?: string;
  name: string;
  description?: string | null;
  arguments?: Partial<Schema>[];
  implementation?: QCreateImplementation;
  graphqlOperationType: GraphqlOperationType;
  outputType: string;
  outputKindId?: string;
  outputModifiers?: Modifier[];
  kind?: QKind;
  functionType: string;
}
