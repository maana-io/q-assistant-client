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

import { ID } from '../schema/scalars';
import { Maybe, UpdateFunctionInput } from '../schema';
import { FunctionClient } from './functionClient';

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
  description: null;
  getActiveGraph: () => {};
  getAnnotationById: () => {};
  getAnnotations: () => {};
  getFunctionGraph: () => {};
  getFunctions: () => {};
  getFunctionsByName: () => {};
  getImportedAssistants: () => {};
  getImportedServices: () => {};
  getKinds: () => {};
  getKindsByName: () => {};
  getKnowledgeGraphs: () => {};
  id: string;
  importService: () => {};
  importServices: () => {};
  isPublic: false;
  isTemplate: false;
  location: {
    url: string;
    platformUrl: string;
  };
  lockedBy: () => {};
  name: string;
  owner: { id: string; name: string };
  persistenceServiceId: string;
  reload: () => {};
  removeService: () => {};
  removeServices: () => {};
  serviceId: string;
  setLocked: () => {};
  tags: [];
  thumbnailUrl: string;
  triggerRepairEvent: () => {};
  update: () => {};
  updateFunction: (
    input: UpdateFunctionInput
  ) => Promise<Maybe<FunctionClient>>;
  updateFunctions: (input: UpdateFunctionInput[]) => Promise<FunctionClient[]>;
  updateKind: () => {};
  updateKinds: () => {};
}
