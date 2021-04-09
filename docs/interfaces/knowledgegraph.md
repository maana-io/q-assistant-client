**[Maana Q Assistant API Client](../README.md)**

> [Globals](../README.md) / KnowledgeGraph

# Interface: KnowledgeGraph

**`prop`** {string} id The ID of the Knowledge Graph.

**`prop`** {string} name The name of the Knowledge Graph.

**`prop`** {number}

**`prop`** {number}

**`prop`** {number} zoom

**`prop`** {Graph} graph

## Hierarchy

* [Entity](entity.md)

  ↳ **KnowledgeGraph**

## Index

### Properties

* [description](knowledgegraph.md#description)
* [graph](knowledgegraph.md#graph)
* [id](knowledgegraph.md#id)
* [name](knowledgegraph.md#name)
* [nameDescriptor](knowledgegraph.md#namedescriptor)
* [offsetX](knowledgegraph.md#offsetx)
* [offsetY](knowledgegraph.md#offsety)
* [zoom](knowledgegraph.md#zoom)

### Methods

* [addNode](knowledgegraph.md#addnode)
* [canEdit](knowledgegraph.md#canedit)
* [getNodes](knowledgegraph.md#getnodes)
* [lockedBy](knowledgegraph.md#lockedby)
* [removeNode](knowledgegraph.md#removenode)
* [setLocked](knowledgegraph.md#setlocked)
* [update](knowledgegraph.md#update)
* [updateGraphLayout](knowledgegraph.md#updategraphlayout)
* [updateNodeLayout](knowledgegraph.md#updatenodelayout)

## Properties

### description

• `Optional` **description**: string

*Inherited from [Entity](entity.md).[description](entity.md#description)*

*Defined in [models.ts:80](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L80)*

Human readable description of the entity.

___

### graph

•  **graph**: [Graph](graph.md)

*Defined in [models.ts:213](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L213)*

The graph information for the Knowledge Graph.

___

### id

•  **id**: string

*Inherited from [Entity](entity.md).[id](entity.md#id)*

*Defined in [models.ts:71](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L71)*

The ID of the entity.

___

### name

•  **name**: string

*Inherited from [Entity](entity.md).[name](entity.md#name)*

*Defined in [models.ts:74](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L74)*

The name of the entity.

___

### nameDescriptor

• `Optional` **nameDescriptor**: string

*Inherited from [Entity](entity.md).[nameDescriptor](entity.md#namedescriptor)*

*Defined in [models.ts:77](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L77)*

Name of where the entity comes from (Service/Workspace).

___

### offsetX

•  **offsetX**: number

*Defined in [models.ts:198](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L198)*

The X offset of the Knowledge Graph.

**`deprecated`** Use graph.offset.x instead.

___

### offsetY

•  **offsetY**: number

*Defined in [models.ts:204](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L204)*

The Y offset of the Knowledge Graph.

**`deprecated`** use graph.offset.y instead.

___

### zoom

•  **zoom**: number

*Defined in [models.ts:210](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L210)*

The zoom of the Knowledge Graph.

**`deprecated`** use graph.zoom instead.

## Methods

### addNode

▸ **addNode**(`entityIdentifier`: [EntityIdentifier](entityidentifier.md)): Promise\<string>

*Defined in [models.ts:244](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L244)*

Adds an entity as a node on the Knowledge Graph.

**`deprecated`** use update instead.

#### Parameters:

Name | Type |
------ | ------ |
`entityIdentifier` | [EntityIdentifier](entityidentifier.md) |

**Returns:** Promise\<string>

___

### canEdit

▸ **canEdit**(): Promise\<boolean>

*Defined in [models.ts:216](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L216)*

Returns boolean stating if the Knowledge Graph is editable.

**Returns:** Promise\<boolean>

___

### getNodes

▸ **getNodes**(): Promise\<[Node](node.md)[]>

*Defined in [models.ts:238](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L238)*

Returns the list of nodes inside of the Knowledge Graph.

**`deprecated`** use graph.nodes instead.

**Returns:** Promise\<[Node](node.md)[]>

___

### lockedBy

▸ **lockedBy**(): Promise\<[Maybe](../README.md#maybe)\<string>>

*Defined in [models.ts:219](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L219)*

Returns the e-mail of the user who locked the Knowledge Graph.

**Returns:** Promise\<[Maybe](../README.md#maybe)\<string>>

___

### removeNode

▸ **removeNode**(`nodeId`: string): Promise\<void>

*Defined in [models.ts:251](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L251)*

Removed a node from the Knowledge Graph.

**`deprecated`** use update instead.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`nodeId` | string | The ID of the node to remove from the Knowledge Graph.  |

**Returns:** Promise\<void>

___

### setLocked

▸ **setLocked**(`isLocked?`: boolean): Promise\<void>

*Defined in [models.ts:226](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L226)*

Updates the locked state of the Knowledge Graph.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`isLocked?` | boolean | The new locked state of the Knowledge Graph, if not provided then the locked state is toggled.  |

**Returns:** Promise\<void>

___

### update

▸ **update**(`changes`: [UpdateKnowledgeGraphInput](updateknowledgegraphinput.md)): Promise\<void>

*Defined in [models.ts:232](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L232)*

Updates information about the Knowledge Graph.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`changes` | [UpdateKnowledgeGraphInput](updateknowledgegraphinput.md) | Information to update the Knowledge Graph with.  |

**Returns:** Promise\<void>

___

### updateGraphLayout

▸ **updateGraphLayout**(`changes`: [UpdateGraphLayoutInput](updategraphlayoutinput.md)): Promise\<void>

*Defined in [models.ts:267](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L267)*

Updates the layout information for the graph of the Knowledge Graph.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`changes` | [UpdateGraphLayoutInput](updategraphlayoutinput.md) | The changes to make to the layout.  |

**Returns:** Promise\<void>

___

### updateNodeLayout

▸ **updateNodeLayout**(`nodeId`: string, `changes`: [UpdateNodeLayoutInput](updatenodelayoutinput.md)): Promise\<void>

*Defined in [models.ts:258](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L258)*

Updates the layout information for a node in the Knowledge Graph.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`nodeId` | string | The ID of the node to update. |
`changes` | [UpdateNodeLayoutInput](updatenodelayoutinput.md) | The changes to make to the layout.  |

**Returns:** Promise\<void>
