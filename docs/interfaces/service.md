**[Maana Q Assistant API Client - v3.3.0-beta.4](../README.md)**

> [Globals](../globals.md) / Service

# Interface: Service

## Hierarchy

* [Entity](entity.md)

  ↳ **Service**

## Index

### Properties

* [description](service.md#description)
* [id](service.md#id)
* [location](service.md#location)
* [name](service.md#name)
* [nameDescriptor](service.md#namedescriptor)
* [version](service.md#version)

### Methods

* [getFunctions](service.md#getfunctions)
* [getKinds](service.md#getkinds)
* [update](service.md#update)

## Properties

### description

• `Optional` **description**: string

*Inherited from [Entity](entity.md).[description](entity.md#description)*

*Defined in [models.ts:50](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L50)*

Human readable description of the entity.

___

### id

•  **id**: string

*Inherited from [Entity](entity.md).[id](entity.md#id)*

*Defined in [models.ts:41](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L41)*

The ID of the entity.

___

### location

•  **location**: [ServiceLocation](servicelocation.md)

*Defined in [models.ts:237](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L237)*

The location that the service can be reached at.

___

### name

•  **name**: string

*Inherited from [Entity](entity.md).[name](entity.md#name)*

*Defined in [models.ts:44](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L44)*

The name of the entity.

___

### nameDescriptor

• `Optional` **nameDescriptor**: string

*Inherited from [Entity](entity.md).[nameDescriptor](entity.md#namedescriptor)*

*Defined in [models.ts:47](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L47)*

Name of where the entity comes from (Service/Workspace).

___

### version

•  **version**: number

*Defined in [models.ts:243](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L243)*

The current version of the Service.  This is incremented by catalog each
time the service is updated.

## Methods

### getFunctions

▸ **getFunctions**(): Promise\<[Function](function.md)[]>

*Defined in [models.ts:249](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L249)*

Retrieves the list of Function that are part of the Service.

**Returns:** Promise\<[Function](function.md)[]>

___

### getKinds

▸ **getKinds**(): Promise\<[Kind](kind.md)[]>

*Defined in [models.ts:246](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L246)*

Retrieves the list of Kinds that are part of the Service.

**Returns:** Promise\<[Kind](kind.md)[]>

___

### update

▸ **update**(`changes`: any): Promise\<void>

*Defined in [models.ts:255](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L255)*

Updates information about the Service.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`changes` | any | Information to update the Service with.  |

**Returns:** Promise\<void>
