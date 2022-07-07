/**
 * WorkspaceClient
 *
 * I produced these types by loading an assistant into kportal and setting:
 * `window.client = AssistantAPIClient`, then calling `client.getWorkspace()`
 * and saving the resulting output. The output produced this object with these
 * fields and functions on it.
 *
 * Todo: strongly type the rest of this once we are able.
 *
 * ! Most of this is built in kportal in the function `getWorkspaceObject`,
 * ! inside `assistantAPI/workspace.js` in the kportal codebase.
 */

import { Maybe, UpdateFunctionInput } from '../schema';

import { FunctionClient } from './functionClient';
import { ID } from '../schema/scalars';

export type NamedEntityInput = {
  id?: Maybe<ID>;
  name: string;
};

export interface WorkspaceClient {
  canEdit: () => Promise<boolean>;
  createFunction: (input: NamedEntityInput) => Promise<Maybe<FunctionClient>>;
  createFunctions: (input: NamedEntityInput[]) => Promise<FunctionClient[]>;
  createKind: () => {};
  createKinds: () => {};
  createKnowledgeGraph: () => {};
  createKnowledgeGraphs: () => {};
  deleteFunction: (functionId: ID) => Promise<void>;
  deleteKind: () => {};
  endpointUrl: string;
  getActiveGraph: () => {};
  getFunctionGraph: () => {};
  getFunctions: () => {};
  getImportedAssistants: () => {};
  getImportedServices: () => {};
  getKinds: () => {};
  getKnowledgeGraphs: () => {};
  id: string;
  importService: () => {};
  importServices: () => {};
  lockedBy: () => {};
  logicServiceId: string;
  modelServiceId: string;
  name: string;
  removeService: () => {};
  removeServices: () => {};
  setLocked: () => {};
  triggerRepairEvent: () => {};
  updateFunction: () => {};
  updateFunctions: () => {};
  updateKind: () => {};
  updateKinds: () => {};
  workspaceServiceId: string;
}
