**[Maana Q Assistant API Client](../README.md)**

> [Globals](../README.md) / Node

# Interface: Node

The core shape of a node

## Hierarchy

* **Node**

## Index

### Properties

* [description](node.md#description)
* [entityIdentifier](node.md#entityidentifier)
* [id](node.md#id)
* [isCollapsed](node.md#iscollapsed)
* [location](node.md#location)
* [type](node.md#type)

## Properties

### description

• `Optional` **description**: [Maybe](../README.md#maybe)\<string>

*Defined in [models.ts:116](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L116)*

Human readable description of the Node.

___

### entityIdentifier

• `Optional` **entityIdentifier**: [Maybe](../README.md#maybe)\<[EntityIdentifier](entityidentifier.md)>

*Defined in [models.ts:131](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L131)*

The entity referenced by the node.

___

### id

•  **id**: string

*Defined in [models.ts:113](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L113)*

___

### isCollapsed

•  **isCollapsed**: boolean

*Defined in [models.ts:125](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L125)*

Indicates if the node is collapsed or expanded in the node display.

___

### location

• `Optional` **location**: [Maybe](../README.md#maybe)\<[Position](position.md)>

*Defined in [models.ts:122](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L122)*

Position of the node on the graph. Null indicates the need to layout the
position.

___

### type

•  **type**: [NodeType](../enums/nodetype.md)

*Defined in [models.ts:128](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L128)*

The type of node
