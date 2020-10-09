import postRobot from 'post-robot'
const events = require('events')
const EventEmitter = new events.EventEmitter()

// The collection of event types used in the API
const EventTypes = Object.freeze({
  LOCKING_CHANGED: 'lockingChanged'
})

// Wrapper for post-robot async client -> API call.
const APICall = async (callName, arg) => {
  const { source, origin, data } = await postRobot.send(
    window.parent,
    callName,
    arg
  )
  return data
}

// Wrapper for post-robot listener.
const createAPIListener = async (callName, cb) => {
  postRobot.on(callName, cb)
}

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
 * @typedef {Object} TypeExpression
 */

/**
 * @typedef {Object} Kind
 *
 * @prop {string} id The ID of the Kind.
 * @prop {string} name The name of the Kind.
 * @prop {string} [nameDescriptor] Name of where the kind comes from (Service/Workspace).
 * @prop {string} [description] Human readable description of the Kind.
 * @prop {TypeExpression} signature The signature of the Kind.
 * @prop {Object} service The service that the Kind comes from.
 * @prop {string} service.id The ID of the service.
 */

/**
 * @typedef {Object} Graph
 * // TODO: QP-1722 Fill this in when handling Function/Knowledge Graphs
 */

/**
 * @typedef {Graph} Implementation
 * Function implementation union.
 */

/**
 * @typedef {Object} Function
 *
 * @prop {string} id The ID of the Function.
 * @prop {string} name The name of the Function.
 * @prop {string} [nameDescriptor] Name of where the Function comes from (Service/Workspace).
 * @prop {string} [description] Human readable description of the Function.
 * @prop {TypeExpression} signature The signature of the Function.
 * @prop {Object} service The service that the Function comes from.
 * @prop {string} service.id The ID of the service.
 * @prop {string} graphqlFunctionType The GraphQL type for the Function.
 * @prop {boolean} [isPure] States the purity of a Function.
 * @prop {Implementation} [implementation] The implementation of the Function.
 * @prop {Graph} [graph] The graph of the Function.
 */

/**
 * @typedef {Object} Service
 *
 * @prop {string} id The ID of the Service.
 * @prop {string} name The name of the Service.
 * @prop {string} [description] Human readable description of the Service.
 * @prop {Object} location The location information about the Service
 * @prop {string} location.url The URL that the Service can be reached at.
 * @prop {function} getKinds Returns the list of Kinds in the Service.
 * @prop {function} getFunctions Returns the list of Functions in the Service.
 */

/**
 * @typedef {Object} Workspace
 *
 * @prop {string} id The ID of the Workspace.
 * @prop {string} name The name of the Workspace.
 * @prop {string} [description] Human readable description of the Service.
 * @prop {Object} location The location information about the Workspace
 * @prop {string} location.url The URL that the Workspace can be reached at.
 * @prop {string} thumbnailUrl the URL to the URL of the thumbnail pic.
 * @prop {string} serviceId The ID of the logic service backing the Workspace.
 * @prop {boolean} isPublic When true others can see this Workspace.
 * @prop {boolean} isTemplate When true it shows up as a template Workspace.
 * @prop {Array<string>} tags The list of tags for the Workspace.
 * @prop {Object} owner The user that owns the Workspace.
 * @prop {string} id The ID of the user.
 * @prop {string} name The name of the user.
 */

/**
 * Class that exposes concrete API calls to the parent API.
 * These calls are made over post-message via post-robot to the parent window.
 */
class AssistantAPIClient {
  constructor() {
    // Attach selection event emitter to API listener
    createAPIListener('selectionChanged', async function (event) {
      EventEmitter.emit('selectionChanged', event.data)
    })

    // Attach function execution event emitter to API listener.
    // Use convention to filter by function ID.
    createAPIListener('functionExecuted', async function (event) {
      EventEmitter.emit(`function:${event.data.id}`, event.data.result)
    })

    // Attach inventory event emitter to API listener.
    createAPIListener('inventoryChanged', async function (event) {
      EventEmitter.emit('inventoryChanged', event.data)
    })

    // Attach render mode event emitter to API listener.
    createAPIListener('renderModeChanged', async function (event) {
      EventEmitter.emit('renderModeChanged', event.data)
    })

    // Attach repair listener.
    createAPIListener('repair', async function (event) {
      EventEmitter.emit('repair', event.data)
    })

    // Attach locking changed listener.
    createAPIListener(EventTypes.LOCKING_CHANGED, async function (event) {
      EventEmitter.emit(EventTypes.LOCKING_CHANGED, event.data)
    })
  }

  //
  // Assistant State
  //

  /**
   * Updates the current state of the Assistant.
   *
   * @param {AssistantState} state The new state of the assistant.
   */
  setAssistantState(state) {
    return APICall('setAssistantState', state)
  }

  //
  // State management
  //

  /**
   * Removes all event listeners for all events.
   */
  clearState() {
    EventEmitter.removeAllListeners()
  }

  //
  // User Info
  //

  /**
   * Gets the information about the current user.
   *
   * @returns {Promise<User>} The current User.
   */
  getUserInfo() {
    return APICall('getUserInfo')
  }

  //
  // Selection
  //

  /**
   * Adds a listener to the selection changed event.
   *
   * @param {function} cb Callback function.
   */
  addSelectionChangedListener(cb) {
    EventEmitter.addListener('selectionChanged', cb)
  }

  /**
   * Removed a listener from the selection changed event, or all of them if no
   * callback is defined.
   *
   * @param {function} [cb] Callback function.
   */
  removeSelectionChangedListener(cb) {
    // If the callback is not provided, then remove all of the listeners.
    if (cb) {
      EventEmitter.removeListener('selectionChanged', cb)
    } else {
      EventEmitter.removeAllListeners('selectionChanged')
    }
  }

  /**
   * Gets the current selection from the UI.
   *
   * @returns {Promise<Array<EntityIdentifier>>} The list of selected entities.
   */
  getCurrentSelection() {
    return APICall('getCurrentSelection')
  }

  //
  // Services
  //

  /**
   * Gets a specified service by ID
   *
   * @param {string} id Service Id
   *
   * @returns {Promise<Service>} The requested service.
   */
  getServiceById(id) {
    return APICall('getServiceById', id)
  }

  /**
   * Creates a new Service in the platform.
   *
   * @param {Object} input The inputs used to create the Service.
   *
   * @returns {Promise<string>} ID of the created service.
   */
  createService(input) {
    return APICall('createService', input)
  }

  /**
   * Refreshed the service information in the backend.  This is useful for
   * making sure that the platform is working on the latest schema of an
   * external service.
   *
   * @param {string} input The ID of the service to refresh.
   *
   * @returns {Promise<Service>} The refreshed service.
   */
  refreshServiceSchema(input) {
    return APICall('refreshServiceSchema', input)
  }

  /**
   * Has the UI reload the information about the service from the backend to
   * make sure that it has fresh information.
   *
   * @param {string} id The ID of the Service to reload.
   *
   * @returns {Promise<Service>} The service with fresh information.
   */
  reloadServiceSchema(id) {
    return APICall('reloadServiceSchema', id)
  }

  /**
   * Deletes the given Service from the platform.
   *
   * @param {string} id The ID of the Service to delete.
   *
   * @returns {Promise<Object>} The changes caused by deleting the Service.
   */
  deleteService(id) {
    return APICall('deleteService', id)
  }

  /**
   * Runs an arbitrary GraphQL query against a service in the platform.
   *
   * @param {Object} input The data for the execution.
   * @param {string} input.serviceId The ID of the service to make the call on.
   * @param {string} input.query The query/mutation to make against the service.
   * @param {Object} input.variables The variables to go with the query.
   *
   * @returns {Promise<Object>} The response from the request.
   */
  executeGraphql(input) {
    return APICall('executeGraphql', input)
  }

  //
  // Workspace
  //

  /**
   * Returns the requested Workspace, if no Workspace ID is specified it returns
   * the Workspace that the user is currently using.
   *
   * @param {string} [id] The ID of the Workspace to load.
   *
   * @return {Promise<Workspace>} The requested Workspace.
   */
  getWorkspace(id) {
    return APICall('getWorkspace', id)
  }

  /**
   * Returns a list of user accessible Workspaces.  By default it will just be
   * the user owned Workspaces, but can be configured to also return all the
   * public workspaces.
   *
   * @param {boolean} [includePublic=false] When true the returned list includes public Workspaces.
   *
   * @return {Promise<Array<Workspace>>} The list of Workspaces.
   */
  getUserAccessibleWorkspaces(includePublic = false) {
    return APICall('getUserAccessibleWorkspaces', includePublic)
  }

  /**
   * Creates a new Workspace.  The id, name, and serviceId can optionally be
   * set, or they can be left undefined to use the defaults.
   *
   * @param {Object} workspace The Workspace information, can contain {id, name, serviceId}
   *
   * @return {Promise<Workspace>} The new Workspace.
   */
  createWorkspace(workspace) {
    return APICall('createWorkspace', workspace)
  }

  //
  // Functions
  //

  /**
   * Runs a query against a given function with the supplied variables and
   * resolve string.
   * @param {Object} input The information to execute.
   * @param {string} input.functionId The ID of the function to execute.
   * @param {Object} input.variables The variables to go along with the query.
   * @param {string} input.resolve The fields to resolve in the query.
   *
   * @returns {Promise<Object>} The result of executing the function.
   */
  executeFunction(input) {
    return APICall('executeFunction', input)
  }

  /**
   * Creates a new function with the supplied information.  At minimum a name
   * needs to be supplied.
   *
   * @param {Object} input Information to create the function with.
   *
   * @returns {Promise<Function>} The new function.
   */
  createFunction(input) {
    return APICall('createFunction', input)
  }

  /**
   * Updates a Function in the active workspace with the given information.
   *
   * @param {Object} input Updates for the function.
   *
   * @returns {Promise<Function>} The updated Function.
   */
  updateFunction(input) {
    return APICall('updateFunction', input)
  }

  /**
   * Deletes a function in the active workspace by the given name.
   *
   * @param {string} input The name of the function
   *
   * @returns {Promise<Object>} The changes caused by deleting the function.
   */
  deleteFunction(input) {
    return APICall('deleteFunction', input)
  }

  /**
   * Loads a function by ID.  This can only return information about functions
   * that the UI already has loaded into memory.
   *
   * @deprecated This function is no longer supported and has limited
   * functionality
   *
   * @param {string} id the function's ID.
   *
   * @returns {Promise<Function>} The requested function.
   */
  getFunctionById(id) {
    return APICall('getFunctionById', id)
  }

  /**
   * Loads a list of functions by ID.  This can only return information about
   * functions that the UI already has loaded into memory.
   *
   * @deprecated This function is no longer supported and has limited
   * functionality
   *
   * @param {Array<string>} ids List of function IDs.
   *
   * @returns {Promise<Array<Function>>} The list of requested functions.
   */
  getFunctionsById(ids) {
    return APICall('getFunctionsById', ids)
  }

  /**
   * Returns a function with the given name from a specific service.
   *
   * @param {string} serviceId ID of the service the function lives in.
   * @param {string} name The name of the function to find.
   *
   * @returns {Promise<Function>} The requested function.
   */
  getFunctionOfServiceByName(serviceId, name) {
    return APICall('getFunctionOfServiceByName', { serviceId, name })
  }

  /**
   * Returns a list of functions with the given names from a specific service.
   *
   * @param {string} serviceId ID of the service the function lives in.
   * @param {Array<string>} names The names of the functions to find.
   *
   * @returns {Promise<Array<Function>>} The list of requested functions.
   */
  getFunctionsOfServiceByName(serviceId, names) {
    return APICall('getFunctionsOfServiceByName', { serviceId, names })
  }

  /**
   * Adds a callback function to be called with the function has been executed.
   *
   * @param {string} id ID of the function.
   * @param {function} cb The callback function.
   */
  addFunctionExecutionListener(id, cb) {
    EventEmitter.addListener(`function:${id}`, cb)
  }

  /**
   * Removes one or all callbacks listening for the function to be executed.
   *
   * @param {string} id ID of the function.
   * @param {function} [cb] The callback function, if not supplied all of them
   * are removed.
   */
  removeFunctionExecutionListener(id, cb) {
    // If the callback is not provided, then remove all of the listeners.
    if (cb) {
      EventEmitter.removeListener(`function:${id}`, cb)
    } else {
      EventEmitter.removeAllListeners(`function:${id}`)
    }
  }

  //
  // Kinds
  //

  /**
   * Creates a new Kind with the supplied information.  At minimum a name needs
   * to be supplied.
   *
   * @param {Object} input Information to create the Kind with.
   *
   * @returns {Promise<Kind>} The new Kind
   */
  createKind(input) {
    return APICall('createKind', input)
  }

  /**
   * Updates a Kind in the active workspace with the given information.
   *
   * @param {Object} input Updates for the Kind.
   *
   * @returns {Promise<Kind>} The updated Kind.
   */
  updateKind(input) {
    return APICall('updateKind', input)
  }

  /**
   * Deletes a Kind in the active workspace by the given name.
   *
   * @param {string} input The name of the Kind.
   *
   * @returns {Promise<Object>} The changes caused by deleting the Kind.
   */
  deleteKind(input) {
    return APICall('deleteKind', input)
  }

  /**
   * Loads a Kind by ID.  This can only return information about Kinds that the
   * UI already has loaded into memory.
   *
   * @deprecated This function is no longer supported and has limited
   * functionality
   *
   * @param {string} id The Kind's ID.
   *
   * @returns {Promise<Kind>} The requested Kind.
   */
  getKindById(id) {
    return APICall('getKindById', id)
  }

  /**
   * Loads a list of Kinds by ID.  This can only return information about Kinds
   * that the UI already has loaded into memory.
   *
   * @deprecated This function is no longer supported and has limited
   * functionality
   *
   * @param {Array<string>} ids List of Kind IDs.
   *
   * @returns {Promise<Array<Kind>>} The list of requested Kind.
   */
  getKindsById(ids) {
    return APICall('getKindsById', ids)
  }

  /**
   * Returns a Kind with the given name from a specific service.
   *
   * @param {string} serviceId ID of the service the function lives in.
   * @param {string} name The name of the Kind to find.
   *
   * @returns {Promise<Kind>} The requested Kind.
   */
  getKindOfServiceByName(serviceId, name) {
    return APICall('getKindOfServiceByName', { serviceId, name })
  }

  /**
   * Returns a list of Kinds with the given names from a specific service.
   *
   * @param {string} serviceId ID of the service the function lives in.
   * @param {Array<string>} names The names of the Kinds to find.
   *
   * @returns {Promise<Array<Kind>>} The list of requested Kinds.
   */
  getKindsOfServiceByName(serviceId, names) {
    return APICall('getKindsOfServiceByName', { serviceId, names })
  }

  /**
   * Loads up tree of Kinds references by the signature of the Kinds passed in,
   *
   * @param {Array<string>} input List of Kind IDs.
   *
   * @returns {Promise<Array<Kind>>} The list of references Kinds.
   */
  getAllReferencedKinds(input) {
    return APICall('getAllReferencedKinds', input)
  }

  //
  // Inventory
  //
  /**
   * Adds a listener for the inventory changed event.
   *
   * @param {function} cb Callback function.
   */
  addInventoryChangedListener(cb) {
    EventEmitter.addListener('inventoryChanged', cb)
  }

  /**
   * Removed a listener from the inventory changed event, or all of them if one
   * is not specified.
   *
   * @param {function} [cb] Callback function.
   */
  removeInventoryChangedListener(cb) {
    // If the callback is not provided, then remove all of the listeners.
    if (cb) {
      EventEmitter.removeListener('inventoryChanged', cb)
    } else {
      EventEmitter.removeAllListeners('inventoryChanged')
    }
  }

  /**
   * Moves a collection of Kinds and Functions from the origin Workspace to the
   * target Workspace.
   *
   * @param {string} originId The ID of the origin Workspace.
   * @param {string} targetId The ID of the target Workspace.
   * @param {Array<string>} kindIds An array of the IDs of the kinds to move.
   * @param {Array<string>} functionIds An array of the IDs of the functions to move.
   */
  moveKindsAndFunctions(originId, targetId, kindIds, functionIds) {
    return APICall('moveKindsAndFunctions', {
      originId,
      targetId,
      kindIds,
      functionIds
    })
  }

  //
  // Graphs
  //

  /**
   * Loads the function with its graph information attached.
   *
   * @param {string} id ID of the function to load the graph for.
   *
   * @returns {Promise<Function>} The function with the information about its graph.
   */
  getFunctionGraph(id) {
    return APICall('getFunctionGraph', id)
  }

  //
  // Render Mode
  //

  /**
   * Adds a listener to the render mode changed event.
   *
   * @param {function} cb Callback function.
   */
  addRenderModeChangedListener(cb) {
    EventEmitter.addListener('renderModeChanged', cb)
  }

  /**
   * Removed a listener from the render mode changed event, or all of them if
   * one is not specified.
   *
   * @param {function} [cb] Callback function.
   */
  removeRenderModeChangedListener(cb) {
    // If the callback is not provided, then remove all of the listeners.
    if (cb) {
      EventEmitter.removeListener('renderModeChanged', cb)
    } else {
      EventEmitter.removeAllListeners('renderModeChanged')
    }
  }

  /**
   * Gets the current render mode for the assistant.
   *
   * @returns {Promise<string>} The current render mode.
   */
  getRenderMode() {
    return APICall('getRenderMode')
  }

  //
  // Repair
  //

  /**
   * Adds a listener to the repair changed event.
   *
   * @param {function} cb Callback function.
   */
  addRepairListener(cb) {
    EventEmitter.addListener('repair', cb)
  }

  /**
   * Removed a listener from the repair changed event, or all of them if one is
   * not specified.
   *
   * @param {function} [cb] Callback function.
   */
  removeRepairListener(cb) {
    // If the callback is not provided, then remove all of the listeners.
    if (cb) {
      EventEmitter.removeListener('repair', cb)
    } else {
      EventEmitter.removeAllListeners('repair')
    }
  }

  //
  // Errors
  //

  /**
   * Reports an error to the UI for the user to be able view it.
   *
   * @param {Error|string} error The error object or an error message.
   */
  reportError(error) {
    return APICall('reportError', error)
  }

  //
  // Locking
  //

  /**
   * Adds a callback function to be called every time the locking changed event
   * is triggered.
   *
   * @param {Function} cb The callback function to call
   */
  addLockingChangedListener(cb) {
    EventEmitter.addListener(EventTypes.LOCKING_CHANGED, cb)
  }

  /**
   * Removes a callback function from the list be called every time the locking
   * changed event is triggered.  If no callback is passed in, then all
   * listeners are removed for the locking changed event.
   *
   *
   * @param {Function|undefined} cb The callback function to remove
   */
  removeLockingChangedListener(cb) {
    // If the callback is not provided, then remove all of the listeners.
    if (cb) {
      EventEmitter.removeListener(EventTypes.LOCKING_CHANGED, cb)
    } else {
      EventEmitter.removeAllListeners(EventTypes.LOCKING_CHANGED)
    }
  }

  //
  // Undocumented
  //

  getEventEmitter() {
    return EventEmitter
  }
}

// Export as singleton.
export default new AssistantAPIClient()
