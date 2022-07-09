import { Maybe } from '../common';
import { FieldModifiers, FieldType } from '../enums';
import { ID } from '../scalars';
import { Kind } from './';

export type Field = {
  id: ID;
  name: string;
  type: FieldType;
  description?: Maybe<string>;
  modifiers?: Maybe<Array<Maybe<FieldModifiers>>>;
  typeKindId?: Maybe<ID>;
  displayAs?: Maybe<Array<Maybe<string>>>;
  hide?: Maybe<boolean>;
  autoFocus?: Maybe<boolean>;
  readonly?: Maybe<boolean>;
  kind?: Maybe<Kind>;
  isDeleted: boolean;
};
