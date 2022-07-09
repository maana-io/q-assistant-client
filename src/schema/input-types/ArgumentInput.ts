import { Maybe } from '../common';
import { FieldModifiers, FieldType } from '../enums';
import { ID } from '../scalars';

export type ArgumentInput = {
  id?: Maybe<ID>;
  name: string;
  type: FieldType;
  typeKindId?: Maybe<ID>;
  modifiers?: Maybe<Array<Maybe<FieldModifiers>>>;
  description?: Maybe<string>;
};
