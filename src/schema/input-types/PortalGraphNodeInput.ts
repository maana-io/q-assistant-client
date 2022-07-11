import { Maybe } from '../common';
import { FunctionGraphNodeInput, KnowledgeGraphNodeInput } from './';
import { ID } from '../scalars';

export type PortalGraphNodeInput = {
  id?: Maybe<ID>;
  x: number;
  y: number;
  width: number;
  height: number;
  collapsed: boolean;
  functionGraphNode?: Maybe<FunctionGraphNodeInput>;
  knowledgeGraphNode?: Maybe<KnowledgeGraphNodeInput>;
};
