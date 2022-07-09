import { Maybe } from '../common';
import { ID } from '../scalars';
import { Instance, Function, Kind } from './';

export type KnowledgeGraphNode = {
  id: ID;
  kind?: Maybe<Kind>;
  instance?: Maybe<Instance>;
  innerKind?: Maybe<Kind>;
  innerFunction?: Maybe<Function>;
};
