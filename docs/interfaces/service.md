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
* [getWorkspace](service.md#getworkspace)
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

*Defined in [models.ts:388](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L388)*

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

*Defined in [models.ts:397](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L397)*

The type of the service.

___

### version

•  **version**: number

*Defined in [models.ts:394](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L394)*

The current version of the Service.  This is incremented by catalog each
time the service is updated.

## Methods

### getFunctions

▸ **getFunctions**(): Promise\<[Function](function.md)[]>

*Defined in [models.ts:403](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L403)*

Retrieves the list of Function that are part of the Service.

**Returns:** Promise\<[Function](function.md)[]>

___

### getKinds

▸ **getKinds**(): Promise\<[Kind](kind.md)[]>

*Defined in [models.ts:400](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L400)*

Retrieves the list of Kinds that are part of the Service.

**Returns:** Promise\<[Kind](kind.md)[]>

___

### getWorkspace

▸ **getWorkspace**(): Promise\<[Maybe](../README.md#maybe)\<[Workspace](workspace.md)>>

*Defined in [models.ts:410](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L410)*

Loads the Workspace that is connected with the service. Only works for for
Logic services. If there is no workspace connected with the service then
null is returned.

**Returns:** Promise\<[Maybe](../README.md#maybe)\<[Workspace](workspace.md)>>

___

### update

▸ **update**(`changes`: [UpdateExternalGraphQLServiceInput](updateexternalgraphqlserviceinput.md)): Promise\<void>

*Defined in [models.ts:416](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L416)*

Updates information about the Service.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`changes` | [UpdateExternalGraphQLServiceInput](updateexternalgraphqlserviceinput.md) | Information to update the Service with.  |

**Returns:** Promise\<void>
