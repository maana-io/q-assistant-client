import { ID } from '../schema/scalars';

export type FunctionClient = {
  id: ID;
  name: string;
  lockedBy: () => {};
  canEdit: () => {};
  setLockedBy: () => {};
};
