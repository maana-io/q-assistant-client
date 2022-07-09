import { Maybe } from '../common';
import { ID } from '../scalars';
import { Field, Instance, Kind, Relation } from './';

export type Link = {
  id: ID;
  relation: Relation;
  fromKind?: Maybe<Kind>;
  toKind?: Maybe<Kind>;
  name?: Maybe<string>;
  weight?: Maybe<number>;
  fromField?: Maybe<Field>;
  fromInstance?: Maybe<Instance>;
  fromOffset?: Maybe<string>;
  fromSpan?: Maybe<string>;
  toField?: Maybe<Field>;
  toInstance?: Maybe<Instance>;
  toOffset?: Maybe<string>;
  toSpan?: Maybe<string>;
};
