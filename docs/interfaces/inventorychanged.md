**[Maana Q Assistant API Client](../README.md)**

> [Globals](../README.md) / InventoryChanged

# Interface: InventoryChanged

The information returned from an inventory changed event.

## Hierarchy

* **InventoryChanged**

## Index

### Properties

* [diff](inventorychanged.md#diff)

## Properties

### diff

•  **diff**: { functions: { adds: [Maybe](../README.md#maybe)\<[Function](function.md)[]> ; deletes: [Maybe](../README.md#maybe)\<[Function](function.md)[]> ; updates: [Maybe](../README.md#maybe)\<[Function](function.md)[]>  } ; kinds: { adds: [Maybe](../README.md#maybe)\<[Kind](kind.md)[]> ; deletes: [Maybe](../README.md#maybe)\<[Kind](kind.md)[]> ; updates: [Maybe](../README.md#maybe)\<[Kind](kind.md)[]>  } ; services: { adds: [Maybe](../README.md#maybe)\<[Service](service.md)[]> ; deletes: [Maybe](../README.md#maybe)\<[Service](service.md)[]> ; updates: [Maybe](../README.md#maybe)\<[Service](service.md)[]>  }  }

*Defined in [models.ts:886](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L886)*

#### Type declaration:

Name | Type |
------ | ------ |
`functions` | { adds: [Maybe](../README.md#maybe)\<[Function](function.md)[]> ; deletes: [Maybe](../README.md#maybe)\<[Function](function.md)[]> ; updates: [Maybe](../README.md#maybe)\<[Function](function.md)[]>  } |
`kinds` | { adds: [Maybe](../README.md#maybe)\<[Kind](kind.md)[]> ; deletes: [Maybe](../README.md#maybe)\<[Kind](kind.md)[]> ; updates: [Maybe](../README.md#maybe)\<[Kind](kind.md)[]>  } |
`services` | { adds: [Maybe](../README.md#maybe)\<[Service](service.md)[]> ; deletes: [Maybe](../README.md#maybe)\<[Service](service.md)[]> ; updates: [Maybe](../README.md#maybe)\<[Service](service.md)[]>  } |
