import { ID } from '../scalars';

export type WorkspaceLayout = {
  id: ID;
  explorerOpen: boolean;
  explorerSize: number;
  inventoryOpen: boolean;
  inventorySize: number;
  contextOpen: boolean;
  contextMode: string;
  contextSize: number;
  dataVizOpen: boolean;
  dataVizSize: number;
};
