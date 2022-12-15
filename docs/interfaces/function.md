[Maana Q Assistant API Client](../README.md) / Function

# Interface: Function

**`Prop`**

The GraphQL type for the Function.

**`Prop`**

States the purity of a Function.

**`Prop`**

The implementation of the Function.

**`Prop`**

The graph of the Function.

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`Function`**

## Table of contents

### Properties

- [description](Function.md#description)
- [graphqlFunctionType](Function.md#graphqlfunctiontype)
- [id](Function.md#id)
- [implementation](Function.md#implementation)
- [inputMask](Function.md#inputmask)
- [isPure](Function.md#ispure)
- [name](Function.md#name)
- [nameDescriptor](Function.md#namedescriptor)
- [service](Function.md#service)
- [signature](Function.md#signature)
- [typeParameters](Function.md#typeparameters)

### Methods

- [canEdit](Function.md#canedit)
- [execute](Function.md#execute)
- [lockedBy](Function.md#lockedby)
- [setLocked](Function.md#setlocked)
- [update](Function.md#update)
- [updateGraphLayout](Function.md#updategraphlayout)
- [updateNodeLayout](Function.md#updatenodelayout)

## Properties

### description

• `Optional` **description**: `string`

Human readable description of the entity.

#### Inherited from

[Entity](Entity.md).[description](Entity.md#description)

#### Defined in

[models.ts:84](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L84)

___

### graphqlFunctionType

• **graphqlFunctionType**: [`GraphQLFunctionType`](../enums/GraphQLFunctionType.md)

How the function is run (like query or mutation)

#### Defined in

[models.ts:311](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L311)

___

### id

• **id**: `string`

The ID of the entity.

#### Inherited from

[Entity](Entity.md).[id](Entity.md#id)

#### Defined in

[models.ts:75](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L75)

___

### implementation

• **implementation**: [`Graph`](Graph.md)

The implementation representing what the Function does.  This is only used
by Functions on Logic services.

#### Defined in

[models.ts:322](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L322)

___

### inputMask

• `Optional` **inputMask**: [`ArgumentFieldSelection`](ArgumentFieldSelection.md)[]

#### Defined in

[models.ts:324](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L324)

___

### isPure

• **isPure**: `boolean`

Defines if this is a pure or impure Function, or if its purity is unknown.

#### Defined in

[models.ts:316](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L316)

___

### name

• **name**: `string`

The name of the entity.

#### Inherited from

[Entity](Entity.md).[name](Entity.md#name)

#### Defined in

[models.ts:78](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L78)

___

### nameDescriptor

• `Optional` **nameDescriptor**: `string`

Name of where the entity comes from (Service/Workspace).

#### Inherited from

[Entity](Entity.md).[nameDescriptor](Entity.md#namedescriptor)

#### Defined in

[models.ts:81](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L81)

___

### service

• **service**: [`IDObject`](IDObject.md)

The service that the Kind comes from.

#### Defined in

[models.ts:305](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L305)

___

### signature

• **signature**: `TypeExpression`

The signature of the Function.

#### Defined in

[models.ts:302](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L302)

___

### typeParameters

• **typeParameters**: `string`[]

Type Parameters are placeholders for types and are used as generics.

#### Defined in

[models.ts:308](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L308)

## Methods

### canEdit

▸ **canEdit**(): `Promise`<`boolean`\>

Returns boolean stating if the Function is editable.

#### Returns

`Promise`<`boolean`\>

#### Defined in

[models.ts:329](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L329)

___

### execute

▸ **execute**(`variables?`, `resolve?`): `Promise`<`unknown`\>

Executes a GraphQL request against the Function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `variables?` | `Record`<`string`, `unknown`\> | The variables to send with the request. |
| `resolve?` | `string` | A string with the fields to resolve on the Function. |

#### Returns

`Promise`<`unknown`\>

The results of running the Function.

#### Defined in

[models.ts:371](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L371)

___

### lockedBy

▸ **lockedBy**(): `Promise`<`string`\>

Returns the e-mail of the user who locked the Function.

#### Returns

`Promise`<`string`\>

#### Defined in

[models.ts:334](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L334)

___

### setLocked

▸ **setLocked**(`isLocked?`): `Promise`<`void`\>

Updates the locked state of the Function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isLocked?` | `boolean` | The new locked state of the Function, if not provided then the locked state is toggled. |

#### Returns

`Promise`<`void`\>

#### Defined in

[models.ts:341](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L341)

___

### update

▸ **update**(`changes`): `Promise`<`void`\>

Updates information about the Function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `changes` | [`UpdateFunctionInput`](UpdateFunctionInput.md) | Information to update the Function with. |

#### Returns

`Promise`<`void`\>

#### Defined in

[models.ts:347](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L347)

___

### updateGraphLayout

▸ **updateGraphLayout**(`changes`): `Promise`<`void`\>

Updates the layout information for the graph of the Function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `changes` | [`UpdateGraphLayoutInput`](UpdateGraphLayoutInput.md) | The changes to make to the layout. |

#### Returns

`Promise`<`void`\>

#### Defined in

[models.ts:363](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L363)

___

### updateNodeLayout

▸ **updateNodeLayout**(`nodeId`, `changes`): `Promise`<`void`\>

Updates the layout information for a node in the Function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nodeId` | `string` | The ID of the node to update. |
| `changes` | [`UpdateNodeLayoutInput`](UpdateNodeLayoutInput.md) | The changes to make to the layout. |

#### Returns

`Promise`<`void`\>

#### Defined in

[models.ts:354](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L354)
