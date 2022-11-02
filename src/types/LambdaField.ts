import { Modifier } from '.';

export interface LambdaField {
  name: string;
  kind: string; // Scalar
  modifiers: Modifier[];
}
