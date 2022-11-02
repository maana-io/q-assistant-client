import { CreateFunctionInput } from '.';

export interface QCreateFunctionWithLambdaInput {
  lambdaBody?: string;
  createFunctionInput: CreateFunctionInput;
}
