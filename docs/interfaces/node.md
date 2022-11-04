**[Maana Q Assistant API Client](../README.md)**

> [Globals](../README.md) / Node

# Interface: Node

The core shape of a node
Node type - properties for all types of graph nodes (function, type, projection,
construction, etc)

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

• `Optional` **description**: [Maybe](../README.md#maybe)\<Scalars[\"String\"]>

*Defined in Clients/AssistantAPIClient/models.ts:145*

*Defined in types/all-types.ts:1453*

Human readable description of the Node.
Human readable description of the Node.

___

### entityIdentifier

• `Optional` **entityIdentifier**: [Maybe](../README.md#maybe)\<[EntityIdentifier](entityidentifier.md)>

*Defined in Clients/AssistantAPIClient/models.ts:160*

The entity referenced by the node.

___

### id

•  **id**: Scalars[\"ID\"]

*Defined in Clients/AssistantAPIClient/models.ts:142*

*Defined in types/all-types.ts:1451*

___

### isCollapsed

•  **isCollapsed**: Array\<Scalars[\"String\"]>

*Defined in Clients/AssistantAPIClient/models.ts:154*

*Defined in types/all-types.ts:1460*

List of identifiers to signify different collapsed areas in the node.
Indicates if the node is collapsed or expanded in the node display.

___

### location

• `Optional` **location**: [Maybe](../README.md#maybe)\<[Position](position.md)>

*Defined in Clients/AssistantAPIClient/models.ts:151*

*Defined in types/all-types.ts:1458*

Position of the node on the graph. Null indicates the need to layout the
position.
Position of the node on the graph. Null indicates the need to layout the
position.

___

### type

•  **type**: [NodeType](../enums/nodetype.md)

*Defined in Clients/AssistantAPIClient/models.ts:157*

The type of node
