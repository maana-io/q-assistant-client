[Maana Q Assistant API Client](../README.md) / KnowledgeGraph

# Interface: KnowledgeGraph

**`Prop`**

The ID of the Knowledge Graph.

**`Prop`**

The name of the Knowledge Graph.

**`Prop`**

**`Prop`**

**`Prop`**

**`Prop`**

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`KnowledgeGraph`**

## Table of contents

### Properties

- [description](KnowledgeGraph.md#description)
- [graph](KnowledgeGraph.md#graph)
- [id](KnowledgeGraph.md#id)
- [name](KnowledgeGraph.md#name)
- [nameDescriptor](KnowledgeGraph.md#namedescriptor)
- [offsetX](KnowledgeGraph.md#offsetx)
- [offsetY](KnowledgeGraph.md#offsety)
- [zoom](KnowledgeGraph.md#zoom)

### Methods

- [addNode](KnowledgeGraph.md#addnode)
- [canEdit](KnowledgeGraph.md#canedit)
- [getNodes](KnowledgeGraph.md#getnodes)
- [lockedBy](KnowledgeGraph.md#lockedby)
- [removeNode](KnowledgeGraph.md#removenode)
- [setLocked](KnowledgeGraph.md#setlocked)
- [update](KnowledgeGraph.md#update)
- [updateGraphLayout](KnowledgeGraph.md#updategraphlayout)
- [updateNodeLayout](KnowledgeGraph.md#updatenodelayout)

## Properties

### description

• `Optional` **description**: `string`

Human readable description of the entity.

#### Inherited from

[Entity](Entity.md).[description](Entity.md#description)

#### Defined in

[models.ts:81](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L81)

___

### graph

• **graph**: [`Graph`](Graph.md)

The graph information for the Knowledge Graph.

#### Defined in

[models.ts:222](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L222)

___

### id

• **id**: `string`

The ID of the entity.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[models.ts:72](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L72)

___

### name

• **name**: `string`

The name of the entity.

#### Inherited from

[Entity](Entity.md).[name](Entity.md#name)

#### Defined in

[models.ts:75](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L75)

___

### nameDescriptor

• `Optional` **nameDescriptor**: `string`

Name of where the entity comes from (Service/Workspace).

#### Inherited from

[Entity](Entity.md).[nameDescriptor](Entity.md#namedescriptor)

#### Defined in

[models.ts:78](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L78)

___

### offsetX

• **offsetX**: `number`

The X offset of the Knowledge Graph.

**`Deprecated`**

Use graph.offset.x instead.

#### Defined in

[models.ts:207](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L207)

___

### offsetY

• **offsetY**: `number`

The Y offset of the Knowledge Graph.

**`Deprecated`**

use graph.offset.y instead.

#### Defined in

[models.ts:213](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L213)

___

### zoom

• **zoom**: `number`

The zoom of the Knowledge Graph.

**`Deprecated`**

use graph.zoom instead.

#### Defined in

[models.ts:219](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L219)

## Methods

### addNode

▸ **addNode**(`entityIdentifier`): `Promise`<`string`\>

Adds an entity as a node on the Knowledge Graph.

**`Deprecated`**

use update instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityIdentifier` | [`EntityIdentifier`](EntityIdentifier.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

[models.ts:253](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L253)

___

### canEdit

▸ **canEdit**(): `Promise`<`boolean`\>

Returns boolean stating if the Knowledge Graph is editable.

#### Returns

`Promise`<`boolean`\>

#### Defined in

[models.ts:225](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L225)

___

### getNodes

▸ **getNodes**(): `Promise`<[`Node`](Node.md)[]\>

Returns the list of nodes inside of the Knowledge Graph.

**`Deprecated`**

use graph.nodes instead.

#### Returns

`Promise`<[`Node`](Node.md)[]\>

#### Defined in

[models.ts:247](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L247)

___

### lockedBy

▸ **lockedBy**(): `Promise`<`string`\>

Returns the e-mail of the user who locked the Knowledge Graph.

#### Returns

`Promise`<`string`\>

#### Defined in

[models.ts:228](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L228)

___

### removeNode

▸ **removeNode**(`nodeId`): `Promise`<`void`\>

Removed a node from the Knowledge Graph.

**`Deprecated`**

use update instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nodeId` | `string` | The ID of the node to remove from the Knowledge Graph. |

#### Returns

`Promise`<`void`\>

#### Defined in

[models.ts:260](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L260)

___

### setLocked

▸ **setLocked**(`isLocked?`): `Promise`<`void`\>

Updates the locked state of the Knowledge Graph.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isLocked?` | `boolean` | The new locked state of the Knowledge Graph, if not provided then the locked state is toggled. |

#### Returns

`Promise`<`void`\>

#### Defined in

[models.ts:235](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L235)

___

### update

▸ **update**(`changes`): `Promise`<`void`\>

Updates information about the Knowledge Graph.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `changes` | [`UpdateKnowledgeGraphInput`](UpdateKnowledgeGraphInput.md) | Information to update the Knowledge Graph with. |

#### Returns

`Promise`<`void`\>

#### Defined in

[models.ts:241](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L241)

___

### updateGraphLayout

▸ **updateGraphLayout**(`changes`): `Promise`<`void`\>

Updates the layout information for the graph of the Knowledge Graph.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `changes` | [`UpdateGraphLayoutInput`](UpdateGraphLayoutInput.md) | The changes to make to the layout. |

#### Returns

`Promise`<`void`\>

#### Defined in

[models.ts:276](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L276)

___

### updateNodeLayout

▸ **updateNodeLayout**(`nodeId`, `changes`): `Promise`<`void`\>

Updates the layout information for a node in the Knowledge Graph.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nodeId` | `string` | The ID of the node to update. |
| `changes` | [`UpdateNodeLayoutInput`](UpdateNodeLayoutInput.md) | The changes to make to the layout. |

#### Returns

`Promise`<`void`\>

#### Defined in

[models.ts:267](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L267)
