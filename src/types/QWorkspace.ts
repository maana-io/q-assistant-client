import {
  QKind,
  QFunction,
  QService,
  QCurrentSelection,
  QKnowledgeGraph,
} from '.';

export interface QWorkspace {
  id: string;
  kinds: QKind[];
  allKinds: QKind[];
  functions: QFunction[];
  services: QService[];
  endpointServiceId: string;
  currentSelection: QCurrentSelection;
  knowledgeGraphs?: QKnowledgeGraph[][][];
}
