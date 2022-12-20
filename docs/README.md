Maana Q Assistant API Client

# Maana Q Assistant API Client

## Table of contents

### References

- [default](README.md#default)

### Enumerations

- [AssistantState](enums/AssistantState.md)
- [FunctionType](enums/FunctionType.md)
- [GraphQLFunctionType](enums/GraphQLFunctionType.md)
- [GraphRefInputType](enums/GraphRefInputType.md)
- [ImplementationType](enums/ImplementationType.md)
- [MaanaErrorCode](enums/MaanaErrorCode.md)
- [NodeType](enums/NodeType.md)
- [RenderMode](enums/RenderMode.md)
- [Scalars](enums/Scalars.md)
- [ServiceType](enums/ServiceType.md)

### Classes

- [AssistantAPIClient](classes/AssistantAPIClient.md)

### Interfaces

- [Annotation](interfaces/Annotation.md)
- [ArgumentFieldSelection](interfaces/ArgumentFieldSelection.md)
- [ArgumentFieldSelectionInput](interfaces/ArgumentFieldSelectionInput.md)
- [ArgumentRef](interfaces/ArgumentRef.md)
- [Assistant](interfaces/Assistant.md)
- [AssistantAPIError](interfaces/AssistantAPIError.md)
- [CloneEntityInput](interfaces/CloneEntityInput.md)
- [Connection](interfaces/Connection.md)
- [CreateAnnotationInput](interfaces/CreateAnnotationInput.md)
- [CreateConnectionInput](interfaces/CreateConnectionInput.md)
- [CreateEntityInput](interfaces/CreateEntityInput.md)
- [CreateFileInput](interfaces/CreateFileInput.md)
- [CreateFunctionInput](interfaces/CreateFunctionInput.md)
- [CreateGraphInput](interfaces/CreateGraphInput.md)
- [CreateKnowledgeGraphInput](interfaces/CreateKnowledgeGraphInput.md)
- [CreateNodeInput](interfaces/CreateNodeInput.md)
- [CreateServiceInput](interfaces/CreateServiceInput.md)
- [CreateTypeInput](interfaces/CreateTypeInput.md)
- [CreateWorkspaceInput](interfaces/CreateWorkspaceInput.md)
- [Entity](interfaces/Entity.md)
- [EntityIdentifier](interfaces/EntityIdentifier.md)
- [EntityLockInput](interfaces/EntityLockInput.md)
- [Function](interfaces/Function.md)
- [FunctionResultRef](interfaces/FunctionResultRef.md)
- [Graph](interfaces/Graph.md)
- [GraphRefInput](interfaces/GraphRefInput.md)
- [IDObject](interfaces/IDObject.md)
- [InventoryChanged](interfaces/InventoryChanged.md)
- [Kind](interfaces/Kind.md)
- [KnowledgeGraph](interfaces/KnowledgeGraph.md)
- [LockChangedItem](interfaces/LockChangedItem.md)
- [LockingChanged](interfaces/LockingChanged.md)
- [Node](interfaces/Node.md)
- [OperationArgumentRef](interfaces/OperationArgumentRef.md)
- [OperationArgumentRefInput](interfaces/OperationArgumentRefInput.md)
- [OperationResultRef](interfaces/OperationResultRef.md)
- [OutputArgumentRef](interfaces/OutputArgumentRef.md)
- [OutputArgumentRefInput](interfaces/OutputArgumentRefInput.md)
- [Position](interfaces/Position.md)
- [PositionInput](interfaces/PositionInput.md)
- [Selected](interfaces/Selected.md)
- [Service](interfaces/Service.md)
- [ServiceLocation](interfaces/ServiceLocation.md)
- [UpdateAnnotationInput](interfaces/UpdateAnnotationInput.md)
- [UpdateAssistantInput](interfaces/UpdateAssistantInput.md)
- [UpdateEntityInput](interfaces/UpdateEntityInput.md)
- [UpdateExternalGraphQLServiceInput](interfaces/UpdateExternalGraphQLServiceInput.md)
- [UpdateFileInput](interfaces/UpdateFileInput.md)
- [UpdateFunctionInput](interfaces/UpdateFunctionInput.md)
- [UpdateGraphInput](interfaces/UpdateGraphInput.md)
- [UpdateGraphLayoutInput](interfaces/UpdateGraphLayoutInput.md)
- [UpdateKnowledgeGraphInput](interfaces/UpdateKnowledgeGraphInput.md)
- [UpdateNodeInput](interfaces/UpdateNodeInput.md)
- [UpdateNodeLayoutInput](interfaces/UpdateNodeLayoutInput.md)
- [UpdateTypeInput](interfaces/UpdateTypeInput.md)
- [UpdateWorkspaceInput](interfaces/UpdateWorkspaceInput.md)
- [User](interfaces/User.md)
- [Workspace](interfaces/Workspace.md)

### Type Aliases

- [EntityType](README.md#entitytype)
- [FunctionExecutionListenerCallback](README.md#functionexecutionlistenercallback)
- [GraphRef](README.md#graphref)
- [Implementation](README.md#implementation)
- [InventoryChangedListenerCallback](README.md#inventorychangedlistenercallback)
- [LockingChangedListenerCallback](README.md#lockingchangedlistenercallback)
- [Maybe](README.md#maybe)
- [RenderModeChangedListenerCallback](README.md#rendermodechangedlistenercallback)
- [RepairListenerCallback](README.md#repairlistenercallback)
- [SelectionChangedListenerCallback](README.md#selectionchangedlistenercallback)

### Variables

- [CORE\_SERVICE\_ID](README.md#core_service_id)

## References

### default

Renames and re-exports [AssistantAPIClient](classes/AssistantAPIClient.md)

## Type Aliases

### EntityType

Ƭ **EntityType**: ``"ANNOTATION"`` \| ``"FILE"`` \| ``"FUNCTION"`` \| ``"KNOWLEDGE_GRAPH"`` \| ``"SERVICE"`` \| ``"TYPE"`` \| ``"VALUE"`` \| ``"WORKSPACE"`` \| ``"CONNECTION"`` \| ``"FUNCTION_ARGUMENTS"`` \| ``"FUNCTION_OUTPUT"`` \| ``"GRAPH_NODE"`` \| ``"ACTIVITY"``

The different entity types used in entity identifiers, like the ones returned
from selection or used in graph nodes.

**`Note`**

Documentation is missing for EntityType after change to string union

#### Defined in

[constants.ts:43](https://github.com/maana-io/q-assistant-client/blob/develop/src/constants.ts#L43)

___

### FunctionExecutionListenerCallback

Ƭ **FunctionExecutionListenerCallback**: (`e`: { `data?`: `Record`<`string`, `unknown`\> ; `errors?`: `string`[]  }) => `void`

#### Type declaration

▸ (`e`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Object` |
| `e.data?` | `Record`<`string`, `unknown`\> |
| `e.errors?` | `string`[] |

##### Returns

`void`

#### Defined in

[AssistantAPIClient.ts:41](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L41)

___

### GraphRef

Ƭ **GraphRef**: [`ArgumentRef`](interfaces/ArgumentRef.md) \| [`OperationArgumentRef`](interfaces/OperationArgumentRef.md) \| [`FunctionResultRef`](interfaces/FunctionResultRef.md) \| [`OperationResultRef`](interfaces/OperationResultRef.md) \| [`OutputArgumentRef`](interfaces/OutputArgumentRef.md)

Info for one end of a connection between two items within the graph.

#### Defined in

[models.ts:121](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L121)

___

### Implementation

Ƭ **Implementation**: [`Graph`](interfaces/Graph.md)

Function implementation union.

#### Defined in

[models.ts:285](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L285)

___

### InventoryChangedListenerCallback

Ƭ **InventoryChangedListenerCallback**: (`changes`: [`InventoryChanged`](interfaces/InventoryChanged.md)) => `void`

#### Type declaration

▸ (`changes`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `changes` | [`InventoryChanged`](interfaces/InventoryChanged.md) |

##### Returns

`void`

#### Defined in

[AssistantAPIClient.ts:56](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L56)

___

### LockingChangedListenerCallback

Ƭ **LockingChangedListenerCallback**: (`changes`: [`LockingChanged`](interfaces/LockingChanged.md)) => `void`

#### Type declaration

▸ (`changes`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `changes` | [`LockingChanged`](interfaces/LockingChanged.md) |

##### Returns

`void`

#### Defined in

[AssistantAPIClient.ts:50](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L50)

___

### Maybe

Ƭ **Maybe**<`T`\>: `T` \| ``null`` \| `undefined`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[models.ts:13](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L13)

___

### RenderModeChangedListenerCallback

Ƭ **RenderModeChangedListenerCallback**: (`renderMode`: [`RenderMode`](enums/RenderMode.md)) => `void`

#### Type declaration

▸ (`renderMode`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `renderMode` | [`RenderMode`](enums/RenderMode.md) |

##### Returns

`void`

#### Defined in

[AssistantAPIClient.ts:46](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L46)

___

### RepairListenerCallback

Ƭ **RepairListenerCallback**: (`workspaceId`: `string`) => `void`

#### Type declaration

▸ (`workspaceId`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `workspaceId` | `string` |

##### Returns

`void`

#### Defined in

[AssistantAPIClient.ts:60](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L60)

___

### SelectionChangedListenerCallback

Ƭ **SelectionChangedListenerCallback**: (`data`: { `selection`: [`EntityIdentifier`](interfaces/EntityIdentifier.md)[]  }) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.selection` | [`EntityIdentifier`](interfaces/EntityIdentifier.md)[] |

##### Returns

`void`

#### Defined in

[AssistantAPIClient.ts:52](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L52)

## Variables

### CORE\_SERVICE\_ID

• `Const` **CORE\_SERVICE\_ID**: ``"io.maana.core"``

ID of the io.maana.core service

#### Defined in

[constants.ts:20](https://github.com/maana-io/q-assistant-client/blob/develop/src/constants.ts#L20)
