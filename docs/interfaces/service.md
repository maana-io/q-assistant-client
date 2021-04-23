**[Maana Q Assistant API Client](../README.md)**

> [Globals](../README.md) / Service

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
* [type](service.md#type)
* [version](service.md#version)

### Methods

* [getFunctions](service.md#getfunctions)
* [getKinds](service.md#getkinds)
* [update](service.md#update)

## Properties

### description

• `Optional` **description**: string

*Inherited from [Entity](entity.md).[description](entity.md#description)*

*Defined in [models.ts:82](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L82)*

Human readable description of the entity.

___

### id

•  **id**: string

*Inherited from [Entity](entity.md).[id](entity.md#id)*

*Defined in [models.ts:73](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L73)*

The ID of the entity.

___

### location

•  **location**: [ServiceLocation](servicelocation.md)

*Defined in [models.ts:380](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L380)*

The location that the service can be reached at.

___

### name

•  **name**: string

*Inherited from [Entity](entity.md).[name](entity.md#name)*

*Defined in [models.ts:76](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L76)*

The name of the entity.

___

### nameDescriptor

• `Optional` **nameDescriptor**: string

*Inherited from [Entity](entity.md).[nameDescriptor](entity.md#namedescriptor)*

*Defined in [models.ts:79](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L79)*

Name of where the entity comes from (Service/Workspace).

___

### type

•  **type**: [ServiceType](../enums/servicetype.md)

*Defined in [models.ts:389](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L389)*

The type of the service.

___

### version

•  **version**: number

*Defined in [models.ts:386](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L386)*

The current version of the Service.  This is incremented by catalog each
time the service is updated.

## Methods

### getFunctions

▸ **getFunctions**(): Promise\<[Function](function.md)[]>

*Defined in [models.ts:395](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L395)*

Retrieves the list of Function that are part of the Service.

**Returns:** Promise\<[Function](function.md)[]>

___

### getKinds

▸ **getKinds**(): Promise\<[Kind](kind.md)[]>

*Defined in [models.ts:392](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L392)*

Retrieves the list of Kinds that are part of the Service.

**Returns:** Promise\<[Kind](kind.md)[]>

___

### update

▸ **update**(`changes`: [UpdateExternalGraphQLServiceInput](updateexternalgraphqlserviceinput.md)): Promise\<void>

*Defined in [models.ts:401](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L401)*

Updates information about the Service.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`changes` | [UpdateExternalGraphQLServiceInput](updateexternalgraphqlserviceinput.md) | Information to update the Service with.  |

**Returns:** Promise\<void>
