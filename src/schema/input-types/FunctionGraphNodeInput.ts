import { Maybe } from '../common';
import { ID } from '../scalars';
import { OperationInput } from './OperationInput';

export type FunctionGraphNodeInput = {
  id?: Maybe<ID>;
  operation: OperationInput;
};
