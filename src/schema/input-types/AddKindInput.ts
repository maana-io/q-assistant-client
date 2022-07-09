import { Maybe } from '../common';
import { FieldInput } from '.';
import { ID } from '../scalars';

export type AddKindInput = {
  id?: Maybe<ID>;
  name: string;
  description?: Maybe<string>;
  serviceId: ID;
  thumbnailUrl?: Maybe<string>;
  isPublic?: Maybe<boolean>;
  nameField?: Maybe<ID>;
  isManaged?: Maybe<boolean>;
  isSystem?: Maybe<boolean>;
  schema?: Maybe<Array<FieldInput>>;
};
