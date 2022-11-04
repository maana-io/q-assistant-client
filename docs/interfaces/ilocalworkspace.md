**[Maana Q Assistant API Client](../README.md)**

> [Globals](../README.md) / ILocalWorkspace

# Interface: ILocalWorkspace

## Hierarchy

* **ILocalWorkspace**

## Index

### Properties

* [allKinds](ilocalworkspace.md#allkinds)
* [createFunction](ilocalworkspace.md#createfunction)
* [createKind](ilocalworkspace.md#createkind)
* [currentSelection](ilocalworkspace.md#currentselection)
* [endpointServiceId](ilocalworkspace.md#endpointserviceid)
* [functions](ilocalworkspace.md#functions)
* [getFunctions](ilocalworkspace.md#getfunctions)
* [getKinds](ilocalworkspace.md#getkinds)
* [id](ilocalworkspace.md#id)
* [importService](ilocalworkspace.md#importservice)
* [kinds](ilocalworkspace.md#kinds)
* [knowledgeGraphs](ilocalworkspace.md#knowledgegraphs)
* [services](ilocalworkspace.md#services)
* [updateFunction](ilocalworkspace.md#updatefunction)
* [updateFunctions](ilocalworkspace.md#updatefunctions)

## Properties

### allKinds

•  **allKinds**: any[]

*Defined in [Clients/WorkspaceClient.ts:19](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/WorkspaceClient.ts#L19)*

___

### createFunction

• `Optional` **createFunction**: (input: [CreateFunctionInput](createfunctioninput.md)) => Promise\<any>

*Defined in [Clients/WorkspaceClient.ts:29](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/WorkspaceClient.ts#L29)*

___

### createKind

• `Optional` **createKind**: (input: any) => Promise\<any>

*Defined in [Clients/WorkspaceClient.ts:30](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/WorkspaceClient.ts#L30)*

___

### currentSelection

•  **currentSelection**: any

*Defined in [Clients/WorkspaceClient.ts:24](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/WorkspaceClient.ts#L24)*

___

### endpointServiceId

•  **endpointServiceId**: string

*Defined in [Clients/WorkspaceClient.ts:23](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/WorkspaceClient.ts#L23)*

___

### functions

•  **functions**: any[]

*Defined in [Clients/WorkspaceClient.ts:20](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/WorkspaceClient.ts#L20)*

___

### getFunctions

• `Optional` **getFunctions**: () => Promise\<[FunctionClient](../classes/functionclient.md)[]>

*Defined in [Clients/WorkspaceClient.ts:32](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/WorkspaceClient.ts#L32)*

___

### getKinds

• `Optional` **getKinds**: () => Promise\<[KindClient](../classes/kindclient.md)[]>

*Defined in [Clients/WorkspaceClient.ts:31](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/WorkspaceClient.ts#L31)*

___

### id

•  **id**: string

*Defined in [Clients/WorkspaceClient.ts:18](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/WorkspaceClient.ts#L18)*

___

### importService

• `Optional` **importService**: (id: string) => Promise\<any>

*Defined in [Clients/WorkspaceClient.ts:28](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/WorkspaceClient.ts#L28)*

___

### kinds

•  **kinds**: any[]

*Defined in [Clients/WorkspaceClient.ts:21](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/WorkspaceClient.ts#L21)*

___

### knowledgeGraphs

•  **knowledgeGraphs**: any[]

*Defined in [Clients/WorkspaceClient.ts:25](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/WorkspaceClient.ts#L25)*

___

### services

•  **services**: [ServiceClient](../classes/serviceclient.md)[]

*Defined in [Clients/WorkspaceClient.ts:22](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/WorkspaceClient.ts#L22)*

___

### updateFunction

• `Optional` **updateFunction**: (input: [UpdateFunctionInput](updatefunctioninput.md)) => Promise\<any>

*Defined in [Clients/WorkspaceClient.ts:26](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/WorkspaceClient.ts#L26)*

___

### updateFunctions

• `Optional` **updateFunctions**: (input: [UpdateFunctionInput](updatefunctioninput.md)[]) => Promise\<any>

*Defined in [Clients/WorkspaceClient.ts:27](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/WorkspaceClient.ts#L27)*
