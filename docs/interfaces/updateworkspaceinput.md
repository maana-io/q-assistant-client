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

*Defined in [models.ts:871](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L871)*

___

### cloneEntities

• `Optional` **cloneEntities**: [Maybe](../README.md#maybe)\<Array\<[CloneEntityInput](cloneentityinput.md)>>

*Defined in [models.ts:861](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L861)*

___

### createEntities

• `Optional` **createEntities**: [Maybe](../README.md#maybe)\<Array\<[CreateEntityInput](createentityinput.md)>>

*Defined in [models.ts:860](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L860)*

___

### deleteEntities

• `Optional` **deleteEntities**: [Maybe](../README.md#maybe)\<Array\<[EntityIdentifier](entityidentifier.md)>>

*Defined in [models.ts:870](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L870)*

___

### description

• `Optional` **description**: [Maybe](../README.md#maybe)\<string>

*Defined in [models.ts:854](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L854)*

___

### id

•  **id**: string

*Defined in [models.ts:852](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L852)*

___

### isPublic

• `Optional` **isPublic**: [Maybe](../README.md#maybe)\<boolean>

*Defined in [models.ts:857](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L857)*

___

### isTemplate

• `Optional` **isTemplate**: [Maybe](../README.md#maybe)\<boolean>

*Defined in [models.ts:858](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L858)*

___

### lock

• `Optional` **lock**: [Maybe](../README.md#maybe)\<[EntityLockInput](entitylockinput.md)>

*Defined in [models.ts:859](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L859)*

___

### moveEntities

• `Optional` **moveEntities**: [Maybe](../README.md#maybe)\<Array\<[EntityIdentifier](entityidentifier.md)>>

*Defined in [models.ts:868](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L868)*

Moves the given entities from their current Workspace to this one.
Currently only Types and Functions support being moved between Workspaces.

___

### name

• `Optional` **name**: [Maybe](../README.md#maybe)\<string>

*Defined in [models.ts:853](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L853)*

___

### removeServices

• `Optional` **removeServices**: [Maybe](../README.md#maybe)\<Array\<string>>

*Defined in [models.ts:872](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L872)*

___

### tags

• `Optional` **tags**: [Maybe](../README.md#maybe)\<Array\<string>>

*Defined in [models.ts:856](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L856)*

___

### thumbnailUrl

• `Optional` **thumbnailUrl**: [Maybe](../README.md#maybe)\<string>

*Defined in [models.ts:855](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L855)*

___

### updateEntities

• `Optional` **updateEntities**: [Maybe](../README.md#maybe)\<Array\<[UpdateEntityInput](updateentityinput.md)>>

*Defined in [models.ts:862](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L862)*
