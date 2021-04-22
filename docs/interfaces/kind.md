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

*Defined in [models.ts:82](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L82)*

Human readable description of the entity.

___

### id

•  **id**: string

*Inherited from [Entity](entity.md).[id](entity.md#id)*

*Defined in [models.ts:73](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L73)*

The ID of the entity.

___

### isManaged

•  **isManaged**: boolean

*Defined in [models.ts:176](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L176)*

Used to signify if this type has data that is managed by the platform

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

### service

•  **service**: [IDObject](idobject.md)

*Defined in [models.ts:173](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L173)*

The service that the Kind comes from.

___

### signature

•  **signature**: [TypeExpressionObject](../README.md#typeexpressionobject)

*Defined in [models.ts:170](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L170)*

The signature of the Kind.

## Methods

### update

▸ **update**(`changes`: [UpdateTypeInput](updatetypeinput.md)): Promise\<void>

*Defined in [models.ts:182](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L182)*

Updates information about the Kind.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`changes` | [UpdateTypeInput](updatetypeinput.md) | Information to update the Kind with.  |

**Returns:** Promise\<void>
