import { Maybe } from '../common';
import { ID } from '../scalars';
import { Argument, Operation } from './';

export type ArgumentValue = {
  id: ID;
  argument?: Maybe<Argument>;
  operation?: Maybe<Operation>;
  argumentRef?: Maybe<ID>;
};
