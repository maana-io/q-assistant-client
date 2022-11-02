import { QCreateOperation } from '.';

export interface QCreateImplementation {
  id: string;
  entrypoint: string;
  operations: QCreateOperation[];
}
