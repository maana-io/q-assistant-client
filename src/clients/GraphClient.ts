import { ID } from '../schema/scalars';
import { Maybe } from '../schema/common';
import { GraphOrAnnotationNode, PortalGraph } from '../schema/output-types';
import { NodeType } from '../schema/enums';
import { AssistantPortalGraphNodeFragment } from '../schema/Fragments';

type AddNodeInfo = {
  operationId?: Maybe<ID>;
  height?: number;
  width?: number;
  x?: number;
  y?: number;
};

type AddAnnotationNodeInput = {
  name?: string;
  url?: string;
  nodeInfo: AddNodeInfo;
};
type AddKindNodeInput = {
  kindId?: Maybe<ID>;
  kindName?: Maybe<string>;
  id: ID;
  nodeInfo: AddNodeInfo;
};
type AddFunctionNodeInput = {
  kindId?: Maybe<ID>;
  kindName?: Maybe<string>;
  id: ID;
  nodeInfo: AddNodeInfo;
};

export type AddNodeInput =
  | AddAnnotationNodeInput
  | AddFunctionNodeInput
  | AddKindNodeInput;

export type GraphClient = Pick<
  PortalGraph,
  'id' | 'name' | 'offsetX' | 'offsetY' | 'zoom'
> & {
  lockedBy: () => Promise<Maybe<string>>;
  canEdit: () => Promise<boolean>;
  setLocked: (
    isLocked: boolean
  ) => Promise<{ id: ID; lockedBy: Maybe<string> }>;
  getNodes: () => Promise<GraphOrAnnotationNode[]>;
  addNode: Maybe<
    (
      type: NodeType,
      instance: AddNodeInput,
      changeSelection: boolean
    ) => Promise<AssistantPortalGraphNodeFragment>
  >;
  removeNode: Maybe<(id: ID) => Promise<void>>;
  updateNodeLayout: (
    nodeId: ID,
    updates: {
      x?: Maybe<number>;
      y?: Maybe<number>;
      collapsed?: Maybe<boolean>;
    }
  ) => Promise<void>;
  updateGraphLayout: (updates: {
    zoom?: Maybe<number>;
    offsetX?: Maybe<number>;
    offsetY?: Maybe<number>;
  }) => Promise<void>;
  offsetX: number;
  offsetY: number;
  zoom: number;
};
