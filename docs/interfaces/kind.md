[Maana Q Assistant API Client](../README.md) / Kind

# Interface: Kind

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`Kind`**

## Table of contents

### Properties

- [description](Kind.md#description)
- [id](Kind.md#id)
- [isManaged](Kind.md#ismanaged)
- [name](Kind.md#name)
- [nameDescriptor](Kind.md#namedescriptor)
- [service](Kind.md#service)
- [signature](Kind.md#signature)

### Methods

- [update](Kind.md#update)

## Properties

### description

• `Optional` **description**: `string`

Human readable description of the entity.

#### Inherited from

[Entity](Entity.md).[description](Entity.md#description)

#### Defined in

[models.ts:84](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L84)

___

### id

• **id**: `string`

The ID of the entity.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[models.ts:75](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L75)

___

### isManaged

• **isManaged**: `boolean`

Used to signify if this type has data that is managed by the platform

#### Defined in

[models.ts:186](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L186)

___

### name

• **name**: `string`

The name of the entity.

#### Inherited from

[Entity](Entity.md).[name](Entity.md#name)

#### Defined in

[models.ts:78](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L78)

___

### nameDescriptor

• `Optional` **nameDescriptor**: `string`

Name of where the entity comes from (Service/Workspace).

#### Inherited from

[Entity](Entity.md).[nameDescriptor](Entity.md#namedescriptor)

#### Defined in

[models.ts:81](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L81)

___

### service

• **service**: [`IDObject`](IDObject.md)

The service that the Kind comes from.

#### Defined in

[models.ts:183](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L183)

___

### signature

• **signature**: `TypeExpression`

The signature of the Kind.

#### Defined in

[models.ts:180](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L180)

## Methods

### update

▸ **update**(`changes`): `Promise`<`void`\>

Updates information about the Kind.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `changes` | [`UpdateTypeInput`](UpdateTypeInput.md) | Information to update the Kind with. |

#### Returns

`Promise`<`void`\>

#### Defined in

[models.ts:192](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L192)
