**[Maana Q Assistant API Client](../README.md)**

> [Globals](../README.md) / CreateWorkspaceInput

# Interface: CreateWorkspaceInput

CreateWorkspace input - used to create new workspaces

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

*Defined in Clients/AssistantAPIClient/models.ts:880*

___

### createEntities

• `Optional` **createEntities**: [Maybe](../README.md#maybe)\<Array\<[CreateEntityInput](createentityinput.md)>>

*Defined in Clients/AssistantAPIClient/models.ts:879*

___

### description

• `Optional` **description**: [Maybe](../README.md#maybe)\<string>

*Defined in Clients/AssistantAPIClient/models.ts:873*

___

### id

• `Optional` **id**: [Maybe](../README.md#maybe)\<string>

*Defined in Clients/AssistantAPIClient/models.ts:870*

___

### isPublic

• `Optional` **isPublic**: [Maybe](../README.md#maybe)\<boolean>

*Defined in Clients/AssistantAPIClient/models.ts:877*

___

### isTemplate

• `Optional` **isTemplate**: [Maybe](../README.md#maybe)\<boolean>

*Defined in Clients/AssistantAPIClient/models.ts:878*

___

### moveEntities

• `Optional` **moveEntities**: [Maybe](../README.md#maybe)\<Array\<[EntityIdentifier](entityidentifier.md)>>

*Defined in Clients/AssistantAPIClient/models.ts:886*

Moves the given entities from their current Workspace to this one.
Currently only Types and Functions support being moved between Workspaces.

___

### name

•  **name**: string

*Defined in Clients/AssistantAPIClient/models.ts:872*

___

### owner

•  **owner**: string

*Defined in Clients/AssistantAPIClient/models.ts:876*

___

### serviceId

• `Optional` **serviceId**: [Maybe](../README.md#maybe)\<string>

*Defined in Clients/AssistantAPIClient/models.ts:871*

___

### tags

• `Optional` **tags**: [Maybe](../README.md#maybe)\<Array\<string>>

*Defined in Clients/AssistantAPIClient/models.ts:875*

___

### thumbnailUrl

• `Optional` **thumbnailUrl**: [Maybe](../README.md#maybe)\<string>

*Defined in Clients/AssistantAPIClient/models.ts:874*
