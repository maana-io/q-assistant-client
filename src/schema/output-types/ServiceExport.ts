import { Maybe } from '../common';
import { ID } from '../scalars';
import { Kind } from './Kind';

export type ServiceExport = {
  id: ID;
  function?: Maybe<Function>;
  kind?: Maybe<Kind>;
  as?: Maybe<string>;
};
