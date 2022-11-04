**[Maana Q Assistant API Client](../README.md)**

> [Globals](../README.md) / ServiceClient

# Class: ServiceClient

## Hierarchy

* **ServiceClient**

## Index

### Constructors

* [constructor](serviceclient.md#constructor)

### Accessors

* [id](serviceclient.md#id)
* [name](serviceclient.md#name)

### Methods

* [getFunction](serviceclient.md#getfunction)
* [hasFunction](serviceclient.md#hasfunction)

## Constructors

### constructor

\+ **new ServiceClient**(`self`: Object, `ckgClient`: [CKGClient](ckgclient.md)): [ServiceClient](serviceclient.md)

*Defined in [Clients/ServiceClient.ts:7](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/ServiceClient.ts#L7)*

#### Parameters:

Name | Type |
------ | ------ |
`self` | Object |
`ckgClient` | [CKGClient](ckgclient.md) |

**Returns:** [ServiceClient](serviceclient.md)

## Accessors

### id

• get **id**(): any

*Defined in [Clients/ServiceClient.ts:18](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/ServiceClient.ts#L18)*

**Returns:** any

___

### name

• get **name**(): any

*Defined in [Clients/ServiceClient.ts:14](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/ServiceClient.ts#L14)*

**Returns:** any

## Methods

### getFunction

▸ **getFunction**(`searchCriteria`: [SearchCriteria](../README.md#searchcriteria)): Promise\<[QFunction](../interfaces/qfunction.md) \| null>

*Defined in [Clients/ServiceClient.ts:22](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/ServiceClient.ts#L22)*

#### Parameters:

Name | Type |
------ | ------ |
`searchCriteria` | [SearchCriteria](../README.md#searchcriteria) |

**Returns:** Promise\<[QFunction](../interfaces/qfunction.md) \| null>

___

### hasFunction

▸ **hasFunction**(`searchCriteria`: unknown): Promise\<boolean>

*Defined in [Clients/ServiceClient.ts:36](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/ServiceClient.ts#L36)*

#### Parameters:

Name | Type |
------ | ------ |
`searchCriteria` | unknown |

**Returns:** Promise\<boolean>
