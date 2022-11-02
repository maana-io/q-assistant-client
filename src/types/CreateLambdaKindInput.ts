import {
  GraphqlOperationType,
  LambdaField,
  LambdaKindInput,
  Modifier,
} from '.';

export interface QCreateLambdaInput {
  id: string;
  name: string;
  graphqlOperationType: GraphqlOperationType;
  serviceId: string;
  runtimeId: string;
  code: string;
  input: LambdaField[];
  kinds: LambdaKindInput[];
  outputKind: string;
  outputModifiers: Modifier[];
}
