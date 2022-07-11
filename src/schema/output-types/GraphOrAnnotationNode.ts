import { Maybe } from '../common';
import { ID } from '../scalars';
import { Kind, Instance, Function } from './';

export type GraphOrAnnotationNode = {
  id: ID;
  kind?: Maybe<Kind>;
  instance?: Maybe<Instance>;
  innerKind?: Maybe<Kind>;
  innerFunction?: Maybe<Function>;
  innerAnnotation?: Maybe<{ name: string; url: string }>;
};
