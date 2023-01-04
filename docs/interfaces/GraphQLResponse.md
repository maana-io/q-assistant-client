[Maana Q Assistant API Client](../README.md) / GraphQLResponse

# Interface: GraphQLResponse<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Table of contents

### Properties

- [data](GraphQLResponse.md#data)
- [errors](GraphQLResponse.md#errors)
- [extensions](GraphQLResponse.md#extensions)

## Properties

### data

• `Optional` **data**: `Record`<`string`, `T`\>

#### Defined in

[models.ts:58](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L58)

___

### errors

• `Optional` **errors**: [`GraphQLFormattedError`](GraphQLFormattedError.md)<`Record`<`string`, `any`\>\>[]

#### Defined in

[models.ts:59](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L59)

___

### extensions

• `Optional` **extensions**: `Record`<`string`, `unknown`\>

#### Defined in

[models.ts:60](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L60)
