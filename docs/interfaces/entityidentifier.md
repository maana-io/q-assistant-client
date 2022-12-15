[Maana Q Assistant API Client](../README.md) / EntityIdentifier

# Interface: EntityIdentifier

## Table of contents

### Properties

- [entityType](EntityIdentifier.md#entitytype)
- [id](EntityIdentifier.md#id)
- [name](EntityIdentifier.md#name)
- [serviceId](EntityIdentifier.md#serviceid)

## Properties

### entityType

• **entityType**: [`EntityType`](../README.md#entitytype)

The type of entity being referenced.

#### Defined in

[models.ts:56](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L56)

___

### id

• `Optional` **id**: `string`

The ID of the entity. Used for all but Types and Functions.

#### Defined in

[models.ts:59](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L59)

___

### name

• `Optional` **name**: `string`

The name of the entity. Used by Types and Functions.

#### Defined in

[models.ts:62](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L62)

___

### serviceId

• `Optional` **serviceId**: `string`

The ID of the service that the entity lives in.  Used by Types and Functions.

#### Defined in

[models.ts:65](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L65)
