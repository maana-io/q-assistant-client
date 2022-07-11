import { Maybe } from '../common';
import {
  FieldModifiers,
  FieldType,
  FunctionType,
  GraphqlOperationType,
} from '../enums';
import { ID } from '../scalars';
import { ImplementationInput, UpdateArgumentInput } from './';

export type UpdateFunctionInput = {
  id: ID;
  name?: Maybe<string>;
  description?: Maybe<string>;
  arguments?: Maybe<Array<UpdateArgumentInput>>;
  outputType?: Maybe<FieldType>;
  outputKindId?: Maybe<ID>;
  outputModifiers?: Maybe<Array<Maybe<FieldModifiers>>>;
  graphqlOperationType?: Maybe<GraphqlOperationType>;
  functionType?: Maybe<FunctionType>;
  implementation?: Maybe<ImplementationInput>;
  service?: Maybe<ID>;
};
