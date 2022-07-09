import { Maybe } from '../common';
import { ID } from '../scalars';
import * from './OperationInput'

export type ImplementationInput = {
  id?: Maybe<ID>;
  entrypoint?: Maybe<ID>;
  operations: Array<OperationInput>;
};
