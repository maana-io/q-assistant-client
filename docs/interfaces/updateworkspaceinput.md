[Maana Q Assistant API Client](../README.md) / UpdateWorkspaceInput

# Interface: UpdateWorkspaceInput

## Table of contents

### Properties

- [addServices](UpdateWorkspaceInput.md#addservices)
- [cloneEntities](UpdateWorkspaceInput.md#cloneentities)
- [createEntities](UpdateWorkspaceInput.md#createentities)
- [deleteEntities](UpdateWorkspaceInput.md#deleteentities)
- [description](UpdateWorkspaceInput.md#description)
- [id](UpdateWorkspaceInput.md#id)
- [isPublic](UpdateWorkspaceInput.md#ispublic)
- [isTemplate](UpdateWorkspaceInput.md#istemplate)
- [lock](UpdateWorkspaceInput.md#lock)
- [moveEntities](UpdateWorkspaceInput.md#moveentities)
- [name](UpdateWorkspaceInput.md#name)
- [removeServices](UpdateWorkspaceInput.md#removeservices)
- [tags](UpdateWorkspaceInput.md#tags)
- [thumbnailUrl](UpdateWorkspaceInput.md#thumbnailurl)
- [updateEntities](UpdateWorkspaceInput.md#updateentities)

## Properties

### addServices

• `Optional` **addServices**: `string`[]

#### Defined in

[models.ts:952](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L952)

___

### cloneEntities

• `Optional` **cloneEntities**: [`CloneEntityInput`](CloneEntityInput.md)[]

#### Defined in

[models.ts:942](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L942)

___

### createEntities

• `Optional` **createEntities**: [`CreateEntityInput`](CreateEntityInput.md)[]

#### Defined in

[models.ts:941](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L941)

___

### deleteEntities

• `Optional` **deleteEntities**: [`EntityIdentifier`](EntityIdentifier.md)[]

#### Defined in

[models.ts:951](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L951)

___

### description

• `Optional` **description**: `string`

#### Defined in

[models.ts:935](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L935)

___

### id

• **id**: `string`

#### Defined in

[models.ts:933](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L933)

___

### isPublic

• `Optional` **isPublic**: `boolean`

#### Defined in

[models.ts:938](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L938)

___

### isTemplate

• `Optional` **isTemplate**: `boolean`

#### Defined in

[models.ts:939](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L939)

___

### lock

• `Optional` **lock**: [`EntityLockInput`](EntityLockInput.md)

#### Defined in

[models.ts:940](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L940)

___

### moveEntities

• `Optional` **moveEntities**: [`EntityIdentifier`](EntityIdentifier.md)[]

Moves the given entities from their current Workspace to this one.
Currently only Types and Functions support being moved between Workspaces.

#### Defined in

[models.ts:949](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L949)

___

### name

• `Optional` **name**: `string`

#### Defined in

[models.ts:934](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L934)

___

### removeServices

• `Optional` **removeServices**: `string`[]

#### Defined in

[models.ts:953](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L953)

___

### tags

• `Optional` **tags**: `string`[]

#### Defined in

[models.ts:937](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L937)

___

### thumbnailUrl

• `Optional` **thumbnailUrl**: `string`

#### Defined in

[models.ts:936](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L936)

___

### updateEntities

• `Optional` **updateEntities**: [`UpdateEntityInput`](UpdateEntityInput.md)[]

#### Defined in

[models.ts:943](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L943)
