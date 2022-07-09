import { Kind, Function } from './';

export type Inventory = {
  serviceKinds: Array<Kind>;
  workspaceKinds: Array<Kind>;
  functions: Array<Function>;
};
