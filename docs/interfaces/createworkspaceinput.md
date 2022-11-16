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

[models.ts:881](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L881)

___

### createEntities

• `Optional` **createEntities**: [`CreateEntityInput`](CreateEntityInput.md)[]

#### Defined in

[models.ts:880](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L880)

___

### description

• `Optional` **description**: `string`

#### Defined in

[models.ts:874](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L874)

___

### id

• `Optional` **id**: `string`

#### Defined in

[models.ts:871](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L871)

___

### isPublic

• `Optional` **isPublic**: `boolean`

#### Defined in

[models.ts:878](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L878)

___

### isTemplate

• `Optional` **isTemplate**: `boolean`

#### Defined in

[models.ts:879](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L879)

___

### moveEntities

• `Optional` **moveEntities**: [`EntityIdentifier`](EntityIdentifier.md)[]

Moves the given entities from their current Workspace to this one.
Currently only Types and Functions support being moved between Workspaces.

#### Defined in

[models.ts:887](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L887)

___

### name

• **name**: `string`

#### Defined in

[models.ts:873](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L873)

___

### owner

• **owner**: `string`

#### Defined in

[models.ts:877](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L877)

___

### serviceId

• `Optional` **serviceId**: `string`

#### Defined in

[models.ts:872](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L872)

___

### tags

• `Optional` **tags**: `string`[]

#### Defined in

[models.ts:876](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L876)

___

### thumbnailUrl

• `Optional` **thumbnailUrl**: `string`

#### Defined in

[models.ts:875](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L875)
