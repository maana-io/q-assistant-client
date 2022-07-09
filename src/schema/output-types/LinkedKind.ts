import { Maybe } from '../common';
import { Field, Kind, Relation } from './';

export type LinkedKind = {
  relation: Relation;
  kind?: Maybe<Kind>;
  field?: Maybe<Field>;
};
