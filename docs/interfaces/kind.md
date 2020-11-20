**[Maana Q Assistant API Client - v3.3.0-beta.4](../README.md)**

> [Globals](../README.md) / Kind

# Interface: Kind

## Hierarchy

* [Entity](entity.md)

  ↳ **Kind**

## Index

### Properties

* [description](kind.md#description)
* [id](kind.md#id)
* [name](kind.md#name)
* [nameDescriptor](kind.md#namedescriptor)
* [service](kind.md#service)
* [signature](kind.md#signature)

### Methods

* [update](kind.md#update)

## Properties

### description

• `Optional` **description**: string

*Inherited from [Entity](entity.md).[description](entity.md#description)*

*Defined in [models.ts:50](https://github.com/maana-io/q-assistant-client/blob/7fea6ec/src/models.ts#L50)*

Human readable description of the entity.

___

### id

•  **id**: string

*Inherited from [Entity](entity.md).[id](entity.md#id)*

*Defined in [models.ts:41](https://github.com/maana-io/q-assistant-client/blob/7fea6ec/src/models.ts#L41)*

The ID of the entity.

___

### name

•  **name**: string

*Inherited from [Entity](entity.md).[name](entity.md#name)*

*Defined in [models.ts:44](https://github.com/maana-io/q-assistant-client/blob/7fea6ec/src/models.ts#L44)*

The name of the entity.

___

### nameDescriptor

• `Optional` **nameDescriptor**: string

*Inherited from [Entity](entity.md).[nameDescriptor](entity.md#namedescriptor)*

*Defined in [models.ts:47](https://github.com/maana-io/q-assistant-client/blob/7fea6ec/src/models.ts#L47)*

Name of where the entity comes from (Service/Workspace).

___

### service

•  **service**: [IDObject](idobject.md)

*Defined in [models.ts:72](https://github.com/maana-io/q-assistant-client/blob/7fea6ec/src/models.ts#L72)*

The service that the Kind comes from.

___

### signature

•  **signature**: any

*Defined in [models.ts:69](https://github.com/maana-io/q-assistant-client/blob/7fea6ec/src/models.ts#L69)*

The signature of the Kind.

## Methods

### update

▸ **update**(`changes`: any): Promise\<void>

*Defined in [models.ts:78](https://github.com/maana-io/q-assistant-client/blob/7fea6ec/src/models.ts#L78)*

Updates information about the Kind.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`changes` | any | Information to update the Kind with.  |

**Returns:** Promise\<void>
