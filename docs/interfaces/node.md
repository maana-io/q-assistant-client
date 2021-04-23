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

*Defined in [models.ts:136](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L136)*

Human readable description of the Node.

___

### entityIdentifier

• `Optional` **entityIdentifier**: [Maybe](../README.md#maybe)\<[EntityIdentifier](entityidentifier.md)>

*Defined in [models.ts:151](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L151)*

The entity referenced by the node.

___

### id

•  **id**: string

*Defined in [models.ts:133](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L133)*

___

### isCollapsed

•  **isCollapsed**: string[]

*Defined in [models.ts:145](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L145)*

List of identifiers to signify different collapsed areas in the node.

___

### location

• `Optional` **location**: [Maybe](../README.md#maybe)\<[Position](position.md)>

*Defined in [models.ts:142](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L142)*

Position of the node on the graph. Null indicates the need to layout the
position.

___

### type

•  **type**: [NodeType](../enums/nodetype.md)

*Defined in [models.ts:148](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L148)*

The type of node
