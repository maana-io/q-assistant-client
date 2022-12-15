[Maana Q Assistant API Client](../README.md) / AssistantAPIError

# Interface: AssistantAPIError

The top level error object returned by the Assistant API that wraps and
returns any errors that occurred during a API call. Contains an array of
errors that caused the this error to be returned.

## Table of contents

### Properties

- [cause](AssistantAPIError.md#cause)
- [message](AssistantAPIError.md#message)

## Properties

### cause

• `Optional` **cause**: `ErrorLike`[]

A list of errors like objects that were the cause of this error.

#### Defined in

[models.ts:34](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L34)

___

### message

• **message**: `string`

The top level message for the error.

#### Defined in

[models.ts:31](https://github.com/maana-io/q-assistant-client/blob/develop/src/models.ts#L31)
