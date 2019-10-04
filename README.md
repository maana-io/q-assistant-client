# q-assistant-client
A lightweight JavaScript client for Maana-Q Assistant developers that wraps post-message communication between an embedded Maana-Q assistant and the Maana-Q UI.

## Abstract
The Q-Assistant-Client is intented to be used in a web application being leveraged as a Maana Q assistant (embedded as an iframe).
This assistant client will facilitate communication between the assistant and the parent frame.
The client provides a rich, asynchronous experience over what would otherwise be 'fire-and-forget'-style messaging 
via post-post message communication. 

## Requirements and Assumptions

### Post-Robot Library
The Maana Knowledge Portal (KPortal) uses the kraken/post-robot library [kraken/post-robot](https://github.com/krakenjs/post-robot) to enrich the communication with the assistant. Post-robot allows for asynchronous, promise-based request/response style behavior between the assistant and the assistant API.

The API requires that the client use the post-robot library. This assistant-client library is the easiest way to achieve this, and also adds a fair amount of 'sugar' to the process to improve developer productivity. Developers could, however, use post-robot directly in their own client implementation. 

### Maana-Gateway Proxy Requirements
The Maana-Gateway service requires relative paths (paths relative to the root) in the assistant web application in order to proxy the application and its content. For create-react-apps, for instance, this means setting "homepage" to "." in the package.json file.

## Singleton Instance
The client is exported as a singleton to avoid duplicate registration on event listeners.
You can import the instance like this:

```js
import AssistantAPIClient from '@io-maana/q-assistant-client';
```

Function calls can be made against the client instance like any other javascript object. They are all async.

```js
const workspace = await AssistantAPIClient.getWorkspace(); 
console.log("Workspace:", workspace)
```

## Dependencies
Post-Robot
https://github.com/krakenjs/post-robot

Post-robot is used to provide a richer communication layer atop post-message.

## Examples
@TODO Logan

## API Documentation

### State management

#### clearState = () =>

This will clear all ‘attached’ state between the assistant and the API. 

Specifically, this will clear selection and inventory changed event listeners. 

```js
await AssistantAPIClient.clearState()
```

### User Info
The `UserInfo` object:
```js
{
 email: string,
 name: string
}
```

#### getUserInfo = () => 

Returns a Userinfo object pertaining to the logged in user.

```js
const userInfo = await AssistantAPIClient.getUserInfo()
```
### Selection
The `Selection` object:
```js
{
  kindId: string
  kindName: string
  id: string
}
```

#### getCurrentSelection = () => 

Returns an Array of `Selection` objects:

```js
const {selection} = await AssistantAPIClient.getCurrentSelection();
```

#### addSelectionChangedListener = async cb =>

Adds a callback function to be executed upon a valid workspace selection change.

Callback value is an array of Selection objects:

```js
// Create the selection callback.
const selectionCB = ({selection})=>{
  console.log('Workspace selection has changed.')
  selection.forEach(i=>{
    console.log('Kind: ',i.kindName)
    console.log('Instance Id:',i.id)
    console.log('Kind Id:',i.kindId)
  })
}

// Add the listener.
AssistantAPIClient.addSelectionChangedListener(selectionCB);
```

This function only exists on the Q-Assistant-Client--only enableSelectionChangedNotification is called on the API. 

#### removeSelectionChangedListener = async cb =>

This will have to be called on a 1:1 basis with addSelectionChangedListener calls if supplying a callback.

```js
AssistantAPIClient.removeSelectionChangedListener(selectionCB)
```

**If NOT supplying a callback to this call, all selection changed listeners will be removed.

```js
AssistantAPIClient.removeSelectionChangedListener()
```

This function only exists on the Q-Assistant-Client--only disableSelectionChangedNotification is called on the API. 


### Services
The `Service` object:
```js
{
   id: string,
   name: string
   endpointUrl: string,
   getKinds: () => // Returns [] of Kinds objects
   getFunctions: () => // Returns [] of Function objects
}
```

#### getServiceById = id =>
This will return a service that exists within the scope of the workspace. 
** Assistant services will return null. Services outside the scope of the workspace will cause an error to be returned as 'Unable to load a Service from outside of the workspace.'

```js
const svc = await AssistantAPIClient.getServiceById(id)
```

### Workspace
The `Workspace` object:
```js
{
id: string,
name: string,
getKinds: () => {
  // Returns an array of functions in the workspace (includes boilerplate).
},
getFunctions: () =>
  // Returns an array of functions in the workspace (includes boilerplate).
getActiveGraph: () => {
  // Returns the active Graph object.
},
getKnowledgeGraphs: () => {
  // Returns [Graph]
},
getImportedServices: () => {
  // Returns an service imported into the workspace
  // as a array of Service object (this calls the function
  // that underlies getServiceById.
  // No assistant services will be returned.
}
}
```

#### getWorkspace = () =>

Returns a Workspace object representing the workspace. 

```js
const ws = await AssistantAPIClient.getWorkspace()
```

### Graphs
The `Graph` object:
```js
{     
id,
name,
getNodes: async () => {
    // Returns [Node]
},

addNode: async (type, instance, changeSelection) => {
    // Returns Node
},
removeNode: async id => {
    // Should return nothing or error.
    // Currently returning [] in all cases.
},
updateNodeLayout: async (nodeId, { x, y, collapsed }) => {
    // Returns
},
updateGraphLayout: async ({ offsetX, offsetY, zoom }) => {
}
}
```

#### Getting a graph object:
Graph objects are obtained through an instance of a Workspace 

```js
const ag = await ws.getActiveGraph()
```

or

```js
const kgs = await ws.getKnowledgeGraphs()
```

#### Manipulating Graphs

**Only the active graph may be manipulated.

All graph manipulations should be ‘visually’ verifiable on the graph itself, i.e., adds/removes/positioning, should all be reflected on the graph itself. 

The `Node` object:
```js
{
id: string
x: number
y: number
collapsed: boolean
knowledgeGraphNode {
  id: string
  innerKind: Kind
  innerFunction: Function
}
}
```

#### addNode(type, instance, changeSelection) =>

Takes type (“Function” or “Kind”), instance (the Function or Kind object), and optionally a boolean to indicate whether the selection should be changed to this new node. 

Returns the newly created Node object.

```js
const node = await ag.addNode('Kind',kind)
```

#### removeNode(id) =>

Takes the id of Node to be deleted. Returns either undefined or an error. 

```js
await ag.removeNode(node.id)
```

#### getNodes() =>
Returns an array of Node objects from the graph. 

```js
const nodes = await ag.getNodes()
```

#### updateNodeLayout: async (nodeId, { x, y, collapsed})=>

Updates a Node layout given a node ID and node coordinates (`x` and/or `y`) or a `collapsed` value. x/y values must be a number, and collapsed must be a boolean. Whatever is not specified will remain current.

```js
ag.updateNodeLayout(id,{x:100,y:100,collapsed:true})
```

#### updateGraphLayout: async ({ offsetX, offsetY, zoom})=>

Updates a Graph layout given numerical values for x/y offsets and the zoom. 

```js
ag.updateGraphLayout({offsetX:50, offsetY:50, zoom: 70})
```

### Functions

The `Function` object:
```js
{
    id: string
    name: string
    service {
      id: string
      name: string
    }
    arguments {
      id: string
      name: string
      type: string
      modifiers: Array[string]
      typeKindId:: string
      kind {
        id: string
        name: string
      }
    }
    implementation {
      id: string
      entrypoint {
        id: string
      }
      operations {
        id: string
        type: string
        function {
          id: string
          name: string
        }
        argumentValues {
          id: string
          argument {
            id: string
          }
          operation {
            id: string
          }
          argumentRef: string
        }
      }
    }
    isGenerated: boolean
    outputType: string
    outputKindId: string
    outputModifiers: Array[string]
    kind {
      id: string
      name: string
    }
}
```

`FunctionExecutionResult` object:
```js
{
  id: string,
  result: JSON
}
```

#### executeFunction = ( {id, variables, resolve} ) =>

Executes a function based on its id, with optional inputs for variables and a resolve string (this specifies the fields to be returned, which must be valid based on the result).

Returns : JSON matching shape of result , unless no sub-selection of fields is required in the execution.

This following piece of code will execute a Function given a function ID, and pass in variables for ‘example’, requesting back id and name fields. 

```js 
const res = await AssistantAPIClient.executeFunction({functionId: func.id, variables: {"variableName": "variableValue"}, resolve: "{ id name }");
```

#### createFunction = input =>

Creates a function based on the input provided. 

Returns: the created Function object.

**Using create function will only place the function in the workspace’s inventory--it will not place the function as a node on the Graph. In order to do this, you must pass the created function into the addNode function on the active Graph, making sure to specify ‘Function' as the type.

```js
const createFunctionInput = {
  name:"yourName",
  arguments:[],
  outputType: "STRING",
  graphqlOperationType:"QUERY",
  functionType: "PROJECTION"
}
  
const createdFunction = await AssistantAPIClient.createFunction(createFunctionInput)
```

#### updateFunction = input =>

Input is the same for creating a function. It’s important to note that the arguments property will be replaced in it’s entirety with whatever is provided (if a value is provided.

@TODO: Return value

```js
const updatedFunction = await AssistantAPIClient.updateFunction(input);
```

#### deleteFunction = input =>

Input is the id of the Function to be deleted. Returns the deleted function as a promise.

```js
const deletedFunction = await AssistantAPIClient.deleteFunction('id...');
```

#### getFunctionById = id =>

Returns a Function as a promise based on the ID provided.

```js
const func = await AssistantAPIClient.getFunctionById('id...');
```

#### addFunctionExecutionListener = async (id, cb) =>

Associates a callback function with the execution of a particular Function. When the Function matching the id parameter is executed, its FunctionExecutionResult object passed to the callback. Returns undefined.

Example function execution callback and listener registration:

```js
function exampleFunctionCB (result){
  console.log(`Function executed with result:`, result)
}

AssistantAPIClient.addFunctionExecutionListener('id...', exampleFunctionCB)
```

#### removeFunctionExecutionListener = async (id, cb) =>

Removes a Function execution listener based on the function ID and a reference to the callback function. If no callback is supplied, all listeners associated with the Function ID will be removed. Returns undefined.

```js
AssistantAPIClient.removeFunctionExecutionListener('id..', exampleFunctionCB)
```

### Kinds
The `Kind` object:
```js
{
    id: string
    name: string
    service: {
      id
      name
    }
    isGenerated: boolean
    schema {
      id: string
      name: string
      type: string
      typeKindId: string
      modifiers: Array[string]
      kind {
        id: string
        name: string
      }
    }
}
```

#### createKind = input =>

Creates a Kind based on an input object. Returns a promise that resolves to the created Kind object.

```js
const kindInput = {
 name: "someKind",
 schema:[
  { name: "someField1", type: STRING },
  { name: "someField2", type: STRING }
 ]
}

const newKind = await AssistantAPIClient.createKind(kindInput)
```

#### updateKind = input =>

@TODO return value

Updates a Kind based on an input object. 

Update Semantics: Only properties specified will be updated. If updating the schema, the entire schema must be specified as it will be replaced in its entirety. 

```js
const updated = await AssistantAPIClient.updateKind(input)
```

#### deleteKind = input =>

Deletes a Kind given a kind ID.

```js
const deleted = await AssistantAPIClient.deleteKind(input)
```

#### getKindById = id =>

Returns a promise that resolves to a Kind object given the specified kind ID. Only kinds in the workspace or those of imported services will be returned. 

```js
const kind = await AssistantAPIClient.getKindById(id)
```

### Inventory

The `InventoryChanged` object:
```js
{
  kinds: {
    adds: [DiffItem]
    deletes: [DiffItem]
    updates: [DiffItem]
  }
  functions:{
    adds: [DiffItem]
    deletes: [DiffItem]
    updates: [DiffItem]
  }
  services: {
    adds: [DiffItem]
    deletes: [DiffItem]
    updates: [DiffItem]
  }
}
```

The `DiffItem` object:
```js
{
  id: string,
  name: string
}
```

#### addInventoryChangedListener = async cb =>

Registers a callback function with the inventory changed event. When workspace inventory changes the callback function will be called with the InventoryChangedobject. Returns undefined.

*Current limitations: Kind and Function updates only occur where the name property is changed. Updates to services outside of the workspace will not be detected. 

**Use-case note: an ‘update’ diff for inventory services is unlikely in general usage. 

```js
const inventoryCB = ({diff}) => {
  if(diff.kinds) console.log('KINDS CHANGED',diff.kinds)
  if(diff.functions) console.log('FUNCTIONS CHANGED', diff.functions)
  if(diff.services) console.log('SERVICES CHANGED',diff.services)
}

AssistantAPIClient.addInventoryChangedListener(inventoryCB)
```

This function exists on the Q-Assisant-Client only--only enableSelectionChangedNotification is used on the API side. 

#### removeInventoryChangedListener = async cb =>

Removes an inventory changed listener given the referenced callback. If no callback is specified, all listeners will be removed. Returns undefined.

```js
AssistantAPIClient.removeInventoryChangedListener(inventoryCB)
```

This function exists on the Q-Assisant-Client only--only disableSelectionChangedNotification is used on the API side. 

## Troubleshooting Assistant Issues
### Assistant root file has loaded, but not other content
Observing in the browser's dev tools that some resources have loaded correctly (usually the root), but other's haven't (usually nested files or chunks), is indicative of a failure of Q Gateway to proxy due to not having a 'relative' path structure.

### You are seeing post-robot `NO ACK` errors in the console.
These errors stem from a failed acknowledgement for a call either between the client and the API or vice-versa. Ensure that your window and window.parent objects are valid and they are able to communicate with one another.