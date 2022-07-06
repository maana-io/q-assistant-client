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

export interface WorkspaceClient {
  canEdit: () => {};
  createFunction: () => {};
  createFunctions: () => {};
  createKind: () => {};
  createKinds: () => {};
  createKnowledgeGraph: () => {};
  createKnowledgeGraphs: () => {};
  deleteFunction: () => {};
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
  updateFunction: () => {};
  updateFunctions: () => {};
  updateKind: () => {};
  updateKinds: () => {};
}
