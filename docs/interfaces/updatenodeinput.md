**[Maana Q Assistant API Client](../README.md)**

> [Globals](../README.md) / UpdateNodeInput

# Interface: UpdateNodeInput

UpdateNode input - info needed to move position or expand/collapse a node.
Allows for a partial update of the Node based on the fields defined in the
input.

## Hierarchy

* **UpdateNodeInput**

## Index

### Properties

* [description](updatenodeinput.md#description)
* [id](updatenodeinput.md#id)
* [isCollapsed](updatenodeinput.md#iscollapsed)
* [location](updatenodeinput.md#location)
* [type](updatenodeinput.md#type)

## Properties

### description

• `Optional` **description**: [Maybe](../README.md#maybe)\<string>

*Defined in Clients/AssistantAPIClient/models.ts:798*

___

### id

•  **id**: string

*Defined in Clients/AssistantAPIClient/models.ts:795*

___

### isCollapsed

• `Optional` **isCollapsed**: [Maybe](../README.md#maybe)\<string[]>

*Defined in Clients/AssistantAPIClient/models.ts:797*

___

### location

• `Optional` **location**: [Maybe](../README.md#maybe)\<[PositionInput](positioninput.md)>

*Defined in Clients/AssistantAPIClient/models.ts:796*

___

### type

•  **type**: [NodeType](../enums/nodetype.md)

*Defined in Clients/AssistantAPIClient/models.ts:799*
