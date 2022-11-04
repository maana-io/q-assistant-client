**[Maana Q Assistant API Client](../README.md)**

> [Globals](../README.md) / Service

# Interface: Service

Service interface - Based on the one from Catalog

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
* [tags](service.md#tags)
* [thumbnailUrl](service.md#thumbnailurl)
* [type](service.md#type)
* [version](service.md#version)

### Methods

* [getFunctions](service.md#getfunctions)
* [getKinds](service.md#getkinds)
* [getWorkspace](service.md#getworkspace)
* [update](service.md#update)

## Properties

### description

• `Optional` **description**: [Maybe](../README.md#maybe)\<Scalars[\"String\"]>

*Inherited from [Entity](entity.md).[description](entity.md#description)*

*Defined in Clients/AssistantAPIClient/models.ts:83*

*Defined in types/all-types.ts:1895*

Human readable description of the entity.

___

### id

•  **id**: string

*Inherited from [Entity](entity.md).[id](entity.md#id)*

*Defined in Clients/AssistantAPIClient/models.ts:74*

*Defined in types/all-types.ts:1893*

*Defined in [types/Service.ts:2](https://github.com/maana-io/q-assistant-client/blob/develop/src/types/Service.ts#L2)*

The ID of the entity.

___

### location

•  **location**: ServiceLocation

*Defined in Clients/AssistantAPIClient/models.ts:389*

*Defined in types/all-types.ts:1896*

The location that the service can be reached at.

___

### name

•  **name**: string

*Inherited from [Entity](entity.md).[name](entity.md#name)*

*Defined in Clients/AssistantAPIClient/models.ts:77*

*Defined in types/all-types.ts:1894*

*Defined in [types/Service.ts:3](https://github.com/maana-io/q-assistant-client/blob/develop/src/types/Service.ts#L3)*

The name of the entity.

___

### nameDescriptor

• `Optional` **nameDescriptor**: string

*Inherited from [Entity](entity.md).[nameDescriptor](entity.md#namedescriptor)*

*Defined in Clients/AssistantAPIClient/models.ts:80*

Name of where the entity comes from (Service/Workspace).

___

### tags

•  **tags**: Array\<Scalars[\"String\"]>

*Defined in types/all-types.ts:1898*

___

### thumbnailUrl

• `Optional` **thumbnailUrl**: [Maybe](../README.md#maybe)\<Scalars[\"String\"]>

*Defined in types/all-types.ts:1897*

___

### type

•  **type**: [ServiceType](../enums/servicetype.md)

*Defined in Clients/AssistantAPIClient/models.ts:398*

The type of the service.

___

### version

•  **version**: [Maybe](../README.md#maybe)\<Scalars[\"Int\"]>

*Defined in Clients/AssistantAPIClient/models.ts:395*

*Defined in types/all-types.ts:1899*

The current version of the Service.  This is incremented by catalog each
time the service is updated.

## Methods

### getFunctions

▸ **getFunctions**(): Promise\<[Function](function.md)[]>

*Defined in Clients/AssistantAPIClient/models.ts:404*

Retrieves the list of Function that are part of the Service.

**Returns:** Promise\<[Function](function.md)[]>

___

### getKinds

▸ **getKinds**(): Promise\<[Kind](kind.md)[]>

*Defined in Clients/AssistantAPIClient/models.ts:401*

Retrieves the list of Kinds that are part of the Service.

**Returns:** Promise\<[Kind](kind.md)[]>

___

### getWorkspace

▸ **getWorkspace**(): Promise\<[Maybe](../README.md#maybe)\<[Workspace](workspace.md)>>

*Defined in Clients/AssistantAPIClient/models.ts:411*

Loads the Workspace that is connected with the service. Only works for for
Logic services. If there is no workspace connected with the service then
null is returned.

**Returns:** Promise\<[Maybe](../README.md#maybe)\<[Workspace](workspace.md)>>

___

### update

▸ **update**(`changes`: [UpdateExternalGraphQLServiceInput](updateexternalgraphqlserviceinput.md)): Promise\<void>

*Defined in Clients/AssistantAPIClient/models.ts:417*

Updates information about the Service.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`changes` | [UpdateExternalGraphQLServiceInput](updateexternalgraphqlserviceinput.md) | Information to update the Service with.  |

**Returns:** Promise\<void>
