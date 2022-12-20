[Maana Q Assistant API Client](../README.md) / AssistantAPIClient

# Class: AssistantAPIClient

Main entrypoint client to the kportal Assistant API host.

Its functions ask kportal for new clients (Workspace, Function, Kind, etc.)
which each have their own methods for interaction with kportal.

## Table of contents

### Constructors

- [constructor](AssistantAPIClient.md#constructor)

### Methods

- [addFunctionExecutionListener](AssistantAPIClient.md#addfunctionexecutionlistener)
- [addInventoryChangedListener](AssistantAPIClient.md#addinventorychangedlistener)
- [addLockingChangedListener](AssistantAPIClient.md#addlockingchangedlistener)
- [addRenderModeChangedListener](AssistantAPIClient.md#addrendermodechangedlistener)
- [addRepairListener](AssistantAPIClient.md#addrepairlistener)
- [addSelectionChangedListener](AssistantAPIClient.md#addselectionchangedlistener)
- [clearState](AssistantAPIClient.md#clearstate)
- [createFunction](AssistantAPIClient.md#createfunction)
- [createKind](AssistantAPIClient.md#createkind)
- [createService](AssistantAPIClient.md#createservice)
- [createWorkspace](AssistantAPIClient.md#createworkspace)
- [deleteFunction](AssistantAPIClient.md#deletefunction)
- [deleteKind](AssistantAPIClient.md#deletekind)
- [deleteService](AssistantAPIClient.md#deleteservice)
- [executeFunction](AssistantAPIClient.md#executefunction)
- [executeGraphql](AssistantAPIClient.md#executegraphql)
- [getAllReferencedKinds](AssistantAPIClient.md#getallreferencedkinds)
- [getCurrentSelection](AssistantAPIClient.md#getcurrentselection)
- [getEventEmitter](AssistantAPIClient.md#geteventemitter)
- [getFunctionById](AssistantAPIClient.md#getfunctionbyid)
- [getFunctionGraph](AssistantAPIClient.md#getfunctiongraph)
- [getFunctionOfServiceByName](AssistantAPIClient.md#getfunctionofservicebyname)
- [getFunctionsById](AssistantAPIClient.md#getfunctionsbyid)
- [getFunctionsOfServiceByName](AssistantAPIClient.md#getfunctionsofservicebyname)
- [getKindById](AssistantAPIClient.md#getkindbyid)
- [getKindOfServiceByName](AssistantAPIClient.md#getkindofservicebyname)
- [getKindsById](AssistantAPIClient.md#getkindsbyid)
- [getKindsOfServiceByName](AssistantAPIClient.md#getkindsofservicebyname)
- [getRenderMode](AssistantAPIClient.md#getrendermode)
- [getServiceById](AssistantAPIClient.md#getservicebyid)
- [getUserAccessibleWorkspaces](AssistantAPIClient.md#getuseraccessibleworkspaces)
- [getUserInfo](AssistantAPIClient.md#getuserinfo)
- [getWorkspace](AssistantAPIClient.md#getworkspace)
- [moveKindsAndFunctions](AssistantAPIClient.md#movekindsandfunctions)
- [refreshServiceSchema](AssistantAPIClient.md#refreshserviceschema)
- [reloadServiceSchema](AssistantAPIClient.md#reloadserviceschema)
- [removeFunctionExecutionListener](AssistantAPIClient.md#removefunctionexecutionlistener)
- [removeInventoryChangedListener](AssistantAPIClient.md#removeinventorychangedlistener)
- [removeLockingChangedListener](AssistantAPIClient.md#removelockingchangedlistener)
- [removeRenderModeChangedListener](AssistantAPIClient.md#removerendermodechangedlistener)
- [removeRepairListener](AssistantAPIClient.md#removerepairlistener)
- [removeSelectionChangedListener](AssistantAPIClient.md#removeselectionchangedlistener)
- [reportError](AssistantAPIClient.md#reporterror)
- [setAssistantState](AssistantAPIClient.md#setassistantstate)
- [updateFunction](AssistantAPIClient.md#updatefunction)
- [updateKind](AssistantAPIClient.md#updatekind)

## Constructors

### constructor

• **new AssistantAPIClient**()

## Methods

### addFunctionExecutionListener

▸ **addFunctionExecutionListener**(`id`, `cb`): `void`

Associates a callback function with the execution of a particular Function.
When the Function matching the id parameter is executed, its
FunctionExecutionResult object passed to the callback.

**`Example`**

```typescript
function exampleFunctionCB (result){
  console.log(`Function executed with result:`, result)
}

AssistantAPIClient.addFunctionExecutionListener(id, exampleFunctionCB)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the function. |
| `cb` | [`FunctionExecutionListenerCallback`](../README.md#functionexecutionlistenercallback) | The callback function. |

#### Returns

`void`

#### Defined in

[AssistantAPIClient.ts:599](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L599)

___

### addInventoryChangedListener

▸ **addInventoryChangedListener**(`cb`): `void`

Registers a callback function with the inventory changed event. When
workspace inventory changes the callback function will be called.

**`Note`**

An 'update' diff for inventory services is unlikely in general usage.

**`Example`**

```typescript
const inventoryCB = ({diff}: InventoryChanged) => {
  if(diff.kinds) console.log('KINDS CHANGED',diff.kinds)
  if(diff.functions) console.log('FUNCTIONS CHANGED', diff.functions)
  if(diff.services) console.log('SERVICES CHANGED',diff.services)
}

AssistantAPIClient.addInventoryChangedListener(inventoryCB)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cb` | [`InventoryChangedListenerCallback`](../README.md#inventorychangedlistenercallback) | Callback function. |

#### Returns

`void`

#### Defined in

[AssistantAPIClient.ts:789](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L789)

___

### addLockingChangedListener

▸ **addLockingChangedListener**(`cb`): `void`

Registers a callback function with the locking changed event. When the
currently active Workspace or its Knowledge Graphs and Functions change the
callback function will be called with the `LockingChanged` object.

**`Example`**

```typescript
const lockingChangedCB = ({ locks }: LockingChanged) => {
  if(locks.workspace) console.log('WORKSPACES CHANGED', locks.workspace);
  if(locks.knowledgeGraphs) console.log('KNOWLEDGE GRAPHS CHANGED', locks.knowledgeGraphs);
  if(locks.functions) console.log('FUNCTIONS CHANGED', locks.functions);
}

AssistantAPIClient.addLockingChangedListener(lockingChangedCB);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cb` | [`LockingChangedListenerCallback`](../README.md#lockingchangedlistenercallback) | The callback function to call |

#### Returns

`void`

#### Defined in

[AssistantAPIClient.ts:1021](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L1021)

___

### addRenderModeChangedListener

▸ **addRenderModeChangedListener**(`cb`): `void`

Adds a listener to the render mode changed event.

**`Example`**

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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cb` | [`RenderModeChangedListenerCallback`](../README.md#rendermodechangedlistenercallback) | Callback function. |

#### Returns

`void`

#### Defined in

[AssistantAPIClient.ts:884](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L884)

___

### addRepairListener

▸ **addRepairListener**(`cb`): `void`

Adds a listener to the repair changed event.

**`Example`**

```typescript
function handleRepair (workspaceId: string) {
  // Implement self healing of the assistants data here.
}
AssistantAPIClient.addRepairListener(handleRepair)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cb` | [`RepairListenerCallback`](../README.md#repairlistenercallback) | Callback function. |

#### Returns

`void`

#### Defined in

[AssistantAPIClient.ts:945](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L945)

___

### addSelectionChangedListener

▸ **addSelectionChangedListener**(`cb`): `void`

Adds a listener to the selection changed event.

**`Example`**

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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cb` | [`SelectionChangedListenerCallback`](../README.md#selectionchangedlistenercallback) | Callback function. |

#### Returns

`void`

#### Defined in

[AssistantAPIClient.ts:246](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L246)

___

### clearState

▸ **clearState**(): `void`

Removes all event listeners for all events.

#### Returns

`void`

#### Defined in

[AssistantAPIClient.ts:199](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L199)

___

### createFunction

▸ **createFunction**(`input`): `Promise`<[`Function`](../interfaces/Function.md)\>

Creates a new function with the supplied information.  At minimum a name
needs to be supplied.

**`Deprecated`**

This has been deprecated in favor of calling it directly off of
the workspace that the function will live in.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`CreateFunctionInput`](../interfaces/CreateFunctionInput.md) | Information to create the function with. |

#### Returns

`Promise`<[`Function`](../interfaces/Function.md)\>

The new function.

#### Defined in

[AssistantAPIClient.ts:492](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L492)

___

### createKind

▸ **createKind**(`input`): `Promise`<[`Kind`](../interfaces/Kind.md)\>

Creates a new Kind with the supplied information.  At minimum a name needs
to be supplied.

**`Deprecated`**

This has been deprecated in favor of calling it direction off of
the workspace the kind will live in.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`CreateTypeInput`](../interfaces/CreateTypeInput.md) | Information to create the Kind with. |

#### Returns

`Promise`<[`Kind`](../interfaces/Kind.md)\>

The new Kind

#### Defined in

[AssistantAPIClient.ts:647](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L647)

___

### createService

▸ **createService**(`input`): `Promise`<`string`\>

Creates a new Service in the platform.

**`Note`**

This will create the service, but does NOT import it into the
workspace. You will need to use `importService` on the Workspace object to
import it.

**`Example`**

```typescript
const service = {
  name: ...,
  endpointUrl: ...,
  serviceType: ServiceType.EXTERNAL_GRAPHQL
}
const svcId = await AssistantAPIClient.createService(service)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`CreateServiceInput`](../interfaces/CreateServiceInput.md) | The inputs used to create the Service. |

#### Returns

`Promise`<`string`\>

ID of the created service.

#### Defined in

[AssistantAPIClient.ts:325](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L325)

___

### createWorkspace

▸ **createWorkspace**(`workspace`): `Promise`<[`Workspace`](../interfaces/Workspace.md)\>

Creates a new Workspace.  The id, name, and serviceId can optionally be
set, or they can be left undefined to use the defaults.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `workspace` | [`CreateWorkspaceInput`](../interfaces/CreateWorkspaceInput.md) | The Workspace information, can contain id, name, serviceId |

#### Returns

`Promise`<[`Workspace`](../interfaces/Workspace.md)\>

The new Workspace.

#### Defined in

[AssistantAPIClient.ts:441](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L441)

___

### deleteFunction

▸ **deleteFunction**(`input`): `Promise`<`void`\>

Deletes a function in the active workspace by the given name.

**`Deprecated`**

This has been deprecated in favor of calling it directly off of
the workspace the function lives in.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | The name of the function |

#### Returns

`Promise`<`void`\>

#### Defined in

[AssistantAPIClient.ts:518](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L518)

___

### deleteKind

▸ **deleteKind**(`input`): `Promise`<`void`\>

Deletes a Kind in the active workspace by the given name.

**`Deprecated`**

This has been deprecated in favor of calling it direction off of
the workspace the kind lives in.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | The name of the Kind. |

#### Returns

`Promise`<`void`\>

#### Defined in

[AssistantAPIClient.ts:673](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L673)

___

### deleteService

▸ **deleteService**(`id`): `Promise`<`void`\>

Deletes the given Service from the platform.

**`Example`**

```typescript
await AssistantAPIClient.deleteService(id)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The ID of the Service to delete. |

#### Returns

`Promise`<`void`\>

#### Defined in

[AssistantAPIClient.ts:374](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L374)

___

### executeFunction

▸ **executeFunction**<`V`, `O`\>(`input`): `Promise`<{ `data`: `O` ; `errors`: `Error`[]  }\>

Runs a query against a given function with the supplied variables and
resolve string.

**`Example`**

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

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | `Record`<`string`, `unknown`\> |
| `O` | `unknown` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `Object` | The information to execute. |
| `input.entityIdentifier` | [`EntityIdentifier`](../interfaces/EntityIdentifier.md) | The reference to the function. |
| `input.resolve` | `string` | The fields to resolve in the query. |
| `input.variables?` | `V` | The variables to go along with the query. |

#### Returns

`Promise`<{ `data`: `O` ; `errors`: `Error`[]  }\>

The result of executing the function.

#### Defined in

[AssistantAPIClient.ts:473](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L473)

___

### executeGraphql

▸ **executeGraphql**<`V`, `O`\>(`input`): `Promise`<{ `data`: `O` ; `errors`: `Error`[]  }\>

Runs an arbitrary GraphQL query against a service in the platform.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | `Record`<`string`, `unknown`\> |
| `O` | `unknown` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `Object` | The data for the execution. |
| `input.query` | `string` | The query/mutation to make against the service. |
| `input.serviceId` | `string` | The ID of the service to make the call on. |
| `input.variables?` | `V` | The variables to go with the query. |

#### Returns

`Promise`<{ `data`: `O` ; `errors`: `Error`[]  }\>

The response from the request.

#### Defined in

[AssistantAPIClient.ts:388](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L388)

___

### getAllReferencedKinds

▸ **getAllReferencedKinds**(`data`): `Promise`<[`Kind`](../interfaces/Kind.md)[]\>

Recursively collects all kinds that are referenced in the entities signature,
starting with the entity identifiers. For example if Kind A is supplied as
an input, and Kind A contains a field of type Kind B, and B contains a
field of type Kind C, an array containing the kinds objects for A, B, and C
will be returned.

**`Example`**

```typescript
const entities = [{
  entityType: EntityType.TYPE,
  name: 'kind1',
  serviceId: 'example-service'
}]
const kinds = await AssistantAPIClient.getAllReferencedKinds({ entities })
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Object` | The data passed in for finding the referenced kinds. |
| `data.entities` | [`EntityIdentifier`](../interfaces/EntityIdentifier.md)[] | The starting entities to check. |
| `data.entitiesToSkip` | [`EntityIdentifier`](../interfaces/EntityIdentifier.md) | The entities to not include. |
| `data.maxDepth?` | `number` | Maximum traversal depth in the tree. Default is 10. |

#### Returns

`Promise`<[`Kind`](../interfaces/Kind.md)[]\>

The list of references Kinds.

#### Defined in

[AssistantAPIClient.ts:758](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L758)

___

### getCurrentSelection

▸ **getCurrentSelection**(): `Promise`<[`Selected`](../interfaces/Selected.md)\>

Gets the current selection from the UI.

**`Example`**

```typescript
const {selection} = await AssistantAPIClient.getCurrentSelection();
```

#### Returns

`Promise`<[`Selected`](../interfaces/Selected.md)\>

The list of selected entities.

#### Defined in

[AssistantAPIClient.ts:280](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L280)

___

### getEventEmitter

▸ `Private` **getEventEmitter**(): `EventEmitter`

#### Returns

`EventEmitter`

#### Defined in

[AssistantAPIClient.ts:1050](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L1050)

___

### getFunctionById

▸ **getFunctionById**(`id`): `Promise`<[`Function`](../interfaces/Function.md)\>

Loads a function by ID.  This can only return information about functions
that the UI already has loaded into memory.

**`Deprecated`**

This function is no longer supported and has limited
functionality. Use getFunctionOfServiceByName instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | the function's ID. |

#### Returns

`Promise`<[`Function`](../interfaces/Function.md)\>

The requested function.

#### Defined in

[AssistantAPIClient.ts:533](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L533)

___

### getFunctionGraph

▸ **getFunctionGraph**(`id`): `Promise`<[`Function`](../interfaces/Function.md)\>

Loads the function with its graph information attached.

**`Deprecated`**

Getting a function graph like this has been deprecated.  To get
the graph and implementation information of a function, it needs to be
loaded through the workspace that it belongs to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the function to load the graph for. |

#### Returns

`Promise`<[`Function`](../interfaces/Function.md)\>

The function with the information about its graph.

#### Defined in

[AssistantAPIClient.ts:859](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L859)

___

### getFunctionOfServiceByName

▸ **getFunctionOfServiceByName**(`serviceId`, `name`): `Promise`<[`Function`](../interfaces/Function.md)\>

Returns a function with the given name from a specific service.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serviceId` | `string` | ID of the service the function lives in. |
| `name` | `string` | The name of the function to find. |

#### Returns

`Promise`<[`Function`](../interfaces/Function.md)\>

The requested function.

#### Defined in

[AssistantAPIClient.ts:560](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L560)

___

### getFunctionsById

▸ **getFunctionsById**(`ids`): `Promise`<[`Function`](../interfaces/Function.md)[]\>

Loads a list of functions by ID.  This can only return information about
functions that the UI already has loaded into memory.

**`Deprecated`**

This function is no longer supported and has limited
functionality. Use getFunctionsOfServiceByName instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `string`[] | List of function IDs. |

#### Returns

`Promise`<[`Function`](../interfaces/Function.md)[]\>

The list of requested functions.

#### Defined in

[AssistantAPIClient.ts:548](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L548)

___

### getFunctionsOfServiceByName

▸ **getFunctionsOfServiceByName**(`serviceId`, `names`): `Promise`<[`Function`](../interfaces/Function.md)[]\>

Returns a list of functions with the given names from a specific service.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serviceId` | `string` | ID of the service the function lives in. |
| `names` | `string`[] | The names of the functions to find. |

#### Returns

`Promise`<[`Function`](../interfaces/Function.md)[]\>

The list of requested functions.

#### Defined in

[AssistantAPIClient.ts:575](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L575)

___

### getKindById

▸ **getKindById**(`id`): `Promise`<[`Kind`](../interfaces/Kind.md)\>

Loads a Kind by ID.  This can only return information about Kinds that the
UI already has loaded into memory.

**`Deprecated`**

This function is no longer supported and has limited
functionality.  Use getKindOfServiceByName instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The Kind's ID. |

#### Returns

`Promise`<[`Kind`](../interfaces/Kind.md)\>

The requested Kind.

#### Defined in

[AssistantAPIClient.ts:688](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L688)

___

### getKindOfServiceByName

▸ **getKindOfServiceByName**(`serviceId`, `name`): `Promise`<[`Kind`](../interfaces/Kind.md)\>

Returns a Kind with the given name from a specific service.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serviceId` | `string` | ID of the service the function lives in. |
| `name` | `string` | The name of the Kind to find. |

#### Returns

`Promise`<[`Kind`](../interfaces/Kind.md)\>

The requested Kind.

#### Defined in

[AssistantAPIClient.ts:715](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L715)

___

### getKindsById

▸ **getKindsById**(`ids`): `Promise`<[`Kind`](../interfaces/Kind.md)[]\>

Loads a list of Kinds by ID.  This can only return information about Kinds
that the UI already has loaded into memory.

**`Deprecated`**

This function is no longer supported and has limited
functionality.  Use getKindsOfServiceByName instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `string`[] | List of Kind IDs. |

#### Returns

`Promise`<[`Kind`](../interfaces/Kind.md)[]\>

The list of requested Kind.

#### Defined in

[AssistantAPIClient.ts:703](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L703)

___

### getKindsOfServiceByName

▸ **getKindsOfServiceByName**(`serviceId`, `names`): `Promise`<[`Kind`](../interfaces/Kind.md)[]\>

Returns a list of Kinds with the given names from a specific service.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serviceId` | `string` | ID of the service the function lives in. |
| `names` | `string`[] | The names of the Kinds to find. |

#### Returns

`Promise`<[`Kind`](../interfaces/Kind.md)[]\>

The list of requested Kinds.

#### Defined in

[AssistantAPIClient.ts:730](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L730)

___

### getRenderMode

▸ **getRenderMode**(): `Promise`<[`RenderMode`](../enums/RenderMode.md)\>

Gets the current render mode for the assistant.

**`Example`**

```typescript
const renderMode = await AssistantAPIClient.getRenderMode()

if (renderMode === RenderMode.DISPLAY) {
  // Assistant is visible
} else {
  // Assistant is not visible and is running in the background
}
```

#### Returns

`Promise`<[`RenderMode`](../enums/RenderMode.md)\>

The current render mode.

#### Defined in

[AssistantAPIClient.ts:924](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L924)

___

### getServiceById

▸ **getServiceById**(`id`): `Promise`<[`Service`](../interfaces/Service.md)\>

Loads a service by its ID.

**`Example`**

```typescript
const svc = await AssistantAPIClient.getServiceById(id)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Service Id |

#### Returns

`Promise`<[`Service`](../interfaces/Service.md)\>

The requested service.

#### Defined in

[AssistantAPIClient.ts:300](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L300)

___

### getUserAccessibleWorkspaces

▸ **getUserAccessibleWorkspaces**(`includePublic?`): `Promise`<[`Workspace`](../interfaces/Workspace.md)[]\>

Returns a list of user accessible Workspaces.  By default it will just be
the user owned Workspaces, but can be configured to also return all the
public workspaces.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `includePublic` | `boolean` | `false` | When true the returned list includes public Workspaces. |

#### Returns

`Promise`<[`Workspace`](../interfaces/Workspace.md)[]\>

The list of Workspaces.

#### Defined in

[AssistantAPIClient.ts:429](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L429)

___

### getUserInfo

▸ **getUserInfo**(): `Promise`<[`User`](../interfaces/User.md)\>

Gets the information about the current user.

**`Example`**

```typescript
const userInfo = await AssistantAPIClient.getUserInfo()
```

#### Returns

`Promise`<[`User`](../interfaces/User.md)\>

The current User.

#### Defined in

[AssistantAPIClient.ts:217](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L217)

___

### getWorkspace

▸ **getWorkspace**(`id?`): `Promise`<[`Workspace`](../interfaces/Workspace.md)\>

Returns the requested Workspace, if no Workspace ID is specified it returns
the Workspace that the user is currently using.

**`Note`**

The `id` parameter is optional. If it is not supplied, the query will
return the current/visible workspace.

**`Example`**

```typescript
const ws = await AssistantAPIClient.getWorkspace(id)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id?` | `string` | The ID of the Workspace to load. |

#### Returns

`Promise`<[`Workspace`](../interfaces/Workspace.md)\>

The requested Workspace.

#### Defined in

[AssistantAPIClient.ts:416](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L416)

___

### moveKindsAndFunctions

▸ **moveKindsAndFunctions**(`originId`, `targetId`, `kindIds`, `functionIds`): `Promise`<`void`\>

Moves a collection of Kinds and Functions from the origin Workspace to the
target Workspace.

**`Deprecated`**

This has been deprecated in favor of calling update on the
target Workspace to move the entities.

**`Example`**

```typescript
await AssistantAPIClient.moveKindsAndFunctions(originWorkspaceId, targetId, kindIds, functionIds);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `originId` | `string` | The ID of the origin Workspace. |
| `targetId` | `string` | The ID of the target Workspace. |
| `kindIds` | `string`[] | An array of the IDs of the kinds to move. |
| `functionIds` | `string`[] | An array of the IDs of the functions to move. |

#### Returns

`Promise`<`void`\>

#### Defined in

[AssistantAPIClient.ts:830](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L830)

___

### refreshServiceSchema

▸ **refreshServiceSchema**(`input`): `Promise`<[`Service`](../interfaces/Service.md)\>

Refreshed the service information in the backend.  This is useful for
making sure that the platform is working on the latest schema of an
external service.

**`Example`**

```typescript
await AssistantAPIClient.refreshServiceSchema(id)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | The ID of the service to refresh. |

#### Returns

`Promise`<[`Service`](../interfaces/Service.md)\>

The refreshed service.

#### Defined in

[AssistantAPIClient.ts:343](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L343)

___

### reloadServiceSchema

▸ **reloadServiceSchema**(`id`): `Promise`<[`Service`](../interfaces/Service.md)\>

Has the UI reload the information about the service from the backend to
make sure that it has fresh information.

**`Example`**

```typescript
await AssistantAPIClient.reloadService(id)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The ID of the Service to reload. |

#### Returns

`Promise`<[`Service`](../interfaces/Service.md)\>

The service with fresh information.

#### Defined in

[AssistantAPIClient.ts:360](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L360)

___

### removeFunctionExecutionListener

▸ **removeFunctionExecutionListener**(`id`, `cb?`): `void`

Removes a Function execution listener based on the function ID and a
reference to the callback function. If no callback is supplied, all
listeners associated with the Function ID will be removed.

**`Example`**

```typescript
AssistantAPIClient.removeFunctionExecutionListener(id, exampleFunctionCB)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the function. |
| `cb?` | [`FunctionExecutionListenerCallback`](../README.md#functionexecutionlistenercallback) | The callback function, if not supplied all of them are removed. |

#### Returns

`void`

#### Defined in

[AssistantAPIClient.ts:620](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L620)

___

### removeInventoryChangedListener

▸ **removeInventoryChangedListener**(`cb?`): `void`

Removes an inventory changed listener given the referenced callback. If no
callback is specified, all listeners will be removed.

**`Example`**

```typescript
AssistantAPIClient.removeInventoryChangedListener(inventoryCB)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cb?` | [`InventoryChangedListenerCallback`](../README.md#inventorychangedlistenercallback) | Callback function. |

#### Returns

`void`

#### Defined in

[AssistantAPIClient.ts:804](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L804)

___

### removeLockingChangedListener

▸ **removeLockingChangedListener**(`cb?`): `void`

Removes an locking changed listener given the referenced callback. If no
callback is specified, all listeners will be removed.

**`Example`**

```typescript
AssistantAPIClient.removeLockingChangedListener(lockingChangedCB)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cb?` | [`LockingChangedListenerCallback`](../README.md#lockingchangedlistenercallback) | The callback function to remove |

#### Returns

`void`

#### Defined in

[AssistantAPIClient.ts:1036](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L1036)

___

### removeRenderModeChangedListener

▸ **removeRenderModeChangedListener**(`cb`): `void`

Removed a listener from the render mode changed event, or all of them if
one is not specified.

**`Example`**

```typescript
AssistantAPIClient.removeRenderModeChangedListener(handleRenderModeChanged)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cb` | [`RenderModeChangedListenerCallback`](../README.md#rendermodechangedlistenercallback) | Callback function. |

#### Returns

`void`

#### Defined in

[AssistantAPIClient.ts:899](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L899)

___

### removeRepairListener

▸ **removeRepairListener**(`cb?`): `void`

Removed a listener from the repair changed event, or all of them if one is
not specified.

**`Example`**

```typescript
AssistantAPIClient.removeRepairListener(handleRepair)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cb?` | [`RepairListenerCallback`](../README.md#repairlistenercallback) | Callback function. |

#### Returns

`void`

#### Defined in

[AssistantAPIClient.ts:960](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L960)

___

### removeSelectionChangedListener

▸ **removeSelectionChangedListener**(`cb?`): `void`

Removes a listener from the selection changed event, or all of them if no
callback is defined.

**`Example`**

```typescript
AssistantAPIClient.removeSelectionChangedListener(selectionCB)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cb?` | [`SelectionChangedListenerCallback`](../README.md#selectionchangedlistenercallback) | Callback function. |

#### Returns

`void`

#### Defined in

[AssistantAPIClient.ts:261](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L261)

___

### reportError

▸ **reportError**(`error`): `Promise`<`void`\>

Reports an error to the UI to be displayed in the assistant's error log in
the inventory panel. This call is not disruptive and designed to operated
independently of other assistant operations, such as state management. See
`setAssistantState` in the next section.

**`Note`**

It is recommended to use this functionality where it would further
the user experience to show the user an error and it's cause. Do not use
this where things will be retried, cleaned up automatically, or are not
relevant to the user.

**`Example`**

```typescript
try {
  // Do some work
} catch(e) {
  AssistantAPIClient.reportError(e)
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error` | `string` \| `Error` | The error object or an error message. |

#### Returns

`Promise`<`void`\>

#### Defined in

[AssistantAPIClient.ts:995](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L995)

___

### setAssistantState

▸ **setAssistantState**(`state`): `Promise`<`void`\>

This sets the current state of the assistant using the `AssistantState`
enum. Setting a state of `WORKING` will create the 'working' status spinner
in the Assistant Inventory Panel in the Maana Q UI. Conversely, setting an
`IDLE` state will remove the spinner. This adds to user experience by
informing users of the status of operations.

**`Note`**

If the assistant is in a `WORKING` state, the Maana Q UI will warn
the user before leaving the workspace.

**`Note`**

While an assistant is in a working state, it will not receive
`inventoryChanged` events. An aggregated inventory diff will be sent once
the assistant is set back to `IDLE`.

**`Note`**

It is recommended to control states at a high level using
try/catch/finally flow incorporating the `reportError` API call.

**`Example`**

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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`AssistantState`](../enums/AssistantState.md) | The new state of the assistant. |

#### Returns

`Promise`<`void`\>

#### Defined in

[AssistantAPIClient.ts:188](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L188)

___

### updateFunction

▸ **updateFunction**(`input`): `Promise`<[`Function`](../interfaces/Function.md)\>

Updates a Function in the active workspace with the given information.

**`Deprecated`**

This has been deprecated in favor of calling it directly off of
the workspace the function lives in.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`UpdateFunctionInput`](../interfaces/UpdateFunctionInput.md) | Updates for the function. |

#### Returns

`Promise`<[`Function`](../interfaces/Function.md)\>

The updated Function.

#### Defined in

[AssistantAPIClient.ts:506](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L506)

___

### updateKind

▸ **updateKind**(`input`): `Promise`<[`Kind`](../interfaces/Kind.md)\>

Updates a Kind in the active workspace with the given information.

**`Deprecated`**

This has been deprecated in favor of calling it direction off of
the workspace the kind lives in.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`UpdateTypeInput`](../interfaces/UpdateTypeInput.md) | Updates for the Kind. |

#### Returns

`Promise`<[`Kind`](../interfaces/Kind.md)\>

The updated Kind.

#### Defined in

[AssistantAPIClient.ts:661](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L661)
