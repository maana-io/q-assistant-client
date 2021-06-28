**[Maana Q Assistant API Client](../README.md)**

> [Globals](../README.md) / CreateWorkspaceInput

# Interface: CreateWorkspaceInput

## Hierarchy

* **CreateWorkspaceInput**

## Index

### Properties

* [addServices](createworkspaceinput.md#addservices)
* [createEntities](createworkspaceinput.md#createentities)
* [description](createworkspaceinput.md#description)
* [id](createworkspaceinput.md#id)
* [isPublic](createworkspaceinput.md#ispublic)
* [isTemplate](createworkspaceinput.md#istemplate)
* [moveEntities](createworkspaceinput.md#moveentities)
* [name](createworkspaceinput.md#name)
* [owner](createworkspaceinput.md#owner)
* [serviceId](createworkspaceinput.md#serviceid)
* [tags](createworkspaceinput.md#tags)
* [thumbnailUrl](createworkspaceinput.md#thumbnailurl)

## Properties

### addServices

• `Optional` **addServices**: [Maybe](../README.md#maybe)\<Array\<string>>

*Defined in [models.ts:879](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L879)*

___

### createEntities

• `Optional` **createEntities**: [Maybe](../README.md#maybe)\<Array\<[CreateEntityInput](createentityinput.md)>>

*Defined in [models.ts:878](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L878)*

___

### description

• `Optional` **description**: [Maybe](../README.md#maybe)\<string>

*Defined in [models.ts:872](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L872)*

___

### id

• `Optional` **id**: [Maybe](../README.md#maybe)\<string>

*Defined in [models.ts:869](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L869)*

___

### isPublic

• `Optional` **isPublic**: [Maybe](../README.md#maybe)\<boolean>

*Defined in [models.ts:876](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L876)*

___

### isTemplate

• `Optional` **isTemplate**: [Maybe](../README.md#maybe)\<boolean>

*Defined in [models.ts:877](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L877)*

___

### moveEntities

• `Optional` **moveEntities**: [Maybe](../README.md#maybe)\<Array\<[EntityIdentifier](entityidentifier.md)>>

*Defined in [models.ts:885](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L885)*

Moves the given entities from their current Workspace to this one.
Currently only Types and Functions support being moved between Workspaces.

___

### name

•  **name**: string

*Defined in [models.ts:871](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L871)*

___

### owner

•  **owner**: string

*Defined in [models.ts:875](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L875)*

___

### serviceId

• `Optional` **serviceId**: [Maybe](../README.md#maybe)\<string>

*Defined in [models.ts:870](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L870)*

___

### tags

• `Optional` **tags**: [Maybe](../README.md#maybe)\<Array\<string>>

*Defined in [models.ts:874](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L874)*

___

### thumbnailUrl

• `Optional` **thumbnailUrl**: [Maybe](../README.md#maybe)\<string>

*Defined in [models.ts:873](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L873)*
