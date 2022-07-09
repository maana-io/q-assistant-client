import { Maybe } from '../common';
import { FieldModifiers, FieldType } from '../enums';
import { ID } from '../scalars';

export type FieldInput = {
  id?: Maybe<ID>;
  name: string;
  description?: Maybe<string>;
  type: FieldType;
  typeKindId?: Maybe<ID>;
  modifiers?: Maybe<Array<FieldModifiers>>;
  displayAs?: Maybe<Array<string>>;
  hide?: Maybe<boolean>;
  autoFocus?: Maybe<boolean>;
  readonly?: Maybe<boolean>;
};
