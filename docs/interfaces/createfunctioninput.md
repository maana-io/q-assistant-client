**[Maana Q Assistant API Client](../README.md)**

> [Globals](../README.md) / CreateFunctionInput

# Interface: CreateFunctionInput

CreateFunction input - info needed to create a new Function
CreateFunction input - info needed to create a new Function

## Hierarchy

* **CreateFunctionInput**

## Index

### Properties

* [description](createfunctioninput.md#description)
* [graphImplementation](createfunctioninput.md#graphimplementation)
* [graphqlFunctionType](createfunctioninput.md#graphqlfunctiontype)
* [id](createfunctioninput.md#id)
* [implementation](createfunctioninput.md#implementation)
* [inputMask](createfunctioninput.md#inputmask)
* [isPure](createfunctioninput.md#ispure)
* [name](createfunctioninput.md#name)
* [signature](createfunctioninput.md#signature)

## Properties

### description

• `Optional` **description**: [Maybe](../README.md#maybe)\<string>

*Defined in Clients/AssistantAPIClient/models.ts:755*

___

### graphImplementation

• `Optional` **graphImplementation**: [Maybe](../README.md#maybe)\<[CreateGraphInput](creategraphinput.md)>

*Defined in Clients/AssistantAPIClient/models.ts:760*

___

### graphqlFunctionType

•  **graphqlFunctionType**: [GraphQLFunctionType](../enums/graphqlfunctiontype.md)

*Defined in Clients/AssistantAPIClient/models.ts:758*

___

### id

• `Optional` **id**: [Maybe](../README.md#maybe)\<string>

*Defined in Clients/AssistantAPIClient/models.ts:753*

___

### implementation

•  **implementation**: [ImplementationType](../enums/implementationtype.md)

*Defined in Clients/AssistantAPIClient/models.ts:759*

___

### inputMask

• `Optional` **inputMask**: [Maybe](../README.md#maybe)\<Array\<[ArgumentFieldSelectionInput](argumentfieldselectioninput.md)>>

*Defined in Clients/AssistantAPIClient/models.ts:761*

___

### isPure

• `Optional` **isPure**: [Maybe](../README.md#maybe)\<boolean>

*Defined in Clients/AssistantAPIClient/models.ts:757*

___

### name

•  **name**: string

*Defined in Clients/AssistantAPIClient/models.ts:754*

___

### signature

•  **signature**: [TypeExpressionObject](../README.md#typeexpressionobject)

*Defined in Clients/AssistantAPIClient/models.ts:756*
