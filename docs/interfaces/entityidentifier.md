**[Maana Q Assistant API Client - v3.3.0-beta.4](../README.md)**

> [Globals](../globals.md) / EntityIdentifier

# Interface: EntityIdentifier

## Hierarchy

* **EntityIdentifier**

## Index

### Properties

* [entityType](entityidentifier.md#entitytype)
* [id](entityidentifier.md#id)
* [name](entityidentifier.md#name)
* [serviceId](entityidentifier.md#serviceid)

## Properties

### entityType

•  **entityType**: string

*Defined in [models.ts:22](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L22)*

The type of entity being referenced.

___

### id

• `Optional` **id**: string

*Defined in [models.ts:25](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L25)*

The ID of the entity. Used for all but Types and Functions.

___

### name

• `Optional` **name**: string

*Defined in [models.ts:28](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L28)*

The name of the entity. Used by Types and Functions.

___

### serviceId

• `Optional` **serviceId**: string

*Defined in [models.ts:31](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L31)*

The ID of the service that the entity lives in.  Used by Types and Functions.
