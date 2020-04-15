import postRobot from 'post-robot'
const events = require('events')
const EventEmitter = new events.EventEmitter()

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
      EventEmitter.emit('repair',event.data)
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

  importService = id => APICall('importService', id)

  importServices = input => APICall('importServices', input)

  refreshServiceSchema = input => APICall('refreshServiceSchema', input)

  reloadServiceSchema = id => APICall('reloadServiceSchema', id)

  //
  // Workspace
  //

  /**
   * Returns the requested Workspace, if no Workspace ID is specified it returns
   * the Workspace that the user is currently using.
   *
   * @param {string} id The ID of the Workspace to load. (optional)
   * @return {Workspace} The requested Workspace.
   */
  getWorkspace(id) {
    return APICall('getWorkspace', id)
  }

  /**
   * Returns a list of user accessible Workspaces.  By default it will just be
   * the user owned Workspaces, but can be configured to also return all the
   * public workspaces.
   *
   * @param {boolean} includePublic When true the returned list includes public Workspaces.
   * @return {Array<Workspace>} The list of Workspaces.
   */
  getUserAccessibleWorkspaces(includePublic = false) {
    return APICall('getUserAccessibleWorkspaces', includePublic)
  }

  /**
   * Creates a new Workspace.  The id, name, and serviceId can optionally be
   * set, or they can be left undefined to use the defaults.
   *
   * @param {Object} workspace The Workspace information, can container {id, name, serviceId}
   * @return {Workspace} The new Workspace.
   */
  createWorkspace(workspace) {
    return APICall('createWorkspace', workspace)
  }

  //
  // Functions
  //
  executeFunction = input => APICall('executeFunction', input)

  createFunction = input => APICall('createFunction', input)

  createFunctions = input => APICall('createFunctions', input)

  updateFunction = input => APICall('updateFunction', input)

  updateFunctions = input => APICall('updateFunctions', input)

  deleteFunction = input => APICall('deleteFunction', input)

  getFunctionById = id => APICall('getFunctionById', id)

  getFunctionsById = ids => APICall('getFunctionsById', ids)

  addFunctionExecutionListener = async (id, cb) => {
    EventEmitter.addListener(`function:${id}`, cb)
  }

  removeFunctionExecutionListener = async (id, cb) => {
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

  createKinds = input => APICall('createKinds', input)

  updateKind = input => APICall('updateKind', input)

  updateKinds = input => APICall('updateKinds', input)

  deleteKind = input => APICall('deleteKind', input)

  getKindById = id => APICall('getKindById', id)

  getKindsById = ids => APICall('getKindsById', ids)

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
  // Undocumented
  //

  getEventEmitter = () => EventEmitter

  executeGraphql = input => APICall('executeGraphql', input)
}

// Export as singleton.
export default new AssistantAPIClient()
