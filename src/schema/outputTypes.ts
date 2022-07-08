import {
  BotActionStatus,
  FieldModifiers,
  FieldType,
  FunctionType,
  GraphqlOperationType,
  OperationType,
  PortalGraphType,
  ServiceCategory,
  ServiceDataProvider,
  ServiceLogicProvider,
} from './enums';
import { DateTime, ID, JSON, ScalarDate, ScalarTime } from './scalars';

import { Maybe } from './common';

export type BotAction = {
  id: ID;
  name: string;
  created: DateTime;
  lastUpdated: DateTime;
  status: BotActionStatus;
  progress?: Maybe<number>;
  errors?: Maybe<Array<JSON>>;
  bot?: Maybe<Bot>;
  kind?: Maybe<Kind>;
  service: Service;
  eventName?: Maybe<string>;
  function?: Maybe<Function>;
  input?: Maybe<InstanceRef>;
  output?: Maybe<InstanceRef>;
};

export type Bot = {
  id: ID;
  name: string;
  service?: Maybe<Service>;
};

export type Info = {
  id: ID;
  name: string;
  description?: Maybe<string>;
};

export type ServiceInstance = {
  id: ID;
  dockerServiceName: string;
  hostName: string;
  desiredState: string;
  currentState: string;
};

export type ServiceImport = {
  id: ID;
  service: ID;
  function?: Maybe<Function>;
  kind?: Maybe<Kind>;
  as?: Maybe<string>;
};

export type ServiceExport = {
  id: ID;
  function?: Maybe<Function>;
  kind?: Maybe<Kind>;
  as?: Maybe<string>;
};

export type Service = {
  id: ID;
  name: string;
  description?: Maybe<string>;
  isManaged: boolean;
  isSystem: boolean;
  isReadOnly: boolean;
  endpointUrl: string;
  subscriptionEndpointUrl?: Maybe<string>;
  assistantUrl?: Maybe<string>;
  thumbnailUrl?: Maybe<string>;
  tags: Array<string>;
  created: DateTime;
  modified?: Maybe<DateTime>;
  schema: string;
  serviceType: ServiceCategory;
  provider?: Maybe<ServiceDataProvider>;
  logicType?: Maybe<ServiceLogicProvider>;
  logicTemplate?: Maybe<JSON>;
  aggregatedServices?: Maybe<Array<Maybe<Service>>>;
  refreshPeriod?: Maybe<number>;
  lastChecked?: Maybe<DateTime>;
  lastConnectionResult?: Maybe<number>;
  imports?: Maybe<Array<Maybe<ServiceImport>>>;
  exports?: Maybe<Array<Maybe<ServiceExport>>>;
  externalServiceInstances?: Maybe<Array<Maybe<ServiceInstance>>>;
  kinds?: Maybe<Array<Maybe<Kind>>>;
  functions?: Maybe<Array<Maybe<Function>>>;
  workspace?: Maybe<Workspace>;
  isDeleted: boolean;
};

export type Application = {
  id: ID;
  name: string;
  thumbnailUrl?: Maybe<string>;
};

export type MoveKindsAndFunctionsResponse = {
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

export type InstanceIdsByKind = {
  kindId: ID;
  instanceIds: Array<ID>;
};

export type UpdateGraphOutput = {
  newKinds: Array<Kind>;
  newFunctions: Array<Function>;
  addedKinds: Array<Kind>;
  addedFunctions: Array<Function>;
  files: Array<File>;
  workspaceServiceReferences: Array<ID>;
  updatedServices: Array<Service>;
  workspace: Workspace;
  boilerplateKinds: Array<Kind>;
  boilerplateFunctions: Array<Function>;
  updatedGraph: PortalGraph;
  newGraphNodes: Array<PortalGraphNode>;
};

export type BotActionAddedEvent = {
  id: ID;
  name: string;
  serviceName: string;
  serviceId?: Maybe<ID>;
  bot?: Maybe<Bot>;
  kind?: Maybe<Kind>;
  eventName?: Maybe<string>;
  mutationName?: Maybe<string>;
  queryName?: Maybe<string>;
  inputInstanceRef?: Maybe<InstanceRef>;
  outputInstanceRef?: Maybe<InstanceRef>;
};

export type BotActionUpdatedEvent = {
  id: ID;
  bot?: Maybe<Bot>;
  service?: Maybe<Service>;
  kind?: Maybe<Kind>;
  oldStatus: BotActionStatus;
  newStatus: BotActionStatus;
  progress?: Maybe<number>;
  errors?: Maybe<Array<JSON>>;
};

export type DetectedFace = {
  id: ID;
  name?: Maybe<string>;
  image: Image;
  area: number;
  bottom: number;
  top: number;
  right: number;
  left: number;
  detectionConfidence: number;
};

export type RecognizedFace = {
  id: ID;
  name: string;
  personId: ID;
  person: Person;
  detectedFaceId: ID;
  detectedFace?: Maybe<DetectedFace>;
  recognitionConfidence: number;
};

export type Image = {
  detectedFaces?: Maybe<Array<Maybe<DetectedFace>>>;
  recognizedFaces?: Maybe<Array<Maybe<RecognizedFace>>>;
  people?: Maybe<Array<Maybe<Person>>>;
  id: ID;
  name: string;
  url?: Maybe<string>;
};

export type Comment = {
  id: ID;
  name: string;
  detail?: Maybe<string>;
  author: User;
  timestamp: DateTime;
};

export type Person = {
  images?: Maybe<Array<Maybe<Image>>>;
  id: ID;
  name: string;
  givenName?: Maybe<string>;
  familyName?: Maybe<string>;
  dateOfBirth?: Maybe<ScalarDate>;
};

export type Tenant = {
  id: ID;
  name: string;
  users?: Maybe<Array<Maybe<User>>>;
  services?: Maybe<Array<Maybe<Service>>>;
  applications?: Maybe<Array<Maybe<Application>>>;
};

export type Role = {
  id: ID;
  name: string;
};

export type User = {
  id: ID;
  name: string;
  givenName?: Maybe<string>;
  familyName?: Maybe<string>;
  email?: Maybe<string>;
  picture?: Maybe<string>;
  tenants?: Maybe<Array<Maybe<Tenant>>>;
  tenantUserRoles?: Maybe<Array<Maybe<TenantUserRole>>>;
  createdOn?: Maybe<DateTime>;
  activities?: Maybe<Array<InstanceRef>>;
  recentItems?: Maybe<Array<InstanceRef>>;
  favoriteItems?: Maybe<Array<InstanceRef>>;
  workspaces?: Maybe<Array<Workspace>>;
  applications?: Maybe<Array<Application>>;
  theme?: Maybe<string>;
  openWorkspaces?: Maybe<Array<Workspace>>;
  activeWorkspace?: Maybe<Workspace>;
};

export type TenantUserRole = {
  userId: ID;
  user?: Maybe<User>;
  tenantId: ID;
  tenant?: Maybe<Tenant>;
  roles?: Maybe<Array<Maybe<Role>>>;
};

export type Kind = {
  id: ID;
  name: string;
  serviceId?: Maybe<ID>;
  description?: Maybe<string>;
  thumbnailUrl?: Maybe<string>;
  isPublic?: Maybe<boolean>;
  isManaged?: Maybe<boolean>;
  isSystem?: Maybe<boolean>;
  schema: (
    includeDeleted?: Maybe<boolean>,
    fieldIds?: Maybe<Array<ID>>,
    fieldNames?: Maybe<Array<string>>,
    fieldKinds?: Maybe<Array<ID>>
  ) => Promise<Maybe<Array<Maybe<Field>>> | undefined>;
  nameField?: Maybe<ID>;
  isGenerated: boolean;
  relationsFrom?: Maybe<Array<Maybe<Relation>>>;
  relationsTo?: Maybe<Array<Maybe<Relation>>>;
  linksFrom?: Maybe<Array<Maybe<Link>>>;
  linksTo?: Maybe<Array<Maybe<Link>>>;
  service?: Maybe<Service>;
  linkedKindsTo: (relationId?: Maybe<ID>) => Promise<Array<LinkedKind>>;
  linkedKindsFrom: (relationId?: Maybe<ID>) => Promise<Array<LinkedKind>>;
  linkedInstancesTo: (relationId?: Maybe<ID>) => Promise<Array<LinkedInstance>>;
  linkedInstancesFrom: (
    relationId?: Maybe<ID>
  ) => Promise<Array<LinkedInstance>>;
  isDeleted: boolean;
};

export type LinkedKind = {
  relation: Relation;
  kind?: Maybe<Kind>;
  field?: Maybe<Field>;
};

export type LinkedInstance = {
  relation: Relation;
  kind?: Maybe<Kind>;
  instance?: Maybe<Instance>;
};

export type KindBoilerplate = {
  kinds: Array<Kind>;
  functions: Array<Function>;
  instances: Array<Instance>;
};

export type Field = {
  id: ID;
  name: string;
  type: FieldType;
  description?: Maybe<string>;
  modifiers?: Maybe<Array<Maybe<FieldModifiers>>>;
  typeKindId?: Maybe<ID>;
  displayAs?: Maybe<Array<Maybe<string>>>;
  hide?: Maybe<boolean>;
  autoFocus?: Maybe<boolean>;
  readonly?: Maybe<boolean>;
  kind?: Maybe<Kind>;
  isDeleted: boolean;
};

export type Instance = {
  id: ID;
  name?: Maybe<string>;
  kindId: ID;
  kind?: Maybe<Kind>;
  fieldIds?: Maybe<Array<Maybe<ID>>>;
  fieldValues?: Maybe<Array<Maybe<FieldValue>>>;
  linksFrom?: Maybe<Array<Maybe<Link>>>;
  linksTo?: Maybe<Array<Maybe<Link>>>;
  linkedKindsTo: (relationId?: Maybe<ID>) => Promise<Array<LinkedKind>>;
  linkedKindsFrom: (relationId?: Maybe<ID>) => Promise<Array<LinkedKind>>;
  linkedInstancesTo: (relationId?: Maybe<ID>) => Promise<Array<LinkedInstance>>;
  linkedInstancesFrom: (
    relationId?: Maybe<ID>
  ) => Promise<Array<LinkedInstance>>;
};

export type InstanceSet = {
  kindId: ID;
  kind: Kind;
  token?: Maybe<string>;
  fieldIds?: Maybe<Array<Maybe<ID>>>;
  records?: Maybe<Array<Maybe<Array<Maybe<FieldValue>>>>>;
};

export type FieldValue = {
  ID?: Maybe<ID>;
  STRING?: Maybe<string>;
  INT?: Maybe<number>;
  FLOAT?: Maybe<number>;
  BOOLEAN?: Maybe<boolean>;
  DATE?: Maybe<ScalarDate>;
  TIME?: Maybe<ScalarTime>;
  DATETIME?: Maybe<DateTime>;
  JSON?: Maybe<JSON>;
  KIND?: Maybe<ID>;
  l_ID?: Maybe<Array<Maybe<ID>>>;
  l_STRING?: Maybe<Array<Maybe<string>>>;
  l_INT?: Maybe<Array<Maybe<number>>>;
  l_FLOAT?: Maybe<Array<Maybe<number>>>;
  l_BOOLEAN?: Maybe<Array<Maybe<boolean>>>;
  l_DATE?: Maybe<Array<Maybe<ScalarDate>>>;
  l_TIME?: Maybe<Array<Maybe<ScalarTime>>>;
  l_DATETIME?: Maybe<Array<Maybe<DateTime>>>;
  l_JSON?: Maybe<Array<Maybe<JSON>>>;
  l_KIND?: Maybe<Array<Maybe<ID>>>;
};

export type InstanceRef = {
  id: ID;
  kindId?: Maybe<ID>;
  kindName?: Maybe<string>;
  name?: Maybe<string>;
  url?: Maybe<string>;
  kind?: Maybe<Kind>;
  instance?: Maybe<Instance>;
  innerKind?: Maybe<Kind>;
  innerFunction?: Maybe<Function>;
};

export type Relation = {
  id: ID;
  name: string;
  inverseName: string;
  description?: Maybe<string>;
  undirected?: Maybe<boolean>;
  weight?: Maybe<number>;
  links?: Maybe<Array<Maybe<Link>>>;
};

export type Link = {
  id: ID;
  relation: Relation;
  fromKind?: Maybe<Kind>;
  toKind?: Maybe<Kind>;
  name?: Maybe<string>;
  weight?: Maybe<number>;
  fromField?: Maybe<Field>;
  fromInstance?: Maybe<Instance>;
  fromOffset?: Maybe<string>;
  fromSpan?: Maybe<string>;
  toField?: Maybe<Field>;
  toInstance?: Maybe<Instance>;
  toOffset?: Maybe<string>;
  toSpan?: Maybe<string>;
};

export type Inventory = {
  serviceKinds: Array<Kind>;
  workspaceKinds: Array<Kind>;
  functions: Array<Function>;
};

export type Workspace = {
  id: ID;
  name: string;
  thumbnailUrl: string;
  owner: User;
  isPublic?: Maybe<boolean>;
  isTemplate?: Maybe<boolean>;
  createdOn: DateTime;
  lastOpenedOn: DateTime;
  layout: WorkspaceLayout;
  modelServiceId: ID;
  logicServiceId: ID;
  workspaceServiceId: ID;
  services?: Maybe<Array<Service>>;
  portalGraphs?: Maybe<Array<PortalGraph>>;
  activeGraphPath: Array<ID>;
  instanceRefs?: Maybe<Array<InstanceRef>>;
  inventory?: Maybe<Inventory>;
};

export type WorkspaceLayout = {
  id: ID;
  explorerOpen: boolean;
  explorerSize: number;
  inventoryOpen: boolean;
  inventorySize: number;
  contextOpen: boolean;
  contextMode: string;
  contextSize: number;
  dataVizOpen: boolean;
  dataVizSize: number;
};

export type PortalGraph = {
  id: ID;
  name: string;
  type: PortalGraphType;
  expanded: boolean;
  zoom: number;
  offsetX: number;
  offsetY: number;
  workspace?: Maybe<Workspace>;
  function?: Maybe<Function>;
  nodes?: Maybe<Array<PortalGraphNode>>;
  lockedBy?: Maybe<string>;
};

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

export type KnowledgeGraphNode = {
  id: ID;
  kind?: Maybe<Kind>;
  instance?: Maybe<Instance>;
  innerKind?: Maybe<Kind>;
  innerFunction?: Maybe<Function>;
};

export type FunctionGraphNode = {
  id: ID;
  operationId: ID;
  operation?: Maybe<Operation>;
};

export type SearchResult = {
  kindId?: Maybe<ID>;
  kind?: Maybe<Kind>;
  innerKind?: Maybe<Kind>;
  innerFunction?: Maybe<Function>;
  innerPortalGraph?: Maybe<PortalGraph>;
  instanceId?: Maybe<ID>;
  instance?: Maybe<Instance>;
  fieldId?: Maybe<ID>;
  field?: Maybe<Field>;
  offset?: Maybe<string>;
  span?: Maybe<string>;
  contents?: Maybe<string>;
};

export type Document = {
  id: ID;
  name: string;
  text?: Maybe<string>;
  xhtml?: Maybe<string>;
  pages?: Maybe<Array<Maybe<Page>>>;
  sections?: Maybe<Array<Maybe<Section>>>;
  content?: Maybe<Array<Maybe<Content>>>;
};

export type File = {
  id: ID;
  name: string;
  url?: Maybe<string>;
  thumbnailUrl?: Maybe<string>;
  mimeType?: Maybe<string>;
  size: string;
  progress?: Maybe<string>;
  status: number;
};

export type Entity = {
  id: ID;
  name: string;
  class: string;
  count?: Maybe<number>;
  percent?: Maybe<number>;
};

export type Page = {
  id: ID;
  contents?: Maybe<Array<Maybe<Content>>>;
  number?: Maybe<number>;
  header?: Maybe<Array<Maybe<Content>>>;
  footer?: Maybe<Array<Maybe<Content>>>;
};

export type Section = {
  id: ID;
  name?: Maybe<string>;
  contents?: Maybe<Array<Maybe<Content>>>;
  subSections?: Maybe<Array<Maybe<Section>>>;
};

export type Table = {
  id: ID;
  headers?: Maybe<Array<Maybe<Content>>>;
  rows?: Maybe<Array<Maybe<Content>>>;
};

export type OrderedList = {
  id: ID;
  type?: Maybe<string>;
  items?: Maybe<Array<Maybe<OrderedListItem>>>;
};

export type OrderedListItem = {
  id: ID;
  index?: Maybe<number>;
  contents?: Maybe<Array<Maybe<Content>>>;
};

export type UnorderedList = {
  id: ID;
  type?: Maybe<string>;
  items?: Maybe<Array<Maybe<UnorderedListItem>>>;
};

export type UnorderedListItem = {
  id: ID;
  contents?: Maybe<Array<Maybe<Content>>>;
};

export type Content = {
  id: ID;
  table?: Maybe<Table>;
  unorderedList?: Maybe<UnorderedList>;
  orderedList?: Maybe<OrderedList>;
  text?: Maybe<string>;
  image?: Maybe<Image>;
};

export type EntityOccurrences = {
  kindId: ID;
  instanceId?: Maybe<Array<ID>>;
  locations: Array<number>;
};

export type EntitySearchResult = {
  scopeKindId: ID;
  scopeFieldId: ID;
  scopeInstanceId: ID;
  cooccurrences: Array<EntityOccurrences>;
};

export type EntitySearchActionResult = {
  results?: Maybe<Array<EntitySearchResult>>;
  token?: Maybe<string>;
};

export type Function = {
  id: ID;
  name: string;
  description?: Maybe<string>;
  arguments: Array<Argument>;
  outputType: FieldType;
  outputKindId?: Maybe<ID>;
  outputModifiers?: Maybe<Array<Maybe<FieldModifiers>>>;
  graph?: Maybe<PortalGraph>;
  isGenerated: boolean;
  kind?: Maybe<Kind>;
  graphqlOperationType?: Maybe<GraphqlOperationType>;
  functionType: FunctionType;
  implementation?: Maybe<Implementation>;
  service?: Maybe<Service>;
  isDeleted: boolean;
};

export type UpdateFunctionsOutput = {
  updatedFunctions: Array<Function>;
  updatedOperations: Array<Operation>;
};

export type UpdateFunctionOutput = {
  updatedFunction: Function;
  updatedOperations: Array<Operation>;
};

export type DeleteEntityOutput = {
  updatedPortalGraphs: Array<PortalGraph>;
  updatedWorkspaces: Array<Workspace>;
  updatedImplementations: Array<Implementation>;
  updatedOperations: Array<Operation>;
  updatedFields: Array<Field>;
  updatedFunctions: Array<Function>;
  updatedArguments: Array<Argument>;
  updatedServices: Array<Service>;
  workspaceServiceReferences: Array<ID>;
  workspace?: Maybe<Workspace>;
  deletedBoilerplateKindIds: Array<ID>;
  deletedBoilerplateFunctionIds: Array<ID>;
  deletedOperationIds: Array<ID>;
  deletedArgumentValueIds: Array<ID>;
  deletedPortalGraphNodeIds: Array<ID>;
  deletedInstanceRefIds: Array<ID>;
  existingEntityIds: Array<ID>;
};

export type AddKindOutput = {
  newKinds: Array<Kind>;
  workspaceServiceReferences: Array<ID>;
  updatedServices: Array<Service>;
  boilerplateKinds: Array<Kind>;
  boilerplateFunctions: Array<Function>;
  updatedWorkspaces: Array<Workspace>;
};

export type CreatedKind = {
  id: ID;
  schema?: Maybe<
    Array<
      Maybe<{
        id: ID;
        name: string;
        type: FieldType;
        modifiers?: Maybe<Array<Maybe<FieldModifiers>>>;
      }>
    >
  >;
};

export type AddFunctionOutput = {
  newFunctions: Array<Function>;
  workspaceServiceReferences: Array<ID>;
  updatedServices: Array<Service>;
  updatedWorkspaces: Array<Workspace>;
};

export type Argument = {
  id: ID;
  name: string;
  type: FieldType;
  typeKindId?: Maybe<ID>;
  kind?: Maybe<Kind>;
  modifiers?: Maybe<Array<Maybe<FieldModifiers>>>;
  description?: Maybe<string>;
  function: Function;
  isDeleted: boolean;
};

export type Implementation = {
  id: ID;
  entrypoint?: Maybe<Operation>;
  operations: Array<Operation>;
};

export type Operation = {
  id: ID;
  type: OperationType;
  function?: Maybe<Function>;
  argumentValues: Array<ArgumentValue>;
};

export type ArgumentValue = {
  id: ID;
  argument?: Maybe<Argument>;
  operation?: Maybe<Operation>;
  argumentRef?: Maybe<ID>;
};
