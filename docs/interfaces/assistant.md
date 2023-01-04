[Maana Q Assistant API Client](../README.md) / Assistant

# Interface: Assistant

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`Assistant`**

## Table of contents

### Properties

- [description](Assistant.md#description)
- [id](Assistant.md#id)
- [location](Assistant.md#location)
- [name](Assistant.md#name)
- [nameDescriptor](Assistant.md#namedescriptor)
- [version](Assistant.md#version)

### Methods

- [update](Assistant.md#update)

## Properties

### description

• `Optional` **description**: `string`

Human readable description of the entity.

#### Inherited from

[Entity](Entity.md).[description](Entity.md#description)

#### Defined in

[models.ts:123](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L123)

___

### id

• **id**: `string`

The ID of the entity.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[models.ts:114](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L114)

___

### location

• **location**: [`ServiceLocation`](ServiceLocation.md)

The location that the Assistant can be reached at.

#### Defined in

[models.ts:462](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L462)

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

### version

• **version**: `number`

The current version of the Assistant.  This is incremented by catalog each
time the Assistant is updated.

#### Defined in

[models.ts:468](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L468)

## Methods

### update

▸ **update**(`changes`): `Promise`<`void`\>

Updates information about the Assistant.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `changes` | [`UpdateAssistantInput`](UpdateAssistantInput.md) | Information to update the Assistant with. |

#### Returns

`Promise`<`void`\>

#### Defined in

[models.ts:474](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L474)
