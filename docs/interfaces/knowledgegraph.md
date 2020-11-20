**[Maana Q Assistant API Client - v3.3.0-beta.4](../README.md)**

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

*Defined in [models.ts:50](https://github.com/maana-io/q-assistant-client/blob/7fea6ec/src/models.ts#L50)*

Human readable description of the entity.

___

### graph

•  **graph**: [Graph](graph.md)

*Defined in [models.ts:111](https://github.com/maana-io/q-assistant-client/blob/7fea6ec/src/models.ts#L111)*

The graph information for the Knowledge Graph.

___

### id

•  **id**: string

*Inherited from [Entity](entity.md).[id](entity.md#id)*

*Defined in [models.ts:41](https://github.com/maana-io/q-assistant-client/blob/7fea6ec/src/models.ts#L41)*

The ID of the entity.

___

### name

•  **name**: string

*Inherited from [Entity](entity.md).[name](entity.md#name)*

*Defined in [models.ts:44](https://github.com/maana-io/q-assistant-client/blob/7fea6ec/src/models.ts#L44)*

The name of the entity.

___

### nameDescriptor

• `Optional` **nameDescriptor**: string

*Inherited from [Entity](entity.md).[nameDescriptor](entity.md#namedescriptor)*

*Defined in [models.ts:47](https://github.com/maana-io/q-assistant-client/blob/7fea6ec/src/models.ts#L47)*

Name of where the entity comes from (Service/Workspace).

___

### offsetX

•  **offsetX**: number

*Defined in [models.ts:96](https://github.com/maana-io/q-assistant-client/blob/7fea6ec/src/models.ts#L96)*

The X offset of the Knowledge Graph.

**`deprecated`** Use graph.offset.x instead.

___

### offsetY

•  **offsetY**: number

*Defined in [models.ts:102](https://github.com/maana-io/q-assistant-client/blob/7fea6ec/src/models.ts#L102)*

The Y offset of the Knowledge Graph.

**`deprecated`** use graph.offset.y instead.

___

### zoom

•  **zoom**: number

*Defined in [models.ts:108](https://github.com/maana-io/q-assistant-client/blob/7fea6ec/src/models.ts#L108)*

The zoom of the Knowledge Graph.

**`deprecated`** use graph.zoom instead.

## Methods

### addNode

▸ **addNode**(`entityIdentifier`: [EntityIdentifier](entityidentifier.md)): Promise\<string>

*Defined in [models.ts:142](https://github.com/maana-io/q-assistant-client/blob/7fea6ec/src/models.ts#L142)*

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

*Defined in [models.ts:114](https://github.com/maana-io/q-assistant-client/blob/7fea6ec/src/models.ts#L114)*

Returns boolean stating if the Knowledge Graph is editable.

**Returns:** Promise\<boolean>

___

### getNodes

▸ **getNodes**(): Promise\<any[]>

*Defined in [models.ts:136](https://github.com/maana-io/q-assistant-client/blob/7fea6ec/src/models.ts#L136)*

Returns the list of nodes inside of the Knowledge Graph.

**`deprecated`** use graph.nodes instead.

**Returns:** Promise\<any[]>

___

### lockedBy

▸ **lockedBy**(): Promise\<[Maybe](../README.md#maybe)\<string>>

*Defined in [models.ts:117](https://github.com/maana-io/q-assistant-client/blob/7fea6ec/src/models.ts#L117)*

Returns the e-mail of the user who locked the Knowledge Graph.

**Returns:** Promise\<[Maybe](../README.md#maybe)\<string>>

___

### removeNode

▸ **removeNode**(`nodeId`: string): Promise\<void>

*Defined in [models.ts:149](https://github.com/maana-io/q-assistant-client/blob/7fea6ec/src/models.ts#L149)*

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

*Defined in [models.ts:124](https://github.com/maana-io/q-assistant-client/blob/7fea6ec/src/models.ts#L124)*

Updates the locked state of the Knowledge Graph.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`isLocked?` | boolean | The new locked state of the Knowledge Graph, if not provided then the locked state is toggled.  |

**Returns:** Promise\<void>

___

### update

▸ **update**(`changes`: any): Promise\<void>

*Defined in [models.ts:130](https://github.com/maana-io/q-assistant-client/blob/7fea6ec/src/models.ts#L130)*

Updates information about the Knowledge Graph.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`changes` | any | Information to update the Knowledge Graph with.  |

**Returns:** Promise\<void>

___

### updateGraphLayout

▸ **updateGraphLayout**(`changes`: any): Promise\<void>

*Defined in [models.ts:162](https://github.com/maana-io/q-assistant-client/blob/7fea6ec/src/models.ts#L162)*

Updates the layout information for the graph of the Knowledge Graph.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`changes` | any | The changes to make to the layout.  |

**Returns:** Promise\<void>

___

### updateNodeLayout

▸ **updateNodeLayout**(`nodeId`: string, `changes`: any): Promise\<void>

*Defined in [models.ts:156](https://github.com/maana-io/q-assistant-client/blob/7fea6ec/src/models.ts#L156)*

Updates the layout information for a node in the Knowledge Graph.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`nodeId` | string | The ID of the node to update. |
`changes` | any | The changes to make to the layout.  |

**Returns:** Promise\<void>
