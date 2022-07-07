/**
 * Generated from kportal // test/schema.gql on release/v3.2.4
 */

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  {
    [SubKey in K]?: Maybe<T[SubKey]>;
  };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  {
    [SubKey in K]: Maybe<T[SubKey]>;
  };

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Time: any;
  DateTime: any;
  JSON: any;
};

export enum BotActionStatus {
  Pending = 'PENDING',
  InProgress = 'IN_PROGRESS',
  Stopping = 'STOPPING',
  Stopped = 'STOPPED',
  Error = 'ERROR',
  Complete = 'COMPLETE',
}

export type BotAction = {
  __typename?: 'BotAction';
  id: Scalars['ID'];
  name: Scalars['String'];
  created: Scalars['DateTime'];
  lastUpdated: Scalars['DateTime'];
  status: BotActionStatus;
  progress?: Maybe<Scalars['Float']>;
  errors?: Maybe<Array<Scalars['JSON']>>;
  bot?: Maybe<Bot>;
  kind?: Maybe<Kind>;
  service: Service;
  eventName?: Maybe<Scalars['String']>;
  function?: Maybe<Function>;
  input?: Maybe<InstanceRef>;
  output?: Maybe<InstanceRef>;
};

export type Bot = {
  __typename?: 'Bot';
  id: Scalars['ID'];
  name: Scalars['String'];
  service?: Maybe<Service>;
};

export type AddBotActionInput = {
  name?: InputMaybe<Scalars['String']>;
  serviceId?: InputMaybe<Scalars['ID']>;
  serviceName?: InputMaybe<Scalars['String']>;
  botId?: InputMaybe<Scalars['ID']>;
  kindId?: InputMaybe<Scalars['ID']>;
  eventName?: InputMaybe<Scalars['String']>;
  mutationName?: InputMaybe<Scalars['String']>;
  queryName?: InputMaybe<Scalars['String']>;
  inputInstanceRef?: InputMaybe<InstanceRefInput>;
  outputInstanceRef?: InputMaybe<InstanceRefInput>;
};

export type UpdateBotActionInput = {
  id: Scalars['ID'];
  status: BotActionStatus;
  progress?: InputMaybe<Scalars['Float']>;
  error?: InputMaybe<Scalars['JSON']>;
};

export type Info = {
  __typename?: 'Info';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type ServiceInstance = {
  __typename?: 'ServiceInstance';
  id: Scalars['ID'];
  dockerServiceName: Scalars['String'];
  hostName: Scalars['String'];
  desiredState: Scalars['String'];
  currentState: Scalars['String'];
};

export type ServiceImport = {
  __typename?: 'ServiceImport';
  id: Scalars['ID'];
  service: Scalars['ID'];
  function?: Maybe<Function>;
  kind?: Maybe<Kind>;
  as?: Maybe<Scalars['String']>;
};

export type ServiceExport = {
  __typename?: 'ServiceExport';
  id: Scalars['ID'];
  function?: Maybe<Function>;
  kind?: Maybe<Kind>;
  as?: Maybe<Scalars['String']>;
};

export enum ServiceCategory {
  Assistant = 'ASSISTANT',
  External = 'EXTERNAL',
  Logic = 'LOGIC',
  Model = 'MODEL',
  Workspace = 'WORKSPACE',
}

export enum ServiceDataProvider {
  MaanaKinddb = 'MAANA_KINDDB',
  Prisma = 'PRISMA',
}

export enum ServiceLogicProvider {
  MaanaCkg = 'MAANA_CKG',
  Docker = 'DOCKER',
}

export type Service = {
  __typename?: 'Service';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isManaged: Scalars['Boolean'];
  isSystem: Scalars['Boolean'];
  isReadOnly: Scalars['Boolean'];
  endpointUrl: Scalars['String'];
  subscriptionEndpointUrl?: Maybe<Scalars['String']>;
  assistantUrl?: Maybe<Scalars['String']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  tags: Array<Scalars['String']>;
  created: Scalars['DateTime'];
  modified?: Maybe<Scalars['DateTime']>;
  schema: Scalars['String'];
  serviceType: ServiceCategory;
  provider?: Maybe<ServiceDataProvider>;
  logicType?: Maybe<ServiceLogicProvider>;
  logicTemplate?: Maybe<Scalars['JSON']>;
  aggregatedServices?: Maybe<Array<Maybe<Service>>>;
  refreshPeriod?: Maybe<Scalars['Int']>;
  lastChecked?: Maybe<Scalars['DateTime']>;
  lastConnectionResult?: Maybe<Scalars['Int']>;
  imports?: Maybe<Array<Maybe<ServiceImport>>>;
  exports?: Maybe<Array<Maybe<ServiceExport>>>;
  externalServiceInstances?: Maybe<Array<Maybe<ServiceInstance>>>;
  kinds?: Maybe<Array<Maybe<Kind>>>;
  functions?: Maybe<Array<Maybe<Function>>>;
  workspace?: Maybe<Workspace>;
  isDeleted: Scalars['Boolean'];
};

export type AddServiceInput = {
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  isSystem: Scalars['Boolean'];
  isReadOnly?: InputMaybe<Scalars['Boolean']>;
  thumbnailUrl: Scalars['String'];
  endpointUrl: Scalars['String'];
  subscriptionEndpointUrl?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  schema?: InputMaybe<Scalars['String']>;
  serviceType: ServiceCategory;
};

export type TestServiceConnectionInput = {
  id?: InputMaybe<Scalars['ID']>;
  serviceType: ServiceCategory;
  isSystem?: InputMaybe<Scalars['Boolean']>;
  isManaged?: InputMaybe<Scalars['Boolean']>;
  endpointUrl?: InputMaybe<Scalars['String']>;
};

export type UpdateServiceInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  endpointUrl: Scalars['String'];
  subscriptionEndpointUrl?: InputMaybe<Scalars['String']>;
  thumbnailUrl?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  serviceType: ServiceCategory;
};

export type Application = {
  __typename?: 'Application';
  id: Scalars['ID'];
  name: Scalars['String'];
  thumbnailUrl?: Maybe<Scalars['String']>;
};

export type InstanceIdsByKind = {
  kindId: Scalars['ID'];
  instanceIds: Array<Scalars['ID']>;
};

export type AttachmentInput = {
  filename: Scalars['String'];
  contentType: Scalars['String'];
  content: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  componentVersions: Array<Scalars['String']>;
  service?: Maybe<Service>;
  services: Array<Service>;
  allAssistantServices?: Maybe<Array<Maybe<Service>>>;
  allServices?: Maybe<Array<Maybe<Service>>>;
  allSystemServices?: Maybe<Array<Maybe<Service>>>;
  allNonSystemServices?: Maybe<Array<Maybe<Service>>>;
  servicesFiltered: Array<Service>;
  user?: Maybe<User>;
  userByEmail?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
  usersByEmail?: Maybe<Array<Maybe<User>>>;
  allUsers?: Maybe<Array<Maybe<User>>>;
  kind?: Maybe<Kind>;
  kinds?: Maybe<Array<Maybe<Kind>>>;
  allKinds?: Maybe<Array<Maybe<Kind>>>;
  allReferencedKinds: Array<Kind>;
  boilerplateForKinds: KindBoilerplate;
  /** Query KindDB for Kinds using a Kind Query. Only Kinds are returned. Instances are not supported. */
  kindDBKindQuery?: Maybe<Array<Maybe<Kind>>>;
  instance?: Maybe<Instance>;
  allReferencedInstances: Array<Instance>;
  instanceRef?: Maybe<InstanceRef>;
  populateInstanceRef?: Maybe<InstanceRef>;
  instances?: Maybe<InstanceSet>;
  instancesByRef?: Maybe<Array<Maybe<Instance>>>;
  allInstances?: Maybe<InstanceSet>;
  relation?: Maybe<Relation>;
  relations?: Maybe<Array<Maybe<Relation>>>;
  allRelations?: Maybe<Array<Maybe<Relation>>>;
  classification: Array<Link>;
  link?: Maybe<Link>;
  links?: Maybe<Array<Maybe<Link>>>;
  allLinks?: Maybe<Array<Maybe<Link>>>;
  info: Info;
  workspace?: Maybe<Workspace>;
  allPublicWorkspaces?: Maybe<Array<Workspace>>;
  /** @deprecated Deprecated in favor of allPublicWorkspaces. */
  allSharedWorkspaces?: Maybe<Array<Workspace>>;
  allTemplateWorkspaces?: Maybe<Array<Workspace>>;
  allKindsOfService?: Maybe<Array<Maybe<Kind>>>;
  portalGraph?: Maybe<PortalGraph>;
  kindDBQuery?: Maybe<InstanceSet>;
  comment?: Maybe<Comment>;
  search?: Maybe<Array<Maybe<SearchResult>>>;
  entitySearch?: Maybe<Array<EntitySearchResult>>;
  entitySearchResult: EntitySearchActionResult;
  document?: Maybe<Document>;
  documents?: Maybe<Array<Maybe<Document>>>;
  file?: Maybe<File>;
  files?: Maybe<Array<Maybe<File>>>;
  image?: Maybe<Image>;
  images?: Maybe<Array<Maybe<Image>>>;
  function?: Maybe<Function>;
  functions: Array<Function>;
  botAction?: Maybe<BotAction>;
  botActions: Array<BotAction>;
  botActionsForServicesOnKind: Array<BotAction>;
};

export type QueryServiceArgs = {
  id: Scalars['ID'];
};

export type QueryServicesArgs = {
  ids: Array<Scalars['ID']>;
};

export type QueryAllAssistantServicesArgs = {
  take?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type QueryAllServicesArgs = {
  take?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type QueryAllSystemServicesArgs = {
  take?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type QueryAllNonSystemServicesArgs = {
  take?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type QueryServicesFilteredArgs = {
  name?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  isReadOnly?: InputMaybe<Scalars['Boolean']>;
  isManaged?: InputMaybe<Scalars['Boolean']>;
  isSystem?: InputMaybe<Scalars['Boolean']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  isLogic?: InputMaybe<Scalars['Boolean']>;
  isModel?: InputMaybe<Scalars['Boolean']>;
  serviceType?: InputMaybe<ServiceCategory>;
  provider?: InputMaybe<ServiceDataProvider>;
  logicType?: InputMaybe<ServiceLogicProvider>;
  aggregates?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  take?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type QueryUserByEmailArgs = {
  email: Scalars['String'];
};

export type QueryUsersArgs = {
  ids: Array<Scalars['ID']>;
};

export type QueryUsersByEmailArgs = {
  emails: Array<Scalars['String']>;
};

export type QueryKindArgs = {
  tenantId: Scalars['ID'];
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type QueryKindsArgs = {
  tenantId: Scalars['ID'];
  ids: Array<Scalars['ID']>;
};

export type QueryAllKindsArgs = {
  tenantId: Scalars['ID'];
  serviceId?: InputMaybe<Scalars['String']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type QueryAllReferencedKindsArgs = {
  tenantId: Scalars['ID'];
  ids: Array<Scalars['ID']>;
  maxDepth?: InputMaybe<Scalars['Int']>;
  idsToSkip?: InputMaybe<Array<Scalars['ID']>>;
};

export type QueryBoilerplateForKindsArgs = {
  kindIds: Array<Scalars['ID']>;
};

export type QueryKindDbKindQueryArgs = {
  kindQuery: KindQueryInput;
};

export type QueryInstanceArgs = {
  tenantId: Scalars['ID'];
  instanceRef: InstanceRefInput;
};

export type QueryAllReferencedInstancesArgs = {
  tenantId: Scalars['ID'];
  instanceIdsByKind: Array<InstanceIdsByKind>;
  maxDepth?: InputMaybe<Scalars['Int']>;
  instancesToSkipByKind?: InputMaybe<Array<InstanceIdsByKind>>;
};

export type QueryInstanceRefArgs = {
  tenantId: Scalars['ID'];
  id: Scalars['ID'];
};

export type QueryPopulateInstanceRefArgs = {
  tenantId: Scalars['ID'];
  instanceRef: InstanceRefInput;
};

export type QueryInstancesArgs = {
  tenantId: Scalars['ID'];
  kindId?: InputMaybe<Scalars['ID']>;
  kindName?: InputMaybe<Scalars['String']>;
  ids: Array<Scalars['ID']>;
};

export type QueryInstancesByRefArgs = {
  tenantId: Scalars['ID'];
  instanceRefs: Array<InstanceRefInput>;
};

export type QueryAllInstancesArgs = {
  tenantId: Scalars['ID'];
  kindId?: InputMaybe<Scalars['ID']>;
  kindName?: InputMaybe<Scalars['String']>;
  fieldIds?: InputMaybe<Array<Scalars['ID']>>;
  take?: InputMaybe<Scalars['Int']>;
  drop?: InputMaybe<Scalars['Int']>;
  token?: InputMaybe<Scalars['String']>;
};

export type QueryRelationArgs = {
  tenantId: Scalars['ID'];
  id: Scalars['ID'];
};

export type QueryRelationsArgs = {
  tenantId: Scalars['ID'];
  ids: Array<InputMaybe<Scalars['ID']>>;
};

export type QueryAllRelationsArgs = {
  tenantId: Scalars['ID'];
};

export type QueryClassificationArgs = {
  id: Scalars['ID'];
};

export type QueryLinkArgs = {
  tenantId: Scalars['ID'];
  id: Scalars['ID'];
};

export type QueryLinksArgs = {
  tenantId: Scalars['ID'];
  ids: Array<InputMaybe<Scalars['ID']>>;
};

export type QueryAllLinksArgs = {
  tenantId: Scalars['ID'];
  relationId?: InputMaybe<Scalars['ID']>;
};

export type QueryWorkspaceArgs = {
  id: Scalars['ID'];
};

export type QueryAllPublicWorkspacesArgs = {
  userId: Scalars['ID'];
};

export type QueryAllSharedWorkspacesArgs = {
  userId: Scalars['ID'];
};

export type QueryAllTemplateWorkspacesArgs = {
  userId: Scalars['ID'];
};

export type QueryAllKindsOfServiceArgs = {
  tenantId: Scalars['ID'];
  serviceId: Scalars['ID'];
};

export type QueryPortalGraphArgs = {
  id: Scalars['ID'];
};

export type QueryKindDbQueryArgs = {
  kindQuery: KindQueryInput;
};

export type QueryCommentArgs = {
  id: Scalars['ID'];
};

export type QuerySearchArgs = {
  text: Scalars['String'];
  userId: Scalars['String'];
};

export type QueryEntitySearchArgs = {
  input: EntitySearchInput;
};

export type QueryEntitySearchResultArgs = {
  resultKey: Scalars['String'];
  token?: InputMaybe<Scalars['String']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type QueryDocumentArgs = {
  id: Scalars['ID'];
};

export type QueryDocumentsArgs = {
  ids: Array<Scalars['ID']>;
};

export type QueryFileArgs = {
  id: Scalars['ID'];
};

export type QueryFilesArgs = {
  ids: Array<Scalars['ID']>;
};

export type QueryImageArgs = {
  id: Scalars['ID'];
};

export type QueryImagesArgs = {
  ids: Array<Scalars['ID']>;
};

export type QueryFunctionArgs = {
  id: Scalars['ID'];
};

export type QueryFunctionsArgs = {
  ids: Array<Scalars['ID']>;
};

export type QueryBotActionArgs = {
  id: Scalars['ID'];
};

export type QueryBotActionsArgs = {
  ids: Array<Scalars['ID']>;
};

export type QueryBotActionsForServicesOnKindArgs = {
  serviceIds: Array<Scalars['ID']>;
  kindId: Scalars['ID'];
  take?: InputMaybe<Scalars['Int']>;
  token?: InputMaybe<Scalars['String']>;
};

export type MoveKindsAndFunctionsResponse = {
  __typename?: 'MoveKindsAndFunctionsResponse';
  kinds: Array<Kind>;
  boilerplateKinds: Array<Kind>;
  functions: Array<Function>;
  boilerplateFunctions: Array<Function>;
  knowledgeGraphNodes: Array<KnowledgeGraphNode>;
  operations: Array<Operation>;
  arguments: Array<Argument>;
  argumentValues: Array<ArgumentValue>;
  instanceRefs: Array<InstanceRef>;
  workspaceInstanceRefs: Array<InstanceRef>;
};

export type Mutation = {
  __typename?: 'Mutation';
  submitFeedback: Scalars['Boolean'];
  addService: Scalars['ID'];
  refreshServiceSchema: Service;
  updateService: Service;
  removeServices?: Maybe<Scalars['Boolean']>;
  deleteService?: Maybe<Scalars['Boolean']>;
  testServiceConnection: Service;
  addDetectedFaces: Scalars['Boolean'];
  addRecognizedFaces: Scalars['Boolean'];
  addUser?: Maybe<Scalars['ID']>;
  addKind: AddKindOutput;
  addKinds: AddKindOutput;
  updateKind?: Maybe<Kind>;
  updateKinds: Array<Kind>;
  removeKinds: Scalars['Boolean'];
  deleteKind: DeleteEntityOutput;
  addInstance?: Maybe<Scalars['ID']>;
  addInstanceSet?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateInstance?: Maybe<Scalars['ID']>;
  removeInstances?: Maybe<Scalars['Boolean']>;
  deleteInstance: DeleteEntityOutput;
  deleteInstanceSet: DeleteEntityOutput;
  addRelation?: Maybe<Scalars['ID']>;
  addLink?: Maybe<Scalars['ID']>;
  addLinks?: Maybe<Array<Maybe<Scalars['ID']>>>;
  deleteLinks?: Maybe<Array<Maybe<Link>>>;
  setTheme: Scalars['Boolean'];
  duplicateKind: Scalars['ID'];
  duplicateFunction: Scalars['ID'];
  duplicateInstance: Scalars['ID'];
  addWorkspace?: Maybe<Scalars['ID']>;
  openWorkspace?: Maybe<Scalars['ID']>;
  closeWorkspace?: Maybe<Scalars['ID']>;
  deleteWorkspace: Scalars['Boolean'];
  cloneWorkspace: Scalars['ID'];
  activeGraphPath: Scalars['Boolean'];
  updateWorkspaceLayout: Scalars['Boolean'];
  resetWorkspaceLayout: Scalars['Boolean'];
  addInstanceRefToWorkspace: InstanceRef;
  addInstanceRefsToWorkspace: Array<InstanceRef>;
  removeInstanceRefsFromWorkspace: Scalars['Boolean'];
  addServiceToWorkspace?: Maybe<Service>;
  moveKindsAndFunctions: MoveKindsAndFunctionsResponse;
  updateGraphLayout: Scalars['Boolean'];
  addPortalGraph?: Maybe<PortalGraph>;
  /** @deprecated Deprecated because it does nothing. Portal Graphs are retrieved via a KindDB query, not added/removed from a workspace. */
  addPortalGraphs?: Maybe<Array<PortalGraph>>;
  /** @deprecated Deprecated because it does nothing. Portal Graphs are deleted, not removed. */
  removePortalGraphs: Scalars['Boolean'];
  deletePortalGraph?: Maybe<Workspace>;
  updateGraph: UpdateGraphOutput;
  /** @deprecated Deprecated because it does nothing. Portal Graphs are sorted alphabetically instead of a user set order. */
  reorderPortalGraphs?: Maybe<Scalars['ID']>;
  addNodeToPortalGraph: PortalGraphNode;
  addNodesToPortalGraph: Array<PortalGraphNode>;
  removeNodeFromPortalGraph: Array<PortalGraphNode>;
  removeNodesFromPortalGraph: Array<PortalGraphNode>;
  expand: Scalars['Boolean'];
  addServiceSource: Scalars['ID'];
  addDocument?: Maybe<Scalars['ID']>;
  addDocuments?: Maybe<Array<Maybe<Scalars['ID']>>>;
  deleteDocument?: Maybe<Document>;
  deleteDocuments?: Maybe<Array<Maybe<Document>>>;
  addFile: Scalars['ID'];
  addFiles: Scalars['Boolean'];
  addFileFromUrl: Scalars['ID'];
  updateFile?: Maybe<Scalars['ID']>;
  deleteFile: DeleteEntityOutput;
  deleteFiles: DeleteEntityOutput;
  addImage?: Maybe<Scalars['ID']>;
  addImages?: Maybe<Array<Maybe<Scalars['ID']>>>;
  addEntities?: Maybe<Scalars['Boolean']>;
  addFunction: AddFunctionOutput;
  addFunctions: AddFunctionOutput;
  updateFunction: UpdateFunctionOutput;
  updateFunctions: UpdateFunctionsOutput;
  updateFunctionImplementation: Function;
  removeFunctions: Scalars['Boolean'];
  deleteFunction: DeleteEntityOutput;
  entitySearchAction: BotAction;
  entitySearchPurgeTemporaries: Scalars['Boolean'];
  addBotAction: Scalars['ID'];
  updateBotAction: Scalars['ID'];
};

export type MutationSubmitFeedbackArgs = {
  feedback: Scalars['String'];
  attachments: Array<AttachmentInput>;
};

export type MutationAddServiceArgs = {
  input: AddServiceInput;
};

export type MutationRefreshServiceSchemaArgs = {
  id: Scalars['ID'];
};

export type MutationUpdateServiceArgs = {
  input: UpdateServiceInput;
};

export type MutationRemoveServicesArgs = {
  workspaceId: Scalars['ID'];
  serviceIds: Array<Scalars['ID']>;
};

export type MutationDeleteServiceArgs = {
  id: Scalars['ID'];
};

export type MutationTestServiceConnectionArgs = {
  input: TestServiceConnectionInput;
};

export type MutationAddDetectedFacesArgs = {
  input: Array<DetectedFaceInput>;
};

export type MutationAddRecognizedFacesArgs = {
  input: Array<RecognizedFaceInput>;
};

export type MutationAddUserArgs = {
  input: AddUserInput;
};

export type MutationAddKindArgs = {
  tenantId: Scalars['ID'];
  input: AddKindInput;
};

export type MutationAddKindsArgs = {
  input: Array<AddKindInput>;
};

export type MutationUpdateKindArgs = {
  tenantId: Scalars['ID'];
  input: UpdateKindInput;
};

export type MutationUpdateKindsArgs = {
  input: Array<UpdateKindInput>;
};

export type MutationRemoveKindsArgs = {
  kindIds: Array<Scalars['ID']>;
  workspaceId: Scalars['ID'];
};

export type MutationDeleteKindArgs = {
  kindId: Scalars['ID'];
};

export type MutationAddInstanceArgs = {
  tenantId: Scalars['ID'];
  input: AddInstanceInput;
};

export type MutationAddInstanceSetArgs = {
  tenantId: Scalars['ID'];
  input: AddInstanceSetInput;
};

export type MutationUpdateInstanceArgs = {
  tenantId: Scalars['ID'];
  input: UpdateInstanceInput;
};

export type MutationRemoveInstancesArgs = {
  workspaceId: Scalars['ID'];
  instanceIds: Array<Scalars['ID']>;
};

export type MutationDeleteInstanceArgs = {
  tenantId: Scalars['ID'];
  input: DeleteInstanceInput;
};

export type MutationDeleteInstanceSetArgs = {
  tenantId: Scalars['ID'];
  input: DeleteInstanceSetInput;
};

export type MutationAddRelationArgs = {
  input: AddRelationInput;
};

export type MutationAddLinkArgs = {
  input: AddLinkInput;
};

export type MutationAddLinksArgs = {
  input: Array<InputMaybe<AddLinkInput>>;
};

export type MutationDeleteLinksArgs = {
  ids: Array<Scalars['ID']>;
};

export type MutationSetThemeArgs = {
  userId: Scalars['ID'];
  theme: Theme;
};

export type MutationDuplicateKindArgs = {
  id: Scalars['ID'];
  newName: Scalars['String'];
  targetServiceId: Scalars['ID'];
};

export type MutationDuplicateFunctionArgs = {
  id: Scalars['ID'];
  newName: Scalars['String'];
  targetServiceId: Scalars['ID'];
};

export type MutationDuplicateInstanceArgs = {
  instanceId: Scalars['ID'];
  kindId?: InputMaybe<Scalars['ID']>;
  kindName?: InputMaybe<Scalars['String']>;
};

export type MutationAddWorkspaceArgs = {
  input: AddWorkspaceInput;
};

export type MutationOpenWorkspaceArgs = {
  userId: Scalars['ID'];
  workspaceId: Scalars['ID'];
};

export type MutationCloseWorkspaceArgs = {
  userId: Scalars['ID'];
  workspaceId: Scalars['ID'];
};

export type MutationDeleteWorkspaceArgs = {
  id: Scalars['ID'];
};

export type MutationCloneWorkspaceArgs = {
  userId: Scalars['ID'];
  workspaceId: Scalars['ID'];
  newName?: InputMaybe<Scalars['String']>;
  newWorkspaceServiceId?: InputMaybe<Scalars['ID']>;
};

export type MutationActiveGraphPathArgs = {
  workspaceId: Scalars['ID'];
  graphPath: Array<Scalars['ID']>;
};

export type MutationUpdateWorkspaceLayoutArgs = {
  input: UpdateWorkspaceLayoutInput;
};

export type MutationResetWorkspaceLayoutArgs = {
  id: Scalars['ID'];
};

export type MutationAddInstanceRefToWorkspaceArgs = {
  wsId: Scalars['ID'];
  instanceRef: InstanceRefInput;
};

export type MutationAddInstanceRefsToWorkspaceArgs = {
  wsId: Scalars['ID'];
  instanceRefs: Array<InstanceRefInput>;
};

export type MutationRemoveInstanceRefsFromWorkspaceArgs = {
  wsId: Scalars['ID'];
  instanceRefIds: Array<Scalars['ID']>;
};

export type MutationAddServiceToWorkspaceArgs = {
  workspaceId: Scalars['ID'];
  serviceId: Scalars['ID'];
};

export type MutationMoveKindsAndFunctionsArgs = {
  originId: Scalars['ID'];
  targetId: Scalars['ID'];
  kindIds: Array<Scalars['ID']>;
  functionIds: Array<Scalars['ID']>;
};

export type MutationUpdateGraphLayoutArgs = {
  input: GraphLayoutUpdateInput;
};

export type MutationAddPortalGraphArgs = {
  input: AddPortalGraphInput;
};

export type MutationAddPortalGraphsArgs = {
  workspaceId: Scalars['ID'];
  graphIds: Array<Scalars['ID']>;
};

export type MutationRemovePortalGraphsArgs = {
  workspaceId: Scalars['ID'];
  graphIds: Array<Scalars['ID']>;
};

export type MutationDeletePortalGraphArgs = {
  graphId: Scalars['ID'];
};

export type MutationUpdateGraphArgs = {
  input: UpdateGraphInput;
};

export type MutationReorderPortalGraphsArgs = {
  input: ReorderPortalGraphsInput;
};

export type MutationAddNodeToPortalGraphArgs = {
  graphId: Scalars['ID'];
  node: PortalGraphNodeInput;
};

export type MutationAddNodesToPortalGraphArgs = {
  graphId: Scalars['ID'];
  nodes: Array<PortalGraphNodeInput>;
};

export type MutationRemoveNodeFromPortalGraphArgs = {
  graphId: Scalars['ID'];
  nodeId: Scalars['ID'];
};

export type MutationRemoveNodesFromPortalGraphArgs = {
  graphId: Scalars['ID'];
  nodeIds: Array<Scalars['ID']>;
};

export type MutationExpandArgs = {
  graphId: Scalars['ID'];
  expanded: Scalars['Boolean'];
};

export type MutationAddServiceSourceArgs = {
  input: AddServiceSourceInput;
};

export type MutationAddDocumentArgs = {
  input?: InputMaybe<AddDocumentInput>;
};

export type MutationAddDocumentsArgs = {
  input: Array<AddDocumentInput>;
};

export type MutationDeleteDocumentArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteDocumentsArgs = {
  ids: Array<Scalars['ID']>;
};

export type MutationAddFileArgs = {
  input: AddFileInput;
};

export type MutationAddFilesArgs = {
  input: Array<AddFileInput>;
};

export type MutationAddFileFromUrlArgs = {
  input: AddFileFromUrlInput;
};

export type MutationUpdateFileArgs = {
  input?: InputMaybe<UpdateFileInput>;
};

export type MutationDeleteFileArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteFilesArgs = {
  ids: Array<Scalars['ID']>;
};

export type MutationAddImageArgs = {
  input: AddImageInput;
};

export type MutationAddImagesArgs = {
  input: Array<AddImageInput>;
};

export type MutationAddEntitiesArgs = {
  input: AddEntitiesInput;
};

export type MutationAddFunctionArgs = {
  input?: InputMaybe<FunctionInput>;
};

export type MutationAddFunctionsArgs = {
  input: Array<FunctionInput>;
};

export type MutationUpdateFunctionArgs = {
  input: UpdateFunctionInput;
};

export type MutationUpdateFunctionsArgs = {
  input: Array<UpdateFunctionInput>;
};

export type MutationUpdateFunctionImplementationArgs = {
  functionId: Scalars['ID'];
  implementation: UpdateImplementationInput;
};

export type MutationRemoveFunctionsArgs = {
  functionIds: Array<Scalars['ID']>;
  workspaceId: Scalars['ID'];
};

export type MutationDeleteFunctionArgs = {
  id: Scalars['ID'];
};

export type MutationEntitySearchActionArgs = {
  input: EntitySearchInput;
  resultKey?: InputMaybe<Scalars['String']>;
};

export type MutationEntitySearchPurgeTemporariesArgs = {
  resultKey?: InputMaybe<Scalars['String']>;
};

export type MutationAddBotActionArgs = {
  input?: InputMaybe<AddBotActionInput>;
};

export type MutationUpdateBotActionArgs = {
  input?: InputMaybe<UpdateBotActionInput>;
};

export type Subscription = {
  __typename?: 'Subscription';
  botActionAdded: BotActionAddedEvent;
  botActionUpdated: BotActionUpdatedEvent;
  linkAdded: Link;
};

export type SubscriptionBotActionAddedArgs = {
  serviceId?: InputMaybe<Scalars['ID']>;
  kindId?: InputMaybe<Scalars['ID']>;
  botId?: InputMaybe<Scalars['ID']>;
};

export type SubscriptionBotActionUpdatedArgs = {
  serviceIds?: InputMaybe<Array<Scalars['ID']>>;
  kindIds?: InputMaybe<Array<Scalars['ID']>>;
  botIds?: InputMaybe<Array<Scalars['ID']>>;
  botActionIds?: InputMaybe<Array<Scalars['ID']>>;
};

export type SubscriptionLinkAddedArgs = {
  kindIds?: InputMaybe<Array<Scalars['ID']>>;
  relationIds?: InputMaybe<Array<Scalars['ID']>>;
  instanceIds?: InputMaybe<Array<Scalars['ID']>>;
  fieldIds?: InputMaybe<Array<Scalars['ID']>>;
};

export type AddNodeToGraphInput = {
  pgNodeId: Scalars['ID'];
  innerNodeId: Scalars['ID'];
  operationId?: InputMaybe<Scalars['ID']>;
  collapsed?: InputMaybe<Scalars['Boolean']>;
  height: Scalars['Float'];
  width: Scalars['Float'];
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type CreateKindInGraphInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  serviceId: Scalars['ID'];
  thumbnailUrl?: InputMaybe<Scalars['String']>;
  isPublic?: InputMaybe<Scalars['Boolean']>;
  isManaged?: InputMaybe<Scalars['Boolean']>;
  isSystem?: InputMaybe<Scalars['Boolean']>;
  schema?: InputMaybe<Array<FieldInput>>;
  nodeInfo: AddNodeToGraphInput;
};

export type CreateFunctionInGraphInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  service: Scalars['ID'];
  arguments: Array<ArgumentInput>;
  outputType: FieldType;
  outputKindId?: InputMaybe<Scalars['ID']>;
  outputModifiers?: InputMaybe<Array<InputMaybe<FieldModifiers>>>;
  graphqlOperationType: GraphqlOperationType;
  functionType: FunctionType;
  implementation?: InputMaybe<ImplementationInput>;
  nodeInfo: AddNodeToGraphInput;
};

export type DuplicateInGraphInput = {
  id: Scalars['ID'];
  baseId: Scalars['ID'];
  name: Scalars['String'];
  serviceId: Scalars['ID'];
  nodeInfo: AddNodeToGraphInput;
};

export type DuplicateInstanceInGraphInput = {
  id: Scalars['ID'];
  baseId: Scalars['ID'];
  kindId: Scalars['ID'];
  nodeInfo: AddNodeToGraphInput;
};

export type AddToGraphInput = {
  kindId?: InputMaybe<Scalars['ID']>;
  kindName?: InputMaybe<Scalars['String']>;
  instanceId: Scalars['ID'];
  nodeInfo: AddNodeToGraphInput;
};

export type CreateFileInGraphInput = {
  file: AddFileInput;
  nodeInfo: AddNodeToGraphInput;
};

export type CreateFileFromUrlInGraphInput = {
  file: AddFileFromUrlInput;
  nodeInfo: AddNodeToGraphInput;
};

export type UpdateGraphInput = {
  graphId: Scalars['ID'];
  workspaceId: Scalars['ID'];
  createKinds?: InputMaybe<Array<CreateKindInGraphInput>>;
  createFunctions?: InputMaybe<Array<CreateFunctionInGraphInput>>;
  createFiles?: InputMaybe<Array<CreateFileInGraphInput>>;
  createFilesFromUrls?: InputMaybe<Array<CreateFileFromUrlInGraphInput>>;
  duplicateKinds?: InputMaybe<Array<DuplicateInGraphInput>>;
  duplicateFunctions?: InputMaybe<Array<DuplicateInGraphInput>>;
  duplicateInstances?: InputMaybe<Array<DuplicateInstanceInGraphInput>>;
  addEntities?: InputMaybe<Array<AddToGraphInput>>;
};

export type UpdateGraphOutput = {
  __typename?: 'UpdateGraphOutput';
  newKinds: Array<Kind>;
  newFunctions: Array<Function>;
  addedKinds: Array<Kind>;
  addedFunctions: Array<Function>;
  files: Array<File>;
  workspaceServiceReferences: Array<Scalars['ID']>;
  updatedServices: Array<Service>;
  workspace: Workspace;
  boilerplateKinds: Array<Kind>;
  boilerplateFunctions: Array<Function>;
  updatedGraph: PortalGraph;
  newGraphNodes: Array<PortalGraphNode>;
};

export type BotActionAddedEvent = {
  __typename?: 'BotActionAddedEvent';
  id: Scalars['ID'];
  name: Scalars['String'];
  serviceName: Scalars['String'];
  serviceId?: Maybe<Scalars['ID']>;
  bot?: Maybe<Bot>;
  kind?: Maybe<Kind>;
  eventName?: Maybe<Scalars['String']>;
  mutationName?: Maybe<Scalars['String']>;
  queryName?: Maybe<Scalars['String']>;
  inputInstanceRef?: Maybe<InstanceRef>;
  outputInstanceRef?: Maybe<InstanceRef>;
};

export type BotActionUpdatedEvent = {
  __typename?: 'BotActionUpdatedEvent';
  id: Scalars['ID'];
  bot?: Maybe<Bot>;
  service?: Maybe<Service>;
  kind?: Maybe<Kind>;
  oldStatus: BotActionStatus;
  newStatus: BotActionStatus;
  progress?: Maybe<Scalars['Float']>;
  errors?: Maybe<Array<Scalars['JSON']>>;
};

export type DetectedFace = {
  __typename?: 'DetectedFace';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  image: Image;
  area: Scalars['Int'];
  bottom: Scalars['Int'];
  top: Scalars['Int'];
  right: Scalars['Int'];
  left: Scalars['Int'];
  detectionConfidence: Scalars['Float'];
};

export type DetectedFaceInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  imageId: Scalars['ID'];
  area: Scalars['Int'];
  bottom: Scalars['Int'];
  top: Scalars['Int'];
  right: Scalars['Int'];
  left: Scalars['Int'];
  detectionConfidence: Scalars['Float'];
};

export type RecognizedFace = {
  __typename?: 'RecognizedFace';
  id: Scalars['ID'];
  name: Scalars['String'];
  personId: Scalars['ID'];
  person: Person;
  detectedFaceId: Scalars['ID'];
  detectedFace?: Maybe<DetectedFace>;
  recognitionConfidence: Scalars['Float'];
};

export type RecognizedFaceInput = {
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  personId: Scalars['ID'];
  detectedFaceId: Scalars['ID'];
  recognitionConfidence: Scalars['Float'];
};

export type Image = {
  __typename?: 'Image';
  detectedFaces?: Maybe<Array<Maybe<DetectedFace>>>;
  recognizedFaces?: Maybe<Array<Maybe<RecognizedFace>>>;
  people?: Maybe<Array<Maybe<Person>>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['ID'];
  name: Scalars['String'];
  detail?: Maybe<Scalars['String']>;
  author: User;
  timestamp: Scalars['DateTime'];
};

export type Person = {
  __typename?: 'Person';
  images?: Maybe<Array<Maybe<Image>>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  givenName?: Maybe<Scalars['String']>;
  familyName?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['Date']>;
};

export type Tenant = {
  __typename?: 'Tenant';
  id: Scalars['ID'];
  name: Scalars['String'];
  users?: Maybe<Array<Maybe<User>>>;
  services?: Maybe<Array<Maybe<Service>>>;
  applications?: Maybe<Array<Maybe<Application>>>;
};

export type Role = {
  __typename?: 'Role';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  givenName?: Maybe<Scalars['String']>;
  familyName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  tenants?: Maybe<Array<Maybe<Tenant>>>;
  tenantUserRoles?: Maybe<Array<Maybe<TenantUserRole>>>;
  createdOn?: Maybe<Scalars['DateTime']>;
  activities?: Maybe<Array<InstanceRef>>;
  recentItems?: Maybe<Array<InstanceRef>>;
  favoriteItems?: Maybe<Array<InstanceRef>>;
  workspaces?: Maybe<Array<Workspace>>;
  applications?: Maybe<Array<Application>>;
  theme?: Maybe<Scalars['String']>;
  openWorkspaces?: Maybe<Array<Workspace>>;
  activeWorkspace?: Maybe<Workspace>;
};

export type AddUserInput = {
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  givenName?: InputMaybe<Scalars['String']>;
  familyName?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  picture?: InputMaybe<Scalars['String']>;
  theme: Theme;
  createdOn?: InputMaybe<Scalars['DateTime']>;
};

export type UpdateUserInput = {
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  givenName?: InputMaybe<Scalars['String']>;
  familyName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  theme?: InputMaybe<Theme>;
};

export type TenantUserRole = {
  __typename?: 'TenantUserRole';
  userId: Scalars['ID'];
  user?: Maybe<User>;
  tenantId: Scalars['ID'];
  tenant?: Maybe<Tenant>;
  roles?: Maybe<Array<Maybe<Role>>>;
};

export type Kind = {
  __typename?: 'Kind';
  id: Scalars['ID'];
  name: Scalars['String'];
  serviceId?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  isManaged?: Maybe<Scalars['Boolean']>;
  isSystem?: Maybe<Scalars['Boolean']>;
  schema?: Maybe<Array<Maybe<Field>>>;
  nameField?: Maybe<Scalars['ID']>;
  isGenerated: Scalars['Boolean'];
  relationsFrom?: Maybe<Array<Maybe<Relation>>>;
  relationsTo?: Maybe<Array<Maybe<Relation>>>;
  linksFrom?: Maybe<Array<Maybe<Link>>>;
  linksTo?: Maybe<Array<Maybe<Link>>>;
  service?: Maybe<Service>;
  linkedKindsTo: Array<LinkedKind>;
  linkedKindsFrom: Array<LinkedKind>;
  linkedInstancesTo: Array<LinkedInstance>;
  linkedInstancesFrom: Array<LinkedInstance>;
  isDeleted: Scalars['Boolean'];
};

export type KindSchemaArgs = {
  includeDeleted?: InputMaybe<Scalars['Boolean']>;
  fieldIds?: InputMaybe<Array<Scalars['ID']>>;
  fieldNames?: InputMaybe<Array<Scalars['String']>>;
  fieldKinds?: InputMaybe<Array<Scalars['ID']>>;
};

export type KindLinkedKindsToArgs = {
  relationId?: InputMaybe<Scalars['ID']>;
};

export type KindLinkedKindsFromArgs = {
  relationId?: InputMaybe<Scalars['ID']>;
};

export type KindLinkedInstancesToArgs = {
  relationId?: InputMaybe<Scalars['ID']>;
};

export type KindLinkedInstancesFromArgs = {
  relationId?: InputMaybe<Scalars['ID']>;
};

export type LinkedKind = {
  __typename?: 'LinkedKind';
  relation: Relation;
  kind?: Maybe<Kind>;
  field?: Maybe<Field>;
};

export type LinkedInstance = {
  __typename?: 'LinkedInstance';
  relation: Relation;
  kind?: Maybe<Kind>;
  instance?: Maybe<Instance>;
};

export type KindBoilerplate = {
  __typename?: 'KindBoilerplate';
  kinds: Array<Kind>;
  functions: Array<Function>;
  instances: Array<Instance>;
};

export type KindInput = {
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  thumbnailUrl?: InputMaybe<Scalars['String']>;
  isPublic?: InputMaybe<Scalars['Boolean']>;
  isManaged?: InputMaybe<Scalars['Boolean']>;
  isSystem?: InputMaybe<Scalars['Boolean']>;
  schema?: InputMaybe<Array<FieldInput>>;
};

export type AddKindInput = {
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  serviceId: Scalars['ID'];
  thumbnailUrl?: InputMaybe<Scalars['String']>;
  isPublic?: InputMaybe<Scalars['Boolean']>;
  nameField?: InputMaybe<Scalars['ID']>;
  isManaged?: InputMaybe<Scalars['Boolean']>;
  isSystem?: InputMaybe<Scalars['Boolean']>;
  schema?: InputMaybe<Array<FieldInput>>;
};

export type UpdateKindInput = {
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  serviceId?: InputMaybe<Scalars['ID']>;
  thumbnailUrl?: InputMaybe<Scalars['String']>;
  isPublic?: InputMaybe<Scalars['Boolean']>;
  nameField?: InputMaybe<Scalars['ID']>;
  isManaged?: InputMaybe<Scalars['Boolean']>;
  isSystem?: InputMaybe<Scalars['Boolean']>;
  schema?: InputMaybe<Array<FieldInput>>;
};

export enum FieldType {
  Id = 'ID',
  String = 'STRING',
  Int = 'INT',
  Float = 'FLOAT',
  Boolean = 'BOOLEAN',
  Date = 'DATE',
  Time = 'TIME',
  Datetime = 'DATETIME',
  Json = 'JSON',
  Kind = 'KIND',
}

export enum FieldModifiers {
  Nonull = 'NONULL',
  List = 'LIST',
  Noidx = 'NOIDX',
  Ephemeral = 'EPHEMERAL',
  Imidx = 'IMIDX',
}

export type Field = {
  __typename?: 'Field';
  id: Scalars['ID'];
  name: Scalars['String'];
  type: FieldType;
  description?: Maybe<Scalars['String']>;
  modifiers?: Maybe<Array<Maybe<FieldModifiers>>>;
  typeKindId?: Maybe<Scalars['ID']>;
  displayAs?: Maybe<Array<Maybe<Scalars['String']>>>;
  hide?: Maybe<Scalars['Boolean']>;
  autoFocus?: Maybe<Scalars['Boolean']>;
  readonly?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<Kind>;
  isDeleted: Scalars['Boolean'];
};

export type FieldInput = {
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  type: FieldType;
  typeKindId?: InputMaybe<Scalars['ID']>;
  modifiers?: InputMaybe<Array<FieldModifiers>>;
  displayAs?: InputMaybe<Array<Scalars['String']>>;
  hide?: InputMaybe<Scalars['Boolean']>;
  autoFocus?: InputMaybe<Scalars['Boolean']>;
  readonly?: InputMaybe<Scalars['Boolean']>;
};

export type AddFieldsInput = {
  kindId: Scalars['ID'];
  fields: Array<FieldInput>;
};

export type Instance = {
  __typename?: 'Instance';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  kindId: Scalars['ID'];
  kind?: Maybe<Kind>;
  fieldIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  fieldValues?: Maybe<Array<Maybe<FieldValue>>>;
  linksFrom?: Maybe<Array<Maybe<Link>>>;
  linksTo?: Maybe<Array<Maybe<Link>>>;
  linkedKindsTo: Array<LinkedKind>;
  linkedKindsFrom: Array<LinkedKind>;
  linkedInstancesTo: Array<LinkedInstance>;
  linkedInstancesFrom: Array<LinkedInstance>;
};

export type InstanceLinkedKindsToArgs = {
  relationId?: InputMaybe<Scalars['ID']>;
};

export type InstanceLinkedKindsFromArgs = {
  relationId?: InputMaybe<Scalars['ID']>;
};

export type InstanceLinkedInstancesToArgs = {
  relationId?: InputMaybe<Scalars['ID']>;
};

export type InstanceLinkedInstancesFromArgs = {
  relationId?: InputMaybe<Scalars['ID']>;
};

export type InstanceSet = {
  __typename?: 'InstanceSet';
  kindId: Scalars['ID'];
  kind: Kind;
  token?: Maybe<Scalars['String']>;
  fieldIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  records?: Maybe<Array<Maybe<Array<Maybe<FieldValue>>>>>;
};

export type AddInstanceInput = {
  kindId: Scalars['ID'];
  id?: InputMaybe<Scalars['ID']>;
  fieldIds: Array<InputMaybe<Scalars['ID']>>;
  fieldValues: Array<InputMaybe<FieldValueInput>>;
};

export type AddInstanceSetInput = {
  kindId: Scalars['ID'];
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  fieldIds: Array<InputMaybe<Scalars['ID']>>;
  records: Array<InputMaybe<Array<InputMaybe<FieldValueInput>>>>;
};

export type UpdateInstanceInput = {
  id: Scalars['ID'];
  kindId: Scalars['ID'];
  fieldIds: Array<InputMaybe<Scalars['ID']>>;
  fieldValues: Array<InputMaybe<FieldValueInput>>;
};

export type DeleteInstanceInput = {
  kindId: Scalars['ID'];
  id: Scalars['ID'];
};

export type DeleteInstanceSetInput = {
  kindId: Scalars['ID'];
  ids: Array<Scalars['ID']>;
};

export type FieldValue = {
  __typename?: 'FieldValue';
  ID?: Maybe<Scalars['ID']>;
  STRING?: Maybe<Scalars['String']>;
  INT?: Maybe<Scalars['Int']>;
  FLOAT?: Maybe<Scalars['Float']>;
  BOOLEAN?: Maybe<Scalars['Boolean']>;
  DATE?: Maybe<Scalars['Date']>;
  TIME?: Maybe<Scalars['Time']>;
  DATETIME?: Maybe<Scalars['DateTime']>;
  JSON?: Maybe<Scalars['JSON']>;
  KIND?: Maybe<Scalars['ID']>;
  l_ID?: Maybe<Array<Maybe<Scalars['ID']>>>;
  l_STRING?: Maybe<Array<Maybe<Scalars['String']>>>;
  l_INT?: Maybe<Array<Maybe<Scalars['Int']>>>;
  l_FLOAT?: Maybe<Array<Maybe<Scalars['Float']>>>;
  l_BOOLEAN?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  l_DATE?: Maybe<Array<Maybe<Scalars['Date']>>>;
  l_TIME?: Maybe<Array<Maybe<Scalars['Time']>>>;
  l_DATETIME?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  l_JSON?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  l_KIND?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type FieldValueInput = {
  ID?: InputMaybe<Scalars['ID']>;
  STRING?: InputMaybe<Scalars['String']>;
  INT?: InputMaybe<Scalars['Int']>;
  FLOAT?: InputMaybe<Scalars['Float']>;
  BOOLEAN?: InputMaybe<Scalars['Boolean']>;
  DATE?: InputMaybe<Scalars['Date']>;
  TIME?: InputMaybe<Scalars['Time']>;
  DATETIME?: InputMaybe<Scalars['DateTime']>;
  JSON?: InputMaybe<Scalars['JSON']>;
  KIND?: InputMaybe<Scalars['ID']>;
  l_ID?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  l_STRING?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  l_INT?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  l_FLOAT?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  l_BOOLEAN?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  l_DATE?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  l_TIME?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  l_DATETIME?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  l_JSON?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  l_KIND?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type InstanceRef = {
  __typename?: 'InstanceRef';
  id: Scalars['ID'];
  kindId?: Maybe<Scalars['ID']>;
  kindName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  kind?: Maybe<Kind>;
  instance?: Maybe<Instance>;
  innerKind?: Maybe<Kind>;
  innerFunction?: Maybe<Function>;
};

export type InstanceRefInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  kindId?: InputMaybe<Scalars['ID']>;
  kindName?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  instance?: InputMaybe<Scalars['ID']>;
};

export type Relation = {
  __typename?: 'Relation';
  id: Scalars['ID'];
  name: Scalars['String'];
  inverseName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  undirected?: Maybe<Scalars['Boolean']>;
  weight?: Maybe<Scalars['Float']>;
  links?: Maybe<Array<Maybe<Link>>>;
};

export type AddRelationInput = {
  name: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  inverseName: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  undirected?: InputMaybe<Scalars['Boolean']>;
  weight?: InputMaybe<Scalars['Float']>;
};

export type UpdateRelationInput = {
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  inverseName: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  undirected?: InputMaybe<Scalars['Boolean']>;
  weight?: InputMaybe<Scalars['Float']>;
};

export type Link = {
  __typename?: 'Link';
  id: Scalars['ID'];
  relation: Relation;
  fromKind?: Maybe<Kind>;
  toKind?: Maybe<Kind>;
  name?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  fromField?: Maybe<Field>;
  fromInstance?: Maybe<Instance>;
  fromOffset?: Maybe<Scalars['String']>;
  fromSpan?: Maybe<Scalars['String']>;
  toField?: Maybe<Field>;
  toInstance?: Maybe<Instance>;
  toOffset?: Maybe<Scalars['String']>;
  toSpan?: Maybe<Scalars['String']>;
};

export type AddLinkInput = {
  fromKindId?: InputMaybe<Scalars['ID']>;
  fromKindName?: InputMaybe<Scalars['String']>;
  toKindId?: InputMaybe<Scalars['ID']>;
  toKindName?: InputMaybe<Scalars['String']>;
  relationId?: InputMaybe<Scalars['ID']>;
  relationName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['Float']>;
  fromFieldId?: InputMaybe<Scalars['ID']>;
  fromFieldName?: InputMaybe<Scalars['String']>;
  fromInstanceId?: InputMaybe<Scalars['ID']>;
  fromOffset?: InputMaybe<Scalars['String']>;
  fromSpan?: InputMaybe<Scalars['String']>;
  toFieldId?: InputMaybe<Scalars['ID']>;
  toFieldName?: InputMaybe<Scalars['String']>;
  toInstanceId?: InputMaybe<Scalars['ID']>;
  toOffset?: InputMaybe<Scalars['String']>;
  toSpan?: InputMaybe<Scalars['String']>;
};

export type FieldFilterInput = {
  fieldId?: InputMaybe<Scalars['ID']>;
  fieldName?: InputMaybe<Scalars['String']>;
  op: Scalars['String'];
  value: FieldValueInput;
};

export enum AggregateOp {
  Min = 'MIN',
  Max = 'MAX',
  Sum = 'SUM',
  Count = 'COUNT',
}

export type FieldProjectionInput = {
  fieldId?: InputMaybe<Scalars['ID']>;
  fieldName?: InputMaybe<Scalars['String']>;
  alias?: InputMaybe<Scalars['String']>;
  op?: InputMaybe<AggregateOp>;
};

export type KindQueryInput = {
  kindId?: InputMaybe<Scalars['ID']>;
  kindName?: InputMaybe<Scalars['String']>;
  alias?: InputMaybe<Scalars['String']>;
  projection?: InputMaybe<Array<InputMaybe<FieldProjectionInput>>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  fieldFilters?: InputMaybe<Array<InputMaybe<FieldFilterInput>>>;
  and?: InputMaybe<Array<InputMaybe<KindQueryInput>>>;
  or?: InputMaybe<Array<InputMaybe<KindQueryInput>>>;
  fromFieldId?: InputMaybe<Scalars['ID']>;
  fromFieldName?: InputMaybe<Scalars['String']>;
  toFieldId?: InputMaybe<Scalars['ID']>;
  toFieldName?: InputMaybe<Scalars['String']>;
  take?: InputMaybe<Scalars['Int']>;
  drop?: InputMaybe<Scalars['Int']>;
  token?: InputMaybe<Scalars['String']>;
};

export enum Theme {
  Dark = 'DARK',
  Light = 'LIGHT',
}

export type Inventory = {
  __typename?: 'Inventory';
  serviceKinds: Array<Kind>;
  workspaceKinds: Array<Kind>;
  functions: Array<Function>;
};

export type Workspace = {
  __typename?: 'Workspace';
  id: Scalars['ID'];
  name: Scalars['String'];
  thumbnailUrl: Scalars['String'];
  owner: User;
  isPublic?: Maybe<Scalars['Boolean']>;
  isTemplate?: Maybe<Scalars['Boolean']>;
  createdOn: Scalars['DateTime'];
  lastOpenedOn: Scalars['DateTime'];
  layout: WorkspaceLayout;
  modelServiceId: Scalars['ID'];
  logicServiceId: Scalars['ID'];
  workspaceServiceId: Scalars['ID'];
  services?: Maybe<Array<Service>>;
  portalGraphs?: Maybe<Array<PortalGraph>>;
  activeGraphPath: Array<Scalars['ID']>;
  instanceRefs?: Maybe<Array<InstanceRef>>;
  inventory?: Maybe<Inventory>;
};

export type WorkspaceLayout = {
  __typename?: 'WorkspaceLayout';
  id: Scalars['ID'];
  explorerOpen: Scalars['Boolean'];
  explorerSize: Scalars['Float'];
  inventoryOpen: Scalars['Boolean'];
  inventorySize: Scalars['Float'];
  contextOpen: Scalars['Boolean'];
  contextMode: Scalars['String'];
  contextSize: Scalars['Float'];
  dataVizOpen: Scalars['Boolean'];
  dataVizSize: Scalars['Float'];
};

export type AddWorkspaceInput = {
  id?: InputMaybe<Scalars['ID']>;
  userId: Scalars['ID'];
  name: Scalars['String'];
  thumbnailUrl: Scalars['String'];
  workspaceServiceId?: InputMaybe<Scalars['ID']>;
};

export type UpdateWorkspaceLayoutInput = {
  id: Scalars['ID'];
  explorerOpen?: InputMaybe<Scalars['Boolean']>;
  explorerSize?: InputMaybe<Scalars['Float']>;
  inventoryOpen?: InputMaybe<Scalars['Boolean']>;
  inventorySize?: InputMaybe<Scalars['Float']>;
  contextOpen?: InputMaybe<Scalars['Boolean']>;
  contextMode?: InputMaybe<Scalars['String']>;
  contextSize?: InputMaybe<Scalars['Float']>;
  dataVizOpen?: InputMaybe<Scalars['Boolean']>;
  dataVizSize?: InputMaybe<Scalars['Float']>;
};

export type GraphLayoutUpdateInput = {
  graphLayouts?: InputMaybe<Array<GraphLayoutInput>>;
  nodeLayouts?: InputMaybe<Array<NodeLayoutInput>>;
};

export type GraphLayoutInput = {
  id: Scalars['ID'];
  zoom?: InputMaybe<Scalars['Float']>;
  offsetX?: InputMaybe<Scalars['Float']>;
  offsetY?: InputMaybe<Scalars['Float']>;
};

export type NodeLayoutInput = {
  id: Scalars['ID'];
  x?: InputMaybe<Scalars['Float']>;
  y?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  collapsed?: InputMaybe<Scalars['Boolean']>;
};

export type GraphLayoutNewNodeInput = {
  x: Scalars['Float'];
  y: Scalars['Float'];
  width: Scalars['Float'];
  height: Scalars['Float'];
  collapsed: Scalars['Boolean'];
};

export enum PortalGraphType {
  Knowledge = 'KNOWLEDGE',
  Query = 'QUERY',
  Function = 'FUNCTION',
}

export type PortalGraph = {
  __typename?: 'PortalGraph';
  id: Scalars['ID'];
  name: Scalars['String'];
  type: PortalGraphType;
  expanded: Scalars['Boolean'];
  zoom: Scalars['Float'];
  offsetX: Scalars['Float'];
  offsetY: Scalars['Float'];
  workspace?: Maybe<Workspace>;
  function?: Maybe<Function>;
  nodes?: Maybe<Array<PortalGraphNode>>;
  lockedBy?: Maybe<Scalars['String']>;
};

export type PortalGraphNode = {
  __typename?: 'PortalGraphNode';
  id: Scalars['ID'];
  x: Scalars['Float'];
  y: Scalars['Float'];
  width: Scalars['Float'];
  height: Scalars['Float'];
  collapsed: Scalars['Boolean'];
  knowledgeGraphNode?: Maybe<KnowledgeGraphNode>;
  functionGraphNode?: Maybe<FunctionGraphNode>;
};

export type KnowledgeGraphNode = {
  __typename?: 'KnowledgeGraphNode';
  id: Scalars['ID'];
  kind?: Maybe<Kind>;
  instance?: Maybe<Instance>;
  innerKind?: Maybe<Kind>;
  innerFunction?: Maybe<Function>;
};

export type FunctionGraphNode = {
  __typename?: 'FunctionGraphNode';
  id: Scalars['ID'];
  operationId: Scalars['ID'];
  operation?: Maybe<Operation>;
};

export type AddPortalGraphInput = {
  workspaceId: Scalars['ID'];
  type?: InputMaybe<PortalGraphType>;
  name: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  index?: InputMaybe<Scalars['Int']>;
  offsetX?: InputMaybe<Scalars['Float']>;
  offsetY?: InputMaybe<Scalars['Float']>;
  zoom?: InputMaybe<Scalars['Float']>;
  nodes?: InputMaybe<Array<PortalGraphNodeInput>>;
};

export type ReorderPortalGraphsInput = {
  workspaceId: Scalars['ID'];
  oldIndex: Scalars['Int'];
  newIndex: Scalars['Int'];
};

export type PortalGraphNodeInput = {
  id?: InputMaybe<Scalars['ID']>;
  x: Scalars['Float'];
  y: Scalars['Float'];
  width: Scalars['Float'];
  height: Scalars['Float'];
  collapsed: Scalars['Boolean'];
  functionGraphNode?: InputMaybe<FunctionGraphNodeInput>;
  knowledgeGraphNode?: InputMaybe<KnowledgeGraphNodeInput>;
};

export type FunctionGraphNodeInput = {
  id?: InputMaybe<Scalars['ID']>;
  operation: OperationInput;
};

export type KnowledgeGraphNodeInput = {
  id?: InputMaybe<Scalars['ID']>;
  instanceId: Scalars['ID'];
  kindId?: InputMaybe<Scalars['ID']>;
  kindName?: InputMaybe<Scalars['String']>;
};

export type AddServiceSourceInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  schema: Scalars['String'];
};

export type SearchResult = {
  __typename?: 'SearchResult';
  kindId?: Maybe<Scalars['ID']>;
  kind?: Maybe<Kind>;
  innerKind?: Maybe<Kind>;
  innerFunction?: Maybe<Function>;
  innerPortalGraph?: Maybe<PortalGraph>;
  instanceId?: Maybe<Scalars['ID']>;
  instance?: Maybe<Instance>;
  fieldId?: Maybe<Scalars['ID']>;
  field?: Maybe<Field>;
  offset?: Maybe<Scalars['String']>;
  span?: Maybe<Scalars['String']>;
  contents?: Maybe<Scalars['String']>;
};

export type Document = {
  __typename?: 'Document';
  id: Scalars['ID'];
  name: Scalars['String'];
  text?: Maybe<Scalars['String']>;
  xhtml?: Maybe<Scalars['String']>;
  pages?: Maybe<Array<Maybe<Page>>>;
  sections?: Maybe<Array<Maybe<Section>>>;
  content?: Maybe<Array<Maybe<Content>>>;
};

export type AddDocumentInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  xhtml?: InputMaybe<Scalars['String']>;
  pages?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  sections?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  content?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type File = {
  __typename?: 'File';
  id: Scalars['ID'];
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  size: Scalars['String'];
  progress?: Maybe<Scalars['String']>;
  status: Scalars['Int'];
};

export type AddFileInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  thumbnailUrl?: InputMaybe<Scalars['String']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size: Scalars['String'];
  progress?: InputMaybe<Scalars['String']>;
  status: Scalars['Int'];
  serviceId?: InputMaybe<Scalars['ID']>;
};

export type AddFileFromUrlInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  url: Scalars['String'];
  thumbnailUrl?: InputMaybe<Scalars['String']>;
  mimeType?: InputMaybe<Scalars['String']>;
  serviceId?: InputMaybe<Scalars['ID']>;
};

export type UpdateFileInput = {
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  thumbnailUrl?: InputMaybe<Scalars['String']>;
  progress?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  mimeType?: InputMaybe<Scalars['String']>;
  serviceId?: InputMaybe<Scalars['ID']>;
};

export type AddImageInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type Entity = {
  __typename?: 'Entity';
  id: Scalars['ID'];
  name: Scalars['String'];
  class: Scalars['String'];
  count?: Maybe<Scalars['Int']>;
  percent?: Maybe<Scalars['Float']>;
};

export type EntityInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  class?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['Int']>;
  percent?: InputMaybe<Scalars['Float']>;
};

export type AddEntitiesInput = {
  docId: Scalars['ID'];
  entities: Array<EntityInput>;
};

export type Page = {
  __typename?: 'Page';
  id: Scalars['ID'];
  contents?: Maybe<Array<Maybe<Content>>>;
  number?: Maybe<Scalars['Int']>;
  header?: Maybe<Array<Maybe<Content>>>;
  footer?: Maybe<Array<Maybe<Content>>>;
};

export type Section = {
  __typename?: 'Section';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  contents?: Maybe<Array<Maybe<Content>>>;
  subSections?: Maybe<Array<Maybe<Section>>>;
};

export type Table = {
  __typename?: 'Table';
  id: Scalars['ID'];
  headers?: Maybe<Array<Maybe<Content>>>;
  rows?: Maybe<Array<Maybe<Content>>>;
};

export type OrderedList = {
  __typename?: 'OrderedList';
  id: Scalars['ID'];
  type?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<OrderedListItem>>>;
};

export type OrderedListItem = {
  __typename?: 'OrderedListItem';
  id: Scalars['ID'];
  index?: Maybe<Scalars['Int']>;
  contents?: Maybe<Array<Maybe<Content>>>;
};

export type UnorderedList = {
  __typename?: 'UnorderedList';
  id: Scalars['ID'];
  type?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<UnorderedListItem>>>;
};

export type UnorderedListItem = {
  __typename?: 'UnorderedListItem';
  id: Scalars['ID'];
  contents?: Maybe<Array<Maybe<Content>>>;
};

export type Content = {
  __typename?: 'Content';
  id: Scalars['ID'];
  table?: Maybe<Table>;
  unorderedList?: Maybe<UnorderedList>;
  orderedList?: Maybe<OrderedList>;
  text?: Maybe<Scalars['String']>;
  image?: Maybe<Image>;
};

export type EntitySurfaceFormsInput = {
  kindId: Scalars['ID'];
  instanceId?: InputMaybe<Array<Scalars['ID']>>;
  surfaceForms?: InputMaybe<Array<Scalars['String']>>;
};

export type EntitySearchInput = {
  entitySurfaceForms: Array<EntitySurfaceFormsInput>;
  scopeKindId: Scalars['ID'];
  scopeFieldId: Scalars['ID'];
  scopeInstanceId?: InputMaybe<Array<Scalars['ID']>>;
};

export type EntityOccurrences = {
  __typename?: 'EntityOccurrences';
  kindId: Scalars['ID'];
  instanceId?: Maybe<Array<Scalars['ID']>>;
  locations: Array<Scalars['Int']>;
};

export type EntitySearchResult = {
  __typename?: 'EntitySearchResult';
  scopeKindId: Scalars['ID'];
  scopeFieldId: Scalars['ID'];
  scopeInstanceId: Scalars['ID'];
  cooccurrences: Array<EntityOccurrences>;
};

export type EntitySearchActionResult = {
  __typename?: 'EntitySearchActionResult';
  results?: Maybe<Array<EntitySearchResult>>;
  token?: Maybe<Scalars['String']>;
};

export type Function = {
  __typename?: 'Function';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  arguments: Array<Argument>;
  outputType: FieldType;
  outputKindId?: Maybe<Scalars['ID']>;
  outputModifiers?: Maybe<Array<Maybe<FieldModifiers>>>;
  graph?: Maybe<PortalGraph>;
  isGenerated: Scalars['Boolean'];
  kind?: Maybe<Kind>;
  graphqlOperationType?: Maybe<GraphqlOperationType>;
  functionType: FunctionType;
  implementation?: Maybe<Implementation>;
  service?: Maybe<Service>;
  isDeleted: Scalars['Boolean'];
};

export type FunctionInput = {
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  arguments: Array<ArgumentInput>;
  outputType: FieldType;
  outputKindId?: InputMaybe<Scalars['ID']>;
  outputModifiers?: InputMaybe<Array<InputMaybe<FieldModifiers>>>;
  graphqlOperationType: GraphqlOperationType;
  functionType: FunctionType;
  implementation?: InputMaybe<ImplementationInput>;
  service: Scalars['ID'];
};

export type UpdateFunctionInput = {
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  arguments?: InputMaybe<Array<UpdateArgumentInput>>;
  outputType?: InputMaybe<FieldType>;
  outputKindId?: InputMaybe<Scalars['ID']>;
  outputModifiers?: InputMaybe<Array<InputMaybe<FieldModifiers>>>;
  graphqlOperationType?: InputMaybe<GraphqlOperationType>;
  functionType?: InputMaybe<FunctionType>;
  implementation?: InputMaybe<ImplementationInput>;
  service?: InputMaybe<Scalars['ID']>;
};

export type UpdateFunctionsOutput = {
  __typename?: 'UpdateFunctionsOutput';
  updatedFunctions: Array<Function>;
  updatedOperations: Array<Operation>;
};

export type UpdateFunctionOutput = {
  __typename?: 'UpdateFunctionOutput';
  updatedFunction: Function;
  updatedOperations: Array<Operation>;
};

export type DeleteEntityOutput = {
  __typename?: 'DeleteEntityOutput';
  updatedPortalGraphs: Array<PortalGraph>;
  updatedWorkspaces: Array<Workspace>;
  updatedImplementations: Array<Implementation>;
  updatedOperations: Array<Operation>;
  updatedFields: Array<Field>;
  updatedFunctions: Array<Function>;
  updatedArguments: Array<Argument>;
  updatedServices: Array<Service>;
  workspaceServiceReferences: Array<Scalars['ID']>;
  workspace?: Maybe<Workspace>;
  deletedBoilerplateKindIds: Array<Scalars['ID']>;
  deletedBoilerplateFunctionIds: Array<Scalars['ID']>;
  deletedOperationIds: Array<Scalars['ID']>;
  deletedArgumentValueIds: Array<Scalars['ID']>;
  deletedPortalGraphNodeIds: Array<Scalars['ID']>;
  deletedInstanceRefIds: Array<Scalars['ID']>;
  existingEntityIds: Array<Scalars['ID']>;
};

export type AddKindOutput = {
  __typename?: 'AddKindOutput';
  newKinds: Array<Kind>;
  workspaceServiceReferences: Array<Scalars['ID']>;
  updatedServices: Array<Service>;
  boilerplateKinds: Array<Kind>;
  boilerplateFunctions: Array<Function>;
  updatedWorkspaces: Array<Workspace>;
};

export type AddFunctionOutput = {
  __typename?: 'AddFunctionOutput';
  newFunctions: Array<Function>;
  workspaceServiceReferences: Array<Scalars['ID']>;
  updatedServices: Array<Service>;
  updatedWorkspaces: Array<Workspace>;
};

export type Argument = {
  __typename?: 'Argument';
  id: Scalars['ID'];
  name: Scalars['String'];
  type: FieldType;
  typeKindId?: Maybe<Scalars['ID']>;
  kind?: Maybe<Kind>;
  modifiers?: Maybe<Array<Maybe<FieldModifiers>>>;
  description?: Maybe<Scalars['String']>;
  function: Function;
  isDeleted: Scalars['Boolean'];
};

export type ArgumentInput = {
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  type: FieldType;
  typeKindId?: InputMaybe<Scalars['ID']>;
  modifiers?: InputMaybe<Array<InputMaybe<FieldModifiers>>>;
  description?: InputMaybe<Scalars['String']>;
};

export type UpdateArgumentInput = {
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<FieldType>;
  typeKindId?: InputMaybe<Scalars['ID']>;
  modifiers?: InputMaybe<Array<InputMaybe<FieldModifiers>>>;
  description?: InputMaybe<Scalars['String']>;
};

export enum GraphqlOperationType {
  Query = 'QUERY',
  Mutation = 'MUTATION',
}

export enum FunctionType {
  Service = 'SERVICE',
  Projection = 'PROJECTION',
  Ckg = 'CKG',
}

export type Implementation = {
  __typename?: 'Implementation';
  id: Scalars['ID'];
  entrypoint?: Maybe<Operation>;
  operations: Array<Operation>;
};

export type ImplementationInput = {
  id?: InputMaybe<Scalars['ID']>;
  entrypoint?: InputMaybe<Scalars['ID']>;
  operations: Array<OperationInput>;
};

export type UpdateImplementationInput = {
  id?: InputMaybe<Scalars['ID']>;
  entrypoint?: InputMaybe<Scalars['ID']>;
  operations?: InputMaybe<Array<OperationInput>>;
};

export type Operation = {
  __typename?: 'Operation';
  id: Scalars['ID'];
  type: OperationType;
  function?: Maybe<Function>;
  argumentValues: Array<ArgumentValue>;
};

export type OperationInput = {
  id?: InputMaybe<Scalars['ID']>;
  type: OperationType;
  function?: InputMaybe<Scalars['ID']>;
  argumentValues: Array<ArgumentValueInput>;
};

export type ArgumentValue = {
  __typename?: 'ArgumentValue';
  id: Scalars['ID'];
  argument?: Maybe<Argument>;
  operation?: Maybe<Operation>;
  argumentRef?: Maybe<Scalars['ID']>;
};

export type ArgumentValueInput = {
  id?: InputMaybe<Scalars['ID']>;
  argument: Scalars['ID'];
  operation?: InputMaybe<Scalars['ID']>;
  argumentRef?: InputMaybe<Scalars['ID']>;
};

export enum OperationType {
  Let = 'LET',
  Apply = 'APPLY',
  Map = 'MAP',
  Fold = 'FOLD',
}
