**[Maana Q Assistant API Client](../README.md)**

> [Globals](../README.md) / LambdaClient

# Class: LambdaClient

## Hierarchy

* **LambdaClient**

## Index

### Constructors

* [constructor](lambdaclient.md#constructor)

### Accessors

* [baseUrl](lambdaclient.md#baseurl)
* [id](lambdaclient.md#id)

### Methods

* [createLambda](lambdaclient.md#createlambda)
* [createLambdas](lambdaclient.md#createlambdas)
* [deleteLambda](lambdaclient.md#deletelambda)
* [getLambda](lambdaclient.md#getlambda)
* [getLambdas](lambdaclient.md#getlambdas)
* [getRuntimes](lambdaclient.md#getruntimes)

## Constructors

### constructor

\+ **new LambdaClient**(`serviceId`: string, `baseUrl`: string, `ckgClient`: () => [CKGClient](ckgclient.md)): [LambdaClient](lambdaclient.md)

*Defined in [Clients/LambdaClient.ts:15](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/LambdaClient.ts#L15)*

#### Parameters:

Name | Type |
------ | ------ |
`serviceId` | string |
`baseUrl` | string |
`ckgClient` | () => [CKGClient](ckgclient.md) |

**Returns:** [LambdaClient](lambdaclient.md)

## Accessors

### baseUrl

• get **baseUrl**(): string

*Defined in [Clients/LambdaClient.ts:23](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/LambdaClient.ts#L23)*

**Returns:** string

___

### id

• get **id**(): string

*Defined in [Clients/LambdaClient.ts:27](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/LambdaClient.ts#L27)*

**Returns:** string

## Methods

### createLambda

▸ **createLambda**(`lambda`: [QCreateLambdaInput](../interfaces/qcreatelambdainput.md)): Promise\<any>

*Defined in [Clients/LambdaClient.ts:85](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/LambdaClient.ts#L85)*

#### Parameters:

Name | Type |
------ | ------ |
`lambda` | [QCreateLambdaInput](../interfaces/qcreatelambdainput.md) |

**Returns:** Promise\<any>

___

### createLambdas

▸ **createLambdas**(`lambdas`: any): Promise\<any>

*Defined in [Clients/LambdaClient.ts:107](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/LambdaClient.ts#L107)*

#### Parameters:

Name | Type |
------ | ------ |
`lambdas` | any |

**Returns:** Promise\<any>

___

### deleteLambda

▸ **deleteLambda**(`lambdaId`: string): Promise\<any>

*Defined in [Clients/LambdaClient.ts:126](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/LambdaClient.ts#L126)*

#### Parameters:

Name | Type |
------ | ------ |
`lambdaId` | string |

**Returns:** Promise\<any>

___

### getLambda

▸ **getLambda**(`functionId`: string): Promise\<any>

*Defined in [Clients/LambdaClient.ts:47](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/LambdaClient.ts#L47)*

#### Parameters:

Name | Type |
------ | ------ |
`functionId` | string |

**Returns:** Promise\<any>

___

### getLambdas

▸ **getLambdas**(`serviceId`: string): Promise\<any>

*Defined in [Clients/LambdaClient.ts:31](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/LambdaClient.ts#L31)*

#### Parameters:

Name | Type |
------ | ------ |
`serviceId` | string |

**Returns:** Promise\<any>

___

### getRuntimes

▸ **getRuntimes**(`functionId`: string): Promise\<any>

*Defined in [Clients/LambdaClient.ts:65](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/LambdaClient.ts#L65)*

#### Parameters:

Name | Type |
------ | ------ |
`functionId` | string |

**Returns:** Promise\<any>
