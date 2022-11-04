**[Maana Q Assistant API Client](../README.md)**

> [Globals](../README.md) / UpdateGraphInput

# Interface: UpdateGraphInput

UpdateGraph input - allows for updating the graph (move, zoom, etc) as well add
creating/removing nodes and connections in a single mutation.  Allows for a
partial update of the Graph based on the fields defined in the input.

## Hierarchy

* **UpdateGraphInput**

## Index

### Properties

* [createConnections](updategraphinput.md#createconnections)
* [createNodes](updategraphinput.md#createnodes)
* [deleteConnections](updategraphinput.md#deleteconnections)
* [deleteNodes](updategraphinput.md#deletenodes)
* [offset](updategraphinput.md#offset)
* [updateNodes](updategraphinput.md#updatenodes)
* [zoom](updategraphinput.md#zoom)

## Properties

### createConnections

• `Optional` **createConnections**: [Maybe](../README.md#maybe)\<Array\<[CreateConnectionInput](createconnectioninput.md)>>

*Defined in Clients/AssistantAPIClient/models.ts:808*

___

### createNodes

• `Optional` **createNodes**: [Maybe](../README.md#maybe)\<Array\<[CreateNodeInput](createnodeinput.md)>>

*Defined in Clients/AssistantAPIClient/models.ts:805*

___

### deleteConnections

• `Optional` **deleteConnections**: [Maybe](../README.md#maybe)\<Array\<string>>

*Defined in Clients/AssistantAPIClient/models.ts:809*

___

### deleteNodes

• `Optional` **deleteNodes**: [Maybe](../README.md#maybe)\<Array\<string>>

*Defined in Clients/AssistantAPIClient/models.ts:807*

___

### offset

• `Optional` **offset**: [Maybe](../README.md#maybe)\<[PositionInput](positioninput.md)>

*Defined in Clients/AssistantAPIClient/models.ts:803*

___

### updateNodes

• `Optional` **updateNodes**: [Maybe](../README.md#maybe)\<Array\<[UpdateNodeInput](updatenodeinput.md)>>

*Defined in Clients/AssistantAPIClient/models.ts:806*

___

### zoom

• `Optional` **zoom**: [Maybe](../README.md#maybe)\<number>

*Defined in Clients/AssistantAPIClient/models.ts:804*
