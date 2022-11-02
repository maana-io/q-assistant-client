import { Modifier, QKind, GraphqlOperationType } from '.';

export interface QLambda {
  id: string;
  name: string;
  serviceId: string;
  runtime: {
    id: string;
    host: string;
    language: string;
  };
  code: string;
  input: {
    name: string;
    kind: string;
    modifiers: Modifier[];
  }[];
  outputKind: string;
  outputModifiers: Modifier[];
  kinds: QKind[];
  graphQLOperationType: GraphqlOperationType;
  timeout: number;
  sequenceNo: number;
}
