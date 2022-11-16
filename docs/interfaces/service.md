[Maana Q Assistant API Client](../README.md) / Service

# Interface: Service

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`Service`**

## Table of contents

### Properties

- [description](Service.md#description)
- [id](Service.md#id)
- [location](Service.md#location)
- [name](Service.md#name)
- [nameDescriptor](Service.md#namedescriptor)
- [type](Service.md#type)
- [version](Service.md#version)

### Methods

- [getFunctions](Service.md#getfunctions)
- [getKinds](Service.md#getkinds)
- [getWorkspace](Service.md#getworkspace)
- [update](Service.md#update)

## Properties

### description

• `Optional` **description**: `string`

Human readable description of the entity.

#### Inherited from

[Entity](Entity.md).[description](Entity.md#description)

#### Defined in

[models.ts:81](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L81)

___

### id

• **id**: `string`

The ID of the entity.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[models.ts:72](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L72)

___

### location

• **location**: [`ServiceLocation`](ServiceLocation.md)

The location that the service can be reached at.

#### Defined in

[models.ts:387](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L387)

___

### name

• **name**: `string`

The name of the entity.

#### Inherited from

[Entity](Entity.md).[name](Entity.md#name)

#### Defined in

[models.ts:75](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L75)

___

### nameDescriptor

• `Optional` **nameDescriptor**: `string`

Name of where the entity comes from (Service/Workspace).

#### Inherited from

[Entity](Entity.md).[nameDescriptor](Entity.md#namedescriptor)

#### Defined in

[models.ts:78](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L78)

___

### type

• **type**: [`ServiceType`](../enums/ServiceType.md)

The type of the service.

#### Defined in

[models.ts:396](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L396)

___

### version

• **version**: `number`

The current version of the Service.  This is incremented by catalog each
time the service is updated.

#### Defined in

[models.ts:393](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L393)

## Methods

### getFunctions

▸ **getFunctions**(): `Promise`<[`Function`](Function.md)[]\>

Retrieves the list of Function that are part of the Service.

#### Returns

`Promise`<[`Function`](Function.md)[]\>

#### Defined in

[models.ts:402](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L402)

___

### getKinds

▸ **getKinds**(): `Promise`<[`Kind`](Kind.md)[]\>

Retrieves the list of Kinds that are part of the Service.

#### Returns

`Promise`<[`Kind`](Kind.md)[]\>

#### Defined in

[models.ts:399](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L399)

___

### getWorkspace

▸ **getWorkspace**(): `Promise`<[`Workspace`](Workspace.md)\>

Loads the Workspace that is connected with the service. Only works for for
Logic services. If there is no workspace connected with the service then
null is returned.

#### Returns

`Promise`<[`Workspace`](Workspace.md)\>

#### Defined in

[models.ts:409](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L409)

___

### update

▸ **update**(`changes`): `Promise`<`void`\>

Updates information about the Service.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `changes` | [`UpdateExternalGraphQLServiceInput`](UpdateExternalGraphQLServiceInput.md) | Information to update the Service with. |

#### Returns

`Promise`<`void`\>

#### Defined in

[models.ts:415](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L415)
