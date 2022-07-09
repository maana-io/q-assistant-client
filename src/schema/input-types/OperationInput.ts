import { Maybe } from '../common';
import { OperationType } from '../enums';
import { ArgumentValueInput } from './ArgumentValueInput';
import { ID } from '../scalars';

export type OperationInput = {
  id?: Maybe<ID>;
  type: OperationType;
  function?: Maybe<ID>;
  argumentValues: Array<ArgumentValueInput>;
};
