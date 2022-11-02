import { QFunction, QKind } from '.';

export interface QGraphNode {
  id: string;
  x: number;
  y: number;
  collapsed: boolean;
  knowledgeGraphNode: {
    id: string;
    innerKind?: QKind;
    innerFunction?: QFunction;
  };
}
