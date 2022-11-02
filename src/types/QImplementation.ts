import { QOperation } from '.';

export interface QImplementation {
  id: string;
  entrypoint: { id: string };
  operations: QOperation[];
}
