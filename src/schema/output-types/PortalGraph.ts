import { Maybe } from '../common';
import { PortalGraphType } from '../enums';
import { ID } from '../scalars';
import { Workspace, Function, PortalGraphNode } from './';

export type PortalGraph = {
  id: ID;
  name: string;
  type: PortalGraphType;
  expanded: boolean;
  zoom: number;
  offsetX: number;
  offsetY: number;
  workspace?: Maybe<Workspace>;
  function?: Maybe<Function>;
  nodes?: Maybe<Array<PortalGraphNode>>;
  lockedBy?: Maybe<string>;
};
