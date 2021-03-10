**[Maana Q Assistant API Client](../README.md)**

> [Globals](../README.md) / UpdateWorkspaceInput

# Interface: UpdateWorkspaceInput

## Hierarchy

* **UpdateWorkspaceInput**

## Index

### Properties

* [addServices](updateworkspaceinput.md#addservices)
* [cloneEntities](updateworkspaceinput.md#cloneentities)
* [createEntities](updateworkspaceinput.md#createentities)
* [deleteEntities](updateworkspaceinput.md#deleteentities)
* [description](updateworkspaceinput.md#description)
* [id](updateworkspaceinput.md#id)
* [isPublic](updateworkspaceinput.md#ispublic)
* [isTemplate](updateworkspaceinput.md#istemplate)
* [lock](updateworkspaceinput.md#lock)
* [moveEntities](updateworkspaceinput.md#moveentities)
* [name](updateworkspaceinput.md#name)
* [removeServices](updateworkspaceinput.md#removeservices)
* [tags](updateworkspaceinput.md#tags)
* [thumbnailUrl](updateworkspaceinput.md#thumbnailurl)
* [updateEntities](updateworkspaceinput.md#updateentities)

## Properties

### addServices

• `Optional` **addServices**: [Maybe](../README.md#maybe)\<Array\<string>>

*Defined in [models.ts:847](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L847)*

___

### cloneEntities

• `Optional` **cloneEntities**: [Maybe](../README.md#maybe)\<Array\<[CloneEntityInput](cloneentityinput.md)>>

*Defined in [models.ts:837](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L837)*

___

### createEntities

• `Optional` **createEntities**: [Maybe](../README.md#maybe)\<Array\<[CreateEntityInput](createentityinput.md)>>

*Defined in [models.ts:836](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L836)*

___

### deleteEntities

• `Optional` **deleteEntities**: [Maybe](../README.md#maybe)\<Array\<[EntityIdentifier](entityidentifier.md)>>

*Defined in [models.ts:846](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L846)*

___

### description

• `Optional` **description**: [Maybe](../README.md#maybe)\<string>

*Defined in [models.ts:830](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L830)*

___

### id

•  **id**: string

*Defined in [models.ts:828](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L828)*

___

### isPublic

• `Optional` **isPublic**: [Maybe](../README.md#maybe)\<boolean>

*Defined in [models.ts:833](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L833)*

___

### isTemplate

• `Optional` **isTemplate**: [Maybe](../README.md#maybe)\<boolean>

*Defined in [models.ts:834](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L834)*

___

### lock

• `Optional` **lock**: [Maybe](../README.md#maybe)\<[EntityLockInput](entitylockinput.md)>

*Defined in [models.ts:835](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L835)*

___

### moveEntities

• `Optional` **moveEntities**: [Maybe](../README.md#maybe)\<Array\<[EntityIdentifier](entityidentifier.md)>>

*Defined in [models.ts:844](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L844)*

Moves the given entities from their current Workspace to this one.
Currently only Types and Functions support being moved between Workspaces.

___

### name

• `Optional` **name**: [Maybe](../README.md#maybe)\<string>

*Defined in [models.ts:829](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L829)*

___

### removeServices

• `Optional` **removeServices**: [Maybe](../README.md#maybe)\<Array\<string>>

*Defined in [models.ts:848](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L848)*

___

### tags

• `Optional` **tags**: [Maybe](../README.md#maybe)\<Array\<string>>

*Defined in [models.ts:832](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L832)*

___

### thumbnailUrl

• `Optional` **thumbnailUrl**: [Maybe](../README.md#maybe)\<string>

*Defined in [models.ts:831](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L831)*

___

### updateEntities

• `Optional` **updateEntities**: [Maybe](../README.md#maybe)\<Array\<[UpdateEntityInput](updateentityinput.md)>>

*Defined in [models.ts:838](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L838)*
