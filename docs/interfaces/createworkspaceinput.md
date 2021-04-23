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

*Defined in [models.ts:844](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L844)*

___

### createEntities

• `Optional` **createEntities**: [Maybe](../README.md#maybe)\<Array\<[CreateEntityInput](createentityinput.md)>>

*Defined in [models.ts:843](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L843)*

___

### description

• `Optional` **description**: [Maybe](../README.md#maybe)\<string>

*Defined in [models.ts:837](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L837)*

___

### id

• `Optional` **id**: [Maybe](../README.md#maybe)\<string>

*Defined in [models.ts:834](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L834)*

___

### isPublic

• `Optional` **isPublic**: [Maybe](../README.md#maybe)\<boolean>

*Defined in [models.ts:841](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L841)*

___

### isTemplate

• `Optional` **isTemplate**: [Maybe](../README.md#maybe)\<boolean>

*Defined in [models.ts:842](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L842)*

___

### moveEntities

• `Optional` **moveEntities**: [Maybe](../README.md#maybe)\<Array\<[EntityIdentifier](entityidentifier.md)>>

*Defined in [models.ts:850](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L850)*

Moves the given entities from their current Workspace to this one.
Currently only Types and Functions support being moved between Workspaces.

___

### name

•  **name**: string

*Defined in [models.ts:836](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L836)*

___

### owner

•  **owner**: string

*Defined in [models.ts:840](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L840)*

___

### serviceId

• `Optional` **serviceId**: [Maybe](../README.md#maybe)\<string>

*Defined in [models.ts:835](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L835)*

___

### tags

• `Optional` **tags**: [Maybe](../README.md#maybe)\<Array\<string>>

*Defined in [models.ts:839](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L839)*

___

### thumbnailUrl

• `Optional` **thumbnailUrl**: [Maybe](../README.md#maybe)\<string>

*Defined in [models.ts:838](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L838)*
