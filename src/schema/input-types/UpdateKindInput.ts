import { Maybe } from '../common';
import { FieldInput } from './FieldInput';
import { ID } from '../scalars';

export type UpdateKindInput = {
  id: ID;
  name?: Maybe<string>;
  description?: Maybe<string>;
  serviceId?: Maybe<ID>;
  thumbnailUrl?: Maybe<string>;
  isPublic?: Maybe<boolean>;
  nameField?: Maybe<ID>;
  isManaged?: Maybe<boolean>;
  isSystem?: Maybe<boolean>;
  schema?: Maybe<Array<FieldInput>>;
};
