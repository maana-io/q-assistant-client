**[Maana Q Assistant API Client](../README.md)**

> [Globals](../README.md) / AssistantAPIClient

# Namespace: AssistantAPIClient

## Index

### Functions

* [addFunctionExecutionListener](assistantapiclient.md#addfunctionexecutionlistener)
* [addInventoryChangedListener](assistantapiclient.md#addinventorychangedlistener)
* [addLockingChangedListener](assistantapiclient.md#addlockingchangedlistener)
* [addRenderModeChangedListener](assistantapiclient.md#addrendermodechangedlistener)
* [addRepairListener](assistantapiclient.md#addrepairlistener)
* [addSelectionChangedListener](assistantapiclient.md#addselectionchangedlistener)
* [clearState](assistantapiclient.md#clearstate)
* [createFunction](assistantapiclient.md#createfunction)
* [createKind](assistantapiclient.md#createkind)
* [createService](assistantapiclient.md#createservice)
* [createWorkspace](assistantapiclient.md#createworkspace)
* [deleteFunction](assistantapiclient.md#deletefunction)
* [deleteKind](assistantapiclient.md#deletekind)
* [deleteService](assistantapiclient.md#deleteservice)
* [executeFunction](assistantapiclient.md#executefunction)
* [executeGraphql](assistantapiclient.md#executegraphql)
* [getAllReferencedKinds](assistantapiclient.md#getallreferencedkinds)
* [getCurrentSelection](assistantapiclient.md#getcurrentselection)
* [getFunctionById](assistantapiclient.md#getfunctionbyid)
* [getFunctionGraph](assistantapiclient.md#getfunctiongraph)
* [getFunctionOfServiceByName](assistantapiclient.md#getfunctionofservicebyname)
* [getFunctionsById](assistantapiclient.md#getfunctionsbyid)
* [getFunctionsOfServiceByName](assistantapiclient.md#getfunctionsofservicebyname)
* [getKindById](assistantapiclient.md#getkindbyid)
* [getKindOfServiceByName](assistantapiclient.md#getkindofservicebyname)
* [getKindsById](assistantapiclient.md#getkindsbyid)
* [getKindsOfServiceByName](assistantapiclient.md#getkindsofservicebyname)
* [getRenderMode](assistantapiclient.md#getrendermode)
* [getServiceById](assistantapiclient.md#getservicebyid)
* [getUserAccessibleWorkspaces](assistantapiclient.md#getuseraccessibleworkspaces)
* [getUserInfo](assistantapiclient.md#getuserinfo)
* [getWorkspace](assistantapiclient.md#getworkspace)
* [moveKindsAndFunctions](assistantapiclient.md#movekindsandfunctions)
* [refreshServiceSchema](assistantapiclient.md#refreshserviceschema)
* [reloadServiceSchema](assistantapiclient.md#reloadserviceschema)
* [removeFunctionExecutionListener](assistantapiclient.md#removefunctionexecutionlistener)
* [removeInventoryChangedListener](assistantapiclient.md#removeinventorychangedlistener)
* [removeLockingChangedListener](assistantapiclient.md#removelockingchangedlistener)
* [removeRenderModeChangedListener](assistantapiclient.md#removerendermodechangedlistener)
* [removeRepairListener](assistantapiclient.md#removerepairlistener)
* [removeSelectionChangedListener](assistantapiclient.md#removeselectionchangedlistener)
* [reportError](assistantapiclient.md#reporterror)
* [setAssistantState](assistantapiclient.md#setassistantstate)
* [updateFunction](assistantapiclient.md#updatefunction)
* [updateKind](assistantapiclient.md#updatekind)

## Functions

### addFunctionExecutionListener

▸ **addFunctionExecutionListener**(`id`: string, `cb`: [EventListenerCallback](../README.md#eventlistenercallback)): void

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:577*

Associates a callback function with the execution of a particular Function.
When the Function matching the id parameter is executed, its
FunctionExecutionResult object passed to the callback.

**`example`** 
```typescript
function exampleFunctionCB (result){
  console.log(`Function executed with result:`, result)
}

AssistantAPIClient.addFunctionExecutionListener(id, exampleFunctionCB)
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the function. |
`cb` | [EventListenerCallback](../README.md#eventlistenercallback) | The callback function.  |

**Returns:** void

___

### addInventoryChangedListener

▸ **addInventoryChangedListener**(`cb`: (changes: [InventoryChanged](../interfaces/inventorychanged.md)) => void): void

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:770*

Registers a callback function with the inventory changed event. When
workspace inventory changes the callback function will be called.

**`note`** An 'update' diff for inventory services is unlikely in general usage.

**`example`** 
```typescript
const inventoryCB = ({diff}: InventoryChanged) => {
  if(diff.kinds) console.log('KINDS CHANGED',diff.kinds)
  if(diff.functions) console.log('FUNCTIONS CHANGED', diff.functions)
  if(diff.services) console.log('SERVICES CHANGED',diff.services)
}

AssistantAPIClient.addInventoryChangedListener(inventoryCB)
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`cb` | (changes: [InventoryChanged](../interfaces/inventorychanged.md)) => void | Callback function.  |

**Returns:** void

___

### addLockingChangedListener

▸ **addLockingChangedListener**(`cb`: (changes: [LockingChanged](../interfaces/lockingchanged.md)) => void): void

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:1012*

Registers a callback function with the locking changed event. When the
currently active Workspace or its Knowledge Graphs and Functions change the
callback function will be called with the `LockingChanged` object.

**`example`** 
```typescript
const lockingChangedCB = ({ locks }: LockingChanged) => {
  if(locks.workspace) console.log('WORKSPACES CHANGED', locks.workspace);
  if(locks.knowledgeGraphs) console.log('KNOWLEDGE GRAPHS CHANGED', locks.knowledgeGraphs);
  if(locks.functions) console.log('FUNCTIONS CHANGED', locks.functions);
}

AssistantAPIClient.addLockingChangedListener(lockingChangedCB);
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`cb` | (changes: [LockingChanged](../interfaces/lockingchanged.md)) => void | The callback function to call  |

**Returns:** void

___

### addRenderModeChangedListener

▸ **addRenderModeChangedListener**(`cb`: (renderMode: [RenderMode](../enums/rendermode.md)) => void): void

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:869*

Adds a listener to the render mode changed event.

**`example`** 
```typescript
function handleRenderModeChanged(renderMode: RenderMode) {
  if (renderMode === RenderMode.DISPLAY) {
    // Assistant is visible
  } else {
    // Assistant is not visible and is running in the background
  }
}
AssistantAPIClient.addRenderModeChangedListener(handleRenderModeChanged)
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`cb` | (renderMode: [RenderMode](../enums/rendermode.md)) => void | Callback function.  |

**Returns:** void

___

### addRepairListener

▸ **addRepairListener**(`cb`: (workspaceId: string) => void): void

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:934*

Adds a listener to the repair changed event.

**`example`** 
```typescript
function handleRepair (workspaceId: string) {
  // Implement self healing of the assistants data here.
}
AssistantAPIClient.addRepairListener(handleRepair)
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`cb` | (workspaceId: string) => void | Callback function.  |

**Returns:** void

___

### addSelectionChangedListener

▸ **addSelectionChangedListener**(`cb`: [EventListenerCallback](../README.md#eventlistenercallback)): [addSelectionChangedListener](assistantapiclient.md#addselectionchangedlistener)

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:216*

Adds a listener to the selection changed event.

**`example`** 
```typescript
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

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`cb` | [EventListenerCallback](../README.md#eventlistenercallback) | Callback function.  |

**Returns:** [addSelectionChangedListener](assistantapiclient.md#addselectionchangedlistener)

___

### clearState

▸ **clearState**(): [clearState](assistantapiclient.md#clearstate)

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:169*

Removes all event listeners for all events.

**Returns:** [clearState](assistantapiclient.md#clearstate)

___

### createFunction

▸ **createFunction**(`input`: [CreateFunctionInput](../interfaces/createfunctioninput.md)): Promise\<[Function](../interfaces/function.md)>

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:466*

Creates a new function with the supplied information.  At minimum a name
needs to be supplied.

**`deprecated`** This has been deprecated in favor of calling it directly off of
the workspace that the function will live in.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | [CreateFunctionInput](../interfaces/createfunctioninput.md) | Information to create the function with.  |

**Returns:** Promise\<[Function](../interfaces/function.md)>

The new function.

___

### createKind

▸ **createKind**(`input`: [CreateTypeInput](../interfaces/createtypeinput.md)): Promise\<[Kind](../interfaces/kind.md)>

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:625*

Creates a new Kind with the supplied information.  At minimum a name needs
to be supplied.

**`deprecated`** This has been deprecated in favor of calling it direction off of
the workspace the kind will live in.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | [CreateTypeInput](../interfaces/createtypeinput.md) | Information to create the Kind with.  |

**Returns:** Promise\<[Kind](../interfaces/kind.md)>

The new Kind

___

### createService

▸ **createService**(`input`: [CreateServiceInput](../interfaces/createserviceinput.md)): Promise\<string>

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:295*

Creates a new Service in the platform.

**`note`** This will create the service, but does NOT import it into the
workspace. You will need to use `importService` on the Workspace object to
import it.

**`example`** 
```typescript
const service = {
  name: ...,
  endpointUrl: ...,
  serviceType: ServiceType.EXTERNAL_GRAPHQL
}
const svcId = await AssistantAPIClient.createService(service)
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | [CreateServiceInput](../interfaces/createserviceinput.md) | The inputs used to create the Service.  |

**Returns:** Promise\<string>

ID of the created service.

___

### createWorkspace

▸ **createWorkspace**(`workspace`: [CreateWorkspaceInput](../interfaces/createworkspaceinput.md)): Promise\<[ILocalWorkspace](../interfaces/ilocalworkspace.md)>

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:413*

Creates a new Workspace.  The id, name, and serviceId can optionally be
set, or they can be left undefined to use the defaults.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`workspace` | [CreateWorkspaceInput](../interfaces/createworkspaceinput.md) | The Workspace information, can contain {id, name, serviceId}  |

**Returns:** Promise\<[ILocalWorkspace](../interfaces/ilocalworkspace.md)>

The new Workspace.

___

### deleteFunction

▸ **deleteFunction**(`input`: string): Promise\<void>

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:496*

Deletes a function in the active workspace by the given name.

**`deprecated`** This has been deprecated in favor of calling it direction off of
the workspace the function lives in.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | string | The name of the function  |

**Returns:** Promise\<void>

___

### deleteKind

▸ **deleteKind**(`input`: string): Promise\<void>

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:651*

Deletes a Kind in the active workspace by the given name.

**`deprecated`** This has been deprecated in favor of calling it direction off of
the workspace the kind lives in.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | string | The name of the Kind.  |

**Returns:** Promise\<void>

___

### deleteService

▸ **deleteService**(`id`: string): Promise\<void>

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:344*

Deletes the given Service from the platform.

**`example`** 
```typescript
await AssistantAPIClient.deleteService(id)
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | string | The ID of the Service to delete.  |

**Returns:** Promise\<void>

___

### executeFunction

▸ **executeFunction**(`input`: { entityIdentifier: [EntityIdentifier](../interfaces/entityidentifier.md) ; resolve: string ; variables?: Record\<string, any>  }): Promise\<any>

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:447*

Runs a query against a given function with the supplied variables and
resolve string.

**`example`** 
```typescript
const res = await AssistantAPIClient.executeFunction({
  entityIdentifier: {
    entityType: EntityType.Function,
    name: 'myFunc',
    serviceId: 'myServiceId'
  },
  variables: { input: 'value' },
  resolve: '{ id name }'
})
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | { entityIdentifier: [EntityIdentifier](../interfaces/entityidentifier.md) ; resolve: string ; variables?: Record\<string, any>  } | The information to execute. |

**Returns:** Promise\<any>

The result of executing the function.

___

### executeGraphql

▸ **executeGraphql**(`input`: { query: string ; serviceId: string ; variables?: Record\<string, any>  }): Promise\<any>

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:358*

Runs an arbitrary GraphQL query against a service in the platform.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | { query: string ; serviceId: string ; variables?: Record\<string, any>  } | The data for the execution. |

**Returns:** Promise\<any>

The response from the request.

___

### getAllReferencedKinds

▸ **getAllReferencedKinds**(`data`: { entities: [EntityIdentifier](../interfaces/entityidentifier.md)[] ; entitiesToSkip: [EntityIdentifier](../interfaces/entityidentifier.md) ; maxDepth?: number  }): Promise\<[Kind](../interfaces/kind.md)[]>

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:739*

Recursively collects all kinds that are referenced in the entities signature,
starting with the entity identifiers. For example if Kind A is supplied as
an input, and Kind A contains a field of type Kind B, and B contains a
field of type Kind C, an array containing the kinds objects for A, B, and C
will be returned.

**`example`** 
```typescript
const entities = [{
  entityType: EntityType.TYPE,
  name: 'kind1',
  serviceId: 'example-service'
}]
const kinds = await AssistantAPIClient.getAllReferencedKinds({ entities })
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`data` | { entities: [EntityIdentifier](../interfaces/entityidentifier.md)[] ; entitiesToSkip: [EntityIdentifier](../interfaces/entityidentifier.md) ; maxDepth?: number  } | The data passed in for finding the referenced kinds. |

**Returns:** Promise\<[Kind](../interfaces/kind.md)[]>

The list of references Kinds.

___

### getCurrentSelection

▸ **getCurrentSelection**(): Promise\<[Selected](../interfaces/selected.md)>

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:250*

Gets the current selection from the UI.

**`example`** 
```typescript
const {selection} = await AssistantAPIClient.getCurrentSelection();
```

**Returns:** Promise\<[Selected](../interfaces/selected.md)>

The list of selected entities.

___

### getFunctionById

▸ **getFunctionById**(`id`: string): Promise\<[Maybe](../README.md#maybe)\<[Function](../interfaces/function.md)>>

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:511*

Loads a function by ID.  This can only return information about functions
that the UI already has loaded into memory.

**`deprecated`** This function is no longer supported and has limited
functionality. Use getFunctionOfServiceByName instead.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | string | the function's ID.  |

**Returns:** Promise\<[Maybe](../README.md#maybe)\<[Function](../interfaces/function.md)>>

The requested function.

___

### getFunctionGraph

▸ **getFunctionGraph**(`id`: string): Promise\<[Maybe](../README.md#maybe)\<[Function](../interfaces/function.md)>>

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:844*

Loads the function with its graph information attached.

**`deprecated`** Getting a function graph like this has been deprecated.  To get
the graph and implementation information of a function, it needs to be
loaded through the workspace that it belongs to.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the function to load the graph for.  |

**Returns:** Promise\<[Maybe](../README.md#maybe)\<[Function](../interfaces/function.md)>>

The function with the information about its graph.

___

### getFunctionOfServiceByName

▸ **getFunctionOfServiceByName**(`serviceId`: string, `name`: string): Promise\<[Maybe](../README.md#maybe)\<[Function](../interfaces/function.md)>>

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:538*

Returns a function with the given name from a specific service.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`serviceId` | string | ID of the service the function lives in. |
`name` | string | The name of the function to find.  |

**Returns:** Promise\<[Maybe](../README.md#maybe)\<[Function](../interfaces/function.md)>>

The requested function.

___

### getFunctionsById

▸ **getFunctionsById**(`ids`: string[]): Promise\<[Function](../interfaces/function.md)[]>

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:526*

Loads a list of functions by ID.  This can only return information about
functions that the UI already has loaded into memory.

**`deprecated`** This function is no longer supported and has limited
functionality. Use getFunctionsOfServiceByName instead.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`ids` | string[] | List of function IDs.  |

**Returns:** Promise\<[Function](../interfaces/function.md)[]>

The list of requested functions.

___

### getFunctionsOfServiceByName

▸ **getFunctionsOfServiceByName**(`serviceId`: string, `names`: string[]): Promise\<[Function](../interfaces/function.md)[]>

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:553*

Returns a list of functions with the given names from a specific service.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`serviceId` | string | ID of the service the function lives in. |
`names` | string[] | The names of the functions to find.  |

**Returns:** Promise\<[Function](../interfaces/function.md)[]>

The list of requested functions.

___

### getKindById

▸ **getKindById**(`id`: string): Promise\<[Maybe](../README.md#maybe)\<[Kind](../interfaces/kind.md)>>

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:666*

Loads a Kind by ID.  This can only return information about Kinds that the
UI already has loaded into memory.

**`deprecated`** This function is no longer supported and has limited
functionality.  Use getKindOfServiceByName instead.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | string | The Kind's ID.  |

**Returns:** Promise\<[Maybe](../README.md#maybe)\<[Kind](../interfaces/kind.md)>>

The requested Kind.

___

### getKindOfServiceByName

▸ **getKindOfServiceByName**(`serviceId`: string, `name`: string): Promise\<[Maybe](../README.md#maybe)\<[Kind](../interfaces/kind.md)>>

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:693*

Returns a Kind with the given name from a specific service.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`serviceId` | string | ID of the service the function lives in. |
`name` | string | The name of the Kind to find.  |

**Returns:** Promise\<[Maybe](../README.md#maybe)\<[Kind](../interfaces/kind.md)>>

The requested Kind.

___

### getKindsById

▸ **getKindsById**(`ids`: string[]): Promise\<[Kind](../interfaces/kind.md)[]>

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:681*

Loads a list of Kinds by ID.  This can only return information about Kinds
that the UI already has loaded into memory.

**`deprecated`** This function is no longer supported and has limited
functionality.  Use getKindsOfServiceByName instead.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`ids` | string[] | List of Kind IDs.  |

**Returns:** Promise\<[Kind](../interfaces/kind.md)[]>

The list of requested Kind.

___

### getKindsOfServiceByName

▸ **getKindsOfServiceByName**(`serviceId`: string, `names`: string[]): Promise\<[Kind](../interfaces/kind.md)[]>

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:708*

Returns a list of Kinds with the given names from a specific service.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`serviceId` | string | ID of the service the function lives in. |
`names` | string[] | The names of the Kinds to find.  |

**Returns:** Promise\<[Kind](../interfaces/kind.md)[]>

The list of requested Kinds.

___

### getRenderMode

▸ **getRenderMode**(): Promise\<[RenderMode](../enums/rendermode.md)>

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:913*

Gets the current render mode for the assistant.

**`example`** 
```typescript
const renderMode = await AssistantAPIClient.getRenderMode()

if (renderMode === RenderMode.DISPLAY) {
  // Assistant is visible
} else {
  // Assistant is not visible and is running in the background
}
```

**Returns:** Promise\<[RenderMode](../enums/rendermode.md)>

The current render mode.

___

### getServiceById

▸ **getServiceById**(`id`: string): Promise\<[Maybe](../README.md#maybe)\<[Service](../interfaces/service.md)>>

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:270*

Loads a service by its ID.

**`example`** 
```typescript
const svc = await AssistantAPIClient.getServiceById(id)
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Service Id  |

**Returns:** Promise\<[Maybe](../README.md#maybe)\<[Service](../interfaces/service.md)>>

The requested service.

___

### getUserAccessibleWorkspaces

▸ **getUserAccessibleWorkspaces**(`includePublic?`: boolean): Promise\<[ILocalWorkspace](../interfaces/ilocalworkspace.md)[]>

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:399*

Returns a list of user accessible Workspaces.  By default it will just be
the user owned Workspaces, but can be configured to also return all the
public workspaces.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`includePublic` | boolean | false | When true the returned list includes public Workspaces.  |

**Returns:** Promise\<[ILocalWorkspace](../interfaces/ilocalworkspace.md)[]>

The list of Workspaces.

___

### getUserInfo

▸ **getUserInfo**(): Promise\<[User](../interfaces/user.md)>

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:187*

Gets the information about the current user.

**`example`** 
```typescript
const userInfo = await AssistantAPIClient.getUserInfo()
```

**Returns:** Promise\<[User](../interfaces/user.md)>

The current User.

___

### getWorkspace

▸ **getWorkspace**(`id?`: string): Promise\<[Maybe](../README.md#maybe)\<[ILocalWorkspace](../interfaces/ilocalworkspace.md)>>

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:386*

Returns the requested Workspace, if no Workspace ID is specified it returns
the Workspace that the user is currently using.

**`note`** The `id` parameter is optional. If it is not supplied, the query will
return the current/visible workspace.

**`example`** 
```typescript
const ws = await AssistantAPIClient.getWorkspace(id)
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id?` | string | The ID of the Workspace to load.  |

**Returns:** Promise\<[Maybe](../README.md#maybe)\<[ILocalWorkspace](../interfaces/ilocalworkspace.md)>>

The requested Workspace.

___

### moveKindsAndFunctions

▸ **moveKindsAndFunctions**(`originId`: string, `targetId`: string, `kindIds`: string[], `functionIds`: string[]): Promise\<void>

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:815*

Moves a collection of Kinds and Functions from the origin Workspace to the
target Workspace.

**`deprecated`** This has been deprecated in favor of calling update on the
target Workspace to move the entities.

**`example`** 
```typescript
await AssistantAPIClient.moveKindsAndFunctions(originWorkspaceId, targetId, kindIds, functionIds);
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`originId` | string | The ID of the origin Workspace. |
`targetId` | string | The ID of the target Workspace. |
`kindIds` | string[] | An array of the IDs of the kinds to move. |
`functionIds` | string[] | An array of the IDs of the functions to move.  |

**Returns:** Promise\<void>

___

### refreshServiceSchema

▸ **refreshServiceSchema**(`input`: string): Promise\<[Maybe](../README.md#maybe)\<[Service](../interfaces/service.md)>>

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:313*

Refreshed the service information in the backend.  This is useful for
making sure that the platform is working on the latest schema of an
external service.

**`example`** 
```typescript
await AssistantAPIClient.refreshServiceSchema(id)
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | string | The ID of the service to refresh.  |

**Returns:** Promise\<[Maybe](../README.md#maybe)\<[Service](../interfaces/service.md)>>

The refreshed service.

___

### reloadServiceSchema

▸ **reloadServiceSchema**(`id`: string): Promise\<[Maybe](../README.md#maybe)\<[Service](../interfaces/service.md)>>

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:330*

Has the UI reload the information about the service from the backend to
make sure that it has fresh information.

**`example`** 
```typescript
await AssistantAPIClient.reloadService(id)
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | string | The ID of the Service to reload.  |

**Returns:** Promise\<[Maybe](../README.md#maybe)\<[Service](../interfaces/service.md)>>

The service with fresh information.

___

### removeFunctionExecutionListener

▸ **removeFunctionExecutionListener**(`id`: string, `cb`: [EventListenerCallback](../README.md#eventlistenercallback)): void

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:598*

Removes a Function execution listener based on the function ID and a
reference to the callback function. If no callback is supplied, all
listeners associated with the Function ID will be removed.

**`example`** 
```typescript
AssistantAPIClient.removeFunctionExecutionListener(id, exampleFunctionCB)
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the function. |
`cb` | [EventListenerCallback](../README.md#eventlistenercallback) | The callback function, if not supplied all of them are removed.  |

**Returns:** void

___

### removeInventoryChangedListener

▸ **removeInventoryChangedListener**(`cb?`: (changes: [InventoryChanged](../interfaces/inventorychanged.md)) => void): void

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:787*

Removes an inventory changed listener given the referenced callback. If no
callback is specified, all listeners will be removed.

**`example`** 
```typescript
AssistantAPIClient.removeInventoryChangedListener(inventoryCB)
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`cb?` | (changes: [InventoryChanged](../interfaces/inventorychanged.md)) => void | Callback function.  |

**Returns:** void

___

### removeLockingChangedListener

▸ **removeLockingChangedListener**(`cb?`: (changes: [LockingChanged](../interfaces/lockingchanged.md)) => void): void

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:1029*

Removes an locking changed listener given the referenced callback. If no
callback is specified, all listeners will be removed.

**`example`** 
```typescript
AssistantAPIClient.removeLockingChangedListener(lockingChangedCB)
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`cb?` | (changes: [LockingChanged](../interfaces/lockingchanged.md)) => void | The callback function to remove  |

**Returns:** void

___

### removeRenderModeChangedListener

▸ **removeRenderModeChangedListener**(`cb`: (renderMode: [RenderMode](../enums/rendermode.md)) => void): void

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:886*

Removed a listener from the render mode changed event, or all of them if
one is not specified.

**`example`** 
```typescript
AssistantAPIClient.removeRenderModeChangedListener(handleRenderModeChanged)
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`cb` | (renderMode: [RenderMode](../enums/rendermode.md)) => void | Callback function.  |

**Returns:** void

___

### removeRepairListener

▸ **removeRepairListener**(`cb?`: (workspaceId: string) => void): void

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:949*

Removed a listener from the repair changed event, or all of them if one is
not specified.

**`example`** 
```typescript
AssistantAPIClient.removeRepairListener(handleRepair)
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`cb?` | (workspaceId: string) => void | Callback function.  |

**Returns:** void

___

### removeSelectionChangedListener

▸ **removeSelectionChangedListener**(`cb?`: [EventListenerCallback](../README.md#eventlistenercallback)): [removeSelectionChangedListener](assistantapiclient.md#removeselectionchangedlistener)

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:231*

Removes a listener from the selection changed event, or all of them if no
callback is defined.

**`example`** 
```typescript
AssistantAPIClient.removeSelectionChangedListener(selectionCB)
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`cb?` | [EventListenerCallback](../README.md#eventlistenercallback) | Callback function.  |

**Returns:** [removeSelectionChangedListener](assistantapiclient.md#removeselectionchangedlistener)

___

### reportError

▸ **reportError**(`error`: Error \| string): Promise\<void>

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:986*

Reports an error to the UI to be displayed in the assistant's error log in
the inventory panel. This call is not disruptive and designed to operated
independently of other assistant operations, such as state management. See
`setAssistantState` in the next section.

**`note`** It is recommended to use this functionality where it would further
the user experience to show the user an error and it's cause. Do not use
this where things will be retried, cleaned up automatically, or are not
relevant to the user.

**`example`** 
```typescript
try {
  // Do some work
} catch(e) {
  AssistantAPIClient.reportError(e)
}
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`error` | Error \| string | The error object or an error message.  |

**Returns:** Promise\<void>

___

### setAssistantState

▸ **setAssistantState**(`state`: [AssistantState](../README.md#assistantstate)): Promise\<void>

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:158*

This sets the current state of the assistant using the `AssistantState`
enum. Setting a state of `WORKING` will create the 'working' status spinner
in the Assistant Inventory Panel in the Maana Q UI. Conversely, setting an
`IDLE` state will remove the spinner. This adds to user experience by
informing users of the status of operations.

**`note`** If the assistant is in a `WORKING` state, the Maana Q UI will warn
the user before leaving the workspace.

**`note`** While an assistant is in a working state, it will not receive
`inventoryChanged` events. An aggregated inventory diff will be sent once
the assistant is set back to `IDLE`.

**`note`** It is recommended to control states at a high level using
try/catch/finally flow incorporating the `reportError` API call.

**`example`** 
```typescript
try {
  AssistantAPIClient.setAssistantState(AssistantState.WORKING)
  // Do some work
} catch(e) {
  // Handle errors
} finally {
  AssistantAPIClient.setAssistantState(AssistantState.IDLE)
}
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`state` | [AssistantState](../README.md#assistantstate) | The new state of the assistant.  |

**Returns:** Promise\<void>

___

### updateFunction

▸ **updateFunction**(`input`: [UpdateFunctionInput](../interfaces/updatefunctioninput.md)): Promise\<[Function](../interfaces/function.md)>

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:482*

Updates a Function in the active workspace with the given information.

**`deprecated`** This has been deprecated in favor of calling it direction off of
the workspace the function lives in.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | [UpdateFunctionInput](../interfaces/updatefunctioninput.md) | Updates for the function.  |

**Returns:** Promise\<[Function](../interfaces/function.md)>

The updated Function.

___

### updateKind

▸ **updateKind**(`input`: [UpdateTypeInput](../interfaces/updatetypeinput.md)): Promise\<[Kind](../interfaces/kind.md)>

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:639*

Updates a Kind in the active workspace with the given information.

**`deprecated`** This has been deprecated in favor of calling it direction off of
the workspace the kind lives in.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | [UpdateTypeInput](../interfaces/updatetypeinput.md) | Updates for the Kind.  |

**Returns:** Promise\<[Kind](../interfaces/kind.md)>

The updated Kind.
