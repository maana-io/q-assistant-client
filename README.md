# q-assistant-client

A lightweight JavaScript client for Maana-Q Assistant developers that wraps
post-message communication between an embedded Maana-Q assistant and the Maana-Q
UI.

You can find the [API Documentation here](./docs/README.md).

## Abstract

The Q-Assistant-Client is intended to be used in a web application being
leveraged as a Maana Q assistant (embedded as an iframe). This assistant client
will facilitate communication between the assistant and the parent frame. The
client provides a rich, asynchronous experience over what would otherwise be
'fire-and-forget'-style messaging via post-post message communication.

## Requirements and Assumptions

### Post-Robot Library

The Maana Knowledge Portal (KPortal) uses the
[kraken/post-robot library](https://github.com/krakenjs/post-robot) to enrich
the communication with the assistant. Post-robot allows for asynchronous,
promise-based request/response style behavior between the assistant and the
assistant API.

The API requires that the client use the post-robot library. This
assistant-client library is the easiest way to achieve this, and also adds a
fair amount of 'sugar' to the process to improve developer productivity.
Developers could, however, use post-robot directly in their own client
implementation.

### Maana-Gateway Proxy Requirements

The Maana-Gateway service requires relative paths (paths relative to the root)
in the assistant web application in order to proxy the application and its
content. For create-react-apps, for instance, this means setting `"homepage"` to
`"."` in the package.json file.

## Singleton Instance

The client is exported as a singleton to avoid duplicate registration on event
listeners. You can import the instance like this:

```js
import { AssistantAPIClient } from '@io-maana/q-assistant-client';
```

Function calls can be made against the client instance like any other javascript
object. They are all async.

```js
const workspace = await AssistantAPIClient.getWorkspace();
console.log("Workspace:", workspace)
```

## Dependencies

Post-Robot
https://github.com/krakenjs/post-robot

Post-robot is used to provide a richer communication layer atop post-message.

## Versioning

The Maana Q Assistant Client does not follow semantic versioning. Its versions
track the releases of the Maana Q platform.

## Changes in v3.3.0

### Improvements

- Full Typescript support with interfaces for all types used.
- More comprehensive documentation.
- Support for the Maana Q 3.3.0 data types.
- More control over updating the Workspaces and other entities.
- A collection of enums and constants for places where the API expects or
returns enumerated information.
- Improved information returned to the Assistant when there is an error in an
API call.

### Deprecation

The following surface area is deprecated and should be updated as described.

- AssistantAPIClient.moveKindsAndFunctions has been deprecated in favor of
calling update on the target Workspace to move the entities.
- AssistantAPIClient.createFunction has been deprecated in favor of calling
createFunction or update on the Workspace it belongs to.
- AssistantAPIClient.updateFunction has been deprecated in favor of calling
update on the Function object or the Workspace it belongs to.
- AssistantAPIClient.deleteFunction has been deprecated in favor of calling
deleteFunction or update on the Workspace it belongs to.
- AssistantAPIClient.getFunctionById has been deprecated in favor of calling
AssistantAPIClient.getFunctionOfServiceByName.
- AssistantAPIClient.getFunctionsById has been deprecated in favor of calling
AssistantAPIClient.getFunctionsOfServiceByName.
- AssistantAPIClient.getFunctionGraph and workspace.getFunctionGraph have been
deprecated in favor of calling workspace.getFunctionsByName.
- AssistantAPIClient.createKind has been deprecated in favor of calling
createKind or update on the Workspace it belongs to.
- AssistantAPIClient.updateKind has been deprecated in favor of calling
update on the Kind object or the Workspace it belongs to.
- AssistantAPIClient.deleteKind has been deprecated in favor of calling
deleteKind or update on the Workspace it belongs to.
- AssistantAPIClient.getKindById has been deprecated in favor of calling
AssistantAPIClient.getKindOfServiceByName.
- AssistantAPIClient.getKindsById has been deprecated in favor of calling
AssistantAPIClient.getKindsOfServiceByName.
- knowledgeGraph.offsetX, knowledgeGraph.offsetY, knowledgeGraph.zoom and
knowledgeGraph.getNodes have been deprecated in favor of getting the information
off of knowledgeGraph.graph.
- knowledgeGraph.addNode and knowledgeGraph.removeNode have been deprecated in
favor of knowledgeGraph.update that gives you much more fine grained control.


## Changes in v3.2.2

### Improvements

- Assistant State Management: WORKING, IDLE
- Background Messaging/Eventing
- Render Modes: BACKGROUND, DISPLAY
- Expansion of Workspace object capabilities
- Error Reporting
- Repair Event
- Plural versions of calls such as updateKind(s) to improve performance and
developer experience.
- InventoryChanged diffing is fully granular in v3.2.2--limitations
in v3.2.1 only fired the Function diff for changes in Function name.

### Deprecation

The following surface area IS removed from the client in v3.2.2, and IS
deprecated in the API:

- AssistantAPIClient.enableSelectionChangedNotification
- AssistantAPIClient.disableSelectionChangedNotification
- AssistantAPIClient.enableInventoryChangedNotification
- AssistantAPIClient.disableInventoryChangedNotification

## API Documentation
More information in the [Docs Folder](./docs/README.md)

### Assistant Render Mode

An assistant's render mode refers to whether it is being displayed in a visible
manner to the user. As of v3.2.2, assistants are not closed when they are out of
view. All assistants will be loaded and kept in `BACKGROUND` render mode until
they are placed in the assistant panel, at which point the `DISPLAY` render mode
event will be fired.

Note: Assistants will receive all notifications/events while in BACKGROUND mode.

Design Consideration: It will be up to the developer to determine how state and
resource use will be managed while an assistant is operating between BACKGROUND
and DISPLAY modes.

### Repair
Assistants may get into situations where they are either out of sync with the
Maana Q UI, or in a failure state. Assistants should be able to recover from
these states.

The repair event functionality added in v3.2.2 is designed to notify the
assistant that it must repair itself. This could mean a resync with its
resources on the workspace or externally or, for some assistants, nothing at
all.

When is repair triggered?
Either manually by a user clicking 'repair workspace' under the assistant
inventory panel, or upon a workspace clone event. An assistant will be expected
to handle either scenario.

Performance Consideration:
For some assistants, repair might involve 'introspecting' and processing the
current workspace or Q system resources. This could be very resource intensive.
Make sure you review this API guide to have an idea of what tools are available
to get the best results. It's always a good idea to check performance of repair
on a large workspace and ensure necessary optimizations have been made.

Design Consideration:
Make your workflows modular enough to be reused between repair and normal usage
if possible.

Recommended Usage: A repair process should be wrapped in the try/catch/finally flow shown in the `setAssistantState` API call to provide the user assistant-state and error updates as well as pause `inventoryChanged` notifications during repair (if the assistant has subscribed).

## Troubleshooting Assistant Issues
### Assistant root file has loaded, but not other content

Observing in the browser's dev tools that some resources have loaded correctly
(usually the root), but other's haven't (usually nested files or chunks), is
indicative of a failure of Q Gateway to proxy due to not having a 'relative'
path structure.

### You are seeing post-robot `NO ACK` errors in the console.

These errors stem from a failed acknowledgement for a call either between the
client and the API or vice-versa. Here, this means that the web app 'window'
(the assistant) cannot communicate with, or access, the 'window.parent'
(Maana K-Portal) object.

Commonly, these will stem from the 'window' (the assistant) not being loaded or
in a loadable state, which means the API will not receive an acknowledgement
when it fires an event.

Improper CORS configuration is also a common culprit (also verify if using
docker or nginx that your proxying and networking is configured correctly to
allow communication and to account for CORS).
