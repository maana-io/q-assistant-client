**[Maana Q Assistant API Client](README.md)**

> Globals

# Maana Q Assistant API Client

## Index

### Namespaces

* [AssistantAPIClient](modules/assistantapiclient.md)

### Enumerations

* [AssistantState](enums/assistantstate.md)
* [EntityType](enums/entitytype.md)
* [Scalars](enums/scalars.md)
* [ServiceType](enums/servicetype.md)

### Interfaces

* [Assistant](interfaces/assistant.md)
* [Entity](interfaces/entity.md)
* [EntityIdentifier](interfaces/entityidentifier.md)
* [Function](interfaces/function.md)
* [Graph](interfaces/graph.md)
* [IDObject](interfaces/idobject.md)
* [Kind](interfaces/kind.md)
* [KnowledgeGraph](interfaces/knowledgegraph.md)
* [Position](interfaces/position.md)
* [Selected](interfaces/selected.md)
* [Service](interfaces/service.md)
* [ServiceLocation](interfaces/servicelocation.md)
* [User](interfaces/user.md)
* [Workspace](interfaces/workspace.md)

### Type aliases

* [EventListenerCallback](README.md#eventlistenercallback)
* [Implementation](README.md#implementation)
* [Maybe](README.md#maybe)

### Variables

* [CORE\_SERVICE\_ID](README.md#core_service_id)

## Type aliases

### EventListenerCallback

Ƭ  **EventListenerCallback**: (e: any) => void

*Defined in [AssistantAPIClient.ts:33](https://github.com/maana-io/q-assistant-client/blob/2fdcb17/src/AssistantAPIClient.ts#L33)*

___

### Implementation

Ƭ  **Implementation**: [Graph](interfaces/graph.md)

*Defined in [models.ts:168](https://github.com/maana-io/q-assistant-client/blob/2fdcb17/src/models.ts#L168)*

Function implementation union.

___

### Maybe

Ƭ  **Maybe**\<T>: T \| null \| undefined

*Defined in [models.ts:1](https://github.com/maana-io/q-assistant-client/blob/2fdcb17/src/models.ts#L1)*

#### Type parameters:

Name |
------ |
`T` |

## Variables

### CORE\_SERVICE\_ID

• `Const` **CORE\_SERVICE\_ID**: \"io.maana.core\" = "io.maana.core"

*Defined in [constants.ts:12](https://github.com/maana-io/q-assistant-client/blob/2fdcb17/src/constants.ts#L12)*

ID of the io.maana.core service
