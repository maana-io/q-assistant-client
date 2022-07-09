import { Maybe } from '../common';
import { ID } from '../scalars';
import { FieldValue, Kind, Link, LinkedInstance, LinkedKind } from './';

export type Instance = {
  id: ID;
  name?: Maybe<string>;
  kindId: ID;
  kind?: Maybe<Kind>;
  fieldIds?: Maybe<Array<Maybe<ID>>>;
  fieldValues?: Maybe<Array<Maybe<FieldValue>>>;
  linksFrom?: Maybe<Array<Maybe<Link>>>;
  linksTo?: Maybe<Array<Maybe<Link>>>;
  linkedKindsTo: (relationId?: Maybe<ID>) => Promise<Array<LinkedKind>>;
  linkedKindsFrom: (relationId?: Maybe<ID>) => Promise<Array<LinkedKind>>;
  linkedInstancesTo: (relationId?: Maybe<ID>) => Promise<Array<LinkedInstance>>;
  linkedInstancesFrom: (
    relationId?: Maybe<ID>
  ) => Promise<Array<LinkedInstance>>;
};
