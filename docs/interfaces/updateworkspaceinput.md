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

[models.ts:913](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L913)

___

### cloneEntities

• `Optional` **cloneEntities**: [`CloneEntityInput`](CloneEntityInput.md)[]

#### Defined in

[models.ts:903](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L903)

___

### createEntities

• `Optional` **createEntities**: [`CreateEntityInput`](CreateEntityInput.md)[]

#### Defined in

[models.ts:902](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L902)

___

### deleteEntities

• `Optional` **deleteEntities**: [`EntityIdentifier`](EntityIdentifier.md)[]

#### Defined in

[models.ts:912](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L912)

___

### description

• `Optional` **description**: `string`

#### Defined in

[models.ts:896](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L896)

___

### id

• **id**: `string`

#### Defined in

[models.ts:894](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L894)

___

### isPublic

• `Optional` **isPublic**: `boolean`

#### Defined in

[models.ts:899](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L899)

___

### isTemplate

• `Optional` **isTemplate**: `boolean`

#### Defined in

[models.ts:900](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L900)

___

### lock

• `Optional` **lock**: [`EntityLockInput`](EntityLockInput.md)

#### Defined in

[models.ts:901](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L901)

___

### moveEntities

• `Optional` **moveEntities**: [`EntityIdentifier`](EntityIdentifier.md)[]

Moves the given entities from their current Workspace to this one.
Currently only Types and Functions support being moved between Workspaces.

#### Defined in

[models.ts:910](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L910)

___

### name

• `Optional` **name**: `string`

#### Defined in

[models.ts:895](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L895)

___

### removeServices

• `Optional` **removeServices**: `string`[]

#### Defined in

[models.ts:914](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L914)

___

### tags

• `Optional` **tags**: `string`[]

#### Defined in

[models.ts:898](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L898)

___

### thumbnailUrl

• `Optional` **thumbnailUrl**: `string`

#### Defined in

[models.ts:897](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L897)

___

### updateEntities

• `Optional` **updateEntities**: [`UpdateEntityInput`](UpdateEntityInput.md)[]

#### Defined in

[models.ts:904](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L904)
