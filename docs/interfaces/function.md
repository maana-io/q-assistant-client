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
* [id](function.md#id)
* [name](function.md#name)
* [nameDescriptor](function.md#namedescriptor)
* [service](function.md#service)
* [signature](function.md#signature)

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

*Defined in [models.ts:50](https://github.com/maana-io/q-assistant-client/blob/2fdcb17/src/models.ts#L50)*

Human readable description of the entity.

___

### id

•  **id**: string

*Inherited from [Entity](entity.md).[id](entity.md#id)*

*Defined in [models.ts:41](https://github.com/maana-io/q-assistant-client/blob/2fdcb17/src/models.ts#L41)*

The ID of the entity.

___

### name

•  **name**: string

*Inherited from [Entity](entity.md).[name](entity.md#name)*

*Defined in [models.ts:44](https://github.com/maana-io/q-assistant-client/blob/2fdcb17/src/models.ts#L44)*

The name of the entity.

___

### nameDescriptor

• `Optional` **nameDescriptor**: string

*Inherited from [Entity](entity.md).[nameDescriptor](entity.md#namedescriptor)*

*Defined in [models.ts:47](https://github.com/maana-io/q-assistant-client/blob/2fdcb17/src/models.ts#L47)*

Name of where the entity comes from (Service/Workspace).

___

### service

•  **service**: [IDObject](idobject.md)

*Defined in [models.ts:183](https://github.com/maana-io/q-assistant-client/blob/2fdcb17/src/models.ts#L183)*

The service that the Kind comes from.

___

### signature

•  **signature**: any

*Defined in [models.ts:180](https://github.com/maana-io/q-assistant-client/blob/2fdcb17/src/models.ts#L180)*

The signature of the Function.

## Methods

### canEdit

▸ **canEdit**(): Promise\<boolean>

*Defined in [models.ts:188](https://github.com/maana-io/q-assistant-client/blob/2fdcb17/src/models.ts#L188)*

Returns boolean stating if the Function is editable.

**Returns:** Promise\<boolean>

___

### execute

▸ **execute**(`variables`: any, `resolve`: string): Promise\<any>

*Defined in [models.ts:227](https://github.com/maana-io/q-assistant-client/blob/2fdcb17/src/models.ts#L227)*

Executes a GraphQL request against the Function.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`variables` | any | The variables to send with the request. |
`resolve` | string | A string with the fields to resolve on the Function. |

**Returns:** Promise\<any>

The results of running the Function.

___

### lockedBy

▸ **lockedBy**(): Promise\<[Maybe](../README.md#maybe)\<string>>

*Defined in [models.ts:193](https://github.com/maana-io/q-assistant-client/blob/2fdcb17/src/models.ts#L193)*

Returns the e-mail of the user who locked the Function.

**Returns:** Promise\<[Maybe](../README.md#maybe)\<string>>

___

### setLocked

▸ **setLocked**(`isLocked?`: boolean): Promise\<void>

*Defined in [models.ts:200](https://github.com/maana-io/q-assistant-client/blob/2fdcb17/src/models.ts#L200)*

Updates the locked state of the Function.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`isLocked?` | boolean | The new locked state of the Function, if not provided then the locked state is toggled.  |

**Returns:** Promise\<void>

___

### update

▸ **update**(`changes`: any): Promise\<void>

*Defined in [models.ts:206](https://github.com/maana-io/q-assistant-client/blob/2fdcb17/src/models.ts#L206)*

Updates information about the Function.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`changes` | any | Information to update the Function with.  |

**Returns:** Promise\<void>

___

### updateGraphLayout

▸ **updateGraphLayout**(`changes`: any): Promise\<void>

*Defined in [models.ts:219](https://github.com/maana-io/q-assistant-client/blob/2fdcb17/src/models.ts#L219)*

Updates the layout information for the graph of the Function.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`changes` | any | The changes to make to the layout.  |

**Returns:** Promise\<void>

___

### updateNodeLayout

▸ **updateNodeLayout**(`nodeId`: string, `changes`: any): Promise\<void>

*Defined in [models.ts:213](https://github.com/maana-io/q-assistant-client/blob/2fdcb17/src/models.ts#L213)*

Updates the layout information for a node in the Function.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`nodeId` | string | The ID of the node to update. |
`changes` | any | The changes to make to the layout.  |

**Returns:** Promise\<void>
