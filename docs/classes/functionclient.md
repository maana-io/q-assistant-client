**[Maana Q Assistant API Client](../README.md)**

> [Globals](../README.md) / FunctionClient

# Class: FunctionClient

## Hierarchy

* **FunctionClient**

## Index

### Properties

* [signature](functionclient.md#signature)

### Methods

* [canEdit](functionclient.md#canedit)
* [execute](functionclient.md#execute)
* [lockedBy](functionclient.md#lockedby)
* [setLocked](functionclient.md#setlocked)
* [update](functionclient.md#update)
* [updateGraphLayout](functionclient.md#updategraphlayout)
* [updateNodeLayout](functionclient.md#updatenodelayout)

## Properties

### signature

•  **signature**: unknown

*Defined in [Clients/FunctionClient.ts:129](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/FunctionClient.ts#L129)*

## Methods

### canEdit

▸ **canEdit**(): Promise\<void>

*Defined in [Clients/FunctionClient.ts:131](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/FunctionClient.ts#L131)*

**Returns:** Promise\<void>

___

### execute

▸ **execute**(`variables`: unknown, `resolve`: unknown): void

*Defined in [Clients/FunctionClient.ts:136](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/FunctionClient.ts#L136)*

#### Parameters:

Name | Type |
------ | ------ |
`variables` | unknown |
`resolve` | unknown |

**Returns:** void

___

### lockedBy

▸ **lockedBy**(): Promise\<void>

*Defined in [Clients/FunctionClient.ts:130](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/FunctionClient.ts#L130)*

**Returns:** Promise\<void>

___

### setLocked

▸ **setLocked**(`isLocked`: boolean): Promise\<void>

*Defined in [Clients/FunctionClient.ts:132](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/FunctionClient.ts#L132)*

#### Parameters:

Name | Type |
------ | ------ |
`isLocked` | boolean |

**Returns:** Promise\<void>

___

### update

▸ **update**(`updates`: unknown): Promise\<void>

*Defined in [Clients/FunctionClient.ts:133](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/FunctionClient.ts#L133)*

#### Parameters:

Name | Type |
------ | ------ |
`updates` | unknown |

**Returns:** Promise\<void>

___

### updateGraphLayout

▸ **updateGraphLayout**(`updates`: unknown): void

*Defined in [Clients/FunctionClient.ts:135](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/FunctionClient.ts#L135)*

#### Parameters:

Name | Type |
------ | ------ |
`updates` | unknown |

**Returns:** void

___

### updateNodeLayout

▸ **updateNodeLayout**(`nodeId`: unknown, `updates`: unknown): void

*Defined in [Clients/FunctionClient.ts:134](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/FunctionClient.ts#L134)*

#### Parameters:

Name | Type |
------ | ------ |
`nodeId` | unknown |
`updates` | unknown |

**Returns:** void
