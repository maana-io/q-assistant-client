import {
  Service,
  QFunctionArgument,
  QImplementation,
  GraphqlOperationType,
  QKind,
} from '.';

export interface QFunction {
  svcRef?: string;
  id: string;
  name: string;
  service: Service;
  arguments: QFunctionArgument[];
  implementation?: QImplementation | any;
  isGenerated: boolean;
  functionType: string;
  graphqlOperationType: GraphqlOperationType;
  outputType: string;
  outputKindId?: string;
  outputModifiers: string[];
  kind?: QKind;
  imported?: boolean;
}
