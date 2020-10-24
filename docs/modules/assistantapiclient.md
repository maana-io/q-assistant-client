**[Maana Q Assistant API Client - v3.3.0-beta.4](../README.md)**

> [Globals](../globals.md) / AssistantAPIClient

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

▸ **addFunctionExecutionListener**(`id`: string, `cb`: (e: any) => void): void

*Defined in [AssistantAPIClient.ts:437](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L437)*

Adds a callback function to be called with the function has been executed.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the function. |
`cb` | (e: any) => void | The callback function.  |

**Returns:** void

___

### addInventoryChangedListener

▸ **addInventoryChangedListener**(`cb`: (e: any) => void): void

*Defined in [AssistantAPIClient.ts:595](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L595)*

Adds a listener for the inventory changed event.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`cb` | (e: any) => void | Callback function.  |

**Returns:** void

___

### addLockingChangedListener

▸ **addLockingChangedListener**(`cb`: (e: any) => void): void

*Defined in [AssistantAPIClient.ts:749](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L749)*

Adds a callback function to be called every time the locking changed event
is triggered.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`cb` | (e: any) => void | The callback function to call  |

**Returns:** void

___

### addRenderModeChangedListener

▸ **addRenderModeChangedListener**(`cb`: (e: any) => void): void

*Defined in [AssistantAPIClient.ts:668](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L668)*

Adds a listener to the render mode changed event.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`cb` | (e: any) => void | Callback function.  |

**Returns:** void

___

### addRepairListener

▸ **addRepairListener**(`cb`: (e: any) => void): void

*Defined in [AssistantAPIClient.ts:706](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L706)*

Adds a listener to the repair changed event.

**`function`** AssistantAPIClient.addRepairListener

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`cb` | (e: any) => void | Callback function.  |

**Returns:** void

___

### addSelectionChangedListener

▸ **addSelectionChangedListener**(`cb`: (e: any) => void): void

*Defined in [AssistantAPIClient.ts:158](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L158)*

Adds a listener to the selection changed event.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`cb` | (e: any) => void | Callback function.  |

**Returns:** void

___

### clearState

▸ **clearState**(): void

*Defined in [AssistantAPIClient.ts:132](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L132)*

Removes all event listeners for all events.

**Returns:** void

___

### createFunction

▸ **createFunction**(`input`: any): Promise\<[Function](../interfaces/function.md)>

*Defined in [AssistantAPIClient.ts:341](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L341)*

Creates a new function with the supplied information.  At minimum a name
needs to be supplied.

**`deprecated`** This has been deprecated in favor of calling it directly off of
the workspace that the function will live in.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | any | Information to create the function with.  |

**Returns:** Promise\<[Function](../interfaces/function.md)>

The new function.

___

### createKind

▸ **createKind**(`input`: any): Promise\<[Kind](../interfaces/kind.md)>

*Defined in [AssistantAPIClient.ts:478](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L478)*

Creates a new Kind with the supplied information.  At minimum a name needs
to be supplied.

**`deprecated`** This has been deprecated in favor of calling it direction off of
the workspace the kind will live in.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | any | Information to create the Kind with.  |

**Returns:** Promise\<[Kind](../interfaces/kind.md)>

The new Kind

___

### createService

▸ **createService**(`input`: any): Promise\<string>

*Defined in [AssistantAPIClient.ts:208](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L208)*

Creates a new Service in the platform.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | any | The inputs used to create the Service.  |

**Returns:** Promise\<string>

ID of the created service.

___

### createWorkspace

▸ **createWorkspace**(`workspace`: any): Promise\<[Workspace](../interfaces/workspace.md)>

*Defined in [AssistantAPIClient.ts:303](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L303)*

Creates a new Workspace.  The id, name, and serviceId can optionally be
set, or they can be left undefined to use the defaults.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`workspace` | any | The Workspace information, can contain {id, name, serviceId}  |

**Returns:** Promise\<[Workspace](../interfaces/workspace.md)>

The new Workspace.

___

### deleteFunction

▸ **deleteFunction**(`input`: string): Promise\<void>

*Defined in [AssistantAPIClient.ts:367](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L367)*

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

*Defined in [AssistantAPIClient.ts:504](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L504)*

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

*Defined in [AssistantAPIClient.ts:242](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L242)*

Deletes the given Service from the platform.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | string | The ID of the Service to delete.  |

**Returns:** Promise\<void>

___

### executeFunction

▸ **executeFunction**(`input`: { entityIdentifier: [EntityIdentifier](../interfaces/entityidentifier.md) ; resolve: string ; variables?: any  }): Promise\<any>

*Defined in [AssistantAPIClient.ts:322](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L322)*

Runs a query against a given function with the supplied variables and
resolve string.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | { entityIdentifier: [EntityIdentifier](../interfaces/entityidentifier.md) ; resolve: string ; variables?: any  } | The information to execute. |

**Returns:** Promise\<any>

The result of executing the function.

___

### executeGraphql

▸ **executeGraphql**(`input`: { query: string ; serviceId: string ; variables?: any  }): Promise\<any>

*Defined in [AssistantAPIClient.ts:256](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L256)*

Runs an arbitrary GraphQL query against a service in the platform.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | { query: string ; serviceId: string ; variables?: any  } | The data for the execution. |

**Returns:** Promise\<any>

The response from the request.

___

### getAllReferencedKinds

▸ **getAllReferencedKinds**(`data`: { entities: [EntityIdentifier](../interfaces/entityidentifier.md)[] ; entitiesToSkip: [EntityIdentifier](../interfaces/entityidentifier.md) ; maxDepth?: number  }): Promise\<[Kind](../interfaces/kind.md)[]>

*Defined in [AssistantAPIClient.ts:578](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L578)*

Loads up tree of Kinds references by the signature of the Entities passed in.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`data` | { entities: [EntityIdentifier](../interfaces/entityidentifier.md)[] ; entitiesToSkip: [EntityIdentifier](../interfaces/entityidentifier.md) ; maxDepth?: number  } | The data passed in for finding the referenced kinds. |

**Returns:** Promise\<[Kind](../interfaces/kind.md)[]>

The list of references Kinds.

___

### getCurrentSelection

▸ **getCurrentSelection**(): Promise\<[Selected](../interfaces/selected.md)>

*Defined in [AssistantAPIClient.ts:182](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L182)*

Gets the current selection from the UI.

**Returns:** Promise\<[Selected](../interfaces/selected.md)>

The list of selected entities.

___

### getFunctionById

▸ **getFunctionById**(`id`: string): Promise\<[Maybe](../globals.md#maybe)\<[Function](../interfaces/function.md)>>

*Defined in [AssistantAPIClient.ts:382](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L382)*

Loads a function by ID.  This can only return information about functions
that the UI already has loaded into memory.

**`deprecated`** This function is no longer supported and has limited
functionality. Use getFunctionOfServiceByName instead.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | string | the function's ID.  |

**Returns:** Promise\<[Maybe](../globals.md#maybe)\<[Function](../interfaces/function.md)>>

The requested function.

___

### getFunctionGraph

▸ **getFunctionGraph**(`id`: string): Promise\<[Maybe](../globals.md#maybe)\<[Function](../interfaces/function.md)>>

*Defined in [AssistantAPIClient.ts:655](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L655)*

Loads the function with its graph information attached.

**`deprecated`** Getting a function graph like this has been deprecated.  To get
the graph and implementation information of a function, it needs to be
loaded through the workspace that it belongs to.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the function to load the graph for.  |

**Returns:** Promise\<[Maybe](../globals.md#maybe)\<[Function](../interfaces/function.md)>>

The function with the information about its graph.

___

### getFunctionOfServiceByName

▸ **getFunctionOfServiceByName**(`serviceId`: string, `name`: string): Promise\<[Maybe](../globals.md#maybe)\<[Function](../interfaces/function.md)>>

*Defined in [AssistantAPIClient.ts:409](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L409)*

Returns a function with the given name from a specific service.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`serviceId` | string | ID of the service the function lives in. |
`name` | string | The name of the function to find.  |

**Returns:** Promise\<[Maybe](../globals.md#maybe)\<[Function](../interfaces/function.md)>>

The requested function.

___

### getFunctionsById

▸ **getFunctionsById**(`ids`: string[]): Promise\<[Function](../interfaces/function.md)[]>

*Defined in [AssistantAPIClient.ts:397](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L397)*

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

*Defined in [AssistantAPIClient.ts:424](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L424)*

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

▸ **getKindById**(`id`: string): Promise\<[Maybe](../globals.md#maybe)\<[Kind](../interfaces/kind.md)>>

*Defined in [AssistantAPIClient.ts:519](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L519)*

Loads a Kind by ID.  This can only return information about Kinds that the
UI already has loaded into memory.

**`deprecated`** This function is no longer supported and has limited
functionality.  Use getKindOfServiceByName instead.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | string | The Kind's ID.  |

**Returns:** Promise\<[Maybe](../globals.md#maybe)\<[Kind](../interfaces/kind.md)>>

The requested Kind.

___

### getKindOfServiceByName

▸ **getKindOfServiceByName**(`serviceId`: string, `name`: string): Promise\<[Maybe](../globals.md#maybe)\<[Kind](../interfaces/kind.md)>>

*Defined in [AssistantAPIClient.ts:546](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L546)*

Returns a Kind with the given name from a specific service.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`serviceId` | string | ID of the service the function lives in. |
`name` | string | The name of the Kind to find.  |

**Returns:** Promise\<[Maybe](../globals.md#maybe)\<[Kind](../interfaces/kind.md)>>

The requested Kind.

___

### getKindsById

▸ **getKindsById**(`ids`: string[]): Promise\<[Kind](../interfaces/kind.md)[]>

*Defined in [AssistantAPIClient.ts:534](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L534)*

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

*Defined in [AssistantAPIClient.ts:561](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L561)*

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

▸ **getRenderMode**(): Promise\<string>

*Defined in [AssistantAPIClient.ts:692](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L692)*

Gets the current render mode for the assistant.

**Returns:** Promise\<string>

The current render mode.

___

### getServiceById

▸ **getServiceById**(`id`: string): Promise\<[Maybe](../globals.md#maybe)\<[Service](../interfaces/service.md)>>

*Defined in [AssistantAPIClient.ts:197](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L197)*

Gets a specified service by ID

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Service Id  |

**Returns:** Promise\<[Maybe](../globals.md#maybe)\<[Service](../interfaces/service.md)>>

The requested service.

___

### getUserAccessibleWorkspaces

▸ **getUserAccessibleWorkspaces**(`includePublic?`: boolean): Promise\<[Workspace](../interfaces/workspace.md)[]>

*Defined in [AssistantAPIClient.ts:289](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L289)*

Returns a list of user accessible Workspaces.  By default it will just be
the user owned Workspaces, but can be configured to also return all the
public workspaces.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`includePublic` | boolean | false | When true the returned list includes public Workspaces.  |

**Returns:** Promise\<[Workspace](../interfaces/workspace.md)[]>

The list of Workspaces.

___

### getUserInfo

▸ **getUserInfo**(): Promise\<[User](../interfaces/user.md)>

*Defined in [AssistantAPIClient.ts:145](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L145)*

Gets the information about the current user.

**Returns:** Promise\<[User](../interfaces/user.md)>

The current User.

___

### getWorkspace

▸ **getWorkspace**(`id?`: string): Promise\<[Maybe](../globals.md#maybe)\<[Workspace](../interfaces/workspace.md)>>

*Defined in [AssistantAPIClient.ts:276](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L276)*

Returns the requested Workspace, if no Workspace ID is specified it returns
the Workspace that the user is currently using.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id?` | string | The ID of the Workspace to load.  |

**Returns:** Promise\<[Maybe](../globals.md#maybe)\<[Workspace](../interfaces/workspace.md)>>

The requested Workspace.

___

### moveKindsAndFunctions

▸ **moveKindsAndFunctions**(`originId`: string, `targetId`: string, `kindIds`: string[], `functionIds`: string[]): Promise\<void>

*Defined in [AssistantAPIClient.ts:626](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L626)*

Moves a collection of Kinds and Functions from the origin Workspace to the
target Workspace.

**`deprecated`** This has been deprecated in favor of calling it directly off of
the origin workspace.

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

▸ **refreshServiceSchema**(`input`: string): Promise\<[Maybe](../globals.md#maybe)\<[Service](../interfaces/service.md)>>

*Defined in [AssistantAPIClient.ts:221](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L221)*

Refreshed the service information in the backend.  This is useful for
making sure that the platform is working on the latest schema of an
external service.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | string | The ID of the service to refresh.  |

**Returns:** Promise\<[Maybe](../globals.md#maybe)\<[Service](../interfaces/service.md)>>

The refreshed service.

___

### reloadServiceSchema

▸ **reloadServiceSchema**(`id`: string): Promise\<[Maybe](../globals.md#maybe)\<[Service](../interfaces/service.md)>>

*Defined in [AssistantAPIClient.ts:233](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L233)*

Has the UI reload the information about the service from the backend to
make sure that it has fresh information.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | string | The ID of the Service to reload.  |

**Returns:** Promise\<[Maybe](../globals.md#maybe)\<[Service](../interfaces/service.md)>>

The service with fresh information.

___

### removeFunctionExecutionListener

▸ **removeFunctionExecutionListener**(`id`: string, `cb`: (e: any) => void): void

*Defined in [AssistantAPIClient.ts:451](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L451)*

Removes one or all callbacks listening for the function to be executed.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the function. |
`cb` | (e: any) => void | The callback function, if not supplied all of them are removed.  |

**Returns:** void

___

### removeInventoryChangedListener

▸ **removeInventoryChangedListener**(`cb?`: (e: any) => void): void

*Defined in [AssistantAPIClient.ts:605](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L605)*

Removed a listener from the inventory changed event, or all of them if one
is not specified.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`cb?` | (e: any) => void | Callback function.  |

**Returns:** void

___

### removeLockingChangedListener

▸ **removeLockingChangedListener**(`cb?`: (e: any) => void): void

*Defined in [AssistantAPIClient.ts:760](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L760)*

Removes a callback function from the list be called every time the locking
changed event is triggered.  If no callback is passed in, then all
listeners are removed for the locking changed event.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`cb?` | (e: any) => void | The callback function to remove  |

**Returns:** void

___

### removeRenderModeChangedListener

▸ **removeRenderModeChangedListener**(`cb`: (e: any) => void): void

*Defined in [AssistantAPIClient.ts:678](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L678)*

Removed a listener from the render mode changed event, or all of them if
one is not specified.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`cb` | (e: any) => void | Callback function.  |

**Returns:** void

___

### removeRepairListener

▸ **removeRepairListener**(`cb?`: (e: any) => void): void

*Defined in [AssistantAPIClient.ts:717](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L717)*

Removed a listener from the repair changed event, or all of them if one is
not specified.

**`function`** AssistantAPIClient.removeRepairListener

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`cb?` | (e: any) => void | Callback function.  |

**Returns:** void

___

### removeSelectionChangedListener

▸ **removeSelectionChangedListener**(`cb?`: (e: any) => void): void

*Defined in [AssistantAPIClient.ts:168](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L168)*

Removed a listener from the selection changed event, or all of them if no
callback is defined.

#### Parameters:

Name | Type |
------ | ------ |
`cb?` | (e: any) => void |

**Returns:** void

___

### reportError

▸ **reportError**(`error`: Error \| string): Promise\<void>

*Defined in [AssistantAPIClient.ts:735](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L735)*

Reports an error to the UI for the user to be able view it.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`error` | Error \| string | The error object or an error message.  |

**Returns:** Promise\<void>

___

### setAssistantState

▸ **setAssistantState**(`state`: [AssistantState](../enums/assistantstate.md)): Promise\<void>

*Defined in [AssistantAPIClient.ts:121](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L121)*

Updates the current state of the Assistant.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`state` | [AssistantState](../enums/assistantstate.md) | The new state of the assistant.  |

**Returns:** Promise\<void>

___

### updateFunction

▸ **updateFunction**(`input`: any): Promise\<[Function](../interfaces/function.md)>

*Defined in [AssistantAPIClient.ts:355](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L355)*

Updates a Function in the active workspace with the given information.

**`deprecated`** This has been deprecated in favor of calling it direction off of
the workspace the function lives in.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | any | Updates for the function.  |

**Returns:** Promise\<[Function](../interfaces/function.md)>

The updated Function.

___

### updateKind

▸ **updateKind**(`input`: any): Promise\<[Kind](../interfaces/kind.md)>

*Defined in [AssistantAPIClient.ts:492](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/AssistantAPIClient.ts#L492)*

Updates a Kind in the active workspace with the given information.

**`deprecated`** This has been deprecated in favor of calling it direction off of
the workspace the kind lives in.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | any | Updates for the Kind.  |

**Returns:** Promise\<[Kind](../interfaces/kind.md)>

The updated Kind.
