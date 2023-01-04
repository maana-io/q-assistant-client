[Maana Q Assistant API Client](../README.md) / InventoryChanged

# Interface: InventoryChanged

The information returned from an inventory changed event.

## Table of contents

### Properties

- [diff](InventoryChanged.md#diff)

## Properties

### diff

• **diff**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `functions` | { `adds`: [`Function`](Function.md)[] ; `deletes`: [`Function`](Function.md)[] ; `updates`: [`Function`](Function.md)[]  } |
| `functions.adds` | [`Function`](Function.md)[] |
| `functions.deletes` | [`Function`](Function.md)[] |
| `functions.updates` | [`Function`](Function.md)[] |
| `kinds` | { `adds`: [`Kind`](Kind.md)[] ; `deletes`: [`Kind`](Kind.md)[] ; `updates`: [`Kind`](Kind.md)[]  } |
| `kinds.adds` | [`Kind`](Kind.md)[] |
| `kinds.deletes` | [`Kind`](Kind.md)[] |
| `kinds.updates` | [`Kind`](Kind.md)[] |
| `services` | { `adds`: [`Service`](Service.md)[] ; `deletes`: [`Service`](Service.md)[] ; `updates`: [`Service`](Service.md)[]  } |
| `services.adds` | [`Service`](Service.md)[] |
| `services.deletes` | [`Service`](Service.md)[] |
| `services.updates` | [`Service`](Service.md)[] |

#### Defined in

[models.ts:958](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L958)
