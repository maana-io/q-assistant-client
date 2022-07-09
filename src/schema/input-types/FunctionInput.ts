import { Maybe } from '../common';
import {
  FieldModifiers,
  FieldType,
  FunctionType,
  GraphqlOperationType,
} from '../enums';
import { ArgumentInput } from './ArgumentInput';
import { ID } from '../scalars';
import { ImplementationInput } from './ImplementationInput';

export type FunctionInput = {
  id?: Maybe<ID>;
  name: string;
  description?: Maybe<string>;
  arguments: Array<ArgumentInput>;
  outputType: FieldType;
  outputKindId?: Maybe<ID>;
  outputModifiers?: Maybe<Array<Maybe<FieldModifiers>>>;
  graphqlOperationType: GraphqlOperationType;
  functionType: FunctionType;
  implementation?: Maybe<ImplementationInput>;
  service: ID;
};
