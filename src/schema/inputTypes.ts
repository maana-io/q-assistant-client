import {
  AggregateOp,
  BotActionStatus,
  FieldModifiers,
  FieldType,
  FunctionType,
  GraphqlOperationType,
  OperationType,
  PortalGraphType,
  ServiceCategory,
  Theme,
} from './enums';
import { DateTime, ID, ScalarDate, ScalarTime } from './scalars';

import { Maybe } from './common';

export type AddBotActionInput = {
  name?: Maybe<string>;
  serviceId?: Maybe<ID>;
  serviceName?: Maybe<string>;
  botId?: Maybe<ID>;
  kindId?: Maybe<ID>;
  eventName?: Maybe<string>;
  mutationName?: Maybe<string>;
  queryName?: Maybe<string>;
  inputInstanceRef?: Maybe<InstanceRefInput>;
  outputInstanceRef?: Maybe<InstanceRefInput>;
};

export type UpdateBotActionInput = {
  id: ID;
  status: BotActionStatus;
  progress?: Maybe<number>;
  error?: Maybe<JSON>;
};

export type AddServiceInput = {
  id?: Maybe<ID>;
  name: string;
  description?: Maybe<string>;
  isSystem: boolean;
  isReadOnly?: Maybe<boolean>;
  thumbnailUrl: string;
  endpointUrl: string;
  subscriptionEndpointUrl?: Maybe<string>;
  tags?: Maybe<Array<Maybe<string>>>;
  schema?: Maybe<string>;
  serviceType: ServiceCategory;
};

export type TestServiceConnectionInput = {
  id?: Maybe<ID>;
  serviceType: ServiceCategory;
  isSystem?: Maybe<boolean>;
  isManaged?: Maybe<boolean>;
  endpointUrl?: Maybe<string>;
};

export type UpdateServiceInput = {
  id: ID;
  name: string;
  description?: Maybe<string>;
  endpointUrl: string;
  subscriptionEndpointUrl?: Maybe<string>;
  thumbnailUrl?: Maybe<string>;
  tags?: Maybe<Array<Maybe<string>>>;
  serviceType: ServiceCategory;
};

export type AttachmentInput = {
  filename: string;
  contentType: string;
  content: string;
};

export type AddNodeToGraphInput = {
  pgNodeId: ID;
  innerNodeId: ID;
  operationId?: Maybe<ID>;
  collapsed?: Maybe<boolean>;
  height: number;
  width: number;
  x: number;
  y: number;
};

export type CreateKindInGraphInput = {
  id: ID;
  name: string;
  description?: Maybe<string>;
  serviceId: ID;
  thumbnailUrl?: Maybe<string>;
  isPublic?: Maybe<boolean>;
  isManaged?: Maybe<boolean>;
  isSystem?: Maybe<boolean>;
  schema?: Maybe<Array<FieldInput>>;
  nodeInfo: AddNodeToGraphInput;
};

export type CreateFunctionInGraphInput = {
  id: ID;
  name: string;
  description?: Maybe<string>;
  service: ID;
  arguments: Array<ArgumentInput>;
  outputType: FieldType;
  outputKindId?: Maybe<ID>;
  outputModifiers?: Maybe<Array<Maybe<FieldModifiers>>>;
  graphqlOperationType: GraphqlOperationType;
  functionType: FunctionType;
  implementation?: Maybe<ImplementationInput>;
  nodeInfo: AddNodeToGraphInput;
};

export type DuplicateInGraphInput = {
  id: ID;
  baseId: ID;
  name: string;
  serviceId: ID;
  nodeInfo: AddNodeToGraphInput;
};

export type DuplicateInstanceInGraphInput = {
  id: ID;
  baseId: ID;
  kindId: ID;
  nodeInfo: AddNodeToGraphInput;
};

export type AddToGraphInput = {
  kindId?: Maybe<ID>;
  kindName?: Maybe<string>;
  instanceId: ID;
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
  graphId: ID;
  workspaceId: ID;
  createKinds?: Maybe<Array<CreateKindInGraphInput>>;
  createFunctions?: Maybe<Array<CreateFunctionInGraphInput>>;
  createFiles?: Maybe<Array<CreateFileInGraphInput>>;
  createFilesFromUrls?: Maybe<Array<CreateFileFromUrlInGraphInput>>;
  duplicateKinds?: Maybe<Array<DuplicateInGraphInput>>;
  duplicateFunctions?: Maybe<Array<DuplicateInGraphInput>>;
  duplicateInstances?: Maybe<Array<DuplicateInstanceInGraphInput>>;
  addEntities?: Maybe<Array<AddToGraphInput>>;
};

export type DetectedFaceInput = {
  id?: Maybe<ID>;
  name?: Maybe<string>;
  imageId: ID;
  area: number;
  bottom: number;
  top: number;
  right: number;
  left: number;
  detectionConfidence: number;
};

export type RecognizedFaceInput = {
  id?: Maybe<ID>;
  name: string;
  personId: ID;
  detectedFaceId: ID;
  recognitionConfidence: number;
};
export type AddUserInput = {
  id?: Maybe<ID>;
  name: string;
  givenName?: Maybe<string>;
  familyName?: Maybe<string>;
  email: string;
  picture?: Maybe<string>;
  theme: Theme;
  createdOn?: Maybe<DateTime>;
};

export type UpdateUserInput = {
  id: ID;
  name?: Maybe<string>;
  givenName?: Maybe<string>;
  familyName?: Maybe<string>;
  email?: Maybe<string>;
  picture?: Maybe<string>;
  theme?: Maybe<Theme>;
};

export type KindInput = {
  id: ID;
  name?: Maybe<string>;
  description?: Maybe<string>;
  thumbnailUrl?: Maybe<string>;
  isPublic?: Maybe<boolean>;
  isManaged?: Maybe<boolean>;
  isSystem?: Maybe<boolean>;
  schema?: Maybe<Array<FieldInput>>;
};

export type AddKindInput = {
  id?: Maybe<ID>;
  name: string;
  description?: Maybe<string>;
  serviceId: ID;
  thumbnailUrl?: Maybe<string>;
  isPublic?: Maybe<boolean>;
  nameField?: Maybe<ID>;
  isManaged?: Maybe<boolean>;
  isSystem?: Maybe<boolean>;
  schema?: Maybe<Array<FieldInput>>;
};

export type UpdateKindInput = {
  id: ID;
  name?: Maybe<string>;
  description?: Maybe<string>;
  serviceId?: Maybe<ID>;
  thumbnailUrl?: Maybe<string>;
  isPublic?: Maybe<boolean>;
  nameField?: Maybe<ID>;
  isManaged?: Maybe<boolean>;
  isSystem?: Maybe<boolean>;
  schema?: Maybe<Array<FieldInput>>;
};

export type FieldInput = {
  id?: Maybe<ID>;
  name: string;
  description?: Maybe<string>;
  type: FieldType;
  typeKindId?: Maybe<ID>;
  modifiers?: Maybe<Array<FieldModifiers>>;
  displayAs?: Maybe<Array<string>>;
  hide?: Maybe<boolean>;
  autoFocus?: Maybe<boolean>;
  readonly?: Maybe<boolean>;
};

export type AddFieldsInput = {
  kindId: ID;
  fields: Array<FieldInput>;
};

export type AddInstanceInput = {
  kindId: ID;
  id?: Maybe<ID>;
  fieldIds: Array<Maybe<ID>>;
  fieldValues: Array<Maybe<FieldValueInput>>;
};

export type AddInstanceSetInput = {
  kindId: ID;
  ids?: Maybe<Array<Maybe<ID>>>;
  fieldIds: Array<Maybe<ID>>;
  records: Array<Maybe<Array<Maybe<FieldValueInput>>>>;
};

export type UpdateInstanceInput = {
  id: ID;
  kindId: ID;
  fieldIds: Array<Maybe<ID>>;
  fieldValues: Array<Maybe<FieldValueInput>>;
};

export type DeleteInstanceInput = {
  kindId: ID;
  id: ID;
};

export type DeleteInstanceSetInput = {
  kindId: ID;
  ids: Array<ID>;
};

export type FieldValueInput = {
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

export type InstanceRefInput = {
  id?: Maybe<ID>;
  name?: Maybe<string>;
  kindId?: Maybe<ID>;
  kindName?: Maybe<string>;
  url?: Maybe<string>;
  instance?: Maybe<ID>;
};

export type AddRelationInput = {
  name: string;
  id?: Maybe<ID>;
  inverseName: string;
  description?: Maybe<string>;
  undirected?: Maybe<boolean>;
  weight?: Maybe<number>;
};

export type UpdateRelationInput = {
  id: ID;
  name?: Maybe<string>;
  inverseName: string;
  description?: Maybe<string>;
  undirected?: Maybe<boolean>;
  weight?: Maybe<number>;
};

export type AddLinkInput = {
  fromKindId?: Maybe<ID>;
  fromKindName?: Maybe<string>;
  toKindId?: Maybe<ID>;
  toKindName?: Maybe<string>;
  relationId?: Maybe<ID>;
  relationName?: Maybe<string>;
  id?: Maybe<ID>;
  name?: Maybe<string>;
  weight?: Maybe<number>;
  fromFieldId?: Maybe<ID>;
  fromFieldName?: Maybe<string>;
  fromInstanceId?: Maybe<ID>;
  fromOffset?: Maybe<string>;
  fromSpan?: Maybe<string>;
  toFieldId?: Maybe<ID>;
  toFieldName?: Maybe<string>;
  toInstanceId?: Maybe<ID>;
  toOffset?: Maybe<string>;
  toSpan?: Maybe<string>;
};

export type FieldFilterInput = {
  fieldId?: Maybe<ID>;
  fieldName?: Maybe<string>;
  op: string;
  value: FieldValueInput;
};

export type FieldProjectionInput = {
  fieldId?: Maybe<ID>;
  fieldName?: Maybe<string>;
  alias?: Maybe<string>;
  op?: Maybe<AggregateOp>;
};

export type KindQueryInput = {
  kindId?: Maybe<ID>;
  kindName?: Maybe<string>;
  alias?: Maybe<string>;
  projection?: Maybe<Array<Maybe<FieldProjectionInput>>>;
  distinct?: Maybe<boolean>;
  fieldFilters?: Maybe<Array<Maybe<FieldFilterInput>>>;
  and?: Maybe<Array<Maybe<KindQueryInput>>>;
  or?: Maybe<Array<Maybe<KindQueryInput>>>;
  fromFieldId?: Maybe<ID>;
  fromFieldName?: Maybe<string>;
  toFieldId?: Maybe<ID>;
  toFieldName?: Maybe<string>;
  take?: Maybe<number>;
  drop?: Maybe<number>;
  token?: Maybe<string>;
};

export type AddWorkspaceInput = {
  id?: Maybe<ID>;
  userId: ID;
  name: string;
  thumbnailUrl: string;
  workspaceServiceId?: Maybe<ID>;
};

export type UpdateWorkspaceLayoutInput = {
  id: ID;
  explorerOpen?: Maybe<boolean>;
  explorerSize?: Maybe<number>;
  inventoryOpen?: Maybe<boolean>;
  inventorySize?: Maybe<number>;
  contextOpen?: Maybe<boolean>;
  contextMode?: Maybe<string>;
  contextSize?: Maybe<number>;
  dataVizOpen?: Maybe<boolean>;
  dataVizSize?: Maybe<number>;
};

export type GraphLayoutUpdateInput = {
  graphLayouts?: Maybe<Array<GraphLayoutInput>>;
  nodeLayouts?: Maybe<Array<NodeLayoutInput>>;
};

export type GraphLayoutInput = {
  id: ID;
  zoom?: Maybe<number>;
  offsetX?: Maybe<number>;
  offsetY?: Maybe<number>;
};

export type NodeLayoutInput = {
  id: ID;
  x?: Maybe<number>;
  y?: Maybe<number>;
  width?: Maybe<number>;
  height?: Maybe<number>;
  collapsed?: Maybe<boolean>;
};

export type GraphLayoutNewNodeInput = {
  x: number;
  y: number;
  width: number;
  height: number;
  collapsed: boolean;
};

export type AddPortalGraphInput = {
  workspaceId: ID;
  type?: Maybe<PortalGraphType>;
  name: string;
  id?: Maybe<ID>;
  index?: Maybe<number>;
  offsetX?: Maybe<number>;
  offsetY?: Maybe<number>;
  zoom?: Maybe<number>;
  nodes?: Maybe<Array<PortalGraphNodeInput>>;
};

export type ReorderPortalGraphsInput = {
  workspaceId: ID;
  oldIndex: number;
  newIndex: number;
};

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

export type FunctionGraphNodeInput = {
  id?: Maybe<ID>;
  operation: OperationInput;
};

export type KnowledgeGraphNodeInput = {
  id?: Maybe<ID>;
  instanceId: ID;
  kindId?: Maybe<ID>;
  kindName?: Maybe<string>;
};

export type AddServiceSourceInput = {
  id?: Maybe<ID>;
  name?: Maybe<string>;
  description?: Maybe<string>;
  schema: string;
};

export type AddDocumentInput = {
  id?: Maybe<ID>;
  name?: Maybe<string>;
  text?: Maybe<string>;
  xhtml?: Maybe<string>;
  pages?: Maybe<Array<Maybe<ID>>>;
  sections?: Maybe<Array<Maybe<ID>>>;
  content?: Maybe<Array<Maybe<ID>>>;
};

export type AddFileInput = {
  id?: Maybe<ID>;
  name?: Maybe<string>;
  url?: Maybe<string>;
  thumbnailUrl?: Maybe<string>;
  mimeType?: Maybe<string>;
  size: string;
  progress?: Maybe<string>;
  status: number;
  serviceId?: Maybe<ID>;
};

export type AddFileFromUrlInput = {
  id?: Maybe<ID>;
  name?: Maybe<string>;
  url: string;
  thumbnailUrl?: Maybe<string>;
  mimeType?: Maybe<string>;
  serviceId?: Maybe<ID>;
};

export type UpdateFileInput = {
  id: ID;
  name?: Maybe<string>;
  url?: Maybe<string>;
  thumbnailUrl?: Maybe<string>;
  progress?: Maybe<string>;
  status?: Maybe<number>;
  mimeType?: Maybe<string>;
  serviceId?: Maybe<ID>;
};

export type AddImageInput = {
  id?: Maybe<ID>;
  name?: Maybe<string>;
  url?: Maybe<string>;
};

export type EntityInput = {
  id?: Maybe<ID>;
  name?: Maybe<string>;
  class?: Maybe<string>;
  count?: Maybe<number>;
  percent?: Maybe<number>;
};

export type AddEntitiesInput = {
  docId: ID;
  entities: Array<EntityInput>;
};

export type EntitySurfaceFormsInput = {
  kindId: ID;
  instanceId?: Maybe<Array<ID>>;
  surfaceForms?: Maybe<Array<string>>;
};

export type EntitySearchInput = {
  entitySurfaceForms: Array<EntitySurfaceFormsInput>;
  scopeKindId: ID;
  scopeFieldId: ID;
  scopeInstanceId?: Maybe<Array<ID>>;
};

export type FunctionInput = {
  id?: Maybe<ID>;
  name: string;
  description?: Maybe<string>;
  arguments: Array<ArgumentInput>;
  outputType: FieldType;
  outputKindId?: Maybe<ID>;
  outputModifiers?: Maybe<Array<Maybe<FieldModifiers>>>;
  graphqlOperationType: GraphqlOperationType;
  functionType: FunctionType;
  implementation?: Maybe<ImplementationInput>;
  service: ID;
};

export type UpdateFunctionInput = {
  id: ID;
  name?: Maybe<string>;
  description?: Maybe<string>;
  arguments?: Maybe<Array<UpdateArgumentInput>>;
  outputType?: Maybe<FieldType>;
  outputKindId?: Maybe<ID>;
  outputModifiers?: Maybe<Array<Maybe<FieldModifiers>>>;
  graphqlOperationType?: Maybe<GraphqlOperationType>;
  functionType?: Maybe<FunctionType>;
  implementation?: Maybe<ImplementationInput>;
  service?: Maybe<ID>;
};

export type ArgumentInput = {
  id?: Maybe<ID>;
  name: string;
  type: FieldType;
  typeKindId?: Maybe<ID>;
  modifiers?: Maybe<Array<Maybe<FieldModifiers>>>;
  description?: Maybe<string>;
};

export type UpdateArgumentInput = {
  id: ID;
  name?: Maybe<string>;
  type?: Maybe<FieldType>;
  typeKindId?: Maybe<ID>;
  modifiers?: Maybe<Array<Maybe<FieldModifiers>>>;
  description?: Maybe<string>;
};

export type ImplementationInput = {
  id?: Maybe<ID>;
  entrypoint?: Maybe<ID>;
  operations: Array<OperationInput>;
};

export type UpdateImplementationInput = {
  id?: Maybe<ID>;
  entrypoint?: Maybe<ID>;
  operations?: Maybe<Array<OperationInput>>;
};

export type OperationInput = {
  id?: Maybe<ID>;
  type: OperationType;
  function?: Maybe<ID>;
  argumentValues: Array<ArgumentValueInput>;
};

export type ArgumentValueInput = {
  id?: Maybe<ID>;
  argument: ID;
  operation?: Maybe<ID>;
  argumentRef?: Maybe<ID>;
};
