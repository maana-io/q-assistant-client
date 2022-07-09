import { Maybe } from '../common';
import { ID } from '../scalars';
import { Operation } from './Operation';

export type FunctionGraphNode = {
  id: ID;
  operationId: ID;
  operation?: Maybe<Operation>;
};
