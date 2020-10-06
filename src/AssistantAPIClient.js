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
 * Class that exposes concrete API calls to the parent API.
 * These calls are made over post-message via post-robot to the parent window.
 */
class AssistantAPIClient {
  constructor() {
    // Attach selection event emmiter to API listener
    createAPIListener('selectionChanged', async function(event) {
      EventEmitter.emit('selectionChanged', event.data)
    })

    // Attach function execution event emmiter to API listener.
    // Use convention to filter by function ID.
    createAPIListener('functionExecuted', async function(event) {
      EventEmitter.emit(`function:${event.data.id}`, event.data.result)
    })

    // Attach inventory event emitter to API listener.
    createAPIListener('inventoryChanged', async function(event) {
      EventEmitter.emit('inventoryChanged', event.data)
    })

    // Attach render mode event emitter to API listener.
    createAPIListener('renderModeChanged', async function(event) {
      EventEmitter.emit('renderModeChanged', event.data)
    })

    // Attach repair listener.
    createAPIListener('repair', async function(event) {
      EventEmitter.emit('repair', event.data)
    })

    // Attach locking changed listener.
    createAPIListener(EventTypes.LOCKING_CHANGED, async function(event) {
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
  clearState = () => {
    EventEmitter.removeAllListeners()
  }

  //
  // User Info
  //
  getUserInfo = () => APICall('getUserInfo')

  //
  // Selection
  //
  addSelectionChangedListener = async cb => {
    EventEmitter.addListener('selectionChanged', cb)
  }

  removeSelectionChangedListener = async cb => {
    // If the callback is not provided, then remove all of the listeners.
    if (cb) {
      EventEmitter.removeListener('selectionChanged', cb)
    } else {
      EventEmitter.removeAllListeners('selectionChanged')
    }
  }

  getCurrentSelection = () => APICall('getCurrentSelection')

  //
  // Services
  //
  getServiceById = id => APICall('getServiceById', id)

  createService = input => APICall('createService', input)

  refreshServiceSchema = input => APICall('refreshServiceSchema', input)

  reloadServiceSchema = id => APICall('reloadServiceSchema', id)

  deleteService = id => APICall('deleteService', id)

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
  createKind = input => APICall('createKind', input)

  updateKind = input => APICall('updateKind', input)

  deleteKind = input => APICall('deleteKind', input)

  getKindById = id => APICall('getKindById', id)

  getKindsById = ids => APICall('getKindsById', ids)

  getAllReferencedKinds = input => APICall('getAllReferencedKinds', input)

  //
  // Inventory
  //
  addInventoryChangedListener = async cb => {
    EventEmitter.addListener('inventoryChanged', cb)
  }

  removeInventoryChangedListener = async cb => {
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
  getFunctionGraph = id => APICall('getFunctionGraph', id)

  //
  // Render Mode
  //
  addRenderModeChangedListener = async cb => {
    EventEmitter.addListener('renderModeChanged', cb)
  }

  removeRenderModeChangedListener = async cb => {
    // If the callback is not provided, then remove all of the listeners.
    if (cb) {
      EventEmitter.removeListener('renderModeChanged', cb)
    } else {
      EventEmitter.removeAllListeners('renderModeChanged')
    }
  }

  getRenderMode = () => APICall('getRenderMode')

  //
  // Repair
  //
  addRepairListener = async cb => {
    EventEmitter.addListener('repair', cb)
  }

  removeRepairListener = async cb => {
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
  reportError = error => APICall('reportError', error)

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

  getEventEmitter = () => EventEmitter

  executeGraphql = input => APICall('executeGraphql', input)
}

// Export as singleton.
export default new AssistantAPIClient()
