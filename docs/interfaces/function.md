**[Maana Q Assistant API Client](../README.md)**

> [Globals](../README.md) / Function

# Interface: Function

**`prop`** {string} graphqlFunctionType The GraphQL type for the Function.

**`prop`** {boolean} [isPure] States the purity of a Function.

**`prop`** {Implementation} [implementation] The implementation of the Function.

**`prop`** {Graph} [graph] The graph of the Function.

## Hierarchy

* [Entity](entity.md)

  ↳ **Function**

## Index

### Properties

* [description](function.md#description)
* [graphqlFunctionType](function.md#graphqlfunctiontype)
* [id](function.md#id)
* [implementation](function.md#implementation)
* [inputMask](function.md#inputmask)
* [isPure](function.md#ispure)
* [name](function.md#name)
* [nameDescriptor](function.md#namedescriptor)
* [service](function.md#service)
* [signature](function.md#signature)
* [typeParameters](function.md#typeparameters)

### Methods

* [canEdit](function.md#canedit)
* [execute](function.md#execute)
* [lockedBy](function.md#lockedby)
* [setLocked](function.md#setlocked)
* [update](function.md#update)
* [updateGraphLayout](function.md#updategraphlayout)
* [updateNodeLayout](function.md#updatenodelayout)

## Properties

### description

• `Optional` **description**: string

*Inherited from [Entity](entity.md).[description](entity.md#description)*

*Defined in [models.ts:62](https://github.com/maana-io/q-assistant-client/blob/1a0616f/src/models.ts#L62)*

Human readable description of the entity.

___

### graphqlFunctionType

•  **graphqlFunctionType**: [GraphQLFunctionType](../enums/graphqlfunctiontype.md)

*Defined in [models.ts:278](https://github.com/maana-io/q-assistant-client/blob/1a0616f/src/models.ts#L278)*

How the function is run (like query or mutation)

___

### id

•  **id**: string

*Inherited from [Entity](entity.md).[id](entity.md#id)*

*Defined in [models.ts:53](https://github.com/maana-io/q-assistant-client/blob/1a0616f/src/models.ts#L53)*

The ID of the entity.

___

### implementation

•  **implementation**: [Implementation](../README.md#implementation)

*Defined in [models.ts:289](https://github.com/maana-io/q-assistant-client/blob/1a0616f/src/models.ts#L289)*

The implementation representing what the Function does.  This is only used
by Functions on Logic services.

___

### inputMask

• `Optional` **inputMask**: [ArgumentFieldSelection](argumentfieldselection.md)[]

*Defined in [models.ts:291](https://github.com/maana-io/q-assistant-client/blob/1a0616f/src/models.ts#L291)*

___

### isPure

•  **isPure**: boolean

*Defined in [models.ts:283](https://github.com/maana-io/q-assistant-client/blob/1a0616f/src/models.ts#L283)*

Defines if this is a pure or impure Function, or if its purity is unknown.

___

### name

•  **name**: string

*Inherited from [Entity](entity.md).[name](entity.md#name)*

*Defined in [models.ts:56](https://github.com/maana-io/q-assistant-client/blob/1a0616f/src/models.ts#L56)*

The name of the entity.

___

### nameDescriptor

• `Optional` **nameDescriptor**: string

*Inherited from [Entity](entity.md).[nameDescriptor](entity.md#namedescriptor)*

*Defined in [models.ts:59](https://github.com/maana-io/q-assistant-client/blob/1a0616f/src/models.ts#L59)*

Name of where the entity comes from (Service/Workspace).

___

### service

•  **service**: [IDObject](idobject.md)

*Defined in [models.ts:272](https://github.com/maana-io/q-assistant-client/blob/1a0616f/src/models.ts#L272)*

The service that the Kind comes from.

___

### signature

•  **signature**: [TypeExpressionObject](../README.md#typeexpressionobject)

*Defined in [models.ts:269](https://github.com/maana-io/q-assistant-client/blob/1a0616f/src/models.ts#L269)*

The signature of the Function.

___

### typeParameters

•  **typeParameters**: string[]

*Defined in [models.ts:275](https://github.com/maana-io/q-assistant-client/blob/1a0616f/src/models.ts#L275)*

Type Parameters are placeholders for types and are used as generics.

## Methods

### canEdit

▸ **canEdit**(): Promise\<boolean>

*Defined in [models.ts:296](https://github.com/maana-io/q-assistant-client/blob/1a0616f/src/models.ts#L296)*

Returns boolean stating if the Function is editable.

**Returns:** Promise\<boolean>

___

### execute

▸ **execute**(`variables?`: [Maybe](../README.md#maybe)\<Record\<string, any>>, `resolve?`: string): Promise\<any>

*Defined in [models.ts:338](https://github.com/maana-io/q-assistant-client/blob/1a0616f/src/models.ts#L338)*

Executes a GraphQL request against the Function.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`variables?` | [Maybe](../README.md#maybe)\<Record\<string, any>> | The variables to send with the request. |
`resolve?` | string | A string with the fields to resolve on the Function. |

**Returns:** Promise\<any>

The results of running the Function.

___

### lockedBy

▸ **lockedBy**(): Promise\<[Maybe](../README.md#maybe)\<string>>

*Defined in [models.ts:301](https://github.com/maana-io/q-assistant-client/blob/1a0616f/src/models.ts#L301)*

Returns the e-mail of the user who locked the Function.

**Returns:** Promise\<[Maybe](../README.md#maybe)\<string>>

___

### setLocked

▸ **setLocked**(`isLocked?`: boolean): Promise\<void>

*Defined in [models.ts:308](https://github.com/maana-io/q-assistant-client/blob/1a0616f/src/models.ts#L308)*

Updates the locked state of the Function.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`isLocked?` | boolean | The new locked state of the Function, if not provided then the locked state is toggled.  |

**Returns:** Promise\<void>

___

### update

▸ **update**(`changes`: [UpdateFunctionInput](updatefunctioninput.md)): Promise\<void>

*Defined in [models.ts:314](https://github.com/maana-io/q-assistant-client/blob/1a0616f/src/models.ts#L314)*

Updates information about the Function.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`changes` | [UpdateFunctionInput](updatefunctioninput.md) | Information to update the Function with.  |

**Returns:** Promise\<void>

___

### updateGraphLayout

▸ **updateGraphLayout**(`changes`: [UpdateGraphLayoutInput](updategraphlayoutinput.md)): Promise\<void>

*Defined in [models.ts:330](https://github.com/maana-io/q-assistant-client/blob/1a0616f/src/models.ts#L330)*

Updates the layout information for the graph of the Function.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`changes` | [UpdateGraphLayoutInput](updategraphlayoutinput.md) | The changes to make to the layout.  |

**Returns:** Promise\<void>

___

### updateNodeLayout

▸ **updateNodeLayout**(`nodeId`: string, `changes`: [UpdateNodeLayoutInput](updatenodelayoutinput.md)): Promise\<void>

*Defined in [models.ts:321](https://github.com/maana-io/q-assistant-client/blob/1a0616f/src/models.ts#L321)*

Updates the layout information for a node in the Function.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`nodeId` | string | The ID of the node to update. |
`changes` | [UpdateNodeLayoutInput](updatenodelayoutinput.md) | The changes to make to the layout.  |

**Returns:** Promise\<void>
