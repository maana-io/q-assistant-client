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
  // Selection
  //
  addSelectionChangedListener = async (cb) =>{
    EventEmitter.addListener('selectionChanged',cb)
  }

  removeSelectionChangedListener = async (cb) =>{
    EventEmitter.removeListener('selectionChanged',cb)
  }

  getCurrentSelection = async () =>{
    return await APICall('getCurrentSelection')
  }

  //
  // Services
  //
  getServiceById = async (id) =>{
    var res = await APICall('getServiceById', id)
    // Call function on returned object--call by reference to parent
    console.log('res',res)
    if(res.someFunction) res.someFunction('hello')
    return res
  }

  //
  // Workspace
  //
  // Returns the backing, aggregate service for the workspace.
  getWorkspace = async () =>{
    return await APICall('getWorkspace')
  }

  //
  // Functions
  //
  executeFunction = async (input) => {
    return await APICall('executeFunction', input)
  }

  createFunction = async (input) => {
    return await APICall('createFunction', input)
  }

  updateFunction = async (input) => {
    return await APICall('updateFunction', input)
  }

  deleteFunction = async (input) => {
    return await APICall('deleteFunction', input)
  }

  getFunctionById  = async (id) =>{
    return await APICall('getFunctionById', id)
  }

  //
  // Kinds
  //
  createKind = async (input) => {
    return await APICall('createKind', input)
  }

  updateKind = async (input) => {
    return await APICall('updateKind', input)
  }

  deleteKind = async (input) => {
    return await APICall('deleteKind', input)
  }

  getKindById  = async (id) =>{
    return await APICall('getKindById', id)
  }
}

// Export as singleton. 
export default new AssistantAPIClient()
