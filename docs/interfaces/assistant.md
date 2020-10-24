**[Maana Q Assistant API Client - v3.3.0-beta.4](../README.md)**

> [Globals](../globals.md) / Assistant

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

*Defined in [models.ts:260](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L260)*

The location that the Assistant can be reached at.

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

*Defined in [models.ts:266](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L266)*

The current version of the Assistant.  This is incremented by catalog each
time the Assistant is updated.

## Methods

### update

▸ **update**(`changes`: any): Promise\<void>

*Defined in [models.ts:272](https://github.com/maana-io/q-assistant-client/blob/b0243f8/src/models.ts#L272)*

Updates information about the Assistant.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`changes` | any | Information to update the Assistant with.  |

**Returns:** Promise\<void>
