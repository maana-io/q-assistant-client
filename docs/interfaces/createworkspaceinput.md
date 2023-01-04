[Maana Q Assistant API Client](../README.md) / CreateWorkspaceInput

# Interface: CreateWorkspaceInput

## Table of contents

### Properties

- [addServices](CreateWorkspaceInput.md#addservices)
- [createEntities](CreateWorkspaceInput.md#createentities)
- [description](CreateWorkspaceInput.md#description)
- [id](CreateWorkspaceInput.md#id)
- [isPublic](CreateWorkspaceInput.md#ispublic)
- [isTemplate](CreateWorkspaceInput.md#istemplate)
- [moveEntities](CreateWorkspaceInput.md#moveentities)
- [name](CreateWorkspaceInput.md#name)
- [owner](CreateWorkspaceInput.md#owner)
- [serviceId](CreateWorkspaceInput.md#serviceid)
- [tags](CreateWorkspaceInput.md#tags)
- [thumbnailUrl](CreateWorkspaceInput.md#thumbnailurl)

## Properties

### addServices

• `Optional` **addServices**: `string`[]

#### Defined in

[models.ts:923](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L923)

___

### createEntities

• `Optional` **createEntities**: [`CreateEntityInput`](CreateEntityInput.md)[]

#### Defined in

[models.ts:922](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L922)

___

### description

• `Optional` **description**: `string`

#### Defined in

[models.ts:916](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L916)

___

### id

• `Optional` **id**: `string`

#### Defined in

[models.ts:913](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L913)

___

### isPublic

• `Optional` **isPublic**: `boolean`

#### Defined in

[models.ts:920](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L920)

___

### isTemplate

• `Optional` **isTemplate**: `boolean`

#### Defined in

[models.ts:921](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L921)

___

### moveEntities

• `Optional` **moveEntities**: [`EntityIdentifier`](EntityIdentifier.md)[]

Moves the given entities from their current Workspace to this one.
Currently only Types and Functions support being moved between Workspaces.

#### Defined in

[models.ts:929](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L929)

___

### name

• **name**: `string`

#### Defined in

[models.ts:915](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L915)

___

### owner

• **owner**: `string`

#### Defined in

[models.ts:919](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L919)

___

### serviceId

• `Optional` **serviceId**: `string`

#### Defined in

[models.ts:914](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L914)

___

### tags

• `Optional` **tags**: `string`[]

#### Defined in

[models.ts:918](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L918)

___

### thumbnailUrl

• `Optional` **thumbnailUrl**: `string`

#### Defined in

[models.ts:917](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L917)
