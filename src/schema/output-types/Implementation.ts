import { Maybe } from '../common';
import { ID } from '../scalars';
import { Operation } from './';

export type Implementation = {
  id: ID;
  entrypoint?: Maybe<Operation>;
  operations: Array<Operation>;
};
