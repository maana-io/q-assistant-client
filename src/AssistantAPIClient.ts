import {
  CreateFunctionInput,
  CreateServiceInput,
  CreateTypeInput,
  CreateWorkspaceInput,
  Entity,
  EntityIdentifier,
  Function,
  Kind,
  Maybe,
  Selected,
  Service,
  UpdateFunctionInput,
  UpdateTypeInput,
  User,
  Workspace
} from './models';

import { AssistantState } from './constants';
import { EventEmitter } from 'events';
import postRobot from 'post-robot';

/** @private */
const eventEmitter = new EventEmitter();

/**
 * The collection of event types used in the API
 * @private
 */
enum EventTypes {
  FUNCTION_EXECUTED = 'functionExecuted',
  INVENTORY_CHANGED = 'inventoryChanged',
  LOCKING_CHANGED = 'lockingChanged',
  RENDER_MODE_CHANGED = 'renderModeChanged',
  REPAIR = 'repair',
  SELECTION_CHANGED = 'selectionChanged'
}

type EventListenerCallback = (e: any) => void;

/**
 * Wrapper for post-robot async client -> API call.
 * @private
 *
 * @param callName Name of the API endpoint to call.
 * @param arg The argument(s) to pass on to the API call.
 *
 * @returns The response from the call
 */
async function APICall(callName: string, arg?: any): Promise<any> {
  const { data } = await postRobot.send(window.parent, callName, arg);
  return data;
}

/**
 * Wrapper for post-robot listener.
 * @private
 *
 * @param callName The name of the API endpoint to listen on.
 * @param cb The function to call when the endpoint is called.
 */
function createAPIListener(callName: string, cb: EventListenerCallback) {
  postRobot.on(callName, cb);
}

//
// API Event Listeners
//

/**
 * Attach selection event emitter to API listener
 * @private
 */
createAPIListener(EventTypes.SELECTION_CHANGED, async function (event) {
  eventEmitter.emit(EventTypes.SELECTION_CHANGED, event.data);
});

/**
 * Attach function execution event emitter to API listener.
 * Use convention to filter by function ID.
 * @private
 */
createAPIListener(EventTypes.FUNCTION_EXECUTED, async function (event) {
  eventEmitter.emit(`function:${event.data.id}`, event.data.result);
});

/**
 * Attach inventory event emitter to API listener.
 * @private
 */
createAPIListener(EventTypes.INVENTORY_CHANGED, async function (event) {
  eventEmitter.emit(EventTypes.INVENTORY_CHANGED, event.data);
});

/**
 * Attach render mode event emitter to API listener.
 * @private
 */
createAPIListener(EventTypes.RENDER_MODE_CHANGED, async function (event) {
  eventEmitter.emit(EventTypes.RENDER_MODE_CHANGED, event.data);
});

/**
 * Attach repair listener.
 * @private
 */
createAPIListener(EventTypes.REPAIR, async function (event) {
  eventEmitter.emit(EventTypes.REPAIR, event.data);
});

/**
 * Attach locking changed listener.
 * @private
 */
createAPIListener(EventTypes.LOCKING_CHANGED, async function (event) {
  eventEmitter.emit(EventTypes.LOCKING_CHANGED, event.data);
});

export namespace AssistantAPIClient {
  //
  // Assistant State
  //

  /**
   * Updates the current state of the Assistant.
   *
   * @param state The new state of the assistant.
   */
  export function setAssistantState(state: AssistantState): Promise<void> {
    return APICall('setAssistantState', state);
  }

  //
  // State management
  //

  /**
   * Removes all event listeners for all events.
   */
  export function clearState() {
    eventEmitter.removeAllListeners();
  }

  //
  // User Info
  //

  /**
   * Gets the information about the current user.
   *
   * @returns The current User.
   */
  export function getUserInfo(): Promise<User> {
    return APICall('getUserInfo');
  }

  //
  // Selection
  //

  /**
   * Adds a listener to the selection changed event.
   *
   * @param cb Callback function.
   */
  export function addSelectionChangedListener(cb: EventListenerCallback) {
    eventEmitter.addListener(EventTypes.SELECTION_CHANGED, cb);
  }

  /**
   * Removed a listener from the selection changed event, or all of them if no
   * callback is defined.
   *
   * @param Callback function.
   */
  export function removeSelectionChangedListener(cb?: EventListenerCallback) {
    // If the callback is not provided, then remove all of the listeners.
    if (cb) {
      eventEmitter.removeListener(EventTypes.SELECTION_CHANGED, cb);
    } else {
      eventEmitter.removeAllListeners(EventTypes.SELECTION_CHANGED);
    }
  }

  /**
   * Gets the current selection from the UI.
   *
   * @returns The list of selected entities.
   */
  export function getCurrentSelection(): Promise<Selected> {
    return APICall('getCurrentSelection');
  }

  //
  // Services
  //

  /**
   * Gets a specified service by ID
   *
   * @param id Service Id
   *
   * @returns The requested service.
   */
  export function getServiceById(id: string): Promise<Maybe<Service>> {
    return APICall('getServiceById', id);
  }

  /**
   * Creates a new Service in the platform.
   *
   * @param input The inputs used to create the Service.
   *
   * @returns ID of the created service.
   */
  export function createService(input: CreateServiceInput): Promise<string> {
    return APICall('createService', input);
  }

  /**
   * Refreshed the service information in the backend.  This is useful for
   * making sure that the platform is working on the latest schema of an
   * external service.
   *
   * @param input The ID of the service to refresh.
   *
   * @returns The refreshed service.
   */
  export function refreshServiceSchema(input: string): Promise<Maybe<Service>> {
    return APICall('refreshServiceSchema', input);
  }

  /**
   * Has the UI reload the information about the service from the backend to
   * make sure that it has fresh information.
   *
   * @param id The ID of the Service to reload.
   *
   * @returns The service with fresh information.
   */
  export function reloadServiceSchema(id: string): Promise<Maybe<Service>> {
    return APICall('reloadServiceSchema', id);
  }

  /**
   * Deletes the given Service from the platform.
   *
   * @param id The ID of the Service to delete.
   */
  export function deleteService(id: string): Promise<void> {
    return APICall('deleteService', id);
  }

  /**
   * Runs an arbitrary GraphQL query against a service in the platform.
   *
   * @param input The data for the execution.
   * @param input.serviceId The ID of the service to make the call on.
   * @param input.query The query/mutation to make against the service.
   * @param input.variables The variables to go with the query.
   *
   * @returns The response from the request.
   */
  export function executeGraphql(input: {
    serviceId: string;
    query: string;
    variables?: Record<string, any>;
  }): Promise<any> {
    return APICall('executeGraphql', input);
  }

  //
  // Workspace
  //

  /**
   * Returns the requested Workspace, if no Workspace ID is specified it returns
   * the Workspace that the user is currently using.
   *
   * @param id The ID of the Workspace to load.
   *
   * @return The requested Workspace.
   */
  export function getWorkspace(id?: string): Promise<Maybe<Workspace>> {
    return APICall('getWorkspace', id);
  }

  /**
   * Returns a list of user accessible Workspaces.  By default it will just be
   * the user owned Workspaces, but can be configured to also return all the
   * public workspaces.
   *
   * @param includePublic When true the returned list includes public Workspaces.
   *
   * @return The list of Workspaces.
   */
  export function getUserAccessibleWorkspaces(
    includePublic = false
  ): Promise<Workspace[]> {
    return APICall('getUserAccessibleWorkspaces', includePublic);
  }

  /**
   * Creates a new Workspace.  The id, name, and serviceId can optionally be
   * set, or they can be left undefined to use the defaults.
   *
   * @param workspace The Workspace information, can contain {id, name, serviceId}
   *
   * @return The new Workspace.
   */
  export function createWorkspace(
    workspace: CreateWorkspaceInput
  ): Promise<Workspace> {
    return APICall('createWorkspace', workspace);
  }

  //
  // Functions
  //

  /**
   * Runs a query against a given function with the supplied variables and
   * resolve string.
   *
   * @param input The information to execute.
   * @param input.entityIdentifier The reference to the function.
   * @param input.variables The variables to go along with the query.
   * @param input.resolve The fields to resolve in the query.
   *
   * @returns The result of executing the function.
   */
  export function executeFunction(input: {
    entityIdentifier: EntityIdentifier;
    variables?: Record<string, any>;
    resolve: string;
  }): Promise<any> {
    return APICall('executeFunction', input);
  }

  /**
   * Creates a new function with the supplied information.  At minimum a name
   * needs to be supplied.
   *
   * @deprecated This has been deprecated in favor of calling it directly off of
   * the workspace that the function will live in.
   *
   * @param input Information to create the function with.
   *
   * @returns The new function.
   */
  export function createFunction(
    input: CreateFunctionInput
  ): Promise<Function> {
    return APICall('createFunction', input);
  }

  /**
   * Updates a Function in the active workspace with the given information.
   *
   * @deprecated This has been deprecated in favor of calling it direction off of
   * the workspace the function lives in.
   *
   * @param input Updates for the function.
   *
   * @returns The updated Function.
   */
  export function updateFunction(
    input: UpdateFunctionInput
  ): Promise<Function> {
    return APICall('updateFunction', input);
  }

  /**
   * Deletes a function in the active workspace by the given name.
   *
   * @deprecated This has been deprecated in favor of calling it direction off of
   * the workspace the function lives in.
   *
   * @param input The name of the function
   */
  export function deleteFunction(input: string): Promise<void> {
    return APICall('deleteFunction', input);
  }

  /**
   * Loads a function by ID.  This can only return information about functions
   * that the UI already has loaded into memory.
   *
   * @deprecated This function is no longer supported and has limited
   * functionality. Use getFunctionOfServiceByName instead.
   *
   * @param id the function's ID.
   *
   * @returns The requested function.
   */
  export function getFunctionById(id: string): Promise<Maybe<Function>> {
    return APICall('getFunctionById', id);
  }

  /**
   * Loads a list of functions by ID.  This can only return information about
   * functions that the UI already has loaded into memory.
   *
   * @deprecated This function is no longer supported and has limited
   * functionality. Use getFunctionsOfServiceByName instead.
   *
   * @param ids List of function IDs.
   *
   * @returns The list of requested functions.
   */
  export function getFunctionsById(ids: string[]): Promise<Function[]> {
    return APICall('getFunctionsById', ids);
  }

  /**
   * Returns a function with the given name from a specific service.
   *
   * @param serviceId ID of the service the function lives in.
   * @param name The name of the function to find.
   *
   * @returns The requested function.
   */
  export function getFunctionOfServiceByName(
    serviceId: string,
    name: string
  ): Promise<Maybe<Function>> {
    return APICall('getFunctionOfServiceByName', { serviceId, name });
  }

  /**
   * Returns a list of functions with the given names from a specific service.
   *
   * @param serviceId ID of the service the function lives in.
   * @param names The names of the functions to find.
   *
   * @returns The list of requested functions.
   */
  export function getFunctionsOfServiceByName(
    serviceId: string,
    names: string[]
  ): Promise<Function[]> {
    return APICall('getFunctionsOfServiceByName', { serviceId, names });
  }

  /**
   * Adds a callback function to be called with the function has been executed.
   *
   * @param id ID of the function.
   * @param cb The callback function.
   */
  export function addFunctionExecutionListener(
    id: string,
    cb: EventListenerCallback
  ): void {
    eventEmitter.addListener(`function:${id}`, cb);
  }

  /**
   * Removes one or all callbacks listening for the function to be executed.
   *
   * @param id ID of the function.
   * @param cb The callback function, if not supplied all of them
   * are removed.
   */
  export function removeFunctionExecutionListener(
    id: string,
    cb: EventListenerCallback
  ): void {
    // If the callback is not provided, then remove all of the listeners.
    if (cb) {
      eventEmitter.removeListener(`function:${id}`, cb);
    } else {
      eventEmitter.removeAllListeners(`function:${id}`);
    }
  }

  //
  // Kinds
  //

  /**
   * Creates a new Kind with the supplied information.  At minimum a name needs
   * to be supplied.
   *
   * @deprecated This has been deprecated in favor of calling it direction off of
   * the workspace the kind will live in.
   *
   * @param input Information to create the Kind with.
   *
   * @returns The new Kind
   */
  export function createKind(input: CreateTypeInput): Promise<Kind> {
    return APICall('createKind', input);
  }

  /**
   * Updates a Kind in the active workspace with the given information.
   *
   * @deprecated This has been deprecated in favor of calling it direction off of
   * the workspace the kind lives in.
   *
   * @param input Updates for the Kind.
   *
   * @returns The updated Kind.
   */
  export function updateKind(input: UpdateTypeInput): Promise<Kind> {
    return APICall('updateKind', input);
  }

  /**
   * Deletes a Kind in the active workspace by the given name.
   *
   * @deprecated This has been deprecated in favor of calling it direction off of
   * the workspace the kind lives in.
   *
   * @param input The name of the Kind.
   */
  export function deleteKind(input: string): Promise<void> {
    return APICall('deleteKind', input);
  }

  /**
   * Loads a Kind by ID.  This can only return information about Kinds that the
   * UI already has loaded into memory.
   *
   * @deprecated This function is no longer supported and has limited
   * functionality.  Use getKindOfServiceByName instead.
   *
   * @param id The Kind's ID.
   *
   * @returns The requested Kind.
   */
  export function getKindById(id: string): Promise<Maybe<Kind>> {
    return APICall('getKindById', id);
  }

  /**
   * Loads a list of Kinds by ID.  This can only return information about Kinds
   * that the UI already has loaded into memory.
   *
   * @deprecated This function is no longer supported and has limited
   * functionality.  Use getKindsOfServiceByName instead.
   *
   * @param ids List of Kind IDs.
   *
   * @returns The list of requested Kind.
   */
  export function getKindsById(ids: string[]): Promise<Kind[]> {
    return APICall('getKindsById', ids);
  }

  /**
   * Returns a Kind with the given name from a specific service.
   *
   * @param serviceId ID of the service the function lives in.
   * @param name The name of the Kind to find.
   *
   * @returns The requested Kind.
   */
  export function getKindOfServiceByName(
    serviceId: string,
    name: string
  ): Promise<Maybe<Kind>> {
    return APICall('getKindOfServiceByName', { serviceId, name });
  }

  /**
   * Returns a list of Kinds with the given names from a specific service.
   *
   * @param serviceId ID of the service the function lives in.
   * @param names The names of the Kinds to find.
   *
   * @returns The list of requested Kinds.
   */
  export function getKindsOfServiceByName(
    serviceId: string,
    names: string[]
  ): Promise<Kind[]> {
    return APICall('getKindsOfServiceByName', { serviceId, names });
  }

  /**
   * Loads up tree of Kinds references by the signature of the Entities passed in.
   *
   * @param data The data passed in for finding the referenced kinds.
   * @param data.entities The starting entities to check.
   * @param data.entitiesToSkip The entities to not include.
   * @param data.maxDepth Maximum traversal depth in the tree. Default is 10.
   *
   * @returns The list of references Kinds.
   */
  export function getAllReferencedKinds(data: {
    entities: EntityIdentifier[];
    entitiesToSkip: EntityIdentifier;
    maxDepth?: number;
  }): Promise<Kind[]> {
    return APICall('getAllReferencedKinds', data);
  }

  //
  // Inventory
  //

  /**
   * Adds a listener for the inventory changed event.
   *
   * @param cb Callback function.
   */
  export function addInventoryChangedListener(cb: EventListenerCallback): void {
    eventEmitter.addListener(EventTypes.INVENTORY_CHANGED, cb);
  }

  /**
   * Removed a listener from the inventory changed event, or all of them if one
   * is not specified.
   *
   * @param cb Callback function.
   */
  export function removeInventoryChangedListener(
    cb?: EventListenerCallback
  ): void {
    // If the callback is not provided, then remove all of the listeners.
    if (cb) {
      eventEmitter.removeListener(EventTypes.INVENTORY_CHANGED, cb);
    } else {
      eventEmitter.removeAllListeners(EventTypes.INVENTORY_CHANGED);
    }
  }

  /**
   * Moves a collection of Kinds and Functions from the origin Workspace to the
   * target Workspace.
   *
   * @deprecated This has been deprecated in favor of calling it directly off of
   * the origin workspace.
   *
   * @param originId The ID of the origin Workspace.
   * @param targetId The ID of the target Workspace.
   * @param kindIds An array of the IDs of the kinds to move.
   * @param functionIds An array of the IDs of the functions to move.
   */
  export function moveKindsAndFunctions(
    originId: string,
    targetId: string,
    kindIds: string[],
    functionIds: string[]
  ): Promise<void> {
    return APICall('moveKindsAndFunctions', {
      originId,
      targetId,
      kindIds,
      functionIds
    });
  }

  //
  // Graphs
  //

  /**
   * Loads the function with its graph information attached.
   *
   * @deprecated Getting a function graph like this has been deprecated.  To get
   * the graph and implementation information of a function, it needs to be
   * loaded through the workspace that it belongs to.
   *
   * @param id ID of the function to load the graph for.
   *
   * @returns The function with the information about its graph.
   */
  export function getFunctionGraph(id: string): Promise<Maybe<Function>> {
    return APICall('getFunctionGraph', id);
  }

  //
  // Render Mode
  //

  /**
   * Adds a listener to the render mode changed event.
   *
   * @param cb Callback function.
   */
  export function addRenderModeChangedListener(
    cb: EventListenerCallback
  ): void {
    eventEmitter.addListener(EventTypes.RENDER_MODE_CHANGED, cb);
  }

  /**
   * Removed a listener from the render mode changed event, or all of them if
   * one is not specified.
   *
   * @param cb Callback function.
   */
  export function removeRenderModeChangedListener(
    cb: EventListenerCallback
  ): void {
    // If the callback is not provided, then remove all of the listeners.
    if (cb) {
      eventEmitter.removeListener(EventTypes.RENDER_MODE_CHANGED, cb);
    } else {
      eventEmitter.removeAllListeners(EventTypes.RENDER_MODE_CHANGED);
    }
  }

  /**
   * Gets the current render mode for the assistant.
   *
   * @returns The current render mode.
   */
  export function getRenderMode(): Promise<string> {
    return APICall('getRenderMode');
  }

  //
  // Repair
  //

  /**
   * Adds a listener to the repair changed event.
   * @function AssistantAPIClient.addRepairListener
   *
   * @param cb Callback function.
   */
  export function addRepairListener(cb: EventListenerCallback): void {
    eventEmitter.addListener(EventTypes.REPAIR, cb);
  }

  /**
   * Removed a listener from the repair changed event, or all of them if one is
   * not specified.
   * @function AssistantAPIClient.removeRepairListener
   *
   * @param cb Callback function.
   */
  export function removeRepairListener(cb?: EventListenerCallback): void {
    // If the callback is not provided, then remove all of the listeners.
    if (cb) {
      eventEmitter.removeListener(EventTypes.REPAIR, cb);
    } else {
      eventEmitter.removeAllListeners(EventTypes.REPAIR);
    }
  }

  //
  // Errors
  //

  /**
   * Reports an error to the UI for the user to be able view it.
   *
   * @param error The error object or an error message.
   */
  export function reportError(error: Error | string): Promise<void> {
    return APICall('reportError', error);
  }

  //
  // Locking
  //

  /**
   * Adds a callback function to be called every time the locking changed event
   * is triggered.
   *
   * @param cb The callback function to call
   */
  export function addLockingChangedListener(cb: EventListenerCallback): void {
    eventEmitter.addListener(EventTypes.LOCKING_CHANGED, cb);
  }

  /**
   * Removes a callback function from the list be called every time the locking
   * changed event is triggered.  If no callback is passed in, then all
   * listeners are removed for the locking changed event.
   *
   * @param cb The callback function to remove
   */
  export function removeLockingChangedListener(
    cb?: EventListenerCallback
  ): void {
    // If the callback is not provided, then remove all of the listeners.
    if (cb) {
      eventEmitter.removeListener(EventTypes.LOCKING_CHANGED, cb);
    } else {
      eventEmitter.removeAllListeners(EventTypes.LOCKING_CHANGED);
    }
  }

  //
  // Undocumented
  //

  /** @private */
  export function getEventEmitter(): EventEmitter {
    return eventEmitter;
  }
}
