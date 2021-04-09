**[Maana Q Assistant API Client](README.md)**

> Globals

# Maana Q Assistant API Client

## Index

### Namespaces

* [AssistantAPIClient](modules/assistantapiclient.md)

### Enumerations

* [AssistantState](enums/assistantstate.md)
* [EntityType](enums/entitytype.md)
* [FunctionType](enums/functiontype.md)
* [GraphQLFunctionType](enums/graphqlfunctiontype.md)
* [GraphRefInputType](enums/graphrefinputtype.md)
* [ImplementationType](enums/implementationtype.md)
* [NodeType](enums/nodetype.md)
* [RenderMode](enums/rendermode.md)
* [Scalars](enums/scalars.md)
* [ServiceType](enums/servicetype.md)

### Interfaces

* [ArgumentFieldSelection](interfaces/argumentfieldselection.md)
* [ArgumentFieldSelectionInput](interfaces/argumentfieldselectioninput.md)
* [ArgumentRef](interfaces/argumentref.md)
* [Assistant](interfaces/assistant.md)
* [AssistantAPIError](interfaces/assistantapierror.md)
* [CloneEntityInput](interfaces/cloneentityinput.md)
* [Connection](interfaces/connection.md)
* [CreateConnectionInput](interfaces/createconnectioninput.md)
* [CreateEntityInput](interfaces/createentityinput.md)
* [CreateFileInput](interfaces/createfileinput.md)
* [CreateFunctionInput](interfaces/createfunctioninput.md)
* [CreateGraphInput](interfaces/creategraphinput.md)
* [CreateKnowledgeGraphInput](interfaces/createknowledgegraphinput.md)
* [CreateNodeInput](interfaces/createnodeinput.md)
* [CreateServiceInput](interfaces/createserviceinput.md)
* [CreateTypeInput](interfaces/createtypeinput.md)
* [CreateWorkspaceInput](interfaces/createworkspaceinput.md)
* [Entity](interfaces/entity.md)
* [EntityIdentifier](interfaces/entityidentifier.md)
* [EntityLockInput](interfaces/entitylockinput.md)
* [ErrorLike](interfaces/errorlike.md)
* [Function](interfaces/function.md)
* [FunctionResultRef](interfaces/functionresultref.md)
* [Graph](interfaces/graph.md)
* [GraphRefInput](interfaces/graphrefinput.md)
* [IDObject](interfaces/idobject.md)
* [Kind](interfaces/kind.md)
* [KnowledgeGraph](interfaces/knowledgegraph.md)
* [Node](interfaces/node.md)
* [OperationArgumentRef](interfaces/operationargumentref.md)
* [OperationArgumentRefInput](interfaces/operationargumentrefinput.md)
* [OperationResultRef](interfaces/operationresultref.md)
* [OutputArgumentRef](interfaces/outputargumentref.md)
* [OutputArgumentRefInput](interfaces/outputargumentrefinput.md)
* [Position](interfaces/position.md)
* [PositionInput](interfaces/positioninput.md)
* [Selected](interfaces/selected.md)
* [Service](interfaces/service.md)
* [ServiceLocation](interfaces/servicelocation.md)
* [UpdateAssistantInput](interfaces/updateassistantinput.md)
* [UpdateEntityInput](interfaces/updateentityinput.md)
* [UpdateExternalGraphQLServiceInput](interfaces/updateexternalgraphqlserviceinput.md)
* [UpdateFileInput](interfaces/updatefileinput.md)
* [UpdateFunctionInput](interfaces/updatefunctioninput.md)
* [UpdateGraphInput](interfaces/updategraphinput.md)
* [UpdateGraphLayoutInput](interfaces/updategraphlayoutinput.md)
* [UpdateKnowledgeGraphInput](interfaces/updateknowledgegraphinput.md)
* [UpdateNodeInput](interfaces/updatenodeinput.md)
* [UpdateNodeLayoutInput](interfaces/updatenodelayoutinput.md)
* [UpdateTypeInput](interfaces/updatetypeinput.md)
* [UpdateWorkspaceInput](interfaces/updateworkspaceinput.md)
* [User](interfaces/user.md)
* [Workspace](interfaces/workspace.md)

### Type aliases

* [EventListenerCallback](README.md#eventlistenercallback)
* [GraphRef](README.md#graphref)
* [Implementation](README.md#implementation)
* [Maybe](README.md#maybe)
* [TypeExpressionObject](README.md#typeexpressionobject)

### Variables

* [CORE\_SERVICE\_ID](README.md#core_service_id)

## Type aliases

### EventListenerCallback

Ƭ  **EventListenerCallback**: (e: any) => void

*Defined in [AssistantAPIClient.ts:39](https://github.com/maana-io/q-assistant-client/blob/develop/src/AssistantAPIClient.ts#L39)*

___

### GraphRef

Ƭ  **GraphRef**: [ArgumentRef](interfaces/argumentref.md) \| [OperationArgumentRef](interfaces/operationargumentref.md) \| [FunctionResultRef](interfaces/functionresultref.md) \| [OperationResultRef](interfaces/operationresultref.md) \| [OutputArgumentRef](interfaces/outputargumentref.md)

*Defined in [models.ts:109](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L109)*

Info for one end of a connection between two items within the graph.

___

### Implementation

Ƭ  **Implementation**: [Graph](interfaces/graph.md)

*Defined in [models.ts:273](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L273)*

Function implementation union.

___

### Maybe

Ƭ  **Maybe**\<T>: T \| null \| undefined

*Defined in [models.ts:10](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L10)*

#### Type parameters:

Name |
------ |
`T` |

___

### TypeExpressionObject

Ƭ  **TypeExpressionObject**: any

*Defined in [models.ts:13](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L13)*

Represents a JSON object used to express a type expression.

## Variables

### CORE\_SERVICE\_ID

• `Const` **CORE\_SERVICE\_ID**: \"io.maana.core\" = "io.maana.core"

*Defined in [constants.ts:20](https://github.com/maana-io/q-assistant-client/blob/develop/src/constants.ts#L20)*

ID of the io.maana.core service
