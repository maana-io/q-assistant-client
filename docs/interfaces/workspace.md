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

[models.ts:123](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L123)

___

### endpointServiceId

• **endpointServiceId**: `string`

**`Deprecated`**

Replaced by `location.platformUrl`

#### Defined in

[models.ts:479](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L479)

___

### id

• **id**: `string`

The ID of the entity.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[models.ts:114](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L114)

___

### isPublic

• **isPublic**: `boolean`

When true others can see this Workspace.

#### Defined in

[models.ts:494](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L494)

___

### isTemplate

• **isTemplate**: `boolean`

When true it shows up as a template Workspace.

#### Defined in

[models.ts:497](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L497)

___

### location

• **location**: [`ServiceLocation`](ServiceLocation.md)

The location information about the Workspace.

#### Defined in

[models.ts:482](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L482)

___

### name

• **name**: `string`

The name of the entity.

#### Inherited from

[Entity](Entity.md).[name](Entity.md#name)

#### Defined in

[models.ts:117](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L117)

___

### nameDescriptor

• `Optional` **nameDescriptor**: `string`

Name of where the entity comes from (Service/Workspace).

#### Inherited from

[Entity](Entity.md).[nameDescriptor](Entity.md#namedescriptor)

#### Defined in

[models.ts:120](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L120)

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

[models.ts:503](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L503)

___

### persistenceServiceId

• **persistenceServiceId**: `string`

The ID of the model service handling persistence for the Workspace

#### Defined in

[models.ts:491](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L491)

___

### serviceId

• **serviceId**: `string`

The ID of the logic service backing the Workspace.

#### Defined in

[models.ts:488](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L488)

___

### tags

• **tags**: `string`[]

The list of tags for the Workspace.

#### Defined in

[models.ts:500](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L500)

___

### thumbnailUrl

• **thumbnailUrl**: `string`

The URL to the URL of the thumbnail pic.

#### Defined in

[models.ts:485](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L485)

## Methods

### canEdit

▸ **canEdit**(): `Promise`<`boolean`\>

Returns boolean stating if the Workspace is editable.

#### Returns

`Promise`<`boolean`\>

#### Defined in

[models.ts:506](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L506)

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

[models.ts:593](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L593)

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

[models.ts:599](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L599)

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

[models.ts:641](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L641)

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

[models.ts:647](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L647)

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

[models.ts:540](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L540)

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

[models.ts:546](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L546)

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

[models.ts:617](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L617)

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

[models.ts:671](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L671)

___

### getActiveGraph

▸ **getActiveGraph**(): `Promise`<[`KnowledgeGraph`](KnowledgeGraph.md) \| [`Function`](Function.md)\>

Gets the currently active graph.

#### Returns

`Promise`<[`KnowledgeGraph`](KnowledgeGraph.md) \| [`Function`](Function.md)\>

#### Defined in

[models.ts:531](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L531)

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

[models.ts:665](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L665)

___

### getAnnotations

▸ **getAnnotations**(): `Promise`<[`Annotation`](Annotation.md)[]\>

Gets the list of Annotations that live in the Workspace

#### Returns

`Promise`<[`Annotation`](Annotation.md)[]\>

#### Defined in

[models.ts:662](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L662)

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

[models.ts:626](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L626)

___

### getFunctions

▸ **getFunctions**(): `Promise`<[`Function`](Function.md)[]\>

Gets the list of Functions that live in the Workspace.

#### Returns

`Promise`<[`Function`](Function.md)[]\>

#### Defined in

[models.ts:581](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L581)

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

[models.ts:587](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L587)

___

### getImportedAssistants

▸ **getImportedAssistants**(): `Promise`<[`Assistant`](Assistant.md)[]\>

Gets all of the Assistants imported into the Workspaces inventory.

#### Returns

`Promise`<[`Assistant`](Assistant.md)[]\>

#### Defined in

[models.ts:552](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L552)

___

### getImportedServices

▸ **getImportedServices**(): `Promise`<[`Service`](Service.md)[]\>

Gets all of the Services imported into the Workspaces inventory.

#### Returns

`Promise`<[`Service`](Service.md)[]\>

#### Defined in

[models.ts:549](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L549)

___

### getKinds

▸ **getKinds**(): `Promise`<[`Kind`](Kind.md)[]\>

Gets the list of Kinds that live in the Workspace.

#### Returns

`Promise`<[`Kind`](Kind.md)[]\>

#### Defined in

[models.ts:629](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L629)

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

[models.ts:635](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L635)

___

### getKnowledgeGraphs

▸ **getKnowledgeGraphs**(): `Promise`<[`KnowledgeGraph`](KnowledgeGraph.md)[]\>

Gets all of the Knowledge Graphs in the Workspace.

#### Returns

`Promise`<[`KnowledgeGraph`](KnowledgeGraph.md)[]\>

#### Defined in

[models.ts:534](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L534)

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

[models.ts:559](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L559)

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

[models.ts:566](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L566)

___

### lockedBy

▸ **lockedBy**(): `Promise`<`string`\>

Returns the e-mail of the user who locked the Workspace.

#### Returns

`Promise`<`string`\>

#### Defined in

[models.ts:509](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L509)

___

### reload

▸ **reload**(): `Promise`<[`Workspace`](Workspace.md)\>

Returns a new copy of the workspace with reloaded information.

#### Returns

`Promise`<[`Workspace`](Workspace.md)\>

#### Defined in

[models.ts:525](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L525)

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

[models.ts:572](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L572)

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

[models.ts:578](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L578)

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

[models.ts:516](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L516)

___

### triggerRepairEvent

▸ **triggerRepairEvent**(): `Promise`<`void`\>

Sends a repair event to all assistants.

#### Returns

`Promise`<`void`\>

#### Defined in

[models.ts:528](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L528)

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

[models.ts:522](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L522)

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

[models.ts:605](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L605)

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

[models.ts:611](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L611)

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

[models.ts:653](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L653)

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

[models.ts:659](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L659)
