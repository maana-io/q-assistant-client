import { AddBotActionInput, UpdateBotActionInput } from './inputTypes';
import {
  AddDocumentInput,
  AddEntitiesInput,
  AddFileFromUrlInput,
  AddFileInput,
  AddImageInput,
  AddInstanceInput,
  AddInstanceSetInput,
  AddKindInput,
  AddLinkInput,
  AddPortalGraphInput,
  AddRelationInput,
  AddServiceInput,
  AddServiceSourceInput,
  AddUserInput,
  AddWorkspaceInput,
  AttachmentInput,
  DeleteInstanceInput,
  DeleteInstanceSetInput,
  DetectedFaceInput,
  EntitySearchInput,
  FunctionInput,
  GraphLayoutUpdateInput,
  InstanceRefInput,
  PortalGraphNodeInput,
  RecognizedFaceInput,
  ReorderPortalGraphsInput,
  TestServiceConnectionInput,
  UpdateFileInput,
  UpdateFunctionInput,
  UpdateGraphInput,
  UpdateImplementationInput,
  UpdateInstanceInput,
  UpdateKindInput,
  UpdateServiceInput,
  UpdateWorkspaceLayoutInput,
} from './inputTypes';
import {
  AddFunctionOutput,
  AddKindOutput,
  BotAction,
  DeleteEntityOutput,
  InstanceRef,
  Kind,
  Link,
  MoveKindsAndFunctionsResponse,
  PortalGraph,
  PortalGraphNode,
  Service,
  UpdateFunctionOutput,
  UpdateFunctionsOutput,
  UpdateGraphOutput,
  Workspace,
} from './outputTypes';

import { ID } from './scalars';
import { Maybe } from './common';
import { Theme } from './enums';

export type Mutation = {
  submitFeedback: (
    feedback: string,
    attachments: Array<AttachmentInput>
  ) => Promise<boolean>;
  addService: (input: AddServiceInput) => Promise<ID>;
  refreshServiceSchema: (id: ID) => Promise<Service>;
  updateService: (input: UpdateServiceInput) => Promise<Service>;
  removeServices: (
    workspaceId: ID,
    serviceIds: Array<ID>
  ) => Promise<Maybe<boolean> | undefined>;
  deleteService: (id: ID) => Promise<Maybe<boolean> | undefined>;
  testServiceConnection: (
    input: TestServiceConnectionInput
  ) => Promise<Service>;
  addDetectedFaces: (input: Array<DetectedFaceInput>) => Promise<boolean>;
  addRecognizedFaces: (input: Array<RecognizedFaceInput>) => Promise<boolean>;
  addUser: (input: AddUserInput) => Promise<Maybe<ID> | undefined>;
  addKind: (tenantId: ID, input: AddKindInput) => Promise<AddKindOutput>;
  addKinds: (input: Array<AddKindInput>) => Promise<AddKindOutput>;
  updateKind: (
    tenantId: ID,
    input: UpdateKindInput
  ) => Promise<Maybe<Kind> | undefined>;
  updateKinds: (input: Array<UpdateKindInput>) => Promise<Array<Kind>>;
  removeKinds: (kindIds: Array<ID>, workspaceId: ID) => Promise<boolean>;
  deleteKind: (kindId: ID) => Promise<DeleteEntityOutput>;
  addInstance: (
    tenantId: ID,
    input: AddInstanceInput
  ) => Promise<Maybe<ID> | undefined>;
  addInstanceSet: (
    tenantId: ID,
    input: AddInstanceSetInput
  ) => Promise<Maybe<Array<Maybe<ID>>> | undefined>;
  updateInstance: (
    tenantId: ID,
    input: UpdateInstanceInput
  ) => Promise<Maybe<ID> | undefined>;
  removeInstances: (
    workspaceId: ID,
    instanceIds: Array<ID>
  ) => Promise<Maybe<boolean> | undefined>;
  deleteInstance: (
    tenantId: ID,
    input: DeleteInstanceInput
  ) => Promise<DeleteEntityOutput>;
  deleteInstanceSet: (
    tenantId: ID,
    input: DeleteInstanceSetInput
  ) => Promise<DeleteEntityOutput>;
  addRelation: (input: AddRelationInput) => Promise<Maybe<ID> | undefined>;
  addLink: (input: AddLinkInput) => Promise<Maybe<ID> | undefined>;
  addLinks: (
    input: Array<Maybe<AddLinkInput>>
  ) => Promise<Maybe<Array<Maybe<ID>>> | undefined>;
  deleteLinks: (
    ids: Array<ID>
  ) => Promise<Maybe<Array<Maybe<Link>>> | undefined>;
  setTheme: (userId: ID, theme: Theme) => Promise<boolean>;
  duplicateKind: (id: ID, newName: string, targetServiceId: ID) => Promise<ID>;
  duplicateFunction: (
    id: ID,
    newName: string,
    targetServiceId: ID
  ) => Promise<ID>;
  duplicateInstance: (
    instanceId: ID,
    kindId?: Maybe<ID>,
    kindName?: Maybe<string>
  ) => Promise<ID>;
  addWorkspace: (input: AddWorkspaceInput) => Promise<Maybe<ID> | undefined>;
  openWorkspace: (
    userId: ID,
    workspaceId: ID
  ) => Promise<Maybe<ID> | undefined>;
  closeWorkspace: (
    userId: ID,
    workspaceId: ID
  ) => Promise<Maybe<ID> | undefined>;
  deleteWorkspace: (id: ID) => Promise<boolean>;
  cloneWorkspace: (
    userId: ID,
    workspaceId: ID,
    newName?: Maybe<string>,
    newWorkspaceServiceId?: Maybe<ID>
  ) => Promise<ID>;
  activeGraphPath: (workspaceId: ID, graphPath: Array<ID>) => Promise<boolean>;
  updateWorkspaceLayout: (
    input: UpdateWorkspaceLayoutInput
  ) => Promise<boolean>;
  resetWorkspaceLayout: (id: ID) => Promise<boolean>;
  addInstanceRefToWorkspace: (
    wsId: ID,
    instanceRef: InstanceRefInput
  ) => Promise<InstanceRef>;
  addInstanceRefsToWorkspace: (
    wsId: ID,
    instanceRefs: Array<InstanceRefInput>
  ) => Promise<Array<InstanceRef>>;
  removeInstanceRefsFromWorkspace: (
    wsId: ID,
    instanceRefIds: Array<ID>
  ) => Promise<boolean>;
  addServiceToWorkspace: (
    workspaceId: ID,
    serviceId: ID
  ) => Promise<Maybe<Service> | undefined>;
  moveKindsAndFunctions: (
    originId: ID,
    targetId: ID,
    kindIds: Array<ID>,
    functionIds: Array<ID>
  ) => Promise<MoveKindsAndFunctionsResponse>;
  updateGraphLayout: (input: GraphLayoutUpdateInput) => Promise<boolean>;
  addPortalGraph: (
    input: AddPortalGraphInput
  ) => Promise<Maybe<PortalGraph> | undefined>;
  /** @deprecated Deprecated because it does nothing. Portal Graphs are retrieved via a KindDB query, not added/removed from a workspace. */
  addPortalGraphs: (
    workspaceId: ID,
    graphIds: Array<ID>
  ) => Promise<Maybe<Array<PortalGraph>> | undefined>;
  /** @deprecated Deprecated because it does nothing. Portal Graphs are deleted, not removed. */
  removePortalGraphs: (
    workspaceId: ID,
    graphIds: Array<ID>
  ) => Promise<boolean>;
  deletePortalGraph: (graphId: ID) => Promise<Maybe<Workspace> | undefined>;
  updateGraph: (input: UpdateGraphInput) => Promise<UpdateGraphOutput>;
  /** @deprecated Deprecated because it does nothing. Portal Graphs are sorted alphabetically instead of a user set order. */
  reorderPortalGraphs: (
    input: ReorderPortalGraphsInput
  ) => Promise<Maybe<ID> | undefined>;
  addNodeToPortalGraph: (
    graphId: ID,
    node: PortalGraphNodeInput
  ) => Promise<PortalGraphNode>;
  addNodesToPortalGraph: (
    graphId: ID,
    nodes: Array<PortalGraphNodeInput>
  ) => Promise<Array<PortalGraphNode>>;
  removeNodeFromPortalGraph: (
    graphId: ID,
    nodeId: ID
  ) => Promise<Array<PortalGraphNode>>;
  removeNodesFromPortalGraph: (
    graphId: ID,
    nodeIds: Array<ID>
  ) => Promise<Array<PortalGraphNode>>;
  expand: (graphId: ID, expanded: boolean) => Promise<boolean>;
  addServiceSource: (input: AddServiceSourceInput) => Promise<ID>;
  addDocument: (
    input?: Maybe<AddDocumentInput>
  ) => Promise<Maybe<ID> | undefined>;
  addDocuments: (
    input: Array<AddDocumentInput>
  ) => Promise<Maybe<Array<Maybe<ID>>> | undefined>;
  deleteDocument: (id: ID) => Promise<Maybe<Document> | undefined>;
  deleteDocuments: (
    ids: Array<ID>
  ) => Promise<Maybe<Array<Maybe<Document>>> | undefined>;
  addFile: (input: AddFileInput) => Promise<ID>;
  addFiles: (input: Array<AddFileInput>) => Promise<boolean>;
  addFileFromUrl: (input: AddFileFromUrlInput) => Promise<ID>;
  updateFile: (
    input?: Maybe<UpdateFileInput>
  ) => Promise<Maybe<ID> | undefined>;
  deleteFile: (id: ID) => Promise<DeleteEntityOutput>;
  deleteFiles: (ids: Array<ID>) => Promise<DeleteEntityOutput>;
  addImage: (input: AddImageInput) => Promise<Maybe<ID> | undefined>;
  addImages: (
    input: Array<AddImageInput>
  ) => Promise<Maybe<Array<Maybe<ID>>> | undefined>;
  addEntities: (input: AddEntitiesInput) => Promise<Maybe<boolean> | undefined>;
  addFunction: (input?: Maybe<FunctionInput>) => Promise<AddFunctionOutput>;
  addFunctions: (input: Array<FunctionInput>) => Promise<AddFunctionOutput>;
  updateFunction: (input: UpdateFunctionInput) => Promise<UpdateFunctionOutput>;
  updateFunctions: (
    input: Array<UpdateFunctionInput>
  ) => Promise<UpdateFunctionsOutput>;
  updateFunctionImplementation: (
    functionId: ID,
    implementation: UpdateImplementationInput
  ) => Promise<Function>;
  removeFunctions: (
    functionIds: Array<ID>,
    workspaceId: ID
  ) => Promise<boolean>;
  deleteFunction: (id: ID) => Promise<DeleteEntityOutput>;
  entitySearchAction: (
    input: EntitySearchInput,
    resultKey?: Maybe<string>
  ) => Promise<BotAction>;
  entitySearchPurgeTemporaries: (resultKey?: Maybe<string>) => Promise<boolean>;
  addBotAction: (input?: Maybe<AddBotActionInput>) => Promise<ID>;
  updateBotAction: (input?: Maybe<UpdateBotActionInput>) => Promise<ID>;
};
