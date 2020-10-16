import { EventEmitter } from 'events';
import postRobot from 'post-robot';
const eventEmitter = new EventEmitter();

/**
 * The collection of event types used in the API
 * @enum
 * @private
 */
const EventTypes = Object.freeze({
  FUNCTION_EXECUTED: 'functionExecuted',
  INVENTORY_CHANGED: 'inventoryChanged',
  LOCKING_CHANGED: 'lockingChanged',
  RENDER_MODE_CHANGED: 'renderModeChanged',
  REPAIR: 'repair',
  SELECTION_CHANGED: 'selectionChanged'
});

/**
 * @private
 * Wrapper for post-robot async client -> API call.
 *
 * @param {string} callName Name of the API endpoint to call.
 * @param {any} arg The argument(s) to pass on to the API call.
 *
 * @returns {Promise<any>} The response from the call
 */
async function APICall(callName, arg) {
  const { data } = await postRobot.send(window.parent, callName, arg);
  return data;
}

/**
 * @private
 * Wrapper for post-robot listener.
 *
 * @param {string} callName The name of the API endpoint to listen on.
 * @param {function} cb The function to call when the endpoint is called.
 */
function createAPIListener(callName, cb) {
  postRobot.on(callName, cb);
}

//
// API Event Listeners
//

/**
 * @private
 * Attach selection event emitter to API listener
 */
createAPIListener(EventTypes.SELECTION_CHANGED, async function (event) {
  eventEmitter.emit(EventTypes.SELECTION_CHANGED, event.data);
});

/**
 * @private
 * Attach function execution event emitter to API listener.
 * Use convention to filter by function ID.
 */
createAPIListener(EventTypes.FUNCTION_EXECUTED, async function (event) {
  eventEmitter.emit(`function:${event.data.id}`, event.data.result);
});

/**
 * @private
 * Attach inventory event emitter to API listener.
 */
createAPIListener(EventTypes.INVENTORY_CHANGED, async function (event) {
  eventEmitter.emit(EventTypes.INVENTORY_CHANGED, event.data);
});

/**
 * @private
 * Attach render mode event emitter to API listener.
 */
createAPIListener(EventTypes.RENDER_MODE_CHANGED, async function (event) {
  eventEmitter.emit(EventTypes.RENDER_MODE_CHANGED, event.data);
});

/**
 * @private
 * Attach repair listener.
 */
createAPIListener(EventTypes.REPAIR, async function (event) {
  eventEmitter.emit(EventTypes.REPAIR, event.data);
});

/**
 * @private
 * Attach locking changed listener.
 */
createAPIListener(EventTypes.LOCKING_CHANGED, async function (event) {
  eventEmitter.emit(EventTypes.LOCKING_CHANGED, event.data);
});

/**
 * @typedef {Object} User
 *
 * @prop {string} email The users email address.
 * @prop {string} name The users name.
 */

/**
 * @typedef {Object} EntityIdentifier
 *
 * @prop {string} entityType The type of entity being referenced.
 * @prop {string} id The ID of the entity. Used for all but Types and Functions.
 * @prop {string} name The name of the entity. Used by Types and Functions.
 * @prop {string} serviceId The ID of the service that the entity lives in.  Used by Types and Functions.
 */

/**
 * @typedef {Object} Selected
 *
 * @prop {Array<EntityIdentifier>} selection The list of selected entities.
 */

/**
 * The Kind information from the Assistant API
 * @typedef {Object} Kind
 *
 * @prop {string} id The ID of the Kind.
 * @prop {string} name The name of the Kind.
 * @prop {string} [nameDescriptor] Name of where the kind comes from (Service/Workspace).
 * @prop {string} [description] Human readable description of the Kind.
 * @prop {Object} signature The signature of the Kind.
 * @prop {Object} service The service that the Kind comes from.
 * @prop {string} service.id The ID of the service.
 * @prop {UpdateKind} update Updates the kind based on the information passed in.
 */

/**
 * Updates information about the Kind.
 * @function Kind#update
 * @param {Object} state Information to update the Kind with.
 * @returns {Promise}
 */

/**
 * @typedef {Object} Graph
 *
 * @param {string} id The ID of the Graph
 * @param {Position} offset The offset of the Graph.
 * @param {number} zoom The zoom of the Graph.
 * @param {Array<Object>} nodes The nodes in the Graph.
 * @param {Array<Object>} connections The connections in the Graph.
 */

/**
 * @typedef KnowledgeGraph
 *
 * @prop {string} id The ID of the Knowledge Graph.
 * @prop {string} name The name of the Knowledge Graph.
 * @prop {number} offsetX The X offset of the Knowledge Graph.
 * @prop {number} offsetY The Y offset of the Knowledge Graph.
 * @prop {number} zoom The zoom of the Knowledge Graph.
 * @prop {Graph} graph The graph information for the Knowledge Graph.
 */

/**
 * Returns boolean stating if the Knowledge Graph is editable.
 * @function KnowledgeGraph#canEdit
 * @returns {Promise<boolean>}
 */

/**
 * Returns the e-mail of the user who locked the Knowledge Graph.
 * @function KnowledgeGraph#lockedBy
 * @returns {Promise<string|null>}
 */

/**
 * Updates the locked state of the Knowledge Graph.
 * @function KnowledgeGraph#setLocked
 * @param {boolean} [isLocked] The new locked state of the Knowledge Graph, if
 * not provided then the locked state is toggled.
 * @returns {Promise}
 */

/**
 * Updates information about the Knowledge Graph.
 * @function KnowledgeGraph#update
 * @param {Object} state Information to update the Knowledge Graph with.
 * @returns {Promise}
 */

/**
 * Returns the list of nodes inside of the Knowledge Graph.
 * @function KnowledgeGraph#getNodes
 * @returns {Promise<KnowledgeGraph>}
 */

/**
 * Adds an entity as a node on the Knowledge Graph.
 * @function KnowledgeGraph#addNode
 * @param {EntityIdentifier} entityIdentifier The reference to the entity to add
 * as a node.
 * @returns {Promise<string>} ID of the node.
 */

/**
 * Removed a node from the Knowledge Graph.
 * @function KnowledgeGraph#removeNode
 * @param {string} nodeId The ID of the node to remove from the Knowledge Graph.
 * @returns {Promise}
 */

/**
 * Updates the layout information for a node in the Knowledge Graph.
 * @function KnowledgeGraph#updateNodeLayout
 * @param {string} nodeId The ID of the node to update.
 * @param {Object} updates The changes to make to the layout.
 * @returns {Promise}
 */

/**
 * Updates the layout information for the graph of the Knowledge Graph.
 * @function KnowledgeGraph#updateGraphLayout
 * @param {Object} updates The changes to make to the layout.
 * @returns {Promise}
 */

/**
 * @typedef Position
 * @param {number} x The X position.
 * @param {number} y The Y position.
 */

/**
 * Function implementation union.
 * @typedef {Graph} Implementation
 */

/**
 * @typedef {Object} Function
 *
 * @prop {string} id The ID of the Function.
 * @prop {string} name The name of the Function.
 * @prop {string} [nameDescriptor] Name of where the Function comes from (Service/Workspace).
 * @prop {string} [description] Human readable description of the Function.
 * @prop {Object} signature The signature of the Function.
 * @prop {Object} service The service that the Function comes from.
 * @prop {string} service.id The ID of the service.
 * @prop {string} graphqlFunctionType The GraphQL type for the Function.
 * @prop {boolean} [isPure] States the purity of a Function.
 * @prop {Implementation} [implementation] The implementation of the Function.
 * @prop {Graph} [graph] The graph of the Function.
 */

/**
 * Returns boolean stating if the Function is editable.
 * @function Function#canEdit
 * @returns {Promise<boolean>}
 */

/**
 * Returns the e-mail of the user who locked the Function.
 * @function Function#lockedBy
 * @returns {Promise<string|null>}
 */

/**
 * Updates the locked state of the Function.
 * @function Function#setLocked
 * @param {boolean} [isLocked] The new locked state of the Function, if not
 * provided then the locked state is toggled.
 * @returns {Promise}
 */

/**
 * Updates information about the Function.
 * @function Function#update
 * @param {Object} state Information to update the Function with.
 * @returns {Promise}
 */

/**
 * Updates the layout information for a node in the Function.
 * @function Function#updateNodeLayout
 * @param {string} nodeId The ID of the node to update.
 * @param {Object} updates The changes to make to the layout.
 * @returns {Promise}
 */

/**
 * Updates the layout information for the graph of the Function.
 * @function Function#updateGraphLayout
 * @param {Object} updates The changes to make to the layout.
 * @returns {Promise}
 */

/**
 * Executes a GraphQL request against the Function.
 * @function Function#execute
 * @param {Object} variables The variables to send with the request.
 * @param {string} resolve A string with the fields to resolve on the Function.
 * @returns {Promise<Object>} The results of running the Function.
 */

/**
 * @typedef {Object} ServiceLocation
 *
 * @prop {string} url The URL that the locator references.
 */

/**
 * @typedef {Object} Service
 *
 * @prop {string} id The ID of the Service.
 * @prop {string} name The name of the Service.
 * @prop {string} [description] Human readable description of the Service.
 * @prop {ServiceLocation} location The location that the service can be reached
 * at.
 * @prop {number} version The current version of the Service.  This is
 * incremented by catalog each time the service is updated.
 */

/**
 * Retrieves the list of Kinds that are part of the Service.
 * @function Service#getKinds
 * @returns {Promise<Array<Kind>>} The list of Kinds in the Service.
 */

/**
 * Retrieves the list of Function that are part of the Service.
 * @function Service#getFunctions
 * @returns {Promise<Array<Function>>} The list of Functions in the Service.
 */

/**
 * Updates information about the Service.
 * @function Service#update
 * @param {Object} changes Information to update the Service with.
 * @returns {Promise}
 */

/**
 * @typedef {Object} Assistant
 *
 * @prop {string} id The ID of the Assistant.
 * @prop {string} name The name of the Assistant.
 * @prop {string} [description] Human readable description of the Assistant.
 * @prop {ServiceLocation} location The location that the Assistant can be
 * reached at.
 * @prop {number} version The current version of the Assistant.  This is
 * incremented by catalog each time the Assistant is updated.
 */

/**
 * Updates information about the Assistant.
 * @function Assistant#update
 * @param {Object} changes Information to update the Assistant with.
 * @returns {Promise}
 */

/**
 * @typedef {Object} Workspace
 *
 * @prop {string} id The ID of the Workspace.
 * @prop {string} name The name of the Workspace.
 * @prop {string} [description] Human readable description of the Service.
 * @prop {ServiceLocation} location The location information about the Workspace.
 * @prop {string} thumbnailUrl the URL to the URL of the thumbnail pic.
 * @prop {string} serviceId The ID of the logic service backing the Workspace.
 * @prop {boolean} isPublic When true others can see this Workspace.
 * @prop {boolean} isTemplate When true it shows up as a template Workspace.
 * @prop {Array<string>} tags The list of tags for the Workspace.
 * @prop {Object} owner The user that owns the Workspace.
 * @prop {string} owner.id The ID of the user.
 * @prop {string} owner.name The name of the user.
 */

/**
 * Returns boolean stating if the Workspace is editable.
 * @function Workspace#canEdit
 * @returns {Promise<boolean>}
 */

/**
 * Returns the e-mail of the user who locked the Workspace.
 * @function Workspace#lockedBy
 * @returns {Promise<string|null>}
 */

/**
 * Updates the locked state of the Workspace.
 * @function Workspace#setLocked
 * @param {boolean} [isLocked] The new locked state of the Workspace, if not
 * provided then the locked state is toggled.
 * @returns {Promise}
 */

/**
 * Updates information about the Workspace.
 * @function Workspace#update
 * @param {Object} state Information to update the Workspace with.
 * @returns {Promise}
 */

/**
 * Sends a repair event to all assistants.
 * @function Workspace#triggerRepairEvent
 * @returns {Promise}
 */

/**
 * Gets the currently active graph.
 * @function Workspace#getActiveGraph
 * @returns {Promise<KnowledgeGraph|Function>}
 */

/**
 * Gets all of the Knowledge Graphs in the Workspace.
 * @function Workspace#getKnowledgeGraphs
 * @returns {Promise<Array<KnowledgeGraph>>}
 */

/**
 * Creates a new Knowledge Graph in the Workspace.
 * @function Workspace#createKnowledgeGraph
 * @param {Object} input Information about the new Knowledge Graph.
 * @returns {Promise}
 */

/**
 * Creates a list of new Knowledge Graphs in the Workspace.
 * @function Workspace#createKnowledgeGraphs
 * @param {Array<Object>} input Information about the new Knowledge Graphs.
 * @returns {Promise}
 */

/**
 * Gets all of the Services imported into the Workspaces inventory.
 * @function Workspace#getImportedServices
 * @returns {Promise<Array<Service>>}
 */

/**
 * Gets all of the Assistants imported into the Workspaces inventory.
 * @function Workspace#getImportedAssistants
 * @returns {Promise<Array<Assistant>>}
 */

/**
 * Imports a Service or Assistant into the Workspaces inventory.
 * @function Workspace#importService
 * @param {string} serviceId Service or Assistant ID.
 * @returns {Promise<string>} ID of imported Service or Assistant.
 */

/**
 * Imports a list of Services and/or Assistants into the Workspaces inventory.
 * @function Workspace#importServices
 * @param {Array<string>} serviceIds Service and/or Assistant IDs.
 * @returns {Promise<Array<string>>} IDs of imported Services and/or Assistants.
 */

/**
 * Removes a Service or Assistant from the Workspaces inventory.
 * @function Workspace#removeService
 * @param {string} serviceId Service or Assistant ID.
 * @returns {Promise}
 */

/**
 * Removes a list Services and/or Assistants from the Workspaces inventory.
 * @function Workspace#removeServices
 * @param {Array<string>} serviceIds Service and/or Assistant IDs.
 * @returns {Promise}
 */

/**
 * Gets the list of Functions that live in the Workspace.
 * @function Workspace#getFunctions
 * @returns {Promise<Array<Function>>}
 */

/**
 * Gets a list of Functions that live in the Workspace based on their names.
 * @function Workspace#getFunctionsByName
 * @param {Array<string>} names The name of the Functions to return.
 * @returns {Promise<Array<Function>>}
 */

/**
 * Creates a new Function in the Workspace.
 * @function Workspace#createFunction
 * @param {Object} input
 * @returns {Promise<Function>}
 */

/**
 * Creates a list of new Functions in the Workspace.
 * @function Workspace#createFunctions
 * @param {Array<Object>} input
 * @returns {Promise<Array<Function>>}
 */

/**
 * Updates a Function in the Workspace.
 * @function Workspace#updateFunction
 * @param {Object} changes
 * @returns {Promise}
 */

/**
 * Updates a list of Function in the Workspace.
 * @function Workspace#updateFunctions
 * @param {Array<Object>} changes
 * @returns {Promise}
 */

/**
 * Deletes a function in the Workspace.
 * @function Workspace#deleteFunction
 * @param {string} name
 * @returns {Promise}
 */

/**
 * Gets the Function based on ID with its implementation and graph information.
 * @function Workspace#getFunctionGraph
 * @deprecated To get the function graph and implementation for a function, load
 * it via the workspace it belongs to.
 * @param {string} id
 * @returns {Promise<Function>}
 */

/**
 * Gets the list of Kinds that live in the Workspace.
 * @function Workspace#getKinds
 * @returns {Promise<Array<Kind>>}
 */

/**
 * Gets a list of Kinds that live in the Workspace based on their names.
 * @function Workspace#getKindsByName
 * @param {Array<string>} names
 * @returns {Promise<Array<Kind>>}
 */

/**
 * Creates a new Kind in the Workspace.
 * @function Workspace#createKind
 * @param {Object} input
 * @returns {Promise<Kind>}
 */

/**
 * Creates a list of Kinds in the Workspace.
 * @function Workspace#createKinds
 * @param {Array<Object>} input
 * @returns {Promise<Array<Kind>>}
 */

/**
 * Updates a Kind in the Workspace.
 * @function Workspace#updateKind
 * @param {Object} changes
 * @returns {Promise}
 */

/**
 * Updates a list of Kinds in the Workspace.
 * @function Workspace#updateKinds
 * @param {Array<Object>} changes
 * @returns {Promise}
 */

/**
 * Deletes a Kind in the Workspace.
 * @function Workspace#deleteKind
 * @param {string} name
 * @returns {Promise}
 */

/**
 * @namespace AssistantAPIClient
 */

//
// Assistant State
//

/**
 * Updates the current state of the Assistant.
 * @function AssistantAPIClient.setAssistantState
 *
 * @param {AssistantState} state The new state of the assistant.
 */
export function setAssistantState(state) {
  return APICall('setAssistantState', state);
}

//
// State management
//

/**
 * Removes all event listeners for all events.
 * @function AssistantAPIClient.clearState
 */
export function clearState() {
  eventEmitter.removeAllListeners();
}

//
// User Info
//

/**
 * Gets the information about the current user.
 * @function AssistantAPIClient.getUserInfo
 *
 * @returns {Promise<User>} The current User.
 */
export function getUserInfo() {
  return APICall('getUserInfo');
}

//
// Selection
//

/**
 * Adds a listener to the selection changed event.
 * @function AssistantAPIClient.addSelectionChangedListener
 *
 * @param {function} cb Callback function.
 */
export function addSelectionChangedListener(cb) {
  eventEmitter.addListener(EventTypes.SELECTION_CHANGED, cb);
}

/**
 * Removed a listener from the selection changed event, or all of them if no
 * callback is defined.
 * @function AssistantAPIClient.removeSelectionChangedListener
 *
 * @param {function} [cb] Callback function.
 */
export function removeSelectionChangedListener(cb) {
  // If the callback is not provided, then remove all of the listeners.
  if (cb) {
    eventEmitter.removeListener(EventTypes.SELECTION_CHANGED, cb);
  } else {
    eventEmitter.removeAllListeners(EventTypes.SELECTION_CHANGED);
  }
}

/**
 * Gets the current selection from the UI.
 * @function AssistantAPIClient.getCurrentSelection
 *
 * @returns {Promise<Selected>} The list of selected entities.
 */
export function getCurrentSelection() {
  return APICall('getCurrentSelection');
}

//
// Services
//

/**
 * Gets a specified service by ID
 * @function AssistantAPIClient.getServiceById
 *
 * @param {string} id Service Id
 *
 * @returns {Promise<Service>} The requested service.
 */
export function getServiceById(id) {
  return APICall('getServiceById', id);
}

/**
 * Creates a new Service in the platform.
 * @function AssistantAPIClient.createService
 *
 * @param {Object} input The inputs used to create the Service.
 *
 * @returns {Promise<string>} ID of the created service.
 */
export function createService(input) {
  return APICall('createService', input);
}

/**
 * Refreshed the service information in the backend.  This is useful for
 * making sure that the platform is working on the latest schema of an
 * external service.
 * @function AssistantAPIClient.refreshServiceSchema
 *
 * @param {string} input The ID of the service to refresh.
 *
 * @returns {Promise<Service>} The refreshed service.
 */
export function refreshServiceSchema(input) {
  return APICall('refreshServiceSchema', input);
}

/**
 * Has the UI reload the information about the service from the backend to
 * make sure that it has fresh information.
 * @function AssistantAPIClient.reloadServiceSchema
 *
 * @param {string} id The ID of the Service to reload.
 *
 * @returns {Promise<Service>} The service with fresh information.
 */
export function reloadServiceSchema(id) {
  return APICall('reloadServiceSchema', id);
}

/**
 * Deletes the given Service from the platform.
 * @function AssistantAPIClient.deleteService
 *
 * @param {string} id The ID of the Service to delete.
 *
 * @returns {Promise<Object>} The changes caused by deleting the Service.
 */
export function deleteService(id) {
  return APICall('deleteService', id);
}

/**
 * Runs an arbitrary GraphQL query against a service in the platform.
 * @function AssistantAPIClient.executeGraphql
 *
 * @param {Object} input The data for the execution.
 * @param {string} input.serviceId The ID of the service to make the call on.
 * @param {string} input.query The query/mutation to make against the service.
 * @param {Object} input.variables The variables to go with the query.
 *
 * @returns {Promise<Object>} The response from the request.
 */
export function executeGraphql(input) {
  return APICall('executeGraphql', input);
}

//
// Workspace
//

/**
 * Returns the requested Workspace, if no Workspace ID is specified it returns
 * the Workspace that the user is currently using.
 * @function AssistantAPIClient.getWorkspace
 *
 * @param {string} [id] The ID of the Workspace to load.
 *
 * @return {Promise<Workspace>} The requested Workspace.
 */
export function getWorkspace(id) {
  return APICall('getWorkspace', id);
}

/**
 * Returns a list of user accessible Workspaces.  By default it will just be
 * the user owned Workspaces, but can be configured to also return all the
 * public workspaces.
 * @function AssistantAPIClient.getUserAccessibleWorkspaces
 *
 * @param {boolean} [includePublic=false] When true the returned list includes public Workspaces.
 *
 * @return {Promise<Array<Workspace>>} The list of Workspaces.
 */
export function getUserAccessibleWorkspaces(includePublic = false) {
  return APICall('getUserAccessibleWorkspaces', includePublic);
}

/**
 * Creates a new Workspace.  The id, name, and serviceId can optionally be
 * set, or they can be left undefined to use the defaults.
 * @function AssistantAPIClient.createWorkspace
 *
 * @param {Object} workspace The Workspace information, can contain {id, name, serviceId}
 *
 * @return {Promise<Workspace>} The new Workspace.
 */
export function createWorkspace(workspace) {
  return APICall('createWorkspace', workspace);
}

//
// Functions
//

/**
 * Runs a query against a given function with the supplied variables and
 * resolve string.
 * @function AssistantAPIClient.executeFunction
 *
 * @param {Object} input The information to execute.
 * @param {EntityIdentifier} input.entityIdentifier The reference to the function.
 * @param {Object} input.variables The variables to go along with the query.
 * @param {string} input.resolve The fields to resolve in the query.
 *
 * @returns {Promise<Object>} The result of executing the function.
 */
export function executeFunction(input) {
  return APICall('executeFunction', input);
}

/**
 * Creates a new function with the supplied information.  At minimum a name
 * needs to be supplied.
 * @function AssistantAPIClient.createFunction
 *
 * @deprecated This has been deprecated in favor of calling it directly off of
 * the workspace that the function will live in.
 *
 * @param {Object} input Information to create the function with.
 *
 * @returns {Promise<Function>} The new function.
 */
export function createFunction(input) {
  return APICall('createFunction', input);
}

/**
 * Updates a Function in the active workspace with the given information.
 * @function AssistantAPIClient.updateFunction
 *
 * @deprecated This has been deprecated in favor of calling it direction off of
 * the workspace the function lives in.
 *
 * @param {Object} input Updates for the function.
 *
 * @returns {Promise<Function>} The updated Function.
 */
export function updateFunction(input) {
  return APICall('updateFunction', input);
}

/**
 * Deletes a function in the active workspace by the given name.
 * @function AssistantAPIClient.deleteFunction
 *
 * @deprecated This has been deprecated in favor of calling it direction off of
 * the workspace the function lives in.
 *
 * @param {string} input The name of the function
 *
 * @returns {Promise<Object>} The changes caused by deleting the function.
 */
export function deleteFunction(input) {
  return APICall('deleteFunction', input);
}

/**
 * Loads a function by ID.  This can only return information about functions
 * that the UI already has loaded into memory.
 * @function AssistantAPIClient.getFunctionById
 *
 * @deprecated This function is no longer supported and has limited
 * functionality. Use getFunctionOfServiceByName instead.
 *
 * @param {string} id the function's ID.
 *
 * @returns {Promise<Function>} The requested function.
 */
export function getFunctionById(id) {
  return APICall('getFunctionById', id);
}

/**
 * Loads a list of functions by ID.  This can only return information about
 * functions that the UI already has loaded into memory.
 * @function AssistantAPIClient.getFunctionsById
 *
 * @deprecated This function is no longer supported and has limited
 * functionality. Use getFunctionsOfServiceByName instead.
 *
 * @param {Array<string>} ids List of function IDs.
 *
 * @returns {Promise<Array<Function>>} The list of requested functions.
 */
export function getFunctionsById(ids) {
  return APICall('getFunctionsById', ids);
}

/**
 * Returns a function with the given name from a specific service.
 * @function AssistantAPIClient.getFunctionOfServiceByName
 *
 * @param {string} serviceId ID of the service the function lives in.
 * @param {string} name The name of the function to find.
 *
 * @returns {Promise<Function>} The requested function.
 */
export function getFunctionOfServiceByName(serviceId, name) {
  return APICall('getFunctionOfServiceByName', { serviceId, name });
}

/**
 * Returns a list of functions with the given names from a specific service.
 * @function AssistantAPIClient.getFunctionsOfServiceByName
 *
 * @param {string} serviceId ID of the service the function lives in.
 * @param {Array<string>} names The names of the functions to find.
 *
 * @returns {Promise<Array<Function>>} The list of requested functions.
 */
export function getFunctionsOfServiceByName(serviceId, names) {
  return APICall('getFunctionsOfServiceByName', { serviceId, names });
}

/**
 * Adds a callback function to be called with the function has been executed.
 * @function AssistantAPIClient.addFunctionExecutionListener
 *
 * @param {string} id ID of the function.
 * @param {function} cb The callback function.
 */
export function addFunctionExecutionListener(id, cb) {
  eventEmitter.addListener(`function:${id}`, cb);
}

/**
 * Removes one or all callbacks listening for the function to be executed.
 * @function AssistantAPIClient.removeFunctionExecutionListener
 *
 * @param {string} id ID of the function.
 * @param {function} [cb] The callback function, if not supplied all of them
 * are removed.
 */
export function removeFunctionExecutionListener(id, cb) {
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
 * @function AssistantAPIClient.createKind
 *
 * @deprecated This has been deprecated in favor of calling it direction off of
 * the workspace the kind will live in.
 *
 * @param {Object} input Information to create the Kind with.
 *
 * @returns {Promise<Kind>} The new Kind
 */
export function createKind(input) {
  return APICall('createKind', input);
}

/**
 * Updates a Kind in the active workspace with the given information.
 * @function AssistantAPIClient.updateKind
 *
 * @deprecated This has been deprecated in favor of calling it direction off of
 * the workspace the kind lives in.
 *
 * @param {Object} input Updates for the Kind.
 *
 * @returns {Promise<Kind>} The updated Kind.
 */
export function updateKind(input) {
  return APICall('updateKind', input);
}

/**
 * Deletes a Kind in the active workspace by the given name.
 * @function AssistantAPIClient.deleteKind
 *
 * @deprecated This has been deprecated in favor of calling it direction off of
 * the workspace the kind lives in.
 *
 * @param {string} input The name of the Kind.
 *
 * @returns {Promise<Object>} The changes caused by deleting the Kind.
 */
export function deleteKind(input) {
  return APICall('deleteKind', input);
}

/**
 * Loads a Kind by ID.  This can only return information about Kinds that the
 * UI already has loaded into memory.
 * @function AssistantAPIClient.getKindById
 *
 * @deprecated This function is no longer supported and has limited
 * functionality.  Use getKindOfServiceByName instead.
 *
 * @param {string} id The Kind's ID.
 *
 * @returns {Promise<Kind>} The requested Kind.
 */
export function getKindById(id) {
  return APICall('getKindById', id);
}

/**
 * Loads a list of Kinds by ID.  This can only return information about Kinds
 * that the UI already has loaded into memory.
 * @function AssistantAPIClient.getKindsById
 *
 * @deprecated This function is no longer supported and has limited
 * functionality.  Use getKindsOfServiceByName instead.
 *
 * @param {Array<string>} ids List of Kind IDs.
 *
 * @returns {Promise<Array<Kind>>} The list of requested Kind.
 */
export function getKindsById(ids) {
  return APICall('getKindsById', ids);
}

/**
 * Returns a Kind with the given name from a specific service.
 * @function AssistantAPIClient.getKindOfServiceByName
 *
 * @param {string} serviceId ID of the service the function lives in.
 * @param {string} name The name of the Kind to find.
 *
 * @returns {Promise<Kind>} The requested Kind.
 */
export function getKindOfServiceByName(serviceId, name) {
  return APICall('getKindOfServiceByName', { serviceId, name });
}

/**
 * Returns a list of Kinds with the given names from a specific service.
 * @function AssistantAPIClient.getKindsOfServiceByName
 *
 * @param {string} serviceId ID of the service the function lives in.
 * @param {Array<string>} names The names of the Kinds to find.
 *
 * @returns {Promise<Array<Kind>>} The list of requested Kinds.
 */
export function getKindsOfServiceByName(serviceId, names) {
  return APICall('getKindsOfServiceByName', { serviceId, names });
}

/**
 * Loads up tree of Kinds references by the signature of the Entities passed in.
 * @function AssistantAPIClient.getAllReferencedKinds
 *
 * @param {Object} data The data passed in for finding the referenced kinds.
 * @param {Array<EntityIdentifier>} data.entities The starting entities to check.
 * @param {Array<EntityIdentifier>} data.entitiesToSkip The entities to not include.
 * @param {number} data.maxDepth Maximum traversal depth in the tree.
 *
 * @returns {Promise<Array<Kind>>} The list of references Kinds.
 */
export function getAllReferencedKinds(data) {
  return APICall('getAllReferencedKinds', data);
}

//
// Inventory
//

/**
 * Adds a listener for the inventory changed event.
 * @function AssistantAPIClient.addInventoryChangedListener
 *
 * @param {function} cb Callback function.
 */
export function addInventoryChangedListener(cb) {
  eventEmitter.addListener(EventTypes.INVENTORY_CHANGED, cb);
}

/**
 * Removed a listener from the inventory changed event, or all of them if one
 * is not specified.
 * @function AssistantAPIClient.removeInventoryChangedListener
 *
 * @param {function} [cb] Callback function.
 */
export function removeInventoryChangedListener(cb) {
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
 * @function AssistantAPIClient.moveKindsAndFunctions
 *
 * @deprecated This has been deprecated in favor of calling it directly off of
 * the origin workspace.
 *
 * @param {string} originId The ID of the origin Workspace.
 * @param {string} targetId The ID of the target Workspace.
 * @param {Array<string>} kindIds An array of the IDs of the kinds to move.
 * @param {Array<string>} functionIds An array of the IDs of the functions to move.
 */
export function moveKindsAndFunctions(
  originId,
  targetId,
  kindIds,
  functionIds
) {
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
 * @function AssistantAPIClient.getFunctionGraph
 *
 * @deprecated Getting a function graph like this has been deprecated.  To get
 * the graph and implementation information of a function, it needs to be
 * loaded through the workspace that it belongs to.
 *
 * @param {string} id ID of the function to load the graph for.
 *
 * @returns {Promise<Function>} The function with the information about its graph.
 */
export function getFunctionGraph(id) {
  return APICall('getFunctionGraph', id);
}

//
// Render Mode
//

/**
 * Adds a listener to the render mode changed event.
 * @function AssistantAPIClient.addRenderModeChangedListener
 *
 * @param {function} cb Callback function.
 */
export function addRenderModeChangedListener(cb) {
  eventEmitter.addListener(EventTypes.RENDER_MODE_CHANGED, cb);
}

/**
 * Removed a listener from the render mode changed event, or all of them if
 * one is not specified.
 * @function AssistantAPIClient.removeRenderModeChangedListener
 *
 * @param {function} [cb] Callback function.
 */
export function removeRenderModeChangedListener(cb) {
  // If the callback is not provided, then remove all of the listeners.
  if (cb) {
    eventEmitter.removeListener(EventTypes.RENDER_MODE_CHANGED, cb);
  } else {
    eventEmitter.removeAllListeners(EventTypes.RENDER_MODE_CHANGED);
  }
}

/**
 * Gets the current render mode for the assistant.
 * @function AssistantAPIClient.getRenderMode
 *
 * @returns {Promise<string>} The current render mode.
 */
export function getRenderMode() {
  return APICall('getRenderMode');
}

//
// Repair
//

/**
 * Adds a listener to the repair changed event.
 * @function AssistantAPIClient.addRepairListener
 *
 * @param {function} cb Callback function.
 */
export function addRepairListener(cb) {
  eventEmitter.addListener(EventTypes.REPAIR, cb);
}

/**
 * Removed a listener from the repair changed event, or all of them if one is
 * not specified.
 * @function AssistantAPIClient.removeRepairListener
 *
 * @param {function} [cb] Callback function.
 */
export function removeRepairListener(cb) {
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
 * @function AssistantAPIClient.reportError
 *
 * @param {Error|string} error The error object or an error message.
 */
export function reportError(error) {
  return APICall('reportError', error);
}

//
// Locking
//

/**
 * Adds a callback function to be called every time the locking changed event
 * is triggered.
 * @function AssistantAPIClient.addLockingChangedListener
 *
 * @param {Function} cb The callback function to call
 */
export function addLockingChangedListener(cb) {
  eventEmitter.addListener(EventTypes.LOCKING_CHANGED, cb);
}

/**
 * Removes a callback function from the list be called every time the locking
 * changed event is triggered.  If no callback is passed in, then all
 * listeners are removed for the locking changed event.
 * @function AssistantAPIClient.removeLockingChangedListener
 *
 * @param {Function|undefined} cb The callback function to remove
 */
export function removeLockingChangedListener(cb) {
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
export function getEventEmitter() {
  return eventEmitter;
}
