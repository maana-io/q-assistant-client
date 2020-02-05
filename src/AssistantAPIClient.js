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

    // Attch clone listener.
    createAPIListener('onClone', async function(event){
      // Only create a promise or call the event if there's a subscriber.
      if(EventEmitter._events.onClone){
        // Manually invoke event to get promise.
        let promise = EventEmitter._events.onClone()
        return promise
      }
    })
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
  getWorkspace = () => APICall('getWorkspace')

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

  //
  // Clone
  //
  addOnCloneListener = async (cb) => {
    EventEmitter.addListener('onClone', cb)
  }

  removeOnCloneListener = async (cb) => {
    // If the callback is not provided, then remove all of the listeners.
    if (cb) {
      EventEmitter.removeListener('onClone', cb)
    } else {
      EventEmitter.removeAllListeners('onClone')
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
