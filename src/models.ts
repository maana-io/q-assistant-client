import {
  EntityType,
  GraphQLFunctionType,
  GraphRefInputType,
  ImplementationType,
  NodeType,
  ServiceType
} from './constants';

export type Maybe<T> = T | null | undefined;

/** Represents a JSON object used to express a type expression. */
export type TypeExpressionObject = any;

interface ErrorLike {
  message: string;
}

/**
 * The top level error object returned by the Assistant API that wraps and
 * returns any errors that occurred during a API call. Contains an array of
 * errors that caused the this error to be returned.
 */
export interface AssistantAPIError {
  /** The top level message for the error. */
  message: string;

  /** A list of errors like objects that were the cause of this error. */
  cause?: Maybe<ErrorLike[]>;
}

export interface IDObject {
  id: string;
}

export interface Position {
  x: number;
  y: number;
}

export interface User {
  /** The users email address. */
  email: string;

  /** The users name. */
  name: string;
}

export interface EntityIdentifier {
  /** The type of entity being referenced. */
  entityType: string;

  /** The ID of the entity. Used for all but Types and Functions. */
  id?: string;

  /** The name of the entity. Used by Types and Functions. */
  name?: string;

  /** The ID of the service that the entity lives in.  Used by Types and Functions. */
  serviceId?: string;
}

export interface Selected {
  /** The list of selected entities. */
  selection: EntityIdentifier[];
}

export interface Entity {
  /** The ID of the entity. */
  id: string;

  /** The name of the entity. */
  name: string;

  /** Name of where the entity comes from (Service/Workspace). */
  nameDescriptor?: string;

  /** Human readable description of the entity. */
  description?: string;
}

export interface ArgumentRef {
  argumentName: string;
  argumentId: string;
}

export interface OperationArgumentRef {
  operationId: string;
  argumentName: string;
  argumentId: string;
}

export interface FunctionResultRef {
  result?: Maybe<boolean>;
}

export interface OperationResultRef {
  operationId: string;
}

export interface OutputArgumentRef {
  operation: string;
  fieldPath: string[];
  argument: string;
}

/** Info for one end of a connection between two items within the graph. */
export type GraphRef =
  | ArgumentRef
  | OperationArgumentRef
  | FunctionResultRef
  | OperationResultRef
  | OutputArgumentRef;

/* The connection between two items on a graph. */
export interface Connection {
  id: string;

  /** End point for the outgoing connection point */
  from: GraphRef;

  /** End point for the incoming connection point */
  to: GraphRef;
}

/**
 * The core shape of a node
 */
export interface Node {
  id: string;

  /** Human readable description of the Node.*/
  description?: Maybe<string>;

  /**
   * Position of the node on the graph. Null indicates the need to layout the
   * position.
   */
  location?: Maybe<Position>;

  /** Indicates if the node is collapsed or expanded in the node display. */
  isCollapsed: boolean;

  /** The type of node */
  type: NodeType;

  /** The entity referenced by the node. */
  entityIdentifier?: Maybe<EntityIdentifier>;
}

export interface Graph {
  /** The offset of the Graph. */
  offset: Position;

  /** The zoom of the Graph. */
  zoom: number;

  /** The nodes in the Graph. */
  nodes: Node[];

  /** The connections in the Graph. */
  connections: Connection[];
}

export interface Kind extends Entity {
  /** The signature of the Kind. */
  signature: TypeExpressionObject;

  /** The service that the Kind comes from. */
  service: IDObject;

  /** Used to signify if this type has data that is managed by the platform */
  isManaged: boolean;

  /**
   * Updates information about the Kind.
   * @param changes Information to update the Kind with.
   */
  update(changes: UpdateTypeInput): Promise<void>;
}

/**
 * @typedef KnowledgeGraph
 *
 * @prop {string} id The ID of the Knowledge Graph.
 * @prop {string} name The name of the Knowledge Graph.
 * @prop {number}
 * @prop {number}
 * @prop {number} zoom
 * @prop {Graph} graph
 */
export interface KnowledgeGraph extends Entity {
  /**
   * The X offset of the Knowledge Graph.
   * @deprecated Use graph.offset.x instead.
   */
  offsetX: number;

  /**
   * The Y offset of the Knowledge Graph.
   * @deprecated use graph.offset.y instead.
   */
  offsetY: number;

  /**
   * The zoom of the Knowledge Graph.
   * @deprecated use graph.zoom instead.
   */
  zoom: number;

  /** The graph information for the Knowledge Graph. */
  graph: Graph;

  /** Returns boolean stating if the Knowledge Graph is editable. */
  canEdit(): Promise<boolean>;

  /** Returns the e-mail of the user who locked the Knowledge Graph. */
  lockedBy(): Promise<Maybe<string>>;

  /**
   * Updates the locked state of the Knowledge Graph.
   * @param isLocked The new locked state of the Knowledge Graph, if not
   * provided then the locked state is toggled.
   */
  setLocked(isLocked?: boolean): Promise<void>;

  /**
   * Updates information about the Knowledge Graph.
   * @param changes Information to update the Knowledge Graph with.
   */
  update(changes: UpdateKnowledgeGraphInput): Promise<void>;

  /**
   * Returns the list of nodes inside of the Knowledge Graph.
   * @deprecated use graph.nodes instead.
   */
  getNodes(): Promise<Node[]>;

  /**
   * Adds an entity as a node on the Knowledge Graph.
   * @deprecated use update instead.
   */
  addNode(entityIdentifier: EntityIdentifier): Promise<string>;

  /**
   * Removed a node from the Knowledge Graph.
   * @deprecated use update instead.
   * @param nodeId The ID of the node to remove from the Knowledge Graph.
   */
  removeNode(nodeId: string): Promise<void>;

  /**
   * Updates the layout information for a node in the Knowledge Graph.
   * @param nodeId The ID of the node to update.
   * @param changes The changes to make to the layout.
   */
  updateNodeLayout(
    nodeId: string,
    changes: UpdateNodeLayoutInput
  ): Promise<void>;

  /**
   * Updates the layout information for the graph of the Knowledge Graph.
   * @param changes The changes to make to the layout.
   */
  updateGraphLayout(changes: UpdateGraphLayoutInput): Promise<void>;
}

/**
 * Function implementation union.
 */
export type Implementation = Graph;

export interface ArgumentFieldSelection {
  argument: string;
  fieldSelection: string[][];
}

/**
 * @typedef {Object} Function
 *
 * @prop {string} graphqlFunctionType The GraphQL type for the Function.
 * @prop {boolean} [isPure] States the purity of a Function.
 * @prop {Implementation} [implementation] The implementation of the Function.
 * @prop {Graph} [graph] The graph of the Function.
 */
export interface Function extends Entity {
  /** The signature of the Function. */
  signature: TypeExpressionObject;

  /** The service that the Kind comes from. */
  service: IDObject;

  /** Type Parameters are placeholders for types and are used as generics. */
  typeParameters: string[];

  /** How the function is run (like query or mutation) */
  graphqlFunctionType: GraphQLFunctionType;

  /**
   * Defines if this is a pure or impure Function, or if its purity is unknown.
   */
  isPure: boolean;

  /**
   * The implementation representing what the Function does.  This is only used
   * by Functions on Logic services.
   */
  implementation: Implementation;

  inputMask?: ArgumentFieldSelection[];

  /**
   * Returns boolean stating if the Function is editable.
   */
  canEdit(): Promise<boolean>;

  /**
   * Returns the e-mail of the user who locked the Function.
   */
  lockedBy(): Promise<Maybe<string>>;

  /**
   * Updates the locked state of the Function.
   * @param isLocked The new locked state of the Function, if not provided then
   * the locked state is toggled.
   */
  setLocked(isLocked?: boolean): Promise<void>;

  /**
   * Updates information about the Function.
   * @param changes Information to update the Function with.
   */
  update(changes: UpdateFunctionInput): Promise<void>;

  /**
   * Updates the layout information for a node in the Function.
   * @param nodeId The ID of the node to update.
   * @param changes The changes to make to the layout.
   */
  updateNodeLayout(
    nodeId: string,
    changes: UpdateNodeLayoutInput
  ): Promise<void>;

  /**
   * Updates the layout information for the graph of the Function.
   * @param changes The changes to make to the layout.
   */
  updateGraphLayout(changes: UpdateGraphLayoutInput): Promise<void>;

  /**
   * Executes a GraphQL request against the Function.
   * @param variables The variables to send with the request.
   * @param resolve A string with the fields to resolve on the Function.
   * @returns The results of running the Function.
   */
  execute(
    variables?: Maybe<Record<string, any>>,
    resolve?: string
  ): Promise<any>;
}

export interface ServiceLocation {
  /** The URL that the locator references. */
  url: string;

  /**
   * A form of the URL that uses the Maana Q platform to proxy a request to the
   * service. This is useful if the client cannot directly access the service.
   */
  platformUrl: string;
}

export interface Service extends Entity {
  /** The location that the service can be reached at. */
  location: ServiceLocation;

  /**
   * The current version of the Service.  This is incremented by catalog each
   * time the service is updated.
   */
  version: number;

  /** The type of the service. */
  type: ServiceType;

  /** Retrieves the list of Kinds that are part of the Service. */
  getKinds(): Promise<Kind[]>;

  /** Retrieves the list of Function that are part of the Service. */
  getFunctions(): Promise<Function[]>;

  /**
   * Updates information about the Service.
   * @param changes Information to update the Service with.
   */
  update(changes: UpdateExternalGraphQLServiceInput): Promise<void>;
}

export interface Assistant extends Entity {
  /** The location that the Assistant can be reached at. */
  location: ServiceLocation;

  /**
   * The current version of the Assistant.  This is incremented by catalog each
   * time the Assistant is updated.
   */
  version: number;

  /**
   * Updates information about the Assistant.
   * @param changes Information to update the Assistant with.
   */
  update(changes: UpdateAssistantInput): Promise<void>;
}

export interface Workspace extends Entity {
  /** The location information about the Workspace. */
  location: ServiceLocation;

  /** The URL to the URL of the thumbnail pic. */
  thumbnailUrl: string;

  /** The ID of the logic service backing the Workspace. */
  serviceId: string;

  /** The ID of the model service handling persistence for the Workspace */
  persistenceServiceId: string;

  /** When true others can see this Workspace. */
  isPublic: boolean;

  /** When true it shows up as a template Workspace. */
  isTemplate: boolean;

  /** The list of tags for the Workspace. */
  tags: string[];

  /** The user that owns the Workspace. */
  owner: { id: string; name: string };

  /** Returns boolean stating if the Workspace is editable. */
  canEdit(): Promise<boolean>;

  /** Returns the e-mail of the user who locked the Workspace. */
  lockedBy(): Promise<Maybe<string>>;

  /**
   * Updates the locked state of the Workspace.
   * @param isLocked The new locked state of the Workspace, if not provided then
   * the locked state is toggled.
   */
  setLocked(isLocked?: boolean): Promise<void>;

  /**
   * Updates information about the Workspace.
   * @param changes Information to update the Workspace with.
   */
  update(changes: UpdateWorkspaceInput): Promise<void>;

  /** Returns a new copy of the workspace with reloaded information. */
  reload(): Promise<Workspace>;

  /** Sends a repair event to all assistants. */
  triggerRepairEvent(): Promise<void>;

  /** Gets the currently active graph. */
  getActiveGraph(): Promise<Maybe<KnowledgeGraph | Function>>;

  /** Gets all of the Knowledge Graphs in the Workspace. */
  getKnowledgeGraphs(): Promise<KnowledgeGraph[]>;

  /**
   * Creates a new Knowledge Graph in the Workspace.
   * @param input Information about the new Knowledge Graph.
   */
  createKnowledgeGraph(input: CreateKnowledgeGraphInput): Promise<void>;

  /**
   * Creates a list of new Knowledge Graphs in the Workspace.
   * @param input Information about the new Knowledge Graphs.
   */
  createKnowledgeGraphs(input: CreateKnowledgeGraphInput[]): Promise<void>;

  /** Gets all of the Services imported into the Workspaces inventory. */
  getImportedServices(): Promise<Service[]>;

  /** Gets all of the Assistants imported into the Workspaces inventory. */
  getImportedAssistants(): Promise<Assistant[]>;

  /**
   * Imports a Service or Assistant into the Workspaces inventory.
   * @param serviceId Service or Assistant ID.
   * @returns ID of imported Service or Assistant.
   */
  importService(serviceId: string): Promise<Maybe<string>>;

  /**
   * Imports a list of Services and/or Assistants into the Workspaces inventory.
   * @param serviceIds Service and/or Assistant IDs.
   * @returns IDs of imported Services and/or Assistants.
   */
  importServices(serviceIds: string[]): Promise<string[]>;

  /**
   * Removes a Service or Assistant from the Workspaces inventory.
   * @param serviceId Service or Assistant ID.
   */
  removeService(serviceId: string): Promise<void>;

  /**
   * Removes a list Services and/or Assistants from the Workspaces inventory.
   * @param serviceIds Service and/or Assistant IDs.
   */
  removeServices(serviceIds: string): Promise<void>;

  /** Gets the list of Functions that live in the Workspace. */
  getFunctions(): Promise<Function[]>;

  /**
   * Gets a list of Functions that live in the Workspace based on their names.
   * @param names The name of the Functions to return.
   */
  getFunctionsByName(names: string[]): Promise<Function[]>;

  /**
   * Creates a new Function in the Workspace.
   * @param input Information for the function to create.
   */
  createFunction(input: CreateFunctionInput): Promise<Function>;

  /**
   * Creates a list of new Functions in the Workspace.
   * @param input Information for the functions to create.
   */
  createFunctions(input: CreateFunctionInput[]): Promise<Function[]>;

  /**
   * Updates a Function in the Workspace.
   * @param changes The changes to make to the Function.
   */
  updateFunction(changes: UpdateFunctionInput): Promise<Function>;

  /**
   * Updates a list of Function in the Workspace.
   * @param changes The changes to make to the Functions.
   */
  updateFunctions(changes: UpdateFunctionInput[]): Promise<Function[]>;

  /**
   * Deletes a function in the Workspace.
   * @param name Name of the Function.
   */
  deleteFunction(name: string): Promise<void>;

  /**
   * Gets the Function based on ID with its implementation and graph
   * information.
   * @deprecated To get the function graph and implementation for a function,
   * load it via the workspace it belongs to.
   * @param id ID of the Function.
   */
  getFunctionGraph(id: string): Promise<Function>;

  /** Gets the list of Kinds that live in the Workspace. */
  getKinds(): Promise<Kind[]>;

  /**
   * Gets a list of Kinds that live in the Workspace based on their names.
   * @param names The names of the Kinds to load.
   */
  getKindsByName(names: string[]): Promise<Kind[]>;

  /**
   * Creates a new Kind in the Workspace.
   * @param input Information for Kind to create.
   */
  createKind(input: CreateTypeInput): Promise<Kind>;

  /**
   * Creates a list of Kinds in the Workspace.
   * @param input Information for Kinds to create.
   */
  createKinds(input: CreateTypeInput[]): Promise<Kind[]>;

  /**
   * Updates a Kind in the Workspace.
   * @param changes The changes to make to the Kind.
   */
  updateKind(changes: UpdateTypeInput): Promise<Kind>;

  /**
   * Updates a list of Kinds in the Workspace.
   * @param changes The changes to make to the Kinds.
   */
  updateKinds(changes: UpdateTypeInput[]): Promise<Kind[]>;

  /**
   * Deletes a Kind in the Workspace.
   * @param name The name of the Kind to delete.
   */
  deleteKind(name: string): Promise<void>;
}

export interface UpdateNodeLayoutInput {
  x?: number;
  y?: number;
  collapsed?: boolean;
}

export interface UpdateGraphLayoutInput {
  zoom?: number;
  offsetX?: number;
  offsetY?: number;
  nodes?: (UpdateNodeLayoutInput & { id: string })[];
}

export interface UpdateExternalGraphQLServiceInput {
  id: string;
  name?: Maybe<string>;
  endpointUrl?: Maybe<string>;
  isSystem?: Maybe<boolean>;
  isReadOnly?: Maybe<boolean>;
  tags?: Maybe<Array<string>>;
  version: number;
}

export interface UpdateAssistantInput {
  id: string;
  name?: Maybe<string>;
  endpointUrl?: Maybe<string>;
  isSystem?: Maybe<boolean>;
  isReadOnly?: Maybe<boolean>;
  tags?: Maybe<Array<string>>;
  version: number;
}

export interface CreateServiceInput {
  id?: Maybe<string>;
  serviceType: ServiceType;
  name: string;
  description?: Maybe<string>;
  endpointUrl: string;
  thumbnailUrl?: Maybe<string>;
  isSystem?: boolean;
  isReadOnly?: boolean;
  tags?: Array<string>;
}

export interface EntityLockInput {
  lockedBy: string;
}

export interface PositionInput {
  x?: Maybe<number>;
  y?: Maybe<number>;
}

export interface CreateNodeInput {
  id?: Maybe<string>;
  location?: Maybe<PositionInput>;
  isCollapsed?: Maybe<boolean>;
  description?: Maybe<string>;
  type: NodeType;
  entity?: Maybe<EntityIdentifier>;
  operation?: Maybe<EntityIdentifier>;
}

export interface OperationArgumentRefInput {
  operation: string;
  argument: string;
}

export interface OutputArgumentRefInput {
  operation: string;
  fieldPath: Array<string>;
  argument: string;
}

export interface GraphRefInput {
  graphRefInputType: GraphRefInputType;
  argument?: Maybe<string>;
  operationArgument?: Maybe<OperationArgumentRefInput>;
  operationResult?: Maybe<string>;
  outputArgument?: Maybe<OutputArgumentRefInput>;
}

export interface CreateConnectionInput {
  from: GraphRefInput;
  to: GraphRefInput;
}

export interface CreateGraphInput {
  offset?: Maybe<PositionInput>;
  zoom?: Maybe<number>;
  nodes?: Maybe<Array<CreateNodeInput>>;
  connections?: Maybe<Array<CreateConnectionInput>>;
}

export interface CreateKnowledgeGraphInput {
  id?: Maybe<string>;
  name: string;
  description?: Maybe<string>;
  graph?: Maybe<CreateGraphInput>;
}

export interface CreateTypeInput {
  id?: Maybe<string>;
  name: string;
  description?: Maybe<string>;
  signature: TypeExpressionObject;
  isManaged?: boolean;
}

export interface ArgumentFieldSelectionInput {
  argument: string;
  fieldSelection?: Maybe<Array<Array<string>>>;
}

export interface CreateFunctionInput {
  id?: Maybe<string>;
  name: string;
  description?: Maybe<string>;
  signature: TypeExpressionObject;
  isPure?: Maybe<boolean>;
  graphqlFunctionType: GraphQLFunctionType;
  implementation: ImplementationType;
  graphImplementation?: Maybe<CreateGraphInput>;
  inputMask?: Maybe<Array<ArgumentFieldSelectionInput>>;
}

export interface CreateFileInput {
  id?: Maybe<string>;
  name?: Maybe<string>;
  description?: Maybe<string>;
  serviceId: string;
  url: string;
  thumbnailUrl?: Maybe<string>;
  mimeType?: Maybe<string>;
  size?: Maybe<number>;
  progress?: Maybe<number>;
  status?: Maybe<number>;
  loadExternalMetadata?: Maybe<boolean>;
}

export interface CreateEntityInput {
  entityType: EntityType;
  knowledgeGraph?: Maybe<CreateKnowledgeGraphInput>;
  type?: Maybe<CreateTypeInput>;
  function?: Maybe<CreateFunctionInput>;
  file?: Maybe<CreateFileInput>;
}

export interface CloneEntityInput {
  entityType: EntityType;
  oldName: string;
  oldServiceId: string;
  newName: string;
}

export interface UpdateNodeInput {
  id: string;
  location?: Maybe<PositionInput>;
  isCollapsed?: Maybe<boolean>;
  description?: Maybe<string>;
  type: NodeType;
}

export interface UpdateGraphInput {
  offset?: Maybe<PositionInput>;
  zoom?: Maybe<number>;
  createNodes?: Maybe<Array<CreateNodeInput>>;
  updateNodes?: Maybe<Array<UpdateNodeInput>>;
  deleteNodes?: Maybe<Array<string>>;
  createConnections?: Maybe<Array<CreateConnectionInput>>;
  deleteConnections?: Maybe<Array<string>>;
}

export interface UpdateKnowledgeGraphInput {
  id: string;
  name?: Maybe<string>;
  description?: Maybe<string>;
  lock?: Maybe<EntityLockInput>;
  graph?: Maybe<UpdateGraphInput>;
}

export interface UpdateTypeInput {
  id: string;
  name?: Maybe<string>;
  description?: Maybe<string>;
  signature?: Maybe<TypeExpressionObject>;
  isManaged?: Maybe<boolean>;
}

export interface UpdateFunctionInput {
  id: string;
  name?: Maybe<string>;
  description?: Maybe<string>;
  signature?: Maybe<TypeExpressionObject>;
  isPure?: Maybe<boolean>;
  graphqlFunctionType?: Maybe<GraphQLFunctionType>;
  lock?: Maybe<EntityLockInput>;
  implementation?: Maybe<ImplementationType>;
  graphImplementation?: Maybe<UpdateGraphInput>;
  inputMask?: Maybe<Array<ArgumentFieldSelectionInput>>;
}

export interface UpdateFileInput {
  id: string;
  name?: Maybe<string>;
  description?: Maybe<string>;
  serviceId?: Maybe<string>;
  url?: Maybe<string>;
  thumbnailUrl?: Maybe<string>;
  mimeType?: Maybe<string>;
  size?: Maybe<number>;
  progress?: Maybe<number>;
  status?: Maybe<number>;
}

export interface UpdateEntityInput {
  entityType: EntityType;
  knowledgeGraph?: Maybe<UpdateKnowledgeGraphInput>;
  type?: Maybe<UpdateTypeInput>;
  function?: Maybe<UpdateFunctionInput>;
  file?: Maybe<UpdateFileInput>;
}

export interface CreateWorkspaceInput {
  id?: Maybe<string>;
  serviceId?: Maybe<string>;
  name: string;
  description?: Maybe<string>;
  thumbnailUrl?: Maybe<string>;
  tags?: Maybe<Array<string>>;
  owner: string;
  isPublic?: Maybe<boolean>;
  isTemplate?: Maybe<boolean>;
  createEntities?: Maybe<Array<CreateEntityInput>>;
  addServices?: Maybe<Array<string>>;

  /**
   * Moves the given entities from their current Workspace to this one.
   * Currently only Types and Functions support being moved between Workspaces.
   */
  moveEntities?: Maybe<Array<EntityIdentifier>>;
}

export interface UpdateWorkspaceInput {
  id: string;
  name?: Maybe<string>;
  description?: Maybe<string>;
  thumbnailUrl?: Maybe<string>;
  tags?: Maybe<Array<string>>;
  isPublic?: Maybe<boolean>;
  isTemplate?: Maybe<boolean>;
  lock?: Maybe<EntityLockInput>;
  createEntities?: Maybe<Array<CreateEntityInput>>;
  cloneEntities?: Maybe<Array<CloneEntityInput>>;
  updateEntities?: Maybe<Array<UpdateEntityInput>>;

  /**
   * Moves the given entities from their current Workspace to this one.
   * Currently only Types and Functions support being moved between Workspaces.
   */
  moveEntities?: Maybe<Array<EntityIdentifier>>;

  deleteEntities?: Maybe<Array<EntityIdentifier>>;
  addServices?: Maybe<Array<string>>;
  removeServices?: Maybe<Array<string>>;
}
