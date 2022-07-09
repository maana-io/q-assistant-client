import { Maybe } from '../common';
import { ID } from '../scalars';
import { Field, Link, LinkedInstance, LinkedKind, Relation, Service } from './';

export type Kind = {
  id: ID;
  name: string;
  serviceId?: Maybe<ID>;
  description?: Maybe<string>;
  thumbnailUrl?: Maybe<string>;
  isPublic?: Maybe<boolean>;
  isManaged?: Maybe<boolean>;
  isSystem?: Maybe<boolean>;
  schema: (
    includeDeleted?: Maybe<boolean>,
    fieldIds?: Maybe<Array<ID>>,
    fieldNames?: Maybe<Array<string>>,
    fieldKinds?: Maybe<Array<ID>>
  ) => Promise<Maybe<Array<Maybe<Field>>> | undefined>;
  nameField?: Maybe<ID>;
  isGenerated: boolean;
  relationsFrom?: Maybe<Array<Maybe<Relation>>>;
  relationsTo?: Maybe<Array<Maybe<Relation>>>;
  linksFrom?: Maybe<Array<Maybe<Link>>>;
  linksTo?: Maybe<Array<Maybe<Link>>>;
  service?: Maybe<Service>;
  linkedKindsTo: (relationId?: Maybe<ID>) => Promise<Array<LinkedKind>>;
  linkedKindsFrom: (relationId?: Maybe<ID>) => Promise<Array<LinkedKind>>;
  linkedInstancesTo: (relationId?: Maybe<ID>) => Promise<Array<LinkedInstance>>;
  linkedInstancesFrom: (
    relationId?: Maybe<ID>
  ) => Promise<Array<LinkedInstance>>;
  isDeleted: boolean;
};
