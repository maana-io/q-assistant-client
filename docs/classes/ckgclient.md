**[Maana Q Assistant API Client](../README.md)**

> [Globals](../README.md) / CKGClient

# Class: CKGClient

## Hierarchy

* **CKGClient**

## Index

### Properties

* [\_api](ckgclient.md#_api)

### Methods

* [executeGraphQL](ckgclient.md#executegraphql)
* [getActiveWorkspace](ckgclient.md#getactiveworkspace)
* [getLambdaClient](ckgclient.md#getlambdaclient)

## Properties

### \_api

•  **\_api**: [AssistantAPIClient](../modules/assistantapiclient.md) = AssistantAPIClient

*Defined in [Clients/CKGClient.ts:9](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/CKGClient.ts#L9)*

## Methods

### executeGraphQL

▸ **executeGraphQL**(`serviceId`: string, `query`: string, `variables?`: Record\<string, any>): Promise\<any>

*Defined in [Clients/CKGClient.ts:136](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/CKGClient.ts#L136)*

#### Parameters:

Name | Type |
------ | ------ |
`serviceId` | string |
`query` | string |
`variables?` | Record\<string, any> |

**Returns:** Promise\<any>

___

### getActiveWorkspace

▸ **getActiveWorkspace**(): Promise\<[WorkspaceClient](workspaceclient.md)>

*Defined in [Clients/CKGClient.ts:11](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/CKGClient.ts#L11)*

**Returns:** Promise\<[WorkspaceClient](workspaceclient.md)>

___

### getLambdaClient

▸ **getLambdaClient**(): Promise\<[LambdaClient](lambdaclient.md)>

*Defined in [Clients/CKGClient.ts:105](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/CKGClient.ts#L105)*

**Returns:** Promise\<[LambdaClient](lambdaclient.md)>
