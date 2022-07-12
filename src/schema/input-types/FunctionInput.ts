import {
  FieldModifiers,
  FieldType,
  FunctionType,
  GraphqlOperationType,
} from '../enums';

import { ArgumentInput } from './ArgumentInput';
import { ID } from '../scalars';
import { ImplementationInput } from './ImplementationInput';
import { Maybe } from '../common';

export type FunctionInput = {
  /** only required field */
  name: string;

  id?: Maybe<ID>;
  description?: Maybe<string>;
  arguments?: Array<ArgumentInput>;
  outputType?: FieldType;
  outputKindId?: Maybe<ID>;
  outputModifiers?: Maybe<Array<Maybe<FieldModifiers>>>;
  graphqlOperationType?: GraphqlOperationType;
  functionType?: FunctionType;
  implementation?: Maybe<ImplementationInput>;
  service?: ID;
};
