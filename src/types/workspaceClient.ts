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

import {
  AddKindInput,
  FieldModifiers,
  FieldType,
  Maybe,
  PortalGraphNodeInput,
  UpdateFunctionInput,
  UpdateKindInput,
} from '../schema';

import { FunctionClient } from './functionClient';
import { ID } from '../schema/scalars';
import { KindDetailsFragment } from './Fragments';
import { GraphClient } from './GraphClient';

export type NamedEntityInput = {
  id?: Maybe<ID>;
  name: string;
};

export type CreatePortalGraphInput = {
  name: string;
  id?: Maybe<ID>;
  index?: Maybe<number>;
  offsetX?: Maybe<number>;
  offsetY?: Maybe<number>;
  zoom?: Maybe<number>;
  nodes?: Maybe<Array<PortalGraphNodeInput>>;
};

export interface WorkspaceClient {
  canEdit: () => Promise<boolean>;
  createFunction: (input: NamedEntityInput) => Promise<Maybe<FunctionClient>>;
  createFunctions: (input: NamedEntityInput[]) => Promise<FunctionClient[]>;
  createKind: (input: AddKindInput) => Promise<Maybe<KindDetailsFragment>>;
  createKinds: (input: AddKindInput[]) => Promise<KindDetailsFragment[]>;
  createKnowledgeGraph: (
    input: CreatePortalGraphInput
  ) => Promise<Maybe<GraphClient>>;
  createKnowledgeGraphs: (
    input: CreatePortalGraphInput[]
  ) => Promise<GraphClient[]>;
  deleteFunction: (functionId: ID) => Promise<void>;
  deleteKind: (kindId: ID) => Promise<void>;
  endpointUrl: string;
  getActiveGraph: () => Promise<Maybe<GraphClient>>;
  getFunctionGraph: (graphId: ID) => Promise<Maybe<GraphClient>>;
  getFunctions: () => Promise<FunctionClient[]>;
  getImportedAssistants: () => {};
  getImportedServices: () => {};
  getKinds: () => {};
  getKnowledgeGraphs: () => Promise<Array<GraphClient>>;
  id: string;
  importService: () => {};
  importServices: () => {};
  lockedBy: () => {};
  logicServiceId: string;
  modelServiceId: string;
  name: string;
  removeService: () => {};
  removeServices: () => {};
  setLocked: (isLocked: boolean) => {};
  triggerRepairEvent: () => Promise<boolean>;
  updateFunction: (
    input: UpdateFunctionInput
  ) => Promise<Maybe<FunctionClient>>;
  updateFunctions: (input: UpdateFunctionInput[]) => Promise<FunctionClient[]>;
  updateKind: (input: UpdateKindInput) => Promise<Maybe<KindDetailsFragment>>;
  updateKinds: (input: UpdateKindInput[]) => Promise<KindDetailsFragment[]>;
  workspaceServiceId: string;
}
