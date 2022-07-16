import { ID } from '../schema/scalars';
import { Maybe } from '../schema/common';
import { GraphOrAnnotationNode, PortalGraph } from '../schema/output-types';
import { NodeType } from '../schema/enums';
import { AssistantPortalGraphNodeFragment } from '../schema/Fragments';

export type AddNodeInfo = {
  operationId?: Maybe<ID>;
  height?: number;
  width?: number;
  x?: number;
  y?: number;
};

export interface AddAnnotationNodeInput {
  name?: string;
  url?: string;
  nodeInfo?: AddNodeInfo;
}
export interface AddKindNodeInput {
  id: ID;
}
export interface AddFunctionNodeInput {
  id: ID;
}

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
  ) => Promise<Maybe<{ id: ID; lockedBy?: Maybe<string> }>>;
  getNodes: () => Promise<GraphOrAnnotationNode[]>;
  addNode: Maybe<
    (
      type: NodeType,
      instance:
        | AddFunctionNodeInput
        | AddKindNodeInput
        | AddAnnotationNodeInput,
      changeSelection: boolean
    ) => Promise<GraphOrAnnotationNode>
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
