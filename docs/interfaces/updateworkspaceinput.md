**[Maana Q Assistant API Client](../README.md)**

> [Globals](../README.md) / UpdateWorkspaceInput

# Interface: UpdateWorkspaceInput

UpdateWorkspace input - used to update existing workspaces.  Allows for a
partial update of the Workspace based on the fields defined in the input.

Operations happen in this order: create, clone, add, update, remove, delete.
Order within each input list matters. This will enable creating multiple things
in one call to the backend. For example, if server writes were delayed in the UI
for performance reasons, you could create several types and a function that
uses them... and update the names of those types and functions in a single
request.

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

*Defined in Clients/AssistantAPIClient/models.ts:909*

___

### cloneEntities

• `Optional` **cloneEntities**: [Maybe](../README.md#maybe)\<Array\<[CloneEntityInput](cloneentityinput.md)>>

*Defined in Clients/AssistantAPIClient/models.ts:899*

___

### createEntities

• `Optional` **createEntities**: [Maybe](../README.md#maybe)\<Array\<[CreateEntityInput](createentityinput.md)>>

*Defined in Clients/AssistantAPIClient/models.ts:898*

___

### deleteEntities

• `Optional` **deleteEntities**: [Maybe](../README.md#maybe)\<Array\<[EntityIdentifier](entityidentifier.md)>>

*Defined in Clients/AssistantAPIClient/models.ts:908*

___

### description

• `Optional` **description**: [Maybe](../README.md#maybe)\<string>

*Defined in Clients/AssistantAPIClient/models.ts:892*

___

### id

•  **id**: string

*Defined in Clients/AssistantAPIClient/models.ts:890*

___

### isPublic

• `Optional` **isPublic**: [Maybe](../README.md#maybe)\<boolean>

*Defined in Clients/AssistantAPIClient/models.ts:895*

___

### isTemplate

• `Optional` **isTemplate**: [Maybe](../README.md#maybe)\<boolean>

*Defined in Clients/AssistantAPIClient/models.ts:896*

___

### lock

• `Optional` **lock**: [Maybe](../README.md#maybe)\<[EntityLockInput](entitylockinput.md)>

*Defined in Clients/AssistantAPIClient/models.ts:897*

___

### moveEntities

• `Optional` **moveEntities**: [Maybe](../README.md#maybe)\<Array\<[EntityIdentifier](entityidentifier.md)>>

*Defined in Clients/AssistantAPIClient/models.ts:906*

Moves the given entities from their current Workspace to this one.
Currently only Types and Functions support being moved between Workspaces.

___

### name

• `Optional` **name**: [Maybe](../README.md#maybe)\<string>

*Defined in Clients/AssistantAPIClient/models.ts:891*

___

### removeServices

• `Optional` **removeServices**: [Maybe](../README.md#maybe)\<Array\<string>>

*Defined in Clients/AssistantAPIClient/models.ts:910*

___

### tags

• `Optional` **tags**: [Maybe](../README.md#maybe)\<Array\<string>>

*Defined in Clients/AssistantAPIClient/models.ts:894*

___

### thumbnailUrl

• `Optional` **thumbnailUrl**: [Maybe](../README.md#maybe)\<string>

*Defined in Clients/AssistantAPIClient/models.ts:893*

___

### updateEntities

• `Optional` **updateEntities**: [Maybe](../README.md#maybe)\<Array\<[UpdateEntityInput](updateentityinput.md)>>

*Defined in Clients/AssistantAPIClient/models.ts:900*
