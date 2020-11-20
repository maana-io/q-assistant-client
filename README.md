# q-assistant-client
A lightweight JavaScript client for Maana-Q Assistant developers that wraps post-message communication between an embedded Maana-Q assistant and the Maana-Q UI.

You can find the [API Documentation here](docs/README.md).

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

## Versioning
The Maana Q Assistant Client does not follow semantic versioning. Its versions
track the releases of the Maana Q platform.

## Examples
@TODO Logan


## Changes in v3.2.2
Improvements in v3.2.2
- Assistant State Management: WORKING, IDLE
- Background Messaging/Eventing
- Render Modes: BACKGROUND, DISPLAY
- Expansion of Workspace object capabilities
- Error Reporting
- Repair Event
- Plural versions of calls such as updateKind(s) to improve performance and developer experience.
- InventoryChanged diffing is fully granular in v3.2.2--limitations
in v3.2.1 only fired the Function diff for changes in Function name.

### Deprecation
The following surface area IS removed from the
client in v3.2.2, and IS deprecated in the API:
- AssistantAPIClient.enableSelectionChangedNotification
- AssistantAPIClient.disableSelectionChangedNotification
- AssistantAPIClient.enableInventoryChangedNotification
- AssistantAPIClient.disableInventoryChangedNotification

The following surface area WILL BE removed from
the client in v3.2.4, and WILL BE deprecated in the API:
- AssistantAPIClient.updateFunction (expected move to Workspace object)
- AssistantAPIClient.updateKind (expected move to Workspace object)
- AssistantAPIClient.deleteKind (expected move to Workspace object)
- AssistantAPIClient.deleteFunction (expected move to Workspace object)

## API Documentation
More information in the [API File](./API.md)

### Assistant Render Mode
An assistant's render mode refers to whether it is being displayed in a visible manner to the user. As of v3.2.2, assistants are not closed when they are out of view.
All assistants will be loaded and kept in `BACKGROUND` render mode until they are
placed in the assistant panel, at which point the `DISPLAY` render mode event will be fired.

Note: Assistants will receive all notifications/events while in BACKGROUND mode.

Design Consideration: It will be up to the developer to determine how state and resource use will be managed while an assistant is operating between BACKGROUND and DISPLAY modes.

#### addRenderModeChangedListener = (cb) =>
A listener to receive push events as to the assitant's render mode being changed.

```js
function handleRenderModeChanged(renderMode){
  if (renderMode === 'DISPLAY'){
    // Assistant is visible
  } else {
    // Assistant is not visible and running in background.
  }
}

AssistantAPIClient.addRenderModeChangedListener(handleRenderModeChanged)

```

#### removeRenderModeChangedListener = (cb) =>
Removes the renderModeChanged listener by reference, or if no callback function reference is provided, it removes all listeners.

#### getRenderMode = () =>
Returns the current assistant render mode.

```js
const renderMode = await AssistantAPIClient.getRenderMode()

if (renderMode === 'DISPLAY'){
  // Assistant is visible
} else {
  // Assistant is not visible and running in background.
}

```

### Repair
Assistants may get into situations where they are either out of sync with the Maana Q UI, or in a failure state. Assistants should be able to recover from these states.

The repair event functionality added in v3.2.2 is designed to notify the assistant that it must repair itself. This could mean a resync with its resources on the workspace or externally or, for some assistants, nothing at all.

When is repair triggered?
Either manually by a user clicking 'repair workspace' under the
assistant inventory panel, or upon a workspace clone event. An assistant will be expected to handle either scenario.

Performance Consideration:
For some assistants, repair might involve 'introspecting'
and processing the current workspace or Q system resources. This could be very resource intensive. Make sure you review this API guide to have an idea of what tools are
available to get the best results. It's always a good idea to check performance of repair on a large workspace and ensure necessary optimizations have been made.

Design Consideration:
Make your workflows modular enough to be reused between repair and normal usage if possible.

#### addRepairListener (cb) =>
```js

AssistantAPIClient.addRepairListener(()=>{
  // Self-heal
})

```

Recommended Usage: A repair process should be wrapped in the try/catch/finally flow shown in the `setAssistantState` API call to provide the user assistant-state and error updates as well as pause `inventoryChanged` notifications during repair (if the assistant has subscribed).

#### removeRepairListener = (cb) =>
Removes the repair listener by reference, or if no callback function reference is provided, it removes all listeners.

### User-facing Error Handling

#### reportError (error) =>
Reports an error to the UI to be displayed in the assistant's error log in the
inventory panel. This call is not disruptive and designed to operated independently of other assistant operations, such as state management. See `setAssistantState` in the next section.

Recommended usage: use this functionality where it would futher the user experience
to show the user an error and it's cause. Do not use this where things will be retried,
cleaned up automatically, or are not relevant to the user.

```js
try{
  // Do work
} catch(e) {
  AssistantAPIClient.reportError(e)
}
```

### State management

#### clearState = () =>
This will remove all callbacks from all listeners.

```js
await AssistantAPIClient.clearState()
```

#### setAssistantState = (state) =>
This sets the current state of the assistant using the
`AssistantState` enum. Setting a state of `WORKING` will
create the 'working' status spinner in the Assistant
Inventory Panel in the Maana Q UI. Conversely, setting an `IDLE` state will
remove the spinner. This adds to user experience by informing users of the
status of operations.

```js
import {
  default as AssistantAPIClient,
  AssistantState
} from '@io-maana/q-assistant-client'

...

AssistantAPIClient.setAssistantState(AssistantState.WORKING)

...

AssistantAPIClient.setAssistantState(AssistantState.IDLE)

```
UI User Prompt: If the assistant is in a `WORKING` state, the Maana Q UI will
warn the user before leaving the workspace.

NOTE: while an assistant is in a working state, it will
not receive `inventoryChanged` events--an aggregated inventory diff
will be sent once the assistant is set back to `IDLE`.

Recommended usage: Control states at a high level using try/catch/finally
flow incorporating the `reportError` API call.

```js
try{
  AssistantAPIClient.setAssistantState(AssistantState.WORKING)
  // Do work, await high-level tasks, etc.
} catch(e) {
  AssistantAPIClient.reportError(e)
} finally{
  AssistantAPIClient.setAssistantState(AssistantState.IDLE)
}
```

#### AssistantState (enum)
Contains the valid assistant states: `IDLE` or `WORKING`.

Must be imported in addition to the AssistantAPIClient:

```js
import {
  default as AssistantAPIClient,
  AssistantState
} from '@io-maana/q-assistant-client'
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

#### createService = id =>
Creates a service in Q.

Note: This will create the service, but does NOT import it into the workspace.
You will need to use `importService` on the Workspace object to import it.
Returns a promise that resolves

```js
    const service = {
      id: ...,
      name: ...,
      endpointUrl: ...,
      serviceType: ...
    }

    await AssistantAPIClient.createService(service)
```

#### deleteService = id =>
Deletes a service from Q.

```js
    await AssistantAPIClient.deleteService(id)
```

#### refreshServiceSchema = id =>
Refreshes a service by fetching its schema. This will also
reload the service inventory in the currently visible workspace.

```js
await AssistantAPIClient.refreshServiceSchema("id")
```

#### reloadService = id =>
Reloads a service in the inventory in the currently visible workspace.

```js
await AssistantAPIClient.reloadService("id")
```

### Workspace

#### getWorkspace = () =>
Returns a Workspace object representing the workspace.

```js
const ws = await AssistantAPIClient.getWorkspace(id)
```

Note: The `id` parameter is optional. If it is not supplied, the query
will return the current/visible workspace.

The `Workspace` object:

```js

{
    id: string,
    name: string,
    endpointUrl: string,
    workspaceServiceId: string,
    modelServiceId: string,
    logicServiceId: string,

    //
    // Locking information
    //
    async lockedBy() {
      // Returns the e-mail address of the user who locked the Workspace, or
      // null if the Workspace is not currently locked.
    }
    async canEdit() {
      // Returns `true` when the Workspace is not locked, or the current user
      // owns the lock.
      // Returns 'false' when the Workspace is locked by a different user.
    }
    async setLocked(isLocked) {
      // Takes a boolean or undefined for `isLocked`.
      //  `true` locks the Workspace as the current User.
      //  `false` unlocks the Workspace
      //  `undefined` causes it to toggle the current locked state.
      // Returns a Promise that will resolve or reject when the task is done.
    }

    //
    // Knowledge Graphs
    //
    getActiveGraph: async () => {
      // Returns the active Graph object.
      // Returns null if active graph is not of type 'Knowledge Graph', or if an
      // active graph is deleted, thereby setting active graph to null.
    },
    getKnowledgeGraphs: async () => {
      // Returns [Graph]
    },
    // TODO: define input
    createKnowledgeGraph: input =>
    // TODO: define input
    createKnowledgeGraphs: input =>

    //
    // Services
    //
    getImportedServices: async () => {
      // Returns an array of Service objects that have
      // been imported into the workspace.
      // No assistant services will be returned.
    },
    getImportedAssistants: async () => {
      // Returns a list of imported assistants.
    },
    importService: serviceId => {
      // Imports a service by it's ID.
    },
    importServices: serviceIds => {
      // Imports services by their IDs.
    },
    removeServices: serviceIds => {
      // Removes a list of services from the workspace.
    },
    removeService: serviceId => {
      // Removes a service from the workspace.
    },

    //
    // Functions
    //
    getFunctions: async () => {
      // Returns an array of functions in the workspace (includes boilerplate).
    },
    createFunction: funcData => {
      // Creates a function and adds it to the graph.
    }
    createFunctions: funcData =>{
      // Creates several functions and adds them to the graph.
    }
    updateFunction: funcData => {
      // Updates a function.
    },
    updateFunctions: funcData =>{
      // Updates functions based on input array.
    },
    deleteFunction: funcId => {
      // Deletes a function by its ID.
    },
    getFunctionGraph: funcId => {
      // Returns a function graph by its ID.
    }

    //
    // Kinds
    //
    getKinds: async () => {
      // Returns an array of functions in the workspace (includes boilerplate).
    },
    createKind: kindData => {
      // Currently same input as AssistantAPIClient call.
    },
    createKinds: kindData => {
      // Currently same input as AssistantAPIClient call.
    },
    updateKind: kindData => {
      // Currently same input as AssistantAPIClient call.
    },
    updateKinds: kindData => {
      // Currently same input as AssistantAPIClient call.
    },
    deleteKind: kindId => {
      // Currently same input as AssistantAPIClient call.
    }
    // Event Triggers
    triggerRepairEvent: () => {
      // Triggers the repair event on a workspace.
    }
  };
}
```


### Graphs
The `Graph` object:
```js
{
  id: string,
  name: string,
  offsetX: Number,
  offsetY: Number,
  zoom: Number,
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
  },
  updateGraphLayout: async ({ offsetX, offsetY, zoom }) => {
  }

  //
  // Locking information
  //
  async lockedBy() {
    // Returns the e-mail address of the user who locked the Graph, or null if
    // the Graph is not currently locked.
  }
  async canEdit() {
    // Returns `true` when the Graph is not locked, or the current user owns the
    // lock.
    // Returns 'false' when the Graph is locked by a different user.
  }
  async setLocked(isLocked) {
    // Takes a boolean or undefined for `isLocked`.
    //  `true` locks the Graph as the current User.
    //  `false` unlocks the Graph
    //  `undefined` causes it to toggle the current locked state.
    // Returns a Promise that will resolve or reject when the task is done.
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
    functionType: string
    graphqlOperationType: string
    outputType: string
    outputKindId: string
    outputModifiers: Array[string]
    kind {
      id: string
      name: string
    }

    //
    // Locking information
    //
    async lockedBy() {
      // Returns the e-mail address of the user who locked the Function, or null
      // if the Function is not currently locked.
    }
    async canEdit() {
      // Returns `true` when the Function is not locked, or the current user
      // owns the lock.
      // Returns 'false' when the Function is locked by a different user.
    }
    async setLocked(isLocked) {
      // Takes a boolean or undefined for `isLocked`.
      //  `true` locks the Function as the current User.
      //  `false` unlocks the Function
      //  `undefined` causes it to toggle the current locked state.
      // Returns a Promise that will resolve or reject when the task is done.
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
  functionType: "CKG"
}

const createdFunction = await AssistantAPIClient.createFunction(createFunctionInput)
```

#### updateFunction = input =>
Input is the same for creating a function. It’s important to note that the arguments property will be replaced in it’s entirety with whatever is provided (if a value is provided.

Returns the updated `Function` object.

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

#### createKinds = input =>
A plural version of `createKind` accepting an array of input objects.
Returns a promise that resolves to an array of created Kind objects.

```js
const kindsInput = [{
 name: "someKind",
 schema:[
  { name: "someField1", type: STRING },
  { name: "someField2", type: STRING }
 ]
}, ...]

const newKinds = await AssistantAPIClient.createKinds(kindsInput)
```


#### updateKind = input =>
Updates a Kind based on an input object.

Update Semantics: Only properties specified will be updated. If updating the schema, the entire schema must be specified as it will be replaced in its entirety.

Returns a promise that resolves to the updated `Kind` object.

```js
const updated = await AssistantAPIClient.updateKind(input)
```

#### deleteKind = input =>
Deletes a Kind given a kind ID.

```js
const deleted = await AssistantAPIClient.deleteKind(input)
```

#### getKindById = id =>
Returns a promise that resolves to a Kind object given the specified kind ID.

In v3.2.2, any requested non-system kinds will be returned.
In v3.2.1, only kinds in the workspace or those of imported services will be returned.

```js
const kind = await AssistantAPIClient.getKindById(id)
```

#### getKindsById = ids =>
Returns a promise that resolves to an array of Kind objects given an array of kind IDs. Only kinds in the workspace or those of imported services will be returned.

```js
const ids = ["...","...",...]
const kind = await AssistantAPIClient.getKindsById(ids)
```

#### getAllReferencedKinds = input =>
Recursively collects all kinds that are referenced in a kind's schema, starting
with a kind ID. For example if the ID of kind A is supplied as an input, and Kind `A` contains a field of type Kind `B`, and `B` contains a field of type Kind `C`,
an array containing the kinds objects for `A`, `B`, `C` will be returned (as a promise).

```js
const initialId = ["..."]
const kinds = await AssistantAPIClient.getAllReferencedKinds({
          ids: initialId
        })
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

#### moveKindsAndFunctions = (originId, targetId, kindIds, functionIds) =>
Moves a collection of Kinds and Functions from the origin Workspace to the target Workspace.

```js
  await AssistantAPIClient.moveKindsAndFunctions(
    originWorkspaceId,
    targetId,
    kindIds,
    functionIds
  );
```

### Locking Changed Event

An event is triggered when the locked state of the currently active Workspace or
its Knowledge Graphs and Functions change.

The `LockingChanged` object:
```js
{
  workspaces: [LockItem],
  knowledgeGraphs: [LockItem],
  functions: [LockItem]
}
```

The `LockItem` object:
```js
{
  id: string
  lockedBy: string
}
```

#### addLockingChangedListener = cb =>

Registers a callback function with the locking changed event. When the currently
active Workspace or its Knowledge Graphs and Functions change the callback
function will be called with the `LockingChanged` object. Returns undefined.

```js
const lockingChangedCB = ({ locks }) => {
  if(locks.workspace) console.log('WORKSPACES CHANGED', locks.workspace);
  if(locks.knowledgeGraphs) console.log('KNOWLEDGE GRAPHS CHANGED', locks.knowledgeGraphs);
  if(locks.functions) console.log('FUNCTIONS CHANGED', locks.functions);
}

AssistantAPIClient.addLockingChangedListener(lockingChangedCB);
```

#### removeLockingChangedListener = cb =>

Removes an locking changed listener given the referenced callback. If no
callback is specified, all listeners will be removed. Returns undefined.

```js
AssistantAPIClient.removeLockingChangedListener(lockingChangedCB)
```

## Troubleshooting Assistant Issues
### Assistant root file has loaded, but not other content
Observing in the browser's dev tools that some resources have loaded correctly (usually the root), but other's haven't (usually nested files or chunks), is indicative of a failure of Q Gateway to proxy due to not having a 'relative' path structure.

### You are seeing post-robot `NO ACK` errors in the console.
These errors stem from a failed acknowledgement for a call either between the client and the API or vice-versa. Here, this means that the web app 'window' (the assistant) cannot communicate with, or access, the 'window.parent' (Maana K-Portal) object.

Commonly, these will stem from the 'window' (the assistant) not being loaded or in a loadable state, which means the API will not receive an acknowledgement when it fires an event.

Improper CORS configuration is also a common culprit (also verify if using docker or nginx that your proxying and networking is configured correctly to allow communication and to accout for CORS).