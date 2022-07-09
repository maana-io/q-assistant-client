import { Maybe } from '../common';
import { ID } from '../scalars';
import { Kind } from './Kind';
import { Function } from './Function';

export type ServiceImport = {
  id: ID;
  service: ID;
  function?: Maybe<Function>;
  kind?: Maybe<Kind>;
  as?: Maybe<string>;
};
