import { Maybe } from '../common';
import { FieldModifiers, FieldType } from '../enums';
import { ID } from '../scalars';

export type UpdateArgumentInput = {
  id: ID;
  name?: Maybe<string>;
  type?: Maybe<FieldType>;
  typeKindId?: Maybe<ID>;
  modifiers?: Maybe<Array<Maybe<FieldModifiers>>>;
  description?: Maybe<string>;
};
