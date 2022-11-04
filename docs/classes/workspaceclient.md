**[Maana Q Assistant API Client](../README.md)**

> [Globals](../README.md) / WorkspaceClient

# Class: WorkspaceClient

## Hierarchy

* **WorkspaceClient**

## Index

### Constructors

* [constructor](workspaceclient.md#constructor)

### Accessors

* [id](workspaceclient.md#id)
* [serviceId](workspaceclient.md#serviceid)

### Methods

* [addFunctionToGraph](workspaceclient.md#addfunctiontograph)
* [addServiceToWorkspace](workspaceclient.md#addservicetoworkspace)
* [clearCache](workspaceclient.md#clearcache)
* [clearWorkspaceCache](workspaceclient.md#clearworkspacecache)
* [createFunction](workspaceclient.md#createfunction)
* [createKind](workspaceclient.md#createkind)
* [getFunction](workspaceclient.md#getfunction)
* [getKind](workspaceclient.md#getkind)
* [getService](workspaceclient.md#getservice)
* [getServices](workspaceclient.md#getservices)
* [hasFunction](workspaceclient.md#hasfunction)
* [hasKind](workspaceclient.md#haskind)
* [hasService](workspaceclient.md#hasservice)
* [importService](workspaceclient.md#importservice)
* [refresh](workspaceclient.md#refresh)
* [reloadService](workspaceclient.md#reloadservice)
* [updateFunction](workspaceclient.md#updatefunction)
* [updateFunctions](workspaceclient.md#updatefunctions)

## Constructors

### constructor

\+ **new WorkspaceClient**(`input`: [ILocalWorkspace](../interfaces/ilocalworkspace.md), `ckgClient`: () => [CKGClient](ckgclient.md)): [WorkspaceClient](workspaceclient.md)

*Defined in [Clients/WorkspaceClient.ts:37](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/WorkspaceClient.ts#L37)*

#### Parameters:

Name | Type |
------ | ------ |
`input` | [ILocalWorkspace](../interfaces/ilocalworkspace.md) |
`ckgClient` | () => [CKGClient](ckgclient.md) |

**Returns:** [WorkspaceClient](workspaceclient.md)

## Accessors

### id

• get **id**(): string

*Defined in [Clients/WorkspaceClient.ts:48](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/WorkspaceClient.ts#L48)*

**Returns:** string

___

### serviceId

• get **serviceId**(): string

*Defined in [Clients/WorkspaceClient.ts:44](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/WorkspaceClient.ts#L44)*

**Returns:** string

## Methods

### addFunctionToGraph

▸ **addFunctionToGraph**(`kgFunction`: [UpdateFunctionInput](../interfaces/updatefunctioninput.md), `implementationFunction`: [UpdateFunctionInput](../interfaces/updatefunctioninput.md)): Promise\<void>

*Defined in [Clients/WorkspaceClient.ts:55](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/WorkspaceClient.ts#L55)*

**`deprecated`** Not found to be used by any assistant.

#### Parameters:

Name | Type |
------ | ------ |
`kgFunction` | [UpdateFunctionInput](../interfaces/updatefunctioninput.md) |
`implementationFunction` | [UpdateFunctionInput](../interfaces/updatefunctioninput.md) |

**Returns:** Promise\<void>

___

### addServiceToWorkspace

▸ **addServiceToWorkspace**(`service`: [CreateServiceInput](../interfaces/createserviceinput.md)): Promise\<[CreateServiceInput](../interfaces/createserviceinput.md)>

*Defined in [Clients/WorkspaceClient.ts:97](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/WorkspaceClient.ts#L97)*

#### Parameters:

Name | Type |
------ | ------ |
`service` | [CreateServiceInput](../interfaces/createserviceinput.md) |

**Returns:** Promise\<[CreateServiceInput](../interfaces/createserviceinput.md)>

___

### clearCache

▸ **clearCache**(`serviceId`: string): Promise\<void>

*Defined in [Clients/WorkspaceClient.ts:224](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/WorkspaceClient.ts#L224)*

Clears the workspace cache.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`serviceId` | string | The workspace service id.  |

**Returns:** Promise\<void>

___

### clearWorkspaceCache

▸ **clearWorkspaceCache**(`serviceId`: string): Promise\<void>

*Defined in [Clients/WorkspaceClient.ts:118](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/WorkspaceClient.ts#L118)*

#### Parameters:

Name | Type |
------ | ------ |
`serviceId` | string |

**Returns:** Promise\<void>

___

### createFunction

▸ **createFunction**(`input`: [CreateFunctionInput](../interfaces/createfunctioninput.md)): Promise\<any>

*Defined in [Clients/WorkspaceClient.ts:195](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/WorkspaceClient.ts#L195)*

#### Parameters:

Name | Type |
------ | ------ |
`input` | [CreateFunctionInput](../interfaces/createfunctioninput.md) |

**Returns:** Promise\<any>

___

### createKind

▸ **createKind**(`input`: any): Promise\<any>

*Defined in [Clients/WorkspaceClient.ts:200](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/WorkspaceClient.ts#L200)*

#### Parameters:

Name | Type |
------ | ------ |
`input` | any |

**Returns:** Promise\<any>

___

### getFunction

▸ **getFunction**(`searchCriteria`: [SearchCriteria](../README.md#searchcriteria)): Promise\<null \| [QFunction](../interfaces/qfunction.md)>

*Defined in [Clients/WorkspaceClient.ts:205](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/WorkspaceClient.ts#L205)*

#### Parameters:

Name | Type |
------ | ------ |
`searchCriteria` | [SearchCriteria](../README.md#searchcriteria) |

**Returns:** Promise\<null \| [QFunction](../interfaces/qfunction.md)>

___

### getKind

▸ **getKind**(`searchCriteria`: [SearchCriteria](../README.md#searchcriteria)): Promise\<null \| [QKind](../interfaces/qkind.md)>

*Defined in [Clients/WorkspaceClient.ts:178](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/WorkspaceClient.ts#L178)*

#### Parameters:

Name | Type |
------ | ------ |
`searchCriteria` | [SearchCriteria](../README.md#searchcriteria) |

**Returns:** Promise\<null \| [QKind](../interfaces/qkind.md)>

___

### getService

▸ **getService**(`searchCriteria`: [SearchCriteria](../README.md#searchcriteria)): Promise\<null \| [ServiceClient](serviceclient.md)>

*Defined in [Clients/WorkspaceClient.ts:157](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/WorkspaceClient.ts#L157)*

#### Parameters:

Name | Type |
------ | ------ |
`searchCriteria` | [SearchCriteria](../README.md#searchcriteria) |

**Returns:** Promise\<null \| [ServiceClient](serviceclient.md)>

___

### getServices

▸ **getServices**(): Promise\<[ServiceClient](serviceclient.md)[]>

*Defined in [Clients/WorkspaceClient.ts:191](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/WorkspaceClient.ts#L191)*

**Returns:** Promise\<[ServiceClient](serviceclient.md)[]>

___

### hasFunction

▸ **hasFunction**(`searchCriteria`: [SearchCriteria](../README.md#searchcriteria)): Promise\<boolean>

*Defined in [Clients/WorkspaceClient.ts:130](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/WorkspaceClient.ts#L130)*

#### Parameters:

Name | Type |
------ | ------ |
`searchCriteria` | [SearchCriteria](../README.md#searchcriteria) |

**Returns:** Promise\<boolean>

___

### hasKind

▸ **hasKind**(`searchCriteria`: [SearchCriteria](../README.md#searchcriteria)): Promise\<boolean>

*Defined in [Clients/WorkspaceClient.ts:135](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/WorkspaceClient.ts#L135)*

#### Parameters:

Name | Type |
------ | ------ |
`searchCriteria` | [SearchCriteria](../README.md#searchcriteria) |

**Returns:** Promise\<boolean>

___

### hasService

▸ **hasService**(`searchCriteria`: [SearchCriteria](../README.md#searchcriteria)): Promise\<boolean>

*Defined in [Clients/WorkspaceClient.ts:140](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/WorkspaceClient.ts#L140)*

#### Parameters:

Name | Type |
------ | ------ |
`searchCriteria` | [SearchCriteria](../README.md#searchcriteria) |

**Returns:** Promise\<boolean>

___

### importService

▸ **importService**(`serviceId`: string): Promise\<any>

*Defined in [Clients/WorkspaceClient.ts:173](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/WorkspaceClient.ts#L173)*

#### Parameters:

Name | Type |
------ | ------ |
`serviceId` | string |

**Returns:** Promise\<any>

___

### refresh

▸ **refresh**(): Promise\<void>

*Defined in [Clients/WorkspaceClient.ts:232](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/WorkspaceClient.ts#L232)*

**Returns:** Promise\<void>

___

### reloadService

▸ **reloadService**(`serviceId`: string): Promise\<void>

*Defined in [Clients/WorkspaceClient.ts:111](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/WorkspaceClient.ts#L111)*

#### Parameters:

Name | Type |
------ | ------ |
`serviceId` | string |

**Returns:** Promise\<void>

___

### updateFunction

▸ **updateFunction**(`input`: [UpdateFunctionInput](../interfaces/updatefunctioninput.md)): Promise\<void>

*Defined in [Clients/WorkspaceClient.ts:145](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/WorkspaceClient.ts#L145)*

#### Parameters:

Name | Type |
------ | ------ |
`input` | [UpdateFunctionInput](../interfaces/updatefunctioninput.md) |

**Returns:** Promise\<void>

___

### updateFunctions

▸ **updateFunctions**(`inputs`: [UpdateFunctionInput](../interfaces/updatefunctioninput.md)[]): Promise\<void>

*Defined in [Clients/WorkspaceClient.ts:151](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/WorkspaceClient.ts#L151)*

#### Parameters:

Name | Type |
------ | ------ |
`inputs` | [UpdateFunctionInput](../interfaces/updatefunctioninput.md)[] |

**Returns:** Promise\<void>
