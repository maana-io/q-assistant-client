import postRobot from 'post-robot'
const events = require('events')
const EventEmitter = new events.EventEmitter()

// Wrapper for post-robot async client -> API call.
const APICall = async (callName, arg)=>{
  try{
    const { source, origin, data } = await postRobot.send(window.parent, callName, arg)
    return data
  } catch (ex){
    return ex.message
  }
}

// Wrapper for post-robot listener.
const createAPIListener = async (callName, cb)=>{
  postRobot.on(callName,cb)
}

/**
 * Class that exposes concrete API calls to the parent API.
 * These calls are made over post-message via post-robot to the parent window.
 */
class AssistantAPIClient{
  constructor(){
    // Attach selection event emmiter to API listener
    createAPIListener('selectionChanged', async function(event){
      EventEmitter.emit('selectionChanged',event.data)
    })

    // Attach function execution event emmiter to API listener.
    // Use convention to filter by function ID.
    createAPIListener('functionExecuted', async function(event){
      EventEmitter.emit(`function:${event.data.id}`,event.data.result)
    })

    // Attach inventory event emitter to API listener.
    createAPIListener('inventoryChanged', async function(event){
      EventEmitter.emit('inventoryChanged',event.data)
    })
  }

  //
  // State management
  //
  clearState = () =>{
    EventEmitter.removeAllListeners()
    APICall('clearState')
  }

  getEventEmitter = () => EventEmitter

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
    EventEmitter.addListener('selectionChanged',cb)
  }

  removeSelectionChangedListener = async cb => {
    // If the callback is not provided, then remove all listeners.
    if(cb){
      EventEmitter.removeListener('selectionChanged', cb)
    } else{
      EventEmitter.removeAllListeners('selectionChanged')
    }
    // After removing the callback, determine if the noticiations should be implicitly disabled.
    if(EventEmitter.listenerCount('selectionChanged') === 0){
      this.disableSelectionChangedNotification()
    }
  }

  getCurrentSelection = () => APICall('getCurrentSelection')

  // Called when adding a selection event listener. 
  enableSelectionChangedNotification = async () => APICall('enableSelectionChangedNotification')

  // Called when removing a selection event listener. 
  disableSelectionChangedNotification = async () => APICall('disableSelectionChangedNotification')

  //
  // Services
  //
  getServiceById = id => APICall('getServiceById', id)

  //
  // Workspace
  //
  getWorkspace = () => APICall('getWorkspace')

  //
  // Functions
  //
  executeFunction = input => APICall('executeFunction', input)

  createFunction = input => APICall('createFunction', input)

  updateFunction = input => APICall('updateFunction', input)

  deleteFunction = input => APICall('deleteFunction', input)

  getFunctionById = id => APICall('getFunctionById', id)

  addFunctionExecutionListener = async (id, cb) => {
    if (await APICall('addFunctionExecutionListener', id)){
      EventEmitter.addListener(`function:${id}`, cb)
    } else{
      throw new Error('Assistant Client Error: Failed to attach event listener.')
    }
  }

  removeFunctionExecutionListener = async (id, cb) => {
    if (await APICall('removeFunctionExecutionListener', id)){
      // If the callback is not provided, then remove all of the listeners.
      if (cb){
        EventEmitter.removeListener(`function:${id}`, cb)
      } else{
        EventEmitter.removeAllListeners(`function:${id}`)
      }
    } else{
      throw new Error('Assistant Client Error: Failed to remove event listener.')
    }
  }

  //
  // Kinds
  //
  createKind = input => APICall('createKind', input)

  updateKind = input => APICall('updateKind', input)

  deleteKind = input => APICall('deleteKind', input)

  getKindById = id => APICall('getKindById', id)

  //
  // Inventory
  //

  // Called when adding inventory changed listener.
  enableInventoryChangedNotification = async () => APICall('enableInventoryChangedNotification')

  // Called when removing inventory changed listener if listener count is zero.
  disableInventoryChangedNotification = async () => APICall('disableInventoryChangedNotification')

  addInventoryChangedListener = async cb => {
    this.enableInventoryChangedNotification()
    EventEmitter.addListener('inventoryChanged', cb)
  }

  removeInventoryChangedListener = async cb => {
    // If the callback is not provided, then remove all listeners.
    if(cb){
      EventEmitter.removeListener('inventoryChanged', cb)
    } else{
      EventEmitter.removeAllListeners('inventoryChanged')
    }
    // After removal, determine if we should implicitly disable notification.
    if(EventEmitter.listenerCount('inventoryChanged') === 0){
      this.disableInventoryChangedNotification()
    }
  }
}

// Export as singleton. 
export default new AssistantAPIClient()
