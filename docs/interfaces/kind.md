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
* [isManaged](kind.md#ismanaged)
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

*Defined in [models.ts:62](https://github.com/maana-io/q-assistant-client/blob/18eccdb/src/models.ts#L62)*

Human readable description of the entity.

___

### id

•  **id**: string

*Inherited from [Entity](entity.md).[id](entity.md#id)*

*Defined in [models.ts:53](https://github.com/maana-io/q-assistant-client/blob/18eccdb/src/models.ts#L53)*

The ID of the entity.

___

### isManaged

•  **isManaged**: boolean

*Defined in [models.ts:156](https://github.com/maana-io/q-assistant-client/blob/18eccdb/src/models.ts#L156)*

Used to signify if this type has data that is managed by the platform

___

### name

•  **name**: string

*Inherited from [Entity](entity.md).[name](entity.md#name)*

*Defined in [models.ts:56](https://github.com/maana-io/q-assistant-client/blob/18eccdb/src/models.ts#L56)*

The name of the entity.

___

### nameDescriptor

• `Optional` **nameDescriptor**: string

*Inherited from [Entity](entity.md).[nameDescriptor](entity.md#namedescriptor)*

*Defined in [models.ts:59](https://github.com/maana-io/q-assistant-client/blob/18eccdb/src/models.ts#L59)*

Name of where the entity comes from (Service/Workspace).

___

### service

•  **service**: [IDObject](idobject.md)

*Defined in [models.ts:153](https://github.com/maana-io/q-assistant-client/blob/18eccdb/src/models.ts#L153)*

The service that the Kind comes from.

___

### signature

•  **signature**: [TypeExpressionObject](../README.md#typeexpressionobject)

*Defined in [models.ts:150](https://github.com/maana-io/q-assistant-client/blob/18eccdb/src/models.ts#L150)*

The signature of the Kind.

## Methods

### update

▸ **update**(`changes`: [UpdateTypeInput](updatetypeinput.md)): Promise\<void>

*Defined in [models.ts:162](https://github.com/maana-io/q-assistant-client/blob/18eccdb/src/models.ts#L162)*

Updates information about the Kind.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`changes` | [UpdateTypeInput](updatetypeinput.md) | Information to update the Kind with.  |

**Returns:** Promise\<void>
