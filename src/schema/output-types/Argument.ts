import { Maybe } from '../common';
import { FieldModifiers, FieldType } from '../enums';
import { ID } from '../scalars';
import { Kind, Function } from './';

export type Argument = {
  id: ID;
  name: string;
  type: FieldType;
  typeKindId?: Maybe<ID>;
  kind?: Maybe<Kind>;
  modifiers?: Maybe<Array<Maybe<FieldModifiers>>>;
  description?: Maybe<string>;
  function: Function;
  isDeleted: boolean;
};
