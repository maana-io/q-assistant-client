[Maana Q Assistant API Client](../README.md) / GraphQLFormattedError

# Interface: GraphQLFormattedError<TExtensions\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TExtensions` | extends `Record`<`string`, `any`\> = `Record`<`string`, `any`\> |

## Table of contents

### Properties

- [extensions](GraphQLFormattedError.md#extensions)
- [locations](GraphQLFormattedError.md#locations)
- [message](GraphQLFormattedError.md#message)
- [path](GraphQLFormattedError.md#path)

## Properties

### extensions

• `Optional` `Readonly` **extensions**: `TExtensions`

Reserved for implementors to extend the protocol however they see fit,
and hence there are no additional restrictions on its contents.

#### Defined in

[models.ts:54](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L54)

___

### locations

• `Optional` `Readonly` **locations**: readonly `SourceLocation`[]

If an error can be associated to a particular point in the requested
GraphQL document, it should contain a list of locations.

#### Defined in

[models.ts:42](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L42)

___

### message

• `Readonly` **message**: `string`

A short, human-readable summary of the problem that **SHOULD NOT** change
from occurrence to occurrence of the problem, except for purposes of
localization.

#### Defined in

[models.ts:37](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L37)

___

### path

• `Optional` `Readonly` **path**: readonly (`string` \| `number`)[]

If an error can be associated to a particular field in the GraphQL result,
it _must_ contain an entry with the key `path` that details the path of
the response field which experienced the error. This allows clients to
identify whether a null result is intentional or caused by a runtime error.

#### Defined in

[models.ts:49](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L49)
