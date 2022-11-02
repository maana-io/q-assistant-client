import { Modifier, QKind } from '.';

export interface Schema {
  id?: string;
  name: string;
  type: string;
  typeKindId: string;
  modifiers: Modifier[];
  kind?: QKind;
}
