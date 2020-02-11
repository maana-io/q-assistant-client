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
  }

  //
  // State management
  //
  clearState = () => {
    EventEmitter.removeAllListeners()
    APICall('clearState')
  }

  //
  // User Info
  //
  getUserInfo = () => APICall('getUserInfo')

  //
  // Selection
  //
  addSelectionChangedListener = async cb => {
    // Implicitly enable selection notifications from the API.
    this.enableSelectionChangedNotification()

    // Add listener now that notifications are enabled.
    EventEmitter.addListener('selectionChanged', cb)
  }

  removeSelectionChangedListener = async cb => {
    // If the callback is not provided, then remove all of the listeners.
    if (cb) {
      EventEmitter.removeListener('selectionChanged', cb)
    } else {
      EventEmitter.removeAllListeners('selectionChanged')
    }
    // After removing the callback, determine if the noticiations should be implicitly disabled.
    if (EventEmitter.listenerCount('selectionChanged') === 0) {
      this.disableSelectionChangedNotification()
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
    APICall('getWorkspace', id)
  }

  /**
   * Returns a list of user accessible Workspaces.  By default it will just be
   * the user owned Workspaces, but can be configured to also return all the
   * public workspaces.
   *
   * @param {boolean} includePublic When true the returned list includes public Workspaces.
   * @return {Array<Workspace>} The list of Workspaces.
   */
  userAccessibleWorkspaces(includePublic = false) {
    APICall('userAccessibleWorkspaces', includePublic)
  }

  /**
   * Creates a new Workspace.  The id, name, and serviceId can optionally be
   * set, or they can be left undefined to use the defaults.
   *
   * @param {Object} workspace The Workspace information, can container {id, name, serviceId}
   */
  createWorkspace(workspace) {
    APICall('createWorkspace', workspace)
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

  addFunctionExecutionListener = async (id, cb) => {
    if (await APICall('addFunctionExecutionListener', id)) {
      EventEmitter.addListener(`function:${id}`, cb)
    } else {
      throw new Error(
        'Assistant Client Error: Failed to attach event listener.'
      )
    }
  }

  removeFunctionExecutionListener = async (id, cb) => {
    if (await APICall('removeFunctionExecutionListener', id)) {
      // If the callback is not provided, then remove all of the listeners.
      if (cb) {
        EventEmitter.removeListener(`function:${id}`, cb)
      } else {
        EventEmitter.removeAllListeners(`function:${id}`)
      }
    } else {
      throw new Error(
        'Assistant Client Error: Failed to remove event listener.'
      )
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

  //
  // Inventory
  //
  addInventoryChangedListener = async cb => {
    this.enableInventoryChangedNotification()
    EventEmitter.addListener('inventoryChanged', cb)
  }

  removeInventoryChangedListener = async cb => {
    // If the callback is not provided, then remove all of the listeners.
    if (cb) {
      EventEmitter.removeListener('inventoryChanged', cb)
    } else {
      EventEmitter.removeAllListeners('inventoryChanged')
    }
    // After removing the callback, determine if the notifications should be implicitly disabled.
    if (EventEmitter.listenerCount('inventoryChanged') === 0) {
      this.disableInventoryChangedNotification()
    }
  }

  /**
   * Moves a collection of Kinds and Functions from the origin Workspace to the
   * target Workspace.
   *
   * @param {string} originId The ID of the origin Workspace.
   * @param {string} targetId The ID of the target Workspace.
   * @param {Array<string>} kinds An array of the IDs of the kinds to move.
   * @param {Array<string?} functions An array of the IDs of the functions to move.
   */
  moveKindsAndFunctions(originId, targetId, kindIds, functionIds) {
    APICall('moveKindsAndFunctions', {
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
  // Undocumented
  //

  // Called when adding an inventory changed event listener.
  enableInventoryChangedNotification = async () =>
    APICall('enableInventoryChangedNotification')

  // Called when removing the last inventory changed event listener.
  disableInventoryChangedNotification = async () =>
    APICall('disableInventoryChangedNotification')

  // Called when adding a selection event listener.
  enableSelectionChangedNotification = async () =>
    APICall('enableSelectionChangedNotification')

  // Called when removing a selection event listener.
  disableSelectionChangedNotification = async () =>
    APICall('disableSelectionChangedNotification')

  getEventEmitter = () => EventEmitter

  executeGraphql = input => APICall('executeGraphql', input)
}

// Export as singleton.
export default new AssistantAPIClient()
