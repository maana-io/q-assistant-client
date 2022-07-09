import { Maybe } from '../common';
import { ID } from '../scalars';
import { FunctionGraphNode, KnowledgeGraphNode } from './';

export type PortalGraphNode = {
  id: ID;
  x: number;
  y: number;
  width: number;
  height: number;
  collapsed: boolean;
  knowledgeGraphNode?: Maybe<KnowledgeGraphNode>;
  functionGraphNode?: Maybe<FunctionGraphNode>;
};
