**[Maana Q Assistant API Client](../README.md)**

> [Globals](../README.md) / Workspace

# Interface: Workspace

## Hierarchy

* [Entity](entity.md)

  ↳ **Workspace**

## Index

### Properties

* [description](workspace.md#description)
* [id](workspace.md#id)
* [isPublic](workspace.md#ispublic)
* [isTemplate](workspace.md#istemplate)
* [location](workspace.md#location)
* [name](workspace.md#name)
* [nameDescriptor](workspace.md#namedescriptor)
* [owner](workspace.md#owner)
* [persistenceServiceId](workspace.md#persistenceserviceid)
* [serviceId](workspace.md#serviceid)
* [tags](workspace.md#tags)
* [thumbnailUrl](workspace.md#thumbnailurl)

### Methods

* [canEdit](workspace.md#canedit)
* [createFunction](workspace.md#createfunction)
* [createFunctions](workspace.md#createfunctions)
* [createKind](workspace.md#createkind)
* [createKinds](workspace.md#createkinds)
* [createKnowledgeGraph](workspace.md#createknowledgegraph)
* [createKnowledgeGraphs](workspace.md#createknowledgegraphs)
* [deleteFunction](workspace.md#deletefunction)
* [deleteKind](workspace.md#deletekind)
* [getActiveGraph](workspace.md#getactivegraph)
* [getFunctionGraph](workspace.md#getfunctiongraph)
* [getFunctions](workspace.md#getfunctions)
* [getFunctionsByName](workspace.md#getfunctionsbyname)
* [getImportedAssistants](workspace.md#getimportedassistants)
* [getImportedServices](workspace.md#getimportedservices)
* [getKinds](workspace.md#getkinds)
* [getKindsByName](workspace.md#getkindsbyname)
* [getKnowledgeGraphs](workspace.md#getknowledgegraphs)
* [importService](workspace.md#importservice)
* [importServices](workspace.md#importservices)
* [lockedBy](workspace.md#lockedby)
* [reload](workspace.md#reload)
* [removeService](workspace.md#removeservice)
* [removeServices](workspace.md#removeservices)
* [setLocked](workspace.md#setlocked)
* [triggerRepairEvent](workspace.md#triggerrepairevent)
* [update](workspace.md#update)
* [updateFunction](workspace.md#updatefunction)
* [updateFunctions](workspace.md#updatefunctions)
* [updateKind](workspace.md#updatekind)
* [updateKinds](workspace.md#updatekinds)

## Properties

### description

• `Optional` **description**: string

*Inherited from [Entity](entity.md).[description](entity.md#description)*

*Defined in [models.ts:62](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L62)*

Human readable description of the entity.

___

### id

•  **id**: string

*Inherited from [Entity](entity.md).[id](entity.md#id)*

*Defined in [models.ts:53](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L53)*

The ID of the entity.

___

### isPublic

•  **isPublic**: boolean

*Defined in [models.ts:415](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L415)*

When true others can see this Workspace.

___

### isTemplate

•  **isTemplate**: boolean

*Defined in [models.ts:418](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L418)*

When true it shows up as a template Workspace.

___

### location

•  **location**: [ServiceLocation](servicelocation.md)

*Defined in [models.ts:403](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L403)*

The location information about the Workspace.

___

### name

•  **name**: string

*Inherited from [Entity](entity.md).[name](entity.md#name)*

*Defined in [models.ts:56](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L56)*

The name of the entity.

___

### nameDescriptor

• `Optional` **nameDescriptor**: string

*Inherited from [Entity](entity.md).[nameDescriptor](entity.md#namedescriptor)*

*Defined in [models.ts:59](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L59)*

Name of where the entity comes from (Service/Workspace).

___

### owner

•  **owner**: { id: string ; name: string  }

*Defined in [models.ts:424](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L424)*

The user that owns the Workspace.

#### Type declaration:

Name | Type |
------ | ------ |
`id` | string |
`name` | string |

___

### persistenceServiceId

•  **persistenceServiceId**: string

*Defined in [models.ts:412](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L412)*

The ID of the model service handling persistence for the Workspace

___

### serviceId

•  **serviceId**: string

*Defined in [models.ts:409](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L409)*

The ID of the logic service backing the Workspace.

___

### tags

•  **tags**: string[]

*Defined in [models.ts:421](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L421)*

The list of tags for the Workspace.

___

### thumbnailUrl

•  **thumbnailUrl**: string

*Defined in [models.ts:406](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L406)*

The URL to the URL of the thumbnail pic.

## Methods

### canEdit

▸ **canEdit**(): Promise\<boolean>

*Defined in [models.ts:427](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L427)*

Returns boolean stating if the Workspace is editable.

**Returns:** Promise\<boolean>

___

### createFunction

▸ **createFunction**(`input`: [CreateFunctionInput](createfunctioninput.md)): Promise\<[Function](function.md)>

*Defined in [models.ts:514](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L514)*

Creates a new Function in the Workspace.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | [CreateFunctionInput](createfunctioninput.md) | Information for the function to create.  |

**Returns:** Promise\<[Function](function.md)>

___

### createFunctions

▸ **createFunctions**(`input`: [CreateFunctionInput](createfunctioninput.md)[]): Promise\<[Function](function.md)[]>

*Defined in [models.ts:520](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L520)*

Creates a list of new Functions in the Workspace.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | [CreateFunctionInput](createfunctioninput.md)[] | Information for the functions to create.  |

**Returns:** Promise\<[Function](function.md)[]>

___

### createKind

▸ **createKind**(`input`: [CreateTypeInput](createtypeinput.md)): Promise\<[Kind](kind.md)>

*Defined in [models.ts:562](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L562)*

Creates a new Kind in the Workspace.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | [CreateTypeInput](createtypeinput.md) | Information for Kind to create.  |

**Returns:** Promise\<[Kind](kind.md)>

___

### createKinds

▸ **createKinds**(`input`: [CreateTypeInput](createtypeinput.md)[]): Promise\<[Kind](kind.md)[]>

*Defined in [models.ts:568](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L568)*

Creates a list of Kinds in the Workspace.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | [CreateTypeInput](createtypeinput.md)[] | Information for Kinds to create.  |

**Returns:** Promise\<[Kind](kind.md)[]>

___

### createKnowledgeGraph

▸ **createKnowledgeGraph**(`input`: [CreateKnowledgeGraphInput](createknowledgegraphinput.md)): Promise\<void>

*Defined in [models.ts:461](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L461)*

Creates a new Knowledge Graph in the Workspace.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | [CreateKnowledgeGraphInput](createknowledgegraphinput.md) | Information about the new Knowledge Graph.  |

**Returns:** Promise\<void>

___

### createKnowledgeGraphs

▸ **createKnowledgeGraphs**(`input`: [CreateKnowledgeGraphInput](createknowledgegraphinput.md)[]): Promise\<void>

*Defined in [models.ts:467](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L467)*

Creates a list of new Knowledge Graphs in the Workspace.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | [CreateKnowledgeGraphInput](createknowledgegraphinput.md)[] | Information about the new Knowledge Graphs.  |

**Returns:** Promise\<void>

___

### deleteFunction

▸ **deleteFunction**(`name`: string): Promise\<void>

*Defined in [models.ts:538](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L538)*

Deletes a function in the Workspace.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | string | Name of the Function.  |

**Returns:** Promise\<void>

___

### deleteKind

▸ **deleteKind**(`name`: string): Promise\<void>

*Defined in [models.ts:586](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L586)*

Deletes a Kind in the Workspace.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The name of the Kind to delete.  |

**Returns:** Promise\<void>

___

### getActiveGraph

▸ **getActiveGraph**(): Promise\<[Maybe](../README.md#maybe)\<[KnowledgeGraph](knowledgegraph.md) \| [Function](function.md)>>

*Defined in [models.ts:452](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L452)*

Gets the currently active graph.

**Returns:** Promise\<[Maybe](../README.md#maybe)\<[KnowledgeGraph](knowledgegraph.md) \| [Function](function.md)>>

___

### getFunctionGraph

▸ **getFunctionGraph**(`id`: string): Promise\<[Function](function.md)>

*Defined in [models.ts:547](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L547)*

Gets the Function based on ID with its implementation and graph
information.

**`deprecated`** To get the function graph and implementation for a function,
load it via the workspace it belongs to.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the Function.  |

**Returns:** Promise\<[Function](function.md)>

___

### getFunctions

▸ **getFunctions**(): Promise\<[Function](function.md)[]>

*Defined in [models.ts:502](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L502)*

Gets the list of Functions that live in the Workspace.

**Returns:** Promise\<[Function](function.md)[]>

___

### getFunctionsByName

▸ **getFunctionsByName**(`names`: string[]): Promise\<[Function](function.md)[]>

*Defined in [models.ts:508](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L508)*

Gets a list of Functions that live in the Workspace based on their names.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`names` | string[] | The name of the Functions to return.  |

**Returns:** Promise\<[Function](function.md)[]>

___

### getImportedAssistants

▸ **getImportedAssistants**(): Promise\<[Assistant](assistant.md)[]>

*Defined in [models.ts:473](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L473)*

Gets all of the Assistants imported into the Workspaces inventory.

**Returns:** Promise\<[Assistant](assistant.md)[]>

___

### getImportedServices

▸ **getImportedServices**(): Promise\<[Service](service.md)[]>

*Defined in [models.ts:470](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L470)*

Gets all of the Services imported into the Workspaces inventory.

**Returns:** Promise\<[Service](service.md)[]>

___

### getKinds

▸ **getKinds**(): Promise\<[Kind](kind.md)[]>

*Defined in [models.ts:550](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L550)*

Gets the list of Kinds that live in the Workspace.

**Returns:** Promise\<[Kind](kind.md)[]>

___

### getKindsByName

▸ **getKindsByName**(`names`: string[]): Promise\<[Kind](kind.md)[]>

*Defined in [models.ts:556](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L556)*

Gets a list of Kinds that live in the Workspace based on their names.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`names` | string[] | The names of the Kinds to load.  |

**Returns:** Promise\<[Kind](kind.md)[]>

___

### getKnowledgeGraphs

▸ **getKnowledgeGraphs**(): Promise\<[KnowledgeGraph](knowledgegraph.md)[]>

*Defined in [models.ts:455](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L455)*

Gets all of the Knowledge Graphs in the Workspace.

**Returns:** Promise\<[KnowledgeGraph](knowledgegraph.md)[]>

___

### importService

▸ **importService**(`serviceId`: string): Promise\<[Maybe](../README.md#maybe)\<string>>

*Defined in [models.ts:480](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L480)*

Imports a Service or Assistant into the Workspaces inventory.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`serviceId` | string | Service or Assistant ID. |

**Returns:** Promise\<[Maybe](../README.md#maybe)\<string>>

ID of imported Service or Assistant.

___

### importServices

▸ **importServices**(`serviceIds`: string[]): Promise\<string[]>

*Defined in [models.ts:487](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L487)*

Imports a list of Services and/or Assistants into the Workspaces inventory.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`serviceIds` | string[] | Service and/or Assistant IDs. |

**Returns:** Promise\<string[]>

IDs of imported Services and/or Assistants.

___

### lockedBy

▸ **lockedBy**(): Promise\<[Maybe](../README.md#maybe)\<string>>

*Defined in [models.ts:430](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L430)*

Returns the e-mail of the user who locked the Workspace.

**Returns:** Promise\<[Maybe](../README.md#maybe)\<string>>

___

### reload

▸ **reload**(): Promise\<[Workspace](workspace.md)>

*Defined in [models.ts:446](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L446)*

Returns a new copy of the workspace with reloaded information.

**Returns:** Promise\<[Workspace](workspace.md)>

___

### removeService

▸ **removeService**(`serviceId`: string): Promise\<void>

*Defined in [models.ts:493](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L493)*

Removes a Service or Assistant from the Workspaces inventory.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`serviceId` | string | Service or Assistant ID.  |

**Returns:** Promise\<void>

___

### removeServices

▸ **removeServices**(`serviceIds`: string): Promise\<void>

*Defined in [models.ts:499](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L499)*

Removes a list Services and/or Assistants from the Workspaces inventory.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`serviceIds` | string | Service and/or Assistant IDs.  |

**Returns:** Promise\<void>

___

### setLocked

▸ **setLocked**(`isLocked?`: boolean): Promise\<void>

*Defined in [models.ts:437](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L437)*

Updates the locked state of the Workspace.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`isLocked?` | boolean | The new locked state of the Workspace, if not provided then the locked state is toggled.  |

**Returns:** Promise\<void>

___

### triggerRepairEvent

▸ **triggerRepairEvent**(): Promise\<void>

*Defined in [models.ts:449](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L449)*

Sends a repair event to all assistants.

**Returns:** Promise\<void>

___

### update

▸ **update**(`changes`: [UpdateWorkspaceInput](updateworkspaceinput.md)): Promise\<void>

*Defined in [models.ts:443](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L443)*

Updates information about the Workspace.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`changes` | [UpdateWorkspaceInput](updateworkspaceinput.md) | Information to update the Workspace with.  |

**Returns:** Promise\<void>

___

### updateFunction

▸ **updateFunction**(`changes`: [UpdateFunctionInput](updatefunctioninput.md)): Promise\<[Function](function.md)>

*Defined in [models.ts:526](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L526)*

Updates a Function in the Workspace.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`changes` | [UpdateFunctionInput](updatefunctioninput.md) | The changes to make to the Function.  |

**Returns:** Promise\<[Function](function.md)>

___

### updateFunctions

▸ **updateFunctions**(`changes`: [UpdateFunctionInput](updatefunctioninput.md)[]): Promise\<[Function](function.md)[]>

*Defined in [models.ts:532](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L532)*

Updates a list of Function in the Workspace.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`changes` | [UpdateFunctionInput](updatefunctioninput.md)[] | The changes to make to the Functions.  |

**Returns:** Promise\<[Function](function.md)[]>

___

### updateKind

▸ **updateKind**(`changes`: [UpdateTypeInput](updatetypeinput.md)): Promise\<[Kind](kind.md)>

*Defined in [models.ts:574](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L574)*

Updates a Kind in the Workspace.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`changes` | [UpdateTypeInput](updatetypeinput.md) | The changes to make to the Kind.  |

**Returns:** Promise\<[Kind](kind.md)>

___

### updateKinds

▸ **updateKinds**(`changes`: [UpdateTypeInput](updatetypeinput.md)[]): Promise\<[Kind](kind.md)[]>

*Defined in [models.ts:580](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L580)*

Updates a list of Kinds in the Workspace.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`changes` | [UpdateTypeInput](updatetypeinput.md)[] | The changes to make to the Kinds.  |

**Returns:** Promise\<[Kind](kind.md)[]>
