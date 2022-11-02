import { QKind, QFunction } from '.';

export interface QService {
  id: string;
  name: string;
  kinds: QKind[];
  functions: QFunction[];
}
