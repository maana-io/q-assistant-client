# q-assistant-client
A lightweight JavaScript client for Maana-Q Assistant developers that wraps post-message communication between an embedded Maana-Q assistant and the Maana-Q UI.

## Usage
This is intented to be used in a web application being leveraged as a Maana Q assistant (embedded as an iframe).
This assistant client will facilitate communication between the assistant the parent frame.
The client provides a rich, asynchronous experience over what would otherwise be 'fire-and-forget'-style messaging 
via post-post message communication. 

## Singleton Instance
The client is exported as a singleton to avoid duplicate registration on event listeners.
You can import the instance like this:

```js
import AssistantAPIClient from 'q-assistant-client';
```

## Interacting with the API
### API Surface Area

### Function Calls
Function calls can be made against the client like any other javascript object. They are all async.
```js
const workspace = await AssistantAPIClient.getWorkspace(); 
console.log("Workspace:", workspace)

const functions = await workspace.getFunctions()
console.log("Functions:", functions)
```

### Event Subscription
Only workspace selection events are currently supported.
Subscriptions are added explictly by registering a callback:
```js
AssistantAPIClient.addSelectionChangedListener((selection)=>{
  console.log('Workspace selection changed:', selection)
})
```

These are removed on a per-callback basis with the 'removeSelectionChangedListener' call. 

## Dependencies
Post-Robot
https://github.com/krakenjs/post-robot

Post-robot is used to provide a richer communication layer atop post-message.

## Examples
@TODO Logan

## API Documentation
@TODO Logan
This will presumably link to Gitbook Maana Q Documentation that explicates the full K Portal API functionality.
