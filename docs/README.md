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
- [GraphRef](README.md#graphref)
- [Implementation](README.md#implementation)
- [Maybe](README.md#maybe)

### Variables

- [AssistantAPIClient](README.md#assistantapiclient)
- [CORE\_SERVICE\_ID](README.md#core_service_id)

## References

### default

Renames and re-exports [AssistantAPIClient](README.md#assistantapiclient)

## Type Aliases

### EntityType

Ƭ **EntityType**: ``"ANNOTATION"`` \| ``"FILE"`` \| ``"FUNCTION"`` \| ``"KNOWLEDGE_GRAPH"`` \| ``"SERVICE"`` \| ``"TYPE"`` \| ``"VALUE"`` \| ``"WORKSPACE"`` \| ``"CONNECTION"`` \| ``"FUNCTION_ARGUMENTS"`` \| ``"FUNCTION_OUTPUT"`` \| ``"GRAPH_NODE"`` \| ``"ACTIVITY"``

The different entity types used in entity identifiers, like the ones returned
from selection or used in graph nodes.

#### Defined in

[constants.ts:41](https://github.com/maana-io/q-assistant-client/blob/develop/src/constants.ts#L41)

___

### GraphRef

Ƭ **GraphRef**: [`ArgumentRef`](interfaces/ArgumentRef.md) \| [`OperationArgumentRef`](interfaces/OperationArgumentRef.md) \| [`FunctionResultRef`](interfaces/FunctionResultRef.md) \| [`OperationResultRef`](interfaces/OperationResultRef.md) \| [`OutputArgumentRef`](interfaces/OutputArgumentRef.md)

Info for one end of a connection between two items within the graph.

#### Defined in

[models.ts:118](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L118)

___

### Implementation

Ƭ **Implementation**: [`Graph`](interfaces/Graph.md)

Function implementation union.

#### Defined in

[models.ts:282](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L282)

___

### Maybe

Ƭ **Maybe**<`T`\>: `T` \| ``null`` \| `undefined`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[models.ts:13](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L13)

## Variables

### AssistantAPIClient

• `Const` **AssistantAPIClient**: typeof `AssistantAPIClient` = `APIClient`

#### Defined in

[index.ts:5](https://github.com/maana-io/q-assistant-client/blob/develop/src/index.ts#L5)

___

### CORE\_SERVICE\_ID

• `Const` **CORE\_SERVICE\_ID**: ``"io.maana.core"``

ID of the io.maana.core service

#### Defined in

[constants.ts:20](https://github.com/maana-io/q-assistant-client/blob/develop/src/constants.ts#L20)
