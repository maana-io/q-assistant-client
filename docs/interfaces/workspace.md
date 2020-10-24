**[Maana Q Assistant API Client - v3.3.0-beta.4](../README.md)**

> [Globals](../globals.md) / Workspace

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

*Defined in [models.ts:50](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L50)*

Human readable description of the entity.

___

### id

•  **id**: string

*Inherited from [Entity](entity.md).[id](entity.md#id)*

*Defined in [models.ts:41](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L41)*

The ID of the entity.

___

### isPublic

•  **isPublic**: boolean

*Defined in [models.ts:286](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L286)*

When true others can see this Workspace.

___

### isTemplate

•  **isTemplate**: boolean

*Defined in [models.ts:289](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L289)*

When true it shows up as a template Workspace.

___

### location

•  **location**: [ServiceLocation](servicelocation.md)

*Defined in [models.ts:277](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L277)*

The location information about the Workspace.

___

### name

•  **name**: string

*Inherited from [Entity](entity.md).[name](entity.md#name)*

*Defined in [models.ts:44](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L44)*

The name of the entity.

___

### nameDescriptor

• `Optional` **nameDescriptor**: string

*Inherited from [Entity](entity.md).[nameDescriptor](entity.md#namedescriptor)*

*Defined in [models.ts:47](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L47)*

Name of where the entity comes from (Service/Workspace).

___

### owner

•  **owner**: { id: string ; name: string  }

*Defined in [models.ts:295](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L295)*

The user that owns the Workspace.

#### Type declaration:

Name | Type |
------ | ------ |
`id` | string |
`name` | string |

___

### serviceId

•  **serviceId**: string

*Defined in [models.ts:283](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L283)*

The ID of the logic service backing the Workspace.

___

### tags

•  **tags**: string[]

*Defined in [models.ts:292](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L292)*

The list of tags for the Workspace.

___

### thumbnailUrl

•  **thumbnailUrl**: string

*Defined in [models.ts:280](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L280)*

The URL to the URL of the thumbnail pic.

## Methods

### canEdit

▸ **canEdit**(): Promise\<boolean>

*Defined in [models.ts:298](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L298)*

Returns boolean stating if the Workspace is editable.

**Returns:** Promise\<boolean>

___

### createFunction

▸ **createFunction**(`input`: any): Promise\<[Function](function.md)>

*Defined in [models.ts:382](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L382)*

Creates a new Function in the Workspace.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | any | Information for the function to create.  |

**Returns:** Promise\<[Function](function.md)>

___

### createFunctions

▸ **createFunctions**(`input`: any[]): Promise\<[Function](function.md)[]>

*Defined in [models.ts:388](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L388)*

Creates a list of new Functions in the Workspace.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | any[] | Information for the functions to create.  |

**Returns:** Promise\<[Function](function.md)[]>

___

### createKind

▸ **createKind**(`input`: any): Promise\<[Kind](kind.md)>

*Defined in [models.ts:430](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L430)*

Creates a new Kind in the Workspace.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | any | Information for Kind to create.  |

**Returns:** Promise\<[Kind](kind.md)>

___

### createKinds

▸ **createKinds**(`input`: any[]): Promise\<[Kind](kind.md)[]>

*Defined in [models.ts:436](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L436)*

Creates a list of Kinds in the Workspace.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | any[] | Information for Kinds to create.  |

**Returns:** Promise\<[Kind](kind.md)[]>

___

### createKnowledgeGraph

▸ **createKnowledgeGraph**(`input`: any): Promise\<void>

*Defined in [models.ts:329](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L329)*

Creates a new Knowledge Graph in the Workspace.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | any | Information about the new Knowledge Graph.  |

**Returns:** Promise\<void>

___

### createKnowledgeGraphs

▸ **createKnowledgeGraphs**(`input`: any[]): Promise\<void>

*Defined in [models.ts:335](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L335)*

Creates a list of new Knowledge Graphs in the Workspace.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | any[] | Information about the new Knowledge Graphs.  |

**Returns:** Promise\<void>

___

### deleteFunction

▸ **deleteFunction**(`name`: string): Promise\<void>

*Defined in [models.ts:406](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L406)*

Deletes a function in the Workspace.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | string | Name of the Function.  |

**Returns:** Promise\<void>

___

### deleteKind

▸ **deleteKind**(`name`: string): Promise\<void>

*Defined in [models.ts:454](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L454)*

Deletes a Kind in the Workspace.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The name of the Kind to delete.  |

**Returns:** Promise\<void>

___

### getActiveGraph

▸ **getActiveGraph**(): Promise\<[Maybe](../globals.md#maybe)\<[KnowledgeGraph](knowledgegraph.md) \| [Function](function.md)>>

*Defined in [models.ts:320](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L320)*

Gets the currently active graph.

**Returns:** Promise\<[Maybe](../globals.md#maybe)\<[KnowledgeGraph](knowledgegraph.md) \| [Function](function.md)>>

___

### getFunctionGraph

▸ **getFunctionGraph**(`id`: string): Promise\<[Function](function.md)>

*Defined in [models.ts:415](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L415)*

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

*Defined in [models.ts:370](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L370)*

Gets the list of Functions that live in the Workspace.

**Returns:** Promise\<[Function](function.md)[]>

___

### getFunctionsByName

▸ **getFunctionsByName**(`names`: string[]): Promise\<[Function](function.md)[]>

*Defined in [models.ts:376](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L376)*

Gets a list of Functions that live in the Workspace based on their names.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`names` | string[] | The name of the Functions to return.  |

**Returns:** Promise\<[Function](function.md)[]>

___

### getImportedAssistants

▸ **getImportedAssistants**(): Promise\<[Assistant](assistant.md)[]>

*Defined in [models.ts:341](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L341)*

Gets all of the Assistants imported into the Workspaces inventory.

**Returns:** Promise\<[Assistant](assistant.md)[]>

___

### getImportedServices

▸ **getImportedServices**(): Promise\<[Service](service.md)[]>

*Defined in [models.ts:338](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L338)*

Gets all of the Services imported into the Workspaces inventory.

**Returns:** Promise\<[Service](service.md)[]>

___

### getKinds

▸ **getKinds**(): Promise\<[Kind](kind.md)[]>

*Defined in [models.ts:418](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L418)*

Gets the list of Kinds that live in the Workspace.

**Returns:** Promise\<[Kind](kind.md)[]>

___

### getKindsByName

▸ **getKindsByName**(`names`: string[]): Promise\<[Kind](kind.md)[]>

*Defined in [models.ts:424](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L424)*

Gets a list of Kinds that live in the Workspace based on their names.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`names` | string[] | The names of the Kinds to load.  |

**Returns:** Promise\<[Kind](kind.md)[]>

___

### getKnowledgeGraphs

▸ **getKnowledgeGraphs**(): Promise\<[KnowledgeGraph](knowledgegraph.md)[]>

*Defined in [models.ts:323](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L323)*

Gets all of the Knowledge Graphs in the Workspace.

**Returns:** Promise\<[KnowledgeGraph](knowledgegraph.md)[]>

___

### importService

▸ **importService**(`serviceId`: string): Promise\<[Maybe](../globals.md#maybe)\<string>>

*Defined in [models.ts:348](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L348)*

Imports a Service or Assistant into the Workspaces inventory.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`serviceId` | string | Service or Assistant ID. |

**Returns:** Promise\<[Maybe](../globals.md#maybe)\<string>>

ID of imported Service or Assistant.

___

### importServices

▸ **importServices**(`serviceIds`: string[]): Promise\<string[]>

*Defined in [models.ts:355](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L355)*

Imports a list of Services and/or Assistants into the Workspaces inventory.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`serviceIds` | string[] | Service and/or Assistant IDs. |

**Returns:** Promise\<string[]>

IDs of imported Services and/or Assistants.

___

### lockedBy

▸ **lockedBy**(): Promise\<[Maybe](../globals.md#maybe)\<string>>

*Defined in [models.ts:301](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L301)*

Returns the e-mail of the user who locked the Workspace.

**Returns:** Promise\<[Maybe](../globals.md#maybe)\<string>>

___

### removeService

▸ **removeService**(`serviceId`: string): Promise\<void>

*Defined in [models.ts:361](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L361)*

Removes a Service or Assistant from the Workspaces inventory.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`serviceId` | string | Service or Assistant ID.  |

**Returns:** Promise\<void>

___

### removeServices

▸ **removeServices**(`serviceIds`: string): Promise\<void>

*Defined in [models.ts:367](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L367)*

Removes a list Services and/or Assistants from the Workspaces inventory.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`serviceIds` | string | Service and/or Assistant IDs.  |

**Returns:** Promise\<void>

___

### setLocked

▸ **setLocked**(`isLocked?`: boolean): Promise\<void>

*Defined in [models.ts:308](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L308)*

Updates the locked state of the Workspace.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`isLocked?` | boolean | The new locked state of the Workspace, if not provided then the locked state is toggled.  |

**Returns:** Promise\<void>

___

### triggerRepairEvent

▸ **triggerRepairEvent**(): Promise\<void>

*Defined in [models.ts:317](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L317)*

Sends a repair event to all assistants.

**Returns:** Promise\<void>

___

### update

▸ **update**(`changes`: any): Promise\<void>

*Defined in [models.ts:314](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L314)*

Updates information about the Workspace.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`changes` | any | Information to update the Workspace with.  |

**Returns:** Promise\<void>

___

### updateFunction

▸ **updateFunction**(`changes`: any): Promise\<[Function](function.md)>

*Defined in [models.ts:394](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L394)*

Updates a Function in the Workspace.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`changes` | any | The changes to make to the Function.  |

**Returns:** Promise\<[Function](function.md)>

___

### updateFunctions

▸ **updateFunctions**(`changes`: any[]): Promise\<[Function](function.md)[]>

*Defined in [models.ts:400](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L400)*

Updates a list of Function in the Workspace.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`changes` | any[] | The changes to make to the Functions.  |

**Returns:** Promise\<[Function](function.md)[]>

___

### updateKind

▸ **updateKind**(`changes`: any): Promise\<[Kind](kind.md)>

*Defined in [models.ts:442](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L442)*

Updates a Kind in the Workspace.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`changes` | any | The changes to make to the Kind.  |

**Returns:** Promise\<[Kind](kind.md)>

___

### updateKinds

▸ **updateKinds**(`changes`: any[]): Promise\<[Kind](kind.md)[]>

*Defined in [models.ts:448](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L448)*

Updates a list of Kinds in the Workspace.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`changes` | any[] | The changes to make to the Kinds.  |

**Returns:** Promise\<[Kind](kind.md)[]>
