import { Relation, Kind, Instance } from './';
import { Maybe } from '../common';

export type LinkedInstance = {
  relation: Relation;
  kind?: Maybe<Kind>;
  instance?: Maybe<Instance>;
};
