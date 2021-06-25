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

*Defined in [models.ts:880](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L880)*

___

### cloneEntities

• `Optional` **cloneEntities**: [Maybe](../README.md#maybe)\<Array\<[CloneEntityInput](cloneentityinput.md)>>

*Defined in [models.ts:870](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L870)*

___

### createEntities

• `Optional` **createEntities**: [Maybe](../README.md#maybe)\<Array\<[CreateEntityInput](createentityinput.md)>>

*Defined in [models.ts:869](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L869)*

___

### deleteEntities

• `Optional` **deleteEntities**: [Maybe](../README.md#maybe)\<Array\<[EntityIdentifier](entityidentifier.md)>>

*Defined in [models.ts:879](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L879)*

___

### description

• `Optional` **description**: [Maybe](../README.md#maybe)\<string>

*Defined in [models.ts:863](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L863)*

___

### id

•  **id**: string

*Defined in [models.ts:861](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L861)*

___

### isPublic

• `Optional` **isPublic**: [Maybe](../README.md#maybe)\<boolean>

*Defined in [models.ts:866](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L866)*

___

### isTemplate

• `Optional` **isTemplate**: [Maybe](../README.md#maybe)\<boolean>

*Defined in [models.ts:867](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L867)*

___

### lock

• `Optional` **lock**: [Maybe](../README.md#maybe)\<[EntityLockInput](entitylockinput.md)>

*Defined in [models.ts:868](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L868)*

___

### moveEntities

• `Optional` **moveEntities**: [Maybe](../README.md#maybe)\<Array\<[EntityIdentifier](entityidentifier.md)>>

*Defined in [models.ts:877](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L877)*

Moves the given entities from their current Workspace to this one.
Currently only Types and Functions support being moved between Workspaces.

___

### name

• `Optional` **name**: [Maybe](../README.md#maybe)\<string>

*Defined in [models.ts:862](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L862)*

___

### removeServices

• `Optional` **removeServices**: [Maybe](../README.md#maybe)\<Array\<string>>

*Defined in [models.ts:881](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L881)*

___

### tags

• `Optional` **tags**: [Maybe](../README.md#maybe)\<Array\<string>>

*Defined in [models.ts:865](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L865)*

___

### thumbnailUrl

• `Optional` **thumbnailUrl**: [Maybe](../README.md#maybe)\<string>

*Defined in [models.ts:864](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L864)*

___

### updateEntities

• `Optional` **updateEntities**: [Maybe](../README.md#maybe)\<Array\<[UpdateEntityInput](updateentityinput.md)>>

*Defined in [models.ts:871](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L871)*
