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

[models.ts:123](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L123)

___

### graph

• **graph**: [`Graph`](Graph.md)

The graph information for the Knowledge Graph.

#### Defined in

[models.ts:264](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L264)

___

### id

• **id**: `string`

The ID of the entity.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[models.ts:114](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L114)

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

### offsetX

• **offsetX**: `number`

The X offset of the Knowledge Graph.

**`Deprecated`**

Use graph.offset.x instead.

#### Defined in

[models.ts:249](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L249)

___

### offsetY

• **offsetY**: `number`

The Y offset of the Knowledge Graph.

**`Deprecated`**

use graph.offset.y instead.

#### Defined in

[models.ts:255](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L255)

___

### zoom

• **zoom**: `number`

The zoom of the Knowledge Graph.

**`Deprecated`**

use graph.zoom instead.

#### Defined in

[models.ts:261](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L261)

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

[models.ts:295](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L295)

___

### canEdit

▸ **canEdit**(): `Promise`<`boolean`\>

Returns boolean stating if the Knowledge Graph is editable.

#### Returns

`Promise`<`boolean`\>

#### Defined in

[models.ts:267](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L267)

___

### getNodes

▸ **getNodes**(): `Promise`<[`Node`](Node.md)[]\>

Returns the list of nodes inside of the Knowledge Graph.

**`Deprecated`**

use graph.nodes instead.

#### Returns

`Promise`<[`Node`](Node.md)[]\>

#### Defined in

[models.ts:289](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L289)

___

### lockedBy

▸ **lockedBy**(): `Promise`<`string`\>

Returns the e-mail of the user who locked the Knowledge Graph.

#### Returns

`Promise`<`string`\>

#### Defined in

[models.ts:270](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L270)

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

[models.ts:302](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L302)

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

[models.ts:277](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L277)

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

[models.ts:283](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L283)

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

[models.ts:318](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L318)

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

[models.ts:309](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L309)
