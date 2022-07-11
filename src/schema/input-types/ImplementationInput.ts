import { Maybe } from '../common';
import { ID } from '../scalars';
import { OperationInput } from './';

export type ImplementationInput = {
  id?: Maybe<ID>;
  entrypoint?: Maybe<ID>;
  operations: Array<OperationInput>;
};
