[Maana Q Assistant API Client](../README.md) / Workspace

# Interface: Workspace

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`Workspace`**

## Table of contents

### Properties

- [description](Workspace.md#description)
- [endpointServiceId](Workspace.md#endpointserviceid)
- [id](Workspace.md#id)
- [isPublic](Workspace.md#ispublic)
- [isTemplate](Workspace.md#istemplate)
- [location](Workspace.md#location)
- [name](Workspace.md#name)
- [nameDescriptor](Workspace.md#namedescriptor)
- [owner](Workspace.md#owner)
- [persistenceServiceId](Workspace.md#persistenceserviceid)
- [serviceId](Workspace.md#serviceid)
- [tags](Workspace.md#tags)
- [thumbnailUrl](Workspace.md#thumbnailurl)

### Methods

- [canEdit](Workspace.md#canedit)
- [createFunction](Workspace.md#createfunction)
- [createFunctions](Workspace.md#createfunctions)
- [createKind](Workspace.md#createkind)
- [createKinds](Workspace.md#createkinds)
- [createKnowledgeGraph](Workspace.md#createknowledgegraph)
- [createKnowledgeGraphs](Workspace.md#createknowledgegraphs)
- [deleteFunction](Workspace.md#deletefunction)
- [deleteKind](Workspace.md#deletekind)
- [getActiveGraph](Workspace.md#getactivegraph)
- [getAnnotationById](Workspace.md#getannotationbyid)
- [getAnnotations](Workspace.md#getannotations)
- [getFunctionGraph](Workspace.md#getfunctiongraph)
- [getFunctions](Workspace.md#getfunctions)
- [getFunctionsByName](Workspace.md#getfunctionsbyname)
- [getImportedAssistants](Workspace.md#getimportedassistants)
- [getImportedServices](Workspace.md#getimportedservices)
- [getKinds](Workspace.md#getkinds)
- [getKindsByName](Workspace.md#getkindsbyname)
- [getKnowledgeGraphs](Workspace.md#getknowledgegraphs)
- [importService](Workspace.md#importservice)
- [importServices](Workspace.md#importservices)
- [lockedBy](Workspace.md#lockedby)
- [reload](Workspace.md#reload)
- [removeService](Workspace.md#removeservice)
- [removeServices](Workspace.md#removeservices)
- [setLocked](Workspace.md#setlocked)
- [triggerRepairEvent](Workspace.md#triggerrepairevent)
- [update](Workspace.md#update)
- [updateFunction](Workspace.md#updatefunction)
- [updateFunctions](Workspace.md#updatefunctions)
- [updateKind](Workspace.md#updatekind)
- [updateKinds](Workspace.md#updatekinds)

## Properties

### description

• `Optional` **description**: `string`

Human readable description of the entity.

#### Inherited from

[Entity](Entity.md).[description](Entity.md#description)

#### Defined in

[models.ts:84](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L84)

___

### endpointServiceId

• **endpointServiceId**: `string`

**`Deprecated`**

Replaced by `location.platformUrl`

#### Defined in

[models.ts:440](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L440)

___

### id

• **id**: `string`

The ID of the entity.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[models.ts:75](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L75)

___

### isPublic

• **isPublic**: `boolean`

When true others can see this Workspace.

#### Defined in

[models.ts:455](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L455)

___

### isTemplate

• **isTemplate**: `boolean`

When true it shows up as a template Workspace.

#### Defined in

[models.ts:458](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L458)

___

### location

• **location**: [`ServiceLocation`](ServiceLocation.md)

The location information about the Workspace.

#### Defined in

[models.ts:443](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L443)

___

### name

• **name**: `string`

The name of the entity.

#### Inherited from

[Entity](Entity.md).[name](Entity.md#name)

#### Defined in

[models.ts:78](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L78)

___

### nameDescriptor

• `Optional` **nameDescriptor**: `string`

Name of where the entity comes from (Service/Workspace).

#### Inherited from

[Entity](Entity.md).[nameDescriptor](Entity.md#namedescriptor)

#### Defined in

[models.ts:81](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L81)

___

### owner

• **owner**: `Object`

The user that owns the Workspace.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `name` | `string` |

#### Defined in

[models.ts:464](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L464)

___

### persistenceServiceId

• **persistenceServiceId**: `string`

The ID of the model service handling persistence for the Workspace

#### Defined in

[models.ts:452](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L452)

___

### serviceId

• **serviceId**: `string`

The ID of the logic service backing the Workspace.

#### Defined in

[models.ts:449](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L449)

___

### tags

• **tags**: `string`[]

The list of tags for the Workspace.

#### Defined in

[models.ts:461](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L461)

___

### thumbnailUrl

• **thumbnailUrl**: `string`

The URL to the URL of the thumbnail pic.

#### Defined in

[models.ts:446](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L446)

## Methods

### canEdit

▸ **canEdit**(): `Promise`<`boolean`\>

Returns boolean stating if the Workspace is editable.

#### Returns

`Promise`<`boolean`\>

#### Defined in

[models.ts:467](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L467)

___

### createFunction

▸ **createFunction**(`input`): `Promise`<[`Function`](Function.md)\>

Creates a new Function in the Workspace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`CreateFunctionInput`](CreateFunctionInput.md) | Information for the function to create. |

#### Returns

`Promise`<[`Function`](Function.md)\>

#### Defined in

[models.ts:554](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L554)

___

### createFunctions

▸ **createFunctions**(`input`): `Promise`<[`Function`](Function.md)[]\>

Creates a list of new Functions in the Workspace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`CreateFunctionInput`](CreateFunctionInput.md)[] | Information for the functions to create. |

#### Returns

`Promise`<[`Function`](Function.md)[]\>

#### Defined in

[models.ts:560](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L560)

___

### createKind

▸ **createKind**(`input`): `Promise`<[`Kind`](Kind.md)\>

Creates a new Kind in the Workspace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`CreateTypeInput`](CreateTypeInput.md) | Information for Kind to create. |

#### Returns

`Promise`<[`Kind`](Kind.md)\>

#### Defined in

[models.ts:602](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L602)

___

### createKinds

▸ **createKinds**(`input`): `Promise`<[`Kind`](Kind.md)[]\>

Creates a list of Kinds in the Workspace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`CreateTypeInput`](CreateTypeInput.md)[] | Information for Kinds to create. |

#### Returns

`Promise`<[`Kind`](Kind.md)[]\>

#### Defined in

[models.ts:608](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L608)

___

### createKnowledgeGraph

▸ **createKnowledgeGraph**(`input`): `Promise`<`void`\>

Creates a new Knowledge Graph in the Workspace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`CreateKnowledgeGraphInput`](CreateKnowledgeGraphInput.md) | Information about the new Knowledge Graph. |

#### Returns

`Promise`<`void`\>

#### Defined in

[models.ts:501](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L501)

___

### createKnowledgeGraphs

▸ **createKnowledgeGraphs**(`input`): `Promise`<`void`\>

Creates a list of new Knowledge Graphs in the Workspace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`CreateKnowledgeGraphInput`](CreateKnowledgeGraphInput.md)[] | Information about the new Knowledge Graphs. |

#### Returns

`Promise`<`void`\>

#### Defined in

[models.ts:507](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L507)

___

### deleteFunction

▸ **deleteFunction**(`name`): `Promise`<`void`\>

Deletes a function in the Workspace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name of the Function. |

#### Returns

`Promise`<`void`\>

#### Defined in

[models.ts:578](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L578)

___

### deleteKind

▸ **deleteKind**(`name`): `Promise`<`void`\>

Deletes a Kind in the Workspace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the Kind to delete. |

#### Returns

`Promise`<`void`\>

#### Defined in

[models.ts:632](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L632)

___

### getActiveGraph

▸ **getActiveGraph**(): `Promise`<[`KnowledgeGraph`](KnowledgeGraph.md) \| [`Function`](Function.md)\>

Gets the currently active graph.

#### Returns

`Promise`<[`KnowledgeGraph`](KnowledgeGraph.md) \| [`Function`](Function.md)\>

#### Defined in

[models.ts:492](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L492)

___

### getAnnotationById

▸ **getAnnotationById**(`id`): `Promise`<[`Annotation`](Annotation.md)\>

Gets an Annotation in the Workspace by ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<[`Annotation`](Annotation.md)\>

#### Defined in

[models.ts:626](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L626)

___

### getAnnotations

▸ **getAnnotations**(): `Promise`<[`Annotation`](Annotation.md)[]\>

Gets the list of Annotations that live in the Workspace

#### Returns

`Promise`<[`Annotation`](Annotation.md)[]\>

#### Defined in

[models.ts:623](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L623)

___

### getFunctionGraph

▸ **getFunctionGraph**(`id`): `Promise`<[`Function`](Function.md)\>

Gets the Function based on ID with its implementation and graph
information.

**`Deprecated`**

To get the function graph and implementation for a function,
load it via the workspace it belongs to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the Function. |

#### Returns

`Promise`<[`Function`](Function.md)\>

#### Defined in

[models.ts:587](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L587)

___

### getFunctions

▸ **getFunctions**(): `Promise`<[`Function`](Function.md)[]\>

Gets the list of Functions that live in the Workspace.

#### Returns

`Promise`<[`Function`](Function.md)[]\>

#### Defined in

[models.ts:542](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L542)

___

### getFunctionsByName

▸ **getFunctionsByName**(`names`): `Promise`<[`Function`](Function.md)[]\>

Gets a list of Functions that live in the Workspace based on their names.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `names` | `string`[] | The name of the Functions to return. |

#### Returns

`Promise`<[`Function`](Function.md)[]\>

#### Defined in

[models.ts:548](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L548)

___

### getImportedAssistants

▸ **getImportedAssistants**(): `Promise`<[`Assistant`](Assistant.md)[]\>

Gets all of the Assistants imported into the Workspaces inventory.

#### Returns

`Promise`<[`Assistant`](Assistant.md)[]\>

#### Defined in

[models.ts:513](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L513)

___

### getImportedServices

▸ **getImportedServices**(): `Promise`<[`Service`](Service.md)[]\>

Gets all of the Services imported into the Workspaces inventory.

#### Returns

`Promise`<[`Service`](Service.md)[]\>

#### Defined in

[models.ts:510](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L510)

___

### getKinds

▸ **getKinds**(): `Promise`<[`Kind`](Kind.md)[]\>

Gets the list of Kinds that live in the Workspace.

#### Returns

`Promise`<[`Kind`](Kind.md)[]\>

#### Defined in

[models.ts:590](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L590)

___

### getKindsByName

▸ **getKindsByName**(`names`): `Promise`<[`Kind`](Kind.md)[]\>

Gets a list of Kinds that live in the Workspace based on their names.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `names` | `string`[] | The names of the Kinds to load. |

#### Returns

`Promise`<[`Kind`](Kind.md)[]\>

#### Defined in

[models.ts:596](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L596)

___

### getKnowledgeGraphs

▸ **getKnowledgeGraphs**(): `Promise`<[`KnowledgeGraph`](KnowledgeGraph.md)[]\>

Gets all of the Knowledge Graphs in the Workspace.

#### Returns

`Promise`<[`KnowledgeGraph`](KnowledgeGraph.md)[]\>

#### Defined in

[models.ts:495](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L495)

___

### importService

▸ **importService**(`serviceId`): `Promise`<`string`\>

Imports a Service or Assistant into the Workspaces inventory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serviceId` | `string` | Service or Assistant ID. |

#### Returns

`Promise`<`string`\>

ID of imported Service or Assistant.

#### Defined in

[models.ts:520](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L520)

___

### importServices

▸ **importServices**(`serviceIds`): `Promise`<`string`[]\>

Imports a list of Services and/or Assistants into the Workspaces inventory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serviceIds` | `string`[] | Service and/or Assistant IDs. |

#### Returns

`Promise`<`string`[]\>

IDs of imported Services and/or Assistants.

#### Defined in

[models.ts:527](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L527)

___

### lockedBy

▸ **lockedBy**(): `Promise`<`string`\>

Returns the e-mail of the user who locked the Workspace.

#### Returns

`Promise`<`string`\>

#### Defined in

[models.ts:470](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L470)

___

### reload

▸ **reload**(): `Promise`<[`Workspace`](Workspace.md)\>

Returns a new copy of the workspace with reloaded information.

#### Returns

`Promise`<[`Workspace`](Workspace.md)\>

#### Defined in

[models.ts:486](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L486)

___

### removeService

▸ **removeService**(`serviceId`): `Promise`<`void`\>

Removes a Service or Assistant from the Workspaces inventory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serviceId` | `string` | Service or Assistant ID. |

#### Returns

`Promise`<`void`\>

#### Defined in

[models.ts:533](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L533)

___

### removeServices

▸ **removeServices**(`serviceIds`): `Promise`<`void`\>

Removes a list Services and/or Assistants from the Workspaces inventory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serviceIds` | `string` | Service and/or Assistant IDs. |

#### Returns

`Promise`<`void`\>

#### Defined in

[models.ts:539](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L539)

___

### setLocked

▸ **setLocked**(`isLocked?`): `Promise`<`void`\>

Updates the locked state of the Workspace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isLocked?` | `boolean` | The new locked state of the Workspace, if not provided then the locked state is toggled. |

#### Returns

`Promise`<`void`\>

#### Defined in

[models.ts:477](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L477)

___

### triggerRepairEvent

▸ **triggerRepairEvent**(): `Promise`<`void`\>

Sends a repair event to all assistants.

#### Returns

`Promise`<`void`\>

#### Defined in

[models.ts:489](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L489)

___

### update

▸ **update**(`changes`): `Promise`<`void`\>

Updates information about the Workspace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `changes` | [`UpdateWorkspaceInput`](UpdateWorkspaceInput.md) | Information to update the Workspace with. |

#### Returns

`Promise`<`void`\>

#### Defined in

[models.ts:483](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L483)

___

### updateFunction

▸ **updateFunction**(`changes`): `Promise`<[`Function`](Function.md)\>

Updates a Function in the Workspace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `changes` | [`UpdateFunctionInput`](UpdateFunctionInput.md) | The changes to make to the Function. |

#### Returns

`Promise`<[`Function`](Function.md)\>

#### Defined in

[models.ts:566](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L566)

___

### updateFunctions

▸ **updateFunctions**(`changes`): `Promise`<[`Function`](Function.md)[]\>

Updates a list of Function in the Workspace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `changes` | [`UpdateFunctionInput`](UpdateFunctionInput.md)[] | The changes to make to the Functions. |

#### Returns

`Promise`<[`Function`](Function.md)[]\>

#### Defined in

[models.ts:572](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L572)

___

### updateKind

▸ **updateKind**(`changes`): `Promise`<[`Kind`](Kind.md)\>

Updates a Kind in the Workspace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `changes` | [`UpdateTypeInput`](UpdateTypeInput.md) | The changes to make to the Kind. |

#### Returns

`Promise`<[`Kind`](Kind.md)\>

#### Defined in

[models.ts:614](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L614)

___

### updateKinds

▸ **updateKinds**(`changes`): `Promise`<[`Kind`](Kind.md)[]\>

Updates a list of Kinds in the Workspace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `changes` | [`UpdateTypeInput`](UpdateTypeInput.md)[] | The changes to make to the Kinds. |

#### Returns

`Promise`<[`Kind`](Kind.md)[]\>

#### Defined in

[models.ts:620](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L620)
