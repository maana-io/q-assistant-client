**[Maana Q Assistant API Client](../README.md)**

> [Globals](../README.md) / EntityInterface

# Interface: EntityInterface

Entity interface - used to represent entities in a generic way. Used for places
where something needs to handle multiple different types, like the nodes on a
graph.

## Hierarchy

* **EntityInterface**

## Index

### Properties

* [description](entityinterface.md#description)
* [id](entityinterface.md#id)
* [name](entityinterface.md#name)
* [nameDescriptor](entityinterface.md#namedescriptor)

## Properties

### description

• `Optional` **description**: [Maybe](../README.md#maybe)\<Scalars[\"String\"]>

*Defined in types/all-types.ts:589*

Human readable description of the entity.

___

### id

•  **id**: Scalars[\"ID\"]

*Defined in types/all-types.ts:580*

ID of the entity.

___

### name

•  **name**: Scalars[\"String\"]

*Defined in types/all-types.ts:582*

Name of the entity.

___

### nameDescriptor

• `Optional` **nameDescriptor**: [Maybe](../README.md#maybe)\<Scalars[\"String\"]>

*Defined in types/all-types.ts:587*

Descriptor to help give context to the name. Usually, this is the name of the
entity's native workspace or service. This is inferred and not editable.
