import { Modifier, QKind } from '.';

export interface QFunctionArgument {
  id: string;
  name: string;
  type: string;
  typeKindId?: null | string | string;
  modifiers: Modifier[];
  kind?: QKind;
}
