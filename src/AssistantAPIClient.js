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
    // Attach event emmiter to API listener
    createAPIListener('selectionChanged', async function(event){
      EventEmitter.emit('selectionChanged',event.data)
    })
  }

  //
  // User Info
  //
  getUserInfo = () => APICall('getUserInfo')

  //
  // Selection
  //
  addSelectionChangedListener = cb => EventEmitter.addListener('selectionChanged',cb)

  removeSelectionChangedListener = cb => EventEmitter.removeListener('selectionChanged',cb)

  getCurrentSelection = () => APICall('getCurrentSelection')


  //
  // Services
  //
  getServiceById = id => APICall('getServiceById', id)

  //
  // Workspace
  //
  // Returns the backing, aggregate service for the workspace.
  getWorkspace = () => APICall('getWorkspace')

  //
  // Functions
  //
  executeFunction = input => APICall('executeFunction', input)

  createFunction = input => APICall('createFunction', input)

  updateFunction = input => APICall('updateFunction', input)

  deleteFunction = input => APICall('deleteFunction', input)

  getFunctionById = id => APICall('getFunctionById', id)


  //
  // Kinds
  //
  createKind = input => APICall('createKind', input)

  updateKind = input => APICall('updateKind', input)

  deleteKind = input => APICall('deleteKind', input)

  getKindById = id => APICall('getKindById', id)
}

// Export as singleton. 
export default new AssistantAPIClient()
