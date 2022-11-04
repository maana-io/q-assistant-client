**[Maana Q Assistant API Client](../README.md)**

> [Globals](../README.md) / Workspace

# Interface: Workspace

Workspace type - represents a workspace with its metadata, layout, various
entities and inventory.

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
* [getAnnotationById](workspace.md#getannotationbyid)
* [getAnnotations](workspace.md#getannotations)
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

*Defined in Clients/AssistantAPIClient/models.ts:83*

Human readable description of the entity.

___

### id

•  **id**: string

*Inherited from [Entity](entity.md).[id](entity.md#id)*

*Defined in Clients/AssistantAPIClient/models.ts:74*

The ID of the entity.

___

### isPublic

•  **isPublic**: boolean

*Defined in Clients/AssistantAPIClient/models.ts:451*

When true others can see this Workspace.

___

### isTemplate

•  **isTemplate**: boolean

*Defined in Clients/AssistantAPIClient/models.ts:454*

When true it shows up as a template Workspace.

___

### location

•  **location**: [ServiceLocation](servicelocation.md)

*Defined in Clients/AssistantAPIClient/models.ts:439*

The location information about the Workspace.

___

### name

•  **name**: string

*Inherited from [Entity](entity.md).[name](entity.md#name)*

*Defined in Clients/AssistantAPIClient/models.ts:77*

The name of the entity.

___

### nameDescriptor

• `Optional` **nameDescriptor**: string

*Inherited from [Entity](entity.md).[nameDescriptor](entity.md#namedescriptor)*

*Defined in Clients/AssistantAPIClient/models.ts:80*

Name of where the entity comes from (Service/Workspace).

___

### owner

•  **owner**: { id: string ; name: string  }

*Defined in Clients/AssistantAPIClient/models.ts:460*

The user that owns the Workspace.

#### Type declaration:

Name | Type |
------ | ------ |
`id` | string |
`name` | string |

___

### persistenceServiceId

•  **persistenceServiceId**: string

*Defined in Clients/AssistantAPIClient/models.ts:448*

The ID of the model service handling persistence for the Workspace

___

### serviceId

•  **serviceId**: string

*Defined in Clients/AssistantAPIClient/models.ts:445*

The ID of the logic service backing the Workspace.

___

### tags

•  **tags**: string[]

*Defined in Clients/AssistantAPIClient/models.ts:457*

The list of tags for the Workspace.

___

### thumbnailUrl

•  **thumbnailUrl**: string

*Defined in Clients/AssistantAPIClient/models.ts:442*

The URL to the URL of the thumbnail pic.

## Methods

### canEdit

▸ **canEdit**(): Promise\<boolean>

*Defined in Clients/AssistantAPIClient/models.ts:463*

Returns boolean stating if the Workspace is editable.

**Returns:** Promise\<boolean>

___

### createFunction

▸ **createFunction**(`input`: [CreateFunctionInput](createfunctioninput.md)): Promise\<[Function](function.md)>

*Defined in Clients/AssistantAPIClient/models.ts:550*

Creates a new Function in the Workspace.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | [CreateFunctionInput](createfunctioninput.md) | Information for the function to create.  |

**Returns:** Promise\<[Function](function.md)>

___

### createFunctions

▸ **createFunctions**(`input`: [CreateFunctionInput](createfunctioninput.md)[]): Promise\<[Function](function.md)[]>

*Defined in Clients/AssistantAPIClient/models.ts:556*

Creates a list of new Functions in the Workspace.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | [CreateFunctionInput](createfunctioninput.md)[] | Information for the functions to create.  |

**Returns:** Promise\<[Function](function.md)[]>

___

### createKind

▸ **createKind**(`input`: [CreateTypeInput](createtypeinput.md)): Promise\<[Kind](kind.md)>

*Defined in Clients/AssistantAPIClient/models.ts:598*

Creates a new Kind in the Workspace.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | [CreateTypeInput](createtypeinput.md) | Information for Kind to create.  |

**Returns:** Promise\<[Kind](kind.md)>

___

### createKinds

▸ **createKinds**(`input`: [CreateTypeInput](createtypeinput.md)[]): Promise\<[Kind](kind.md)[]>

*Defined in Clients/AssistantAPIClient/models.ts:604*

Creates a list of Kinds in the Workspace.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | [CreateTypeInput](createtypeinput.md)[] | Information for Kinds to create.  |

**Returns:** Promise\<[Kind](kind.md)[]>

___

### createKnowledgeGraph

▸ **createKnowledgeGraph**(`input`: [CreateKnowledgeGraphInput](createknowledgegraphinput.md)): Promise\<void>

*Defined in Clients/AssistantAPIClient/models.ts:497*

Creates a new Knowledge Graph in the Workspace.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | [CreateKnowledgeGraphInput](createknowledgegraphinput.md) | Information about the new Knowledge Graph.  |

**Returns:** Promise\<void>

___

### createKnowledgeGraphs

▸ **createKnowledgeGraphs**(`input`: [CreateKnowledgeGraphInput](createknowledgegraphinput.md)[]): Promise\<void>

*Defined in Clients/AssistantAPIClient/models.ts:503*

Creates a list of new Knowledge Graphs in the Workspace.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | [CreateKnowledgeGraphInput](createknowledgegraphinput.md)[] | Information about the new Knowledge Graphs.  |

**Returns:** Promise\<void>

___

### deleteFunction

▸ **deleteFunction**(`name`: string): Promise\<void>

*Defined in Clients/AssistantAPIClient/models.ts:574*

Deletes a function in the Workspace.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | string | Name of the Function.  |

**Returns:** Promise\<void>

___

### deleteKind

▸ **deleteKind**(`name`: string): Promise\<void>

*Defined in Clients/AssistantAPIClient/models.ts:628*

Deletes a Kind in the Workspace.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The name of the Kind to delete.  |

**Returns:** Promise\<void>

___

### getActiveGraph

▸ **getActiveGraph**(): Promise\<[Maybe](../README.md#maybe)\<[KnowledgeGraph](knowledgegraph.md) \| [Function](function.md)>>

*Defined in Clients/AssistantAPIClient/models.ts:488*

Gets the currently active graph.

**Returns:** Promise\<[Maybe](../README.md#maybe)\<[KnowledgeGraph](knowledgegraph.md) \| [Function](function.md)>>

___

### getAnnotationById

▸ **getAnnotationById**(`id`: string): Promise\<[Maybe](../README.md#maybe)\<[Annotation](annotation.md)>>

*Defined in Clients/AssistantAPIClient/models.ts:622*

Gets an Annotation in the Workspace by ID

#### Parameters:

Name | Type |
------ | ------ |
`id` | string |

**Returns:** Promise\<[Maybe](../README.md#maybe)\<[Annotation](annotation.md)>>

___

### getAnnotations

▸ **getAnnotations**(): Promise\<[Annotation](annotation.md)[]>

*Defined in Clients/AssistantAPIClient/models.ts:619*

Gets the list of Annotations that live in the Workspace

**Returns:** Promise\<[Annotation](annotation.md)[]>

___

### getFunctionGraph

▸ **getFunctionGraph**(`id`: string): Promise\<[Function](function.md)>

*Defined in Clients/AssistantAPIClient/models.ts:583*

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

*Defined in Clients/AssistantAPIClient/models.ts:538*

Gets the list of Functions that live in the Workspace.

**Returns:** Promise\<[Function](function.md)[]>

___

### getFunctionsByName

▸ **getFunctionsByName**(`names`: string[]): Promise\<[Function](function.md)[]>

*Defined in Clients/AssistantAPIClient/models.ts:544*

Gets a list of Functions that live in the Workspace based on their names.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`names` | string[] | The name of the Functions to return.  |

**Returns:** Promise\<[Function](function.md)[]>

___

### getImportedAssistants

▸ **getImportedAssistants**(): Promise\<[Assistant](assistant.md)[]>

*Defined in Clients/AssistantAPIClient/models.ts:509*

Gets all of the Assistants imported into the Workspaces inventory.

**Returns:** Promise\<[Assistant](assistant.md)[]>

___

### getImportedServices

▸ **getImportedServices**(): Promise\<[Service](service.md)[]>

*Defined in Clients/AssistantAPIClient/models.ts:506*

Gets all of the Services imported into the Workspaces inventory.

**Returns:** Promise\<[Service](service.md)[]>

___

### getKinds

▸ **getKinds**(): Promise\<[Kind](kind.md)[]>

*Defined in Clients/AssistantAPIClient/models.ts:586*

Gets the list of Kinds that live in the Workspace.

**Returns:** Promise\<[Kind](kind.md)[]>

___

### getKindsByName

▸ **getKindsByName**(`names`: string[]): Promise\<[Kind](kind.md)[]>

*Defined in Clients/AssistantAPIClient/models.ts:592*

Gets a list of Kinds that live in the Workspace based on their names.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`names` | string[] | The names of the Kinds to load.  |

**Returns:** Promise\<[Kind](kind.md)[]>

___

### getKnowledgeGraphs

▸ **getKnowledgeGraphs**(): Promise\<[KnowledgeGraph](knowledgegraph.md)[]>

*Defined in Clients/AssistantAPIClient/models.ts:491*

Gets all of the Knowledge Graphs in the Workspace.

**Returns:** Promise\<[KnowledgeGraph](knowledgegraph.md)[]>

___

### importService

▸ **importService**(`serviceId`: string): Promise\<[Maybe](../README.md#maybe)\<string>>

*Defined in Clients/AssistantAPIClient/models.ts:516*

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

*Defined in Clients/AssistantAPIClient/models.ts:523*

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

*Defined in Clients/AssistantAPIClient/models.ts:466*

Returns the e-mail of the user who locked the Workspace.

**Returns:** Promise\<[Maybe](../README.md#maybe)\<string>>

___

### reload

▸ **reload**(): Promise\<[Workspace](workspace.md)>

*Defined in Clients/AssistantAPIClient/models.ts:482*

Returns a new copy of the workspace with reloaded information.

**Returns:** Promise\<[Workspace](workspace.md)>

___

### removeService

▸ **removeService**(`serviceId`: string): Promise\<void>

*Defined in Clients/AssistantAPIClient/models.ts:529*

Removes a Service or Assistant from the Workspaces inventory.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`serviceId` | string | Service or Assistant ID.  |

**Returns:** Promise\<void>

___

### removeServices

▸ **removeServices**(`serviceIds`: string): Promise\<void>

*Defined in Clients/AssistantAPIClient/models.ts:535*

Removes a list Services and/or Assistants from the Workspaces inventory.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`serviceIds` | string | Service and/or Assistant IDs.  |

**Returns:** Promise\<void>

___

### setLocked

▸ **setLocked**(`isLocked?`: boolean): Promise\<void>

*Defined in Clients/AssistantAPIClient/models.ts:473*

Updates the locked state of the Workspace.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`isLocked?` | boolean | The new locked state of the Workspace, if not provided then the locked state is toggled.  |

**Returns:** Promise\<void>

___

### triggerRepairEvent

▸ **triggerRepairEvent**(): Promise\<void>

*Defined in Clients/AssistantAPIClient/models.ts:485*

Sends a repair event to all assistants.

**Returns:** Promise\<void>

___

### update

▸ **update**(`changes`: [UpdateWorkspaceInput](updateworkspaceinput.md)): Promise\<void>

*Defined in Clients/AssistantAPIClient/models.ts:479*

Updates information about the Workspace.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`changes` | [UpdateWorkspaceInput](updateworkspaceinput.md) | Information to update the Workspace with.  |

**Returns:** Promise\<void>

___

### updateFunction

▸ **updateFunction**(`changes`: [UpdateFunctionInput](updatefunctioninput.md)): Promise\<[Function](function.md)>

*Defined in Clients/AssistantAPIClient/models.ts:562*

Updates a Function in the Workspace.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`changes` | [UpdateFunctionInput](updatefunctioninput.md) | The changes to make to the Function.  |

**Returns:** Promise\<[Function](function.md)>

___

### updateFunctions

▸ **updateFunctions**(`changes`: [UpdateFunctionInput](updatefunctioninput.md)[]): Promise\<[Function](function.md)[]>

*Defined in Clients/AssistantAPIClient/models.ts:568*

Updates a list of Function in the Workspace.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`changes` | [UpdateFunctionInput](updatefunctioninput.md)[] | The changes to make to the Functions.  |

**Returns:** Promise\<[Function](function.md)[]>

___

### updateKind

▸ **updateKind**(`changes`: [UpdateTypeInput](updatetypeinput.md)): Promise\<[Kind](kind.md)>

*Defined in Clients/AssistantAPIClient/models.ts:610*

Updates a Kind in the Workspace.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`changes` | [UpdateTypeInput](updatetypeinput.md) | The changes to make to the Kind.  |

**Returns:** Promise\<[Kind](kind.md)>

___

### updateKinds

▸ **updateKinds**(`changes`: [UpdateTypeInput](updatetypeinput.md)[]): Promise\<[Kind](kind.md)[]>

*Defined in Clients/AssistantAPIClient/models.ts:616*

Updates a list of Kinds in the Workspace.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`changes` | [UpdateTypeInput](updatetypeinput.md)[] | The changes to make to the Kinds.  |

**Returns:** Promise\<[Kind](kind.md)[]>
