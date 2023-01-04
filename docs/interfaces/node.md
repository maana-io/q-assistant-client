[Maana Q Assistant API Client](../README.md) / Node

# Interface: Node

The core shape of a node

## Table of contents

### Properties

- [description](Node.md#description)
- [entityIdentifier](Node.md#entityidentifier)
- [id](Node.md#id)
- [isCollapsed](Node.md#iscollapsed)
- [location](Node.md#location)
- [type](Node.md#type)

## Properties

### description

• `Optional` **description**: `string`

Human readable description of the Node.

#### Defined in

[models.ts:185](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L185)

___

### entityIdentifier

• `Optional` **entityIdentifier**: [`EntityIdentifier`](EntityIdentifier.md)

The entity referenced by the node.

#### Defined in

[models.ts:200](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L200)

___

### id

• **id**: `string`

#### Defined in

[models.ts:182](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L182)

___

### isCollapsed

• **isCollapsed**: `string`[]

List of identifiers to signify different collapsed areas in the node.

#### Defined in

[models.ts:194](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L194)

___

### location

• `Optional` **location**: [`Position`](Position.md)

Position of the node on the graph. Null indicates the need to layout the
position.

#### Defined in

[models.ts:191](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L191)

___

### type

• **type**: [`NodeType`](../enums/NodeType.md)

The type of node

#### Defined in

[models.ts:197](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L197)
