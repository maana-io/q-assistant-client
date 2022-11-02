import { QFunctionArgument, Service, GraphqlOperationType, QKind } from '.';

export interface QKnowledgeGraph {
  id: string;
  name: string;
  service: Service;
  arguments: QFunctionArgument[];
  implementation?: any;
  isGenerated: boolean;
  functionType: string;
  graphqlOperationType: GraphqlOperationType;
  outputType: string;
  outputKindId?: string;
  outputModifiers: any[];
  kind?: QKind;
}
