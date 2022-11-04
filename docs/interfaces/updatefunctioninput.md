**[Maana Q Assistant API Client](../README.md)**

> [Globals](../README.md) / UpdateFunctionInput

# Interface: UpdateFunctionInput

UpdateFunction input - info needed to update a Function (not its graph). Allows
for a partial update of the Function based on the fields defined in the input.

## Hierarchy

* **UpdateFunctionInput**

## Index

### Properties

* [description](updatefunctioninput.md#description)
* [graphImplementation](updatefunctioninput.md#graphimplementation)
* [graphqlFunctionType](updatefunctioninput.md#graphqlfunctiontype)
* [id](updatefunctioninput.md#id)
* [implementation](updatefunctioninput.md#implementation)
* [inputMask](updatefunctioninput.md#inputmask)
* [isPure](updatefunctioninput.md#ispure)
* [lock](updatefunctioninput.md#lock)
* [name](updatefunctioninput.md#name)
* [signature](updatefunctioninput.md#signature)

## Properties

### description

• `Optional` **description**: [Maybe](../README.md#maybe)\<string>

*Defined in Clients/AssistantAPIClient/models.ts:837*

___

### graphImplementation

• `Optional` **graphImplementation**: [Maybe](../README.md#maybe)\<[UpdateGraphInput](updategraphinput.md)>

*Defined in Clients/AssistantAPIClient/models.ts:843*

___

### graphqlFunctionType

• `Optional` **graphqlFunctionType**: [Maybe](../README.md#maybe)\<[GraphQLFunctionType](../enums/graphqlfunctiontype.md)>

*Defined in Clients/AssistantAPIClient/models.ts:840*

___

### id

•  **id**: string

*Defined in Clients/AssistantAPIClient/models.ts:835*

___

### implementation

• `Optional` **implementation**: [Maybe](../README.md#maybe)\<[ImplementationType](../enums/implementationtype.md)>

*Defined in Clients/AssistantAPIClient/models.ts:842*

___

### inputMask

• `Optional` **inputMask**: [Maybe](../README.md#maybe)\<Array\<[ArgumentFieldSelectionInput](argumentfieldselectioninput.md)>>

*Defined in Clients/AssistantAPIClient/models.ts:844*

___

### isPure

• `Optional` **isPure**: [Maybe](../README.md#maybe)\<boolean>

*Defined in Clients/AssistantAPIClient/models.ts:839*

___

### lock

• `Optional` **lock**: [Maybe](../README.md#maybe)\<[EntityLockInput](entitylockinput.md)>

*Defined in Clients/AssistantAPIClient/models.ts:841*

___

### name

• `Optional` **name**: [Maybe](../README.md#maybe)\<string>

*Defined in Clients/AssistantAPIClient/models.ts:836*

___

### signature

• `Optional` **signature**: [Maybe](../README.md#maybe)\<[TypeExpressionObject](../README.md#typeexpressionobject)>

*Defined in Clients/AssistantAPIClient/models.ts:838*
