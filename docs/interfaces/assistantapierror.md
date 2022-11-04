**[Maana Q Assistant API Client](../README.md)**

> [Globals](../README.md) / AssistantAPIError

# Interface: AssistantAPIError

The top level error object returned by the Assistant API that wraps and
returns any errors that occurred during a API call. Contains an array of
errors that caused the this error to be returned.

## Hierarchy

* **AssistantAPIError**

## Index

### Properties

* [cause](assistantapierror.md#cause)
* [message](assistantapierror.md#message)

## Properties

### cause

• `Optional` **cause**: [Maybe](../README.md#maybe)\<[ErrorLike](errorlike.md)[]>

*Defined in Clients/AssistantAPIClient/models.ts:33*

A list of errors like objects that were the cause of this error.

___

### message

•  **message**: string

*Defined in Clients/AssistantAPIClient/models.ts:30*

The top level message for the error.
