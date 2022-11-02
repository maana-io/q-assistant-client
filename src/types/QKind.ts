import { Service, Schema } from '.';

export interface QKind {
  svcRef?: string;
  id: string;
  name: string;
  service?: Service;
  isGenerated?: boolean;
  schema: Schema[];
  imported?: boolean;
}
