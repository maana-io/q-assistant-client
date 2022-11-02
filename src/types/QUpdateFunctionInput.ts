import { GraphqlOperationType, Modifier } from '.';

export type QUpdateFunctionInput = {
  id: string;
  name?: string;
  description?: string | null;
  implementation?: {
    entrypoint: string;
    operations: {
      id: string;
      function: string;
      type: string;
      argumentValues: any;
    }[];
  };
  graphqlOperationType?: GraphqlOperationType;
  outputType?: string;
  outputKindId?: string;
  outputModifiers?: Modifier[];
  functionType?: string;
};
