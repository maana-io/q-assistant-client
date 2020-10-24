export type Maybe<T> = T | null | undefined;

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

export interface Graph {
  /** The offset of the Graph. */
  offset: Position;

  /** The zoom of the Graph. */
  zoom: number;

  /** The nodes in the Graph. */
  nodes: any[]; // TODO: document what is in the nodes.

  /** The connections in the Graph. */
  connections: any[]; // TODO: document what is in the connections.
}

export interface Kind extends Entity {
  /** The signature of the Kind. */
  signature: any;

  /** The service that the Kind comes from. */
  service: IDObject;

  /**
   * Updates information about the Kind.
   * @param changes Information to update the Kind with.
   */
  update(changes: any): Promise<void>; // TODO: Document the update kind input.
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
  update(changes: any): Promise<void>; // TODO: Document the update Knowledge Graph input.

  /**
   * Returns the list of nodes inside of the Knowledge Graph.
   * @deprecated use graph.nodes instead.
   */
  getNodes(): Promise<any[]>;

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
  updateNodeLayout(nodeId: string, changes: any): Promise<void>;

  /**
   * Updates the layout information for the graph of the Knowledge Graph.
   * @param changes The changes to make to the layout.
   */
  updateGraphLayout(changes: any): Promise<void>;
}

/**
 * Function implementation union.
 */
export type Implementation = Graph;

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
  signature: any; // TODO: Get Type Expressions in here.

  /** The service that the Kind comes from. */
  service: IDObject;

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
  update(changes: any): Promise<void>; // TODO: Document the update function input.

  /**
   * Updates the layout information for a node in the Function.
   * @param nodeId The ID of the node to update.
   * @param changes The changes to make to the layout.
   */
  updateNodeLayout(nodeId: string, changes: any): Promise<void>;

  /**
   * Updates the layout information for the graph of the Function.
   * @param changes The changes to make to the layout.
   */
  updateGraphLayout(changes: any): Promise<void>;

  /**
   * Executes a GraphQL request against the Function.
   * @param variables The variables to send with the request.
   * @param resolve A string with the fields to resolve on the Function.
   * @returns The results of running the Function.
   */
  execute(variables: any, resolve: string): Promise<any>;
}

export interface ServiceLocation {
  /** The URL that the locator references. */
  url: string;
}

export interface Service extends Entity {
  /** The location that the service can be reached at. */
  location: ServiceLocation;

  /**
   * The current version of the Service.  This is incremented by catalog each
   * time the service is updated.
   */
  version: number;

  /** Retrieves the list of Kinds that are part of the Service. */
  getKinds(): Promise<Kind[]>;

  /** Retrieves the list of Function that are part of the Service. */
  getFunctions(): Promise<Function[]>;

  /**
   * Updates information about the Service.
   * @param changes Information to update the Service with.
   */
  update(changes: any): Promise<void>; // TODO: Document the update Service input.
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
  update(changes: any): Promise<void>; // TODO: Document the update Assistant input.
}

export interface Workspace extends Entity {
  /** The location information about the Workspace. */
  location: ServiceLocation;

  /** The URL to the URL of the thumbnail pic. */
  thumbnailUrl: string;

  /** The ID of the logic service backing the Workspace. */
  serviceId: string;

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
  update(changes: any): Promise<void>; // TODO: Document the update Workspace input.

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
  createKnowledgeGraph(input: any): Promise<void>;

  /**
   * Creates a list of new Knowledge Graphs in the Workspace.
   * @param input Information about the new Knowledge Graphs.
   */
  createKnowledgeGraphs(input: any[]): Promise<void>;

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
  createFunction(input: any): Promise<Function>;

  /**
   * Creates a list of new Functions in the Workspace.
   * @param input Information for the functions to create.
   */
  createFunctions(input: any[]): Promise<Function[]>;

  /**
   * Updates a Function in the Workspace.
   * @param changes The changes to make to the Function.
   */
  updateFunction(changes: any): Promise<Function>;

  /**
   * Updates a list of Function in the Workspace.
   * @param changes The changes to make to the Functions.
   */
  updateFunctions(changes: any[]): Promise<Function[]>;

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
  createKind(input: any): Promise<Kind>;

  /**
   * Creates a list of Kinds in the Workspace.
   * @param input Information for Kinds to create.
   */
  createKinds(input: any[]): Promise<Kind[]>;

  /**
   * Updates a Kind in the Workspace.
   * @param changes The changes to make to the Kind.
   */
  updateKind(changes: any): Promise<Kind>;

  /**
   * Updates a list of Kinds in the Workspace.
   * @param changes The changes to make to the Kinds.
   */
  updateKinds(changes: any[]): Promise<Kind[]>;

  /**
   * Deletes a Kind in the Workspace.
   * @param name The name of the Kind to delete.
   */
  deleteKind(name: string): Promise<void>;
}
