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

*Defined in [models.ts:80](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L80)*

Human readable description of the entity.

___

### id

•  **id**: string

*Inherited from [Entity](entity.md).[id](entity.md#id)*

*Defined in [models.ts:71](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L71)*

The ID of the entity.

___

### location

•  **location**: [ServiceLocation](servicelocation.md)

*Defined in [models.ts:404](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L404)*

The location that the Assistant can be reached at.

___

### name

•  **name**: string

*Inherited from [Entity](entity.md).[name](entity.md#name)*

*Defined in [models.ts:74](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L74)*

The name of the entity.

___

### nameDescriptor

• `Optional` **nameDescriptor**: string

*Inherited from [Entity](entity.md).[nameDescriptor](entity.md#namedescriptor)*

*Defined in [models.ts:77](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L77)*

Name of where the entity comes from (Service/Workspace).

___

### version

•  **version**: number

*Defined in [models.ts:410](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L410)*

The current version of the Assistant.  This is incremented by catalog each
time the Assistant is updated.

## Methods

### update

▸ **update**(`changes`: [UpdateAssistantInput](updateassistantinput.md)): Promise\<void>

*Defined in [models.ts:416](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L416)*

Updates information about the Assistant.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`changes` | [UpdateAssistantInput](updateassistantinput.md) | Information to update the Assistant with.  |

**Returns:** Promise\<void>
