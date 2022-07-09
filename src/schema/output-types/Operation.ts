import { Maybe } from '../common';
import { OperationType } from '../enums';
import { ID } from '../scalars';
import { Function, ArgumentValue } from './';

export type Operation = {
  id: ID;
  type: OperationType;
  function?: Maybe<Function>;
  argumentValues: Array<ArgumentValue>;
};
