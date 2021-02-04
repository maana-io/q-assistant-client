**[Maana Q Assistant API Client](../README.md)**

> [Globals](../README.md) / Assistant

# Interface: Assistant

## Hierarchy

* [Entity](entity.md)

  ↳ **Assistant**

## Index

### Properties

* [description](assistant.md#description)
* [id](assistant.md#id)
* [location](assistant.md#location)
* [name](assistant.md#name)
* [nameDescriptor](assistant.md#namedescriptor)
* [version](assistant.md#version)

### Methods

* [update](assistant.md#update)

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

### location

•  **location**: [ServiceLocation](servicelocation.md)

*Defined in [models.ts:386](https://github.com/maana-io/q-assistant-client/blob/18eccdb/src/models.ts#L386)*

The location that the Assistant can be reached at.

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

### version

•  **version**: number

*Defined in [models.ts:392](https://github.com/maana-io/q-assistant-client/blob/18eccdb/src/models.ts#L392)*

The current version of the Assistant.  This is incremented by catalog each
time the Assistant is updated.

## Methods

### update

▸ **update**(`changes`: [UpdateAssistantInput](updateassistantinput.md)): Promise\<void>

*Defined in [models.ts:398](https://github.com/maana-io/q-assistant-client/blob/18eccdb/src/models.ts#L398)*

Updates information about the Assistant.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`changes` | [UpdateAssistantInput](updateassistantinput.md) | Information to update the Assistant with.  |

**Returns:** Promise\<void>
