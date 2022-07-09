import { Maybe } from '../common';
import { ID } from '../scalars';

export type ArgumentValueInput = {
  id?: Maybe<ID>;
  argument: ID;
  operation?: Maybe<ID>;
  argumentRef?: Maybe<ID>;
};
