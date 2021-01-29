**[Maana Q Assistant API Client](../README.md)**

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

*Defined in [models.ts:59](https://github.com/maana-io/q-assistant-client/blob/2b2b176/src/models.ts#L59)*

Human readable description of the entity.

___

### id

•  **id**: string

*Inherited from [Entity](entity.md).[id](entity.md#id)*

*Defined in [models.ts:50](https://github.com/maana-io/q-assistant-client/blob/2b2b176/src/models.ts#L50)*

The ID of the entity.

___

### name

•  **name**: string

*Inherited from [Entity](entity.md).[name](entity.md#name)*

*Defined in [models.ts:53](https://github.com/maana-io/q-assistant-client/blob/2b2b176/src/models.ts#L53)*

The name of the entity.

___

### nameDescriptor

• `Optional` **nameDescriptor**: string

*Inherited from [Entity](entity.md).[nameDescriptor](entity.md#namedescriptor)*

*Defined in [models.ts:56](https://github.com/maana-io/q-assistant-client/blob/2b2b176/src/models.ts#L56)*

Name of where the entity comes from (Service/Workspace).

___

### service

•  **service**: [IDObject](idobject.md)

*Defined in [models.ts:150](https://github.com/maana-io/q-assistant-client/blob/2b2b176/src/models.ts#L150)*

The service that the Kind comes from.

___

### signature

•  **signature**: any

*Defined in [models.ts:147](https://github.com/maana-io/q-assistant-client/blob/2b2b176/src/models.ts#L147)*

The signature of the Kind.

## Methods

### update

▸ **update**(`changes`: [UpdateTypeInput](updatetypeinput.md)): Promise\<void>

*Defined in [models.ts:156](https://github.com/maana-io/q-assistant-client/blob/2b2b176/src/models.ts#L156)*

Updates information about the Kind.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`changes` | [UpdateTypeInput](updatetypeinput.md) | Information to update the Kind with.  |

**Returns:** Promise\<void>
