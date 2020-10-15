## Objects

<dl>
<dt><a href="#AssistantAPIClient">AssistantAPIClient</a> : <code>object</code></dt>
<dd></dd>
</dl>

## Constants

<dl>
<dt><a href="#CORE_SERVICE_ID">CORE_SERVICE_ID</a></dt>
<dd><p>ID of the io.maana.core service</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#User">User</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#EntityIdentifier">EntityIdentifier</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#Selected">Selected</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#Kind">Kind</a> : <code>Object</code></dt>
<dd><p>The Kind information from the Assistant API</p>
</dd>
<dt><a href="#Graph">Graph</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#KnowledgeGraph">KnowledgeGraph</a></dt>
<dd></dd>
<dt><a href="#Position">Position</a></dt>
<dd></dd>
<dt><a href="#Implementation">Implementation</a> : <code><a href="#Graph">Graph</a></code></dt>
<dd><p>Function implementation union.</p>
</dd>
<dt><a href="#Function">Function</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ServiceLocation">ServiceLocation</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#Service">Service</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#Assistant">Assistant</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#Workspace">Workspace</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="AssistantAPIClient"></a>

## AssistantAPIClient : <code>object</code>
**Kind**: global namespace  

* [AssistantAPIClient](#AssistantAPIClient) : <code>object</code>
    * [.setAssistantState(state)](#AssistantAPIClient.setAssistantState)
    * [.clearState()](#AssistantAPIClient.clearState)
    * [.getUserInfo()](#AssistantAPIClient.getUserInfo) ⇒ [<code>Promise.&lt;User&gt;</code>](#User)
    * [.addSelectionChangedListener(cb)](#AssistantAPIClient.addSelectionChangedListener)
    * [.removeSelectionChangedListener([cb])](#AssistantAPIClient.removeSelectionChangedListener)
    * [.getCurrentSelection()](#AssistantAPIClient.getCurrentSelection) ⇒ [<code>Promise.&lt;Selected&gt;</code>](#Selected)
    * [.getServiceById(id)](#AssistantAPIClient.getServiceById) ⇒ [<code>Promise.&lt;Service&gt;</code>](#Service)
    * [.createService(input)](#AssistantAPIClient.createService) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.refreshServiceSchema(input)](#AssistantAPIClient.refreshServiceSchema) ⇒ [<code>Promise.&lt;Service&gt;</code>](#Service)
    * [.reloadServiceSchema(id)](#AssistantAPIClient.reloadServiceSchema) ⇒ [<code>Promise.&lt;Service&gt;</code>](#Service)
    * [.deleteService(id)](#AssistantAPIClient.deleteService) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.executeGraphql(input)](#AssistantAPIClient.executeGraphql) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.getWorkspace([id])](#AssistantAPIClient.getWorkspace) ⇒ [<code>Promise.&lt;Workspace&gt;</code>](#Workspace)
    * [.getUserAccessibleWorkspaces([includePublic])](#AssistantAPIClient.getUserAccessibleWorkspaces) ⇒ <code>Promise.&lt;Array.&lt;Workspace&gt;&gt;</code>
    * [.createWorkspace(workspace)](#AssistantAPIClient.createWorkspace) ⇒ [<code>Promise.&lt;Workspace&gt;</code>](#Workspace)
    * [.executeFunction(input)](#AssistantAPIClient.executeFunction) ⇒ <code>Promise.&lt;Object&gt;</code>
    * ~~[.createFunction(input)](#AssistantAPIClient.createFunction) ⇒ <code>Promise.&lt;function()&gt;</code>~~
    * ~~[.updateFunction(input)](#AssistantAPIClient.updateFunction) ⇒ <code>Promise.&lt;function()&gt;</code>~~
    * ~~[.deleteFunction(input)](#AssistantAPIClient.deleteFunction) ⇒ <code>Promise.&lt;Object&gt;</code>~~
    * ~~[.getFunctionById(id)](#AssistantAPIClient.getFunctionById) ⇒ <code>Promise.&lt;function()&gt;</code>~~
    * ~~[.getFunctionsById(ids)](#AssistantAPIClient.getFunctionsById) ⇒ <code>Promise.&lt;Array.&lt;function()&gt;&gt;</code>~~
    * [.getFunctionOfServiceByName(serviceId, name)](#AssistantAPIClient.getFunctionOfServiceByName) ⇒ <code>Promise.&lt;function()&gt;</code>
    * [.getFunctionsOfServiceByName(serviceId, names)](#AssistantAPIClient.getFunctionsOfServiceByName) ⇒ <code>Promise.&lt;Array.&lt;function()&gt;&gt;</code>
    * [.addFunctionExecutionListener(id, cb)](#AssistantAPIClient.addFunctionExecutionListener)
    * [.removeFunctionExecutionListener(id, [cb])](#AssistantAPIClient.removeFunctionExecutionListener)
    * ~~[.createKind(input)](#AssistantAPIClient.createKind) ⇒ [<code>Promise.&lt;Kind&gt;</code>](#Kind)~~
    * ~~[.updateKind(input)](#AssistantAPIClient.updateKind) ⇒ [<code>Promise.&lt;Kind&gt;</code>](#Kind)~~
    * ~~[.deleteKind(input)](#AssistantAPIClient.deleteKind) ⇒ <code>Promise.&lt;Object&gt;</code>~~
    * ~~[.getKindById(id)](#AssistantAPIClient.getKindById) ⇒ [<code>Promise.&lt;Kind&gt;</code>](#Kind)~~
    * ~~[.getKindsById(ids)](#AssistantAPIClient.getKindsById) ⇒ <code>Promise.&lt;Array.&lt;Kind&gt;&gt;</code>~~
    * [.getKindOfServiceByName(serviceId, name)](#AssistantAPIClient.getKindOfServiceByName) ⇒ [<code>Promise.&lt;Kind&gt;</code>](#Kind)
    * [.getKindsOfServiceByName(serviceId, names)](#AssistantAPIClient.getKindsOfServiceByName) ⇒ <code>Promise.&lt;Array.&lt;Kind&gt;&gt;</code>
    * [.getAllReferencedKinds(data)](#AssistantAPIClient.getAllReferencedKinds) ⇒ <code>Promise.&lt;Array.&lt;Kind&gt;&gt;</code>
    * [.addInventoryChangedListener(cb)](#AssistantAPIClient.addInventoryChangedListener)
    * [.removeInventoryChangedListener([cb])](#AssistantAPIClient.removeInventoryChangedListener)
    * ~~[.moveKindsAndFunctions(originId, targetId, kindIds, functionIds)](#AssistantAPIClient.moveKindsAndFunctions)~~
    * ~~[.getFunctionGraph(id)](#AssistantAPIClient.getFunctionGraph) ⇒ <code>Promise.&lt;function()&gt;</code>~~
    * [.addRenderModeChangedListener(cb)](#AssistantAPIClient.addRenderModeChangedListener)
    * [.removeRenderModeChangedListener([cb])](#AssistantAPIClient.removeRenderModeChangedListener)
    * [.getRenderMode()](#AssistantAPIClient.getRenderMode) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.addRepairListener(cb)](#AssistantAPIClient.addRepairListener)
    * [.removeRepairListener([cb])](#AssistantAPIClient.removeRepairListener)
    * [.reportError(error)](#AssistantAPIClient.reportError)
    * [.addLockingChangedListener(cb)](#AssistantAPIClient.addLockingChangedListener)
    * [.removeLockingChangedListener(cb)](#AssistantAPIClient.removeLockingChangedListener)

<a name="AssistantAPIClient.setAssistantState"></a>

### AssistantAPIClient.setAssistantState(state)
Updates the current state of the Assistant.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  

| Param | Type | Description |
| --- | --- | --- |
| state | [<code>AssistantState</code>](#AssistantState) | The new state of the assistant. |

<a name="AssistantAPIClient.clearState"></a>

### AssistantAPIClient.clearState()
Removes all event listeners for all events.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  
<a name="AssistantAPIClient.getUserInfo"></a>

### AssistantAPIClient.getUserInfo() ⇒ [<code>Promise.&lt;User&gt;</code>](#User)
Gets the information about the current user.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  
**Returns**: [<code>Promise.&lt;User&gt;</code>](#User) - The current User.  
<a name="AssistantAPIClient.addSelectionChangedListener"></a>

### AssistantAPIClient.addSelectionChangedListener(cb)
Adds a listener to the selection changed event.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  

| Param | Type | Description |
| --- | --- | --- |
| cb | <code>function</code> | Callback function. |

<a name="AssistantAPIClient.removeSelectionChangedListener"></a>

### AssistantAPIClient.removeSelectionChangedListener([cb])
Removed a listener from the selection changed event, or all of them if no
callback is defined.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  

| Param | Type | Description |
| --- | --- | --- |
| [cb] | <code>function</code> | Callback function. |

<a name="AssistantAPIClient.getCurrentSelection"></a>

### AssistantAPIClient.getCurrentSelection() ⇒ [<code>Promise.&lt;Selected&gt;</code>](#Selected)
Gets the current selection from the UI.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  
**Returns**: [<code>Promise.&lt;Selected&gt;</code>](#Selected) - The list of selected entities.  
<a name="AssistantAPIClient.getServiceById"></a>

### AssistantAPIClient.getServiceById(id) ⇒ [<code>Promise.&lt;Service&gt;</code>](#Service)
Gets a specified service by ID

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  
**Returns**: [<code>Promise.&lt;Service&gt;</code>](#Service) - The requested service.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Service Id |

<a name="AssistantAPIClient.createService"></a>

### AssistantAPIClient.createService(input) ⇒ <code>Promise.&lt;string&gt;</code>
Creates a new Service in the platform.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  
**Returns**: <code>Promise.&lt;string&gt;</code> - ID of the created service.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>Object</code> | The inputs used to create the Service. |

<a name="AssistantAPIClient.refreshServiceSchema"></a>

### AssistantAPIClient.refreshServiceSchema(input) ⇒ [<code>Promise.&lt;Service&gt;</code>](#Service)
Refreshed the service information in the backend.  This is useful for
making sure that the platform is working on the latest schema of an
external service.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  
**Returns**: [<code>Promise.&lt;Service&gt;</code>](#Service) - The refreshed service.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>string</code> | The ID of the service to refresh. |

<a name="AssistantAPIClient.reloadServiceSchema"></a>

### AssistantAPIClient.reloadServiceSchema(id) ⇒ [<code>Promise.&lt;Service&gt;</code>](#Service)
Has the UI reload the information about the service from the backend to
make sure that it has fresh information.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  
**Returns**: [<code>Promise.&lt;Service&gt;</code>](#Service) - The service with fresh information.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The ID of the Service to reload. |

<a name="AssistantAPIClient.deleteService"></a>

### AssistantAPIClient.deleteService(id) ⇒ <code>Promise.&lt;Object&gt;</code>
Deletes the given Service from the platform.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The changes caused by deleting the Service.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The ID of the Service to delete. |

<a name="AssistantAPIClient.executeGraphql"></a>

### AssistantAPIClient.executeGraphql(input) ⇒ <code>Promise.&lt;Object&gt;</code>
Runs an arbitrary GraphQL query against a service in the platform.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The response from the request.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>Object</code> | The data for the execution. |
| input.serviceId | <code>string</code> | The ID of the service to make the call on. |
| input.query | <code>string</code> | The query/mutation to make against the service. |
| input.variables | <code>Object</code> | The variables to go with the query. |

<a name="AssistantAPIClient.getWorkspace"></a>

### AssistantAPIClient.getWorkspace([id]) ⇒ [<code>Promise.&lt;Workspace&gt;</code>](#Workspace)
Returns the requested Workspace, if no Workspace ID is specified it returns
the Workspace that the user is currently using.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  
**Returns**: [<code>Promise.&lt;Workspace&gt;</code>](#Workspace) - The requested Workspace.  

| Param | Type | Description |
| --- | --- | --- |
| [id] | <code>string</code> | The ID of the Workspace to load. |

<a name="AssistantAPIClient.getUserAccessibleWorkspaces"></a>

### AssistantAPIClient.getUserAccessibleWorkspaces([includePublic]) ⇒ <code>Promise.&lt;Array.&lt;Workspace&gt;&gt;</code>
Returns a list of user accessible Workspaces.  By default it will just be
the user owned Workspaces, but can be configured to also return all the
public workspaces.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  
**Returns**: <code>Promise.&lt;Array.&lt;Workspace&gt;&gt;</code> - The list of Workspaces.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [includePublic] | <code>boolean</code> | <code>false</code> | When true the returned list includes public Workspaces. |

<a name="AssistantAPIClient.createWorkspace"></a>

### AssistantAPIClient.createWorkspace(workspace) ⇒ [<code>Promise.&lt;Workspace&gt;</code>](#Workspace)
Creates a new Workspace.  The id, name, and serviceId can optionally be
set, or they can be left undefined to use the defaults.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  
**Returns**: [<code>Promise.&lt;Workspace&gt;</code>](#Workspace) - The new Workspace.  

| Param | Type | Description |
| --- | --- | --- |
| workspace | <code>Object</code> | The Workspace information, can contain {id, name, serviceId} |

<a name="AssistantAPIClient.executeFunction"></a>

### AssistantAPIClient.executeFunction(input) ⇒ <code>Promise.&lt;Object&gt;</code>
Runs a query against a given function with the supplied variables and
resolve string.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The result of executing the function.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>Object</code> | The information to execute. |
| input.entityIdentifier | [<code>EntityIdentifier</code>](#EntityIdentifier) | The reference to the function. |
| input.variables | <code>Object</code> | The variables to go along with the query. |
| input.resolve | <code>string</code> | The fields to resolve in the query. |

<a name="AssistantAPIClient.createFunction"></a>

### ~~AssistantAPIClient.createFunction(input) ⇒ <code>Promise.&lt;function()&gt;</code>~~
***Deprecated***

Creates a new function with the supplied information.  At minimum a name
needs to be supplied.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  
**Returns**: <code>Promise.&lt;function()&gt;</code> - The new function.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>Object</code> | Information to create the function with. |

<a name="AssistantAPIClient.updateFunction"></a>

### ~~AssistantAPIClient.updateFunction(input) ⇒ <code>Promise.&lt;function()&gt;</code>~~
***Deprecated***

Updates a Function in the active workspace with the given information.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  
**Returns**: <code>Promise.&lt;function()&gt;</code> - The updated Function.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>Object</code> | Updates for the function. |

<a name="AssistantAPIClient.deleteFunction"></a>

### ~~AssistantAPIClient.deleteFunction(input) ⇒ <code>Promise.&lt;Object&gt;</code>~~
***Deprecated***

Deletes a function in the active workspace by the given name.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The changes caused by deleting the function.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>string</code> | The name of the function |

<a name="AssistantAPIClient.getFunctionById"></a>

### ~~AssistantAPIClient.getFunctionById(id) ⇒ <code>Promise.&lt;function()&gt;</code>~~
***Deprecated***

Loads a function by ID.  This can only return information about functions
that the UI already has loaded into memory.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  
**Returns**: <code>Promise.&lt;function()&gt;</code> - The requested function.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | the function's ID. |

<a name="AssistantAPIClient.getFunctionsById"></a>

### ~~AssistantAPIClient.getFunctionsById(ids) ⇒ <code>Promise.&lt;Array.&lt;function()&gt;&gt;</code>~~
***Deprecated***

Loads a list of functions by ID.  This can only return information about
functions that the UI already has loaded into memory.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  
**Returns**: <code>Promise.&lt;Array.&lt;function()&gt;&gt;</code> - The list of requested functions.  

| Param | Type | Description |
| --- | --- | --- |
| ids | <code>Array.&lt;string&gt;</code> | List of function IDs. |

<a name="AssistantAPIClient.getFunctionOfServiceByName"></a>

### AssistantAPIClient.getFunctionOfServiceByName(serviceId, name) ⇒ <code>Promise.&lt;function()&gt;</code>
Returns a function with the given name from a specific service.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  
**Returns**: <code>Promise.&lt;function()&gt;</code> - The requested function.  

| Param | Type | Description |
| --- | --- | --- |
| serviceId | <code>string</code> | ID of the service the function lives in. |
| name | <code>string</code> | The name of the function to find. |

<a name="AssistantAPIClient.getFunctionsOfServiceByName"></a>

### AssistantAPIClient.getFunctionsOfServiceByName(serviceId, names) ⇒ <code>Promise.&lt;Array.&lt;function()&gt;&gt;</code>
Returns a list of functions with the given names from a specific service.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  
**Returns**: <code>Promise.&lt;Array.&lt;function()&gt;&gt;</code> - The list of requested functions.  

| Param | Type | Description |
| --- | --- | --- |
| serviceId | <code>string</code> | ID of the service the function lives in. |
| names | <code>Array.&lt;string&gt;</code> | The names of the functions to find. |

<a name="AssistantAPIClient.addFunctionExecutionListener"></a>

### AssistantAPIClient.addFunctionExecutionListener(id, cb)
Adds a callback function to be called with the function has been executed.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | ID of the function. |
| cb | <code>function</code> | The callback function. |

<a name="AssistantAPIClient.removeFunctionExecutionListener"></a>

### AssistantAPIClient.removeFunctionExecutionListener(id, [cb])
Removes one or all callbacks listening for the function to be executed.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | ID of the function. |
| [cb] | <code>function</code> | The callback function, if not supplied all of them are removed. |

<a name="AssistantAPIClient.createKind"></a>

### ~~AssistantAPIClient.createKind(input) ⇒ [<code>Promise.&lt;Kind&gt;</code>](#Kind)~~
***Deprecated***

Creates a new Kind with the supplied information.  At minimum a name needs
to be supplied.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  
**Returns**: [<code>Promise.&lt;Kind&gt;</code>](#Kind) - The new Kind  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>Object</code> | Information to create the Kind with. |

<a name="AssistantAPIClient.updateKind"></a>

### ~~AssistantAPIClient.updateKind(input) ⇒ [<code>Promise.&lt;Kind&gt;</code>](#Kind)~~
***Deprecated***

Updates a Kind in the active workspace with the given information.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  
**Returns**: [<code>Promise.&lt;Kind&gt;</code>](#Kind) - The updated Kind.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>Object</code> | Updates for the Kind. |

<a name="AssistantAPIClient.deleteKind"></a>

### ~~AssistantAPIClient.deleteKind(input) ⇒ <code>Promise.&lt;Object&gt;</code>~~
***Deprecated***

Deletes a Kind in the active workspace by the given name.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The changes caused by deleting the Kind.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>string</code> | The name of the Kind. |

<a name="AssistantAPIClient.getKindById"></a>

### ~~AssistantAPIClient.getKindById(id) ⇒ [<code>Promise.&lt;Kind&gt;</code>](#Kind)~~
***Deprecated***

Loads a Kind by ID.  This can only return information about Kinds that the
UI already has loaded into memory.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  
**Returns**: [<code>Promise.&lt;Kind&gt;</code>](#Kind) - The requested Kind.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The Kind's ID. |

<a name="AssistantAPIClient.getKindsById"></a>

### ~~AssistantAPIClient.getKindsById(ids) ⇒ <code>Promise.&lt;Array.&lt;Kind&gt;&gt;</code>~~
***Deprecated***

Loads a list of Kinds by ID.  This can only return information about Kinds
that the UI already has loaded into memory.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  
**Returns**: <code>Promise.&lt;Array.&lt;Kind&gt;&gt;</code> - The list of requested Kind.  

| Param | Type | Description |
| --- | --- | --- |
| ids | <code>Array.&lt;string&gt;</code> | List of Kind IDs. |

<a name="AssistantAPIClient.getKindOfServiceByName"></a>

### AssistantAPIClient.getKindOfServiceByName(serviceId, name) ⇒ [<code>Promise.&lt;Kind&gt;</code>](#Kind)
Returns a Kind with the given name from a specific service.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  
**Returns**: [<code>Promise.&lt;Kind&gt;</code>](#Kind) - The requested Kind.  

| Param | Type | Description |
| --- | --- | --- |
| serviceId | <code>string</code> | ID of the service the function lives in. |
| name | <code>string</code> | The name of the Kind to find. |

<a name="AssistantAPIClient.getKindsOfServiceByName"></a>

### AssistantAPIClient.getKindsOfServiceByName(serviceId, names) ⇒ <code>Promise.&lt;Array.&lt;Kind&gt;&gt;</code>
Returns a list of Kinds with the given names from a specific service.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  
**Returns**: <code>Promise.&lt;Array.&lt;Kind&gt;&gt;</code> - The list of requested Kinds.  

| Param | Type | Description |
| --- | --- | --- |
| serviceId | <code>string</code> | ID of the service the function lives in. |
| names | <code>Array.&lt;string&gt;</code> | The names of the Kinds to find. |

<a name="AssistantAPIClient.getAllReferencedKinds"></a>

### AssistantAPIClient.getAllReferencedKinds(data) ⇒ <code>Promise.&lt;Array.&lt;Kind&gt;&gt;</code>
Loads up tree of Kinds references by the signature of the Entities passed in.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  
**Returns**: <code>Promise.&lt;Array.&lt;Kind&gt;&gt;</code> - The list of references Kinds.  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | The data passed in for finding the referenced kinds. |
| data.entities | [<code>Array.&lt;EntityIdentifier&gt;</code>](#EntityIdentifier) | The starting entities to check. |
| data.entitiesToSkip | [<code>Array.&lt;EntityIdentifier&gt;</code>](#EntityIdentifier) | The entities to not include. |
| data.maxDepth | <code>number</code> | Maximum traversal depth in the tree. |

<a name="AssistantAPIClient.addInventoryChangedListener"></a>

### AssistantAPIClient.addInventoryChangedListener(cb)
Adds a listener for the inventory changed event.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  

| Param | Type | Description |
| --- | --- | --- |
| cb | <code>function</code> | Callback function. |

<a name="AssistantAPIClient.removeInventoryChangedListener"></a>

### AssistantAPIClient.removeInventoryChangedListener([cb])
Removed a listener from the inventory changed event, or all of them if one
is not specified.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  

| Param | Type | Description |
| --- | --- | --- |
| [cb] | <code>function</code> | Callback function. |

<a name="AssistantAPIClient.moveKindsAndFunctions"></a>

### ~~AssistantAPIClient.moveKindsAndFunctions(originId, targetId, kindIds, functionIds)~~
***Deprecated***

Moves a collection of Kinds and Functions from the origin Workspace to the
target Workspace.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  

| Param | Type | Description |
| --- | --- | --- |
| originId | <code>string</code> | The ID of the origin Workspace. |
| targetId | <code>string</code> | The ID of the target Workspace. |
| kindIds | <code>Array.&lt;string&gt;</code> | An array of the IDs of the kinds to move. |
| functionIds | <code>Array.&lt;string&gt;</code> | An array of the IDs of the functions to move. |

<a name="AssistantAPIClient.getFunctionGraph"></a>

### ~~AssistantAPIClient.getFunctionGraph(id) ⇒ <code>Promise.&lt;function()&gt;</code>~~
***Deprecated***

Loads the function with its graph information attached.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  
**Returns**: <code>Promise.&lt;function()&gt;</code> - The function with the information about its graph.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | ID of the function to load the graph for. |

<a name="AssistantAPIClient.addRenderModeChangedListener"></a>

### AssistantAPIClient.addRenderModeChangedListener(cb)
Adds a listener to the render mode changed event.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  

| Param | Type | Description |
| --- | --- | --- |
| cb | <code>function</code> | Callback function. |

<a name="AssistantAPIClient.removeRenderModeChangedListener"></a>

### AssistantAPIClient.removeRenderModeChangedListener([cb])
Removed a listener from the render mode changed event, or all of them if
one is not specified.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  

| Param | Type | Description |
| --- | --- | --- |
| [cb] | <code>function</code> | Callback function. |

<a name="AssistantAPIClient.getRenderMode"></a>

### AssistantAPIClient.getRenderMode() ⇒ <code>Promise.&lt;string&gt;</code>
Gets the current render mode for the assistant.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  
**Returns**: <code>Promise.&lt;string&gt;</code> - The current render mode.  
<a name="AssistantAPIClient.addRepairListener"></a>

### AssistantAPIClient.addRepairListener(cb)
Adds a listener to the repair changed event.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  

| Param | Type | Description |
| --- | --- | --- |
| cb | <code>function</code> | Callback function. |

<a name="AssistantAPIClient.removeRepairListener"></a>

### AssistantAPIClient.removeRepairListener([cb])
Removed a listener from the repair changed event, or all of them if one is
not specified.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  

| Param | Type | Description |
| --- | --- | --- |
| [cb] | <code>function</code> | Callback function. |

<a name="AssistantAPIClient.reportError"></a>

### AssistantAPIClient.reportError(error)
Reports an error to the UI for the user to be able view it.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>Error</code> \| <code>string</code> | The error object or an error message. |

<a name="AssistantAPIClient.addLockingChangedListener"></a>

### AssistantAPIClient.addLockingChangedListener(cb)
Adds a callback function to be called every time the locking changed event
is triggered.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  

| Param | Type | Description |
| --- | --- | --- |
| cb | <code>function</code> | The callback function to call |

<a name="AssistantAPIClient.removeLockingChangedListener"></a>

### AssistantAPIClient.removeLockingChangedListener(cb)
Removes a callback function from the list be called every time the locking
changed event is triggered.  If no callback is passed in, then all
listeners are removed for the locking changed event.

**Kind**: static method of [<code>AssistantAPIClient</code>](#AssistantAPIClient)  

| Param | Type | Description |
| --- | --- | --- |
| cb | <code>function</code> \| <code>undefined</code> | The callback function to remove |

<a name="AssistantState"></a>

## AssistantState : <code>enum</code>
The different states that the assistant can be in.

**Kind**: global enum  
**Read only**: true  
<a name="Scalars"></a>

## Scalars : <code>enum</code>
Names of the default Scalars

**Kind**: global enum  
**Read only**: true  
<a name="EntityType"></a>

## EntityType : <code>enum</code>
The different entity types used in entity identifiers, like the ones returned
from selection or used in graph nodes.

**Kind**: global enum  
**Read only**: true  
<a name="ServiceType"></a>

## ServiceType : <code>enum</code>
The different types of possible services

**Kind**: global enum  
**Read only**: true  
<a name="CORE_SERVICE_ID"></a>

## CORE\_SERVICE\_ID
ID of the io.maana.core service

**Kind**: global constant  
<a name="User"></a>

## User : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| email | <code>string</code> | The users email address. |
| name | <code>string</code> | The users name. |

<a name="EntityIdentifier"></a>

## EntityIdentifier : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| entityType | <code>string</code> | The type of entity being referenced. |
| id | <code>string</code> | The ID of the entity. Used for all but Types and Functions. |
| name | <code>string</code> | The name of the entity. Used by Types and Functions. |
| serviceId | <code>string</code> | The ID of the service that the entity lives in.  Used by Types and Functions. |

<a name="Selected"></a>

## Selected : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| selection | [<code>Array.&lt;EntityIdentifier&gt;</code>](#EntityIdentifier) | The list of selected entities. |

<a name="Kind"></a>

## Kind : <code>Object</code>
The Kind information from the Assistant API

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The ID of the Kind. |
| name | <code>string</code> | The name of the Kind. |
| [nameDescriptor] | <code>string</code> | Name of where the kind comes from (Service/Workspace). |
| [description] | <code>string</code> | Human readable description of the Kind. |
| signature | <code>Object</code> | The signature of the Kind. |
| service | <code>Object</code> | The service that the Kind comes from. |
| service.id | <code>string</code> | The ID of the service. |
| update | <code>UpdateKind</code> | Updates the kind based on the information passed in. |

<a name="Kind+update"></a>

### kind.update(state) ⇒ <code>Promise</code>
Updates information about the Kind.

**Kind**: instance method of [<code>Kind</code>](#Kind)  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> | Information to update the Kind with. |

<a name="Graph"></a>

## Graph : <code>Object</code>
**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The ID of the Graph |
| offset | [<code>Position</code>](#Position) | The offset of the Graph. |
| zoom | <code>number</code> | The zoom of the Graph. |
| nodes | <code>Array.&lt;Object&gt;</code> | The nodes in the Graph. |
| connections | <code>Array.&lt;Object&gt;</code> | The connections in the Graph. |

<a name="KnowledgeGraph"></a>

## KnowledgeGraph
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The ID of the Knowledge Graph. |
| name | <code>string</code> | The name of the Knowledge Graph. |
| offsetX | <code>number</code> | The X offset of the Knowledge Graph. |
| offsetY | <code>number</code> | The Y offset of the Knowledge Graph. |
| zoom | <code>number</code> | The zoom of the Knowledge Graph. |
| graph | [<code>Graph</code>](#Graph) | The graph information for the Knowledge Graph. |


* [KnowledgeGraph](#KnowledgeGraph)
    * [.canEdit()](#KnowledgeGraph+canEdit) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.lockedBy()](#KnowledgeGraph+lockedBy) ⇒ <code>Promise.&lt;(string\|null)&gt;</code>
    * [.setLocked([isLocked])](#KnowledgeGraph+setLocked) ⇒ <code>Promise</code>
    * [.update(state)](#KnowledgeGraph+update) ⇒ <code>Promise</code>
    * [.getNodes()](#KnowledgeGraph+getNodes) ⇒ [<code>Promise.&lt;KnowledgeGraph&gt;</code>](#KnowledgeGraph)
    * [.addNode(entityIdentifier)](#KnowledgeGraph+addNode) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.removeNode(nodeId)](#KnowledgeGraph+removeNode) ⇒ <code>Promise</code>
    * [.updateNodeLayout(nodeId, updates)](#KnowledgeGraph+updateNodeLayout) ⇒ <code>Promise</code>
    * [.updateGraphLayout(updates)](#KnowledgeGraph+updateGraphLayout) ⇒ <code>Promise</code>

<a name="KnowledgeGraph+canEdit"></a>

### knowledgeGraph.canEdit() ⇒ <code>Promise.&lt;boolean&gt;</code>
Returns boolean stating if the Knowledge Graph is editable.

**Kind**: instance method of [<code>KnowledgeGraph</code>](#KnowledgeGraph)  
<a name="KnowledgeGraph+lockedBy"></a>

### knowledgeGraph.lockedBy() ⇒ <code>Promise.&lt;(string\|null)&gt;</code>
Returns the e-mail of the user who locked the Knowledge Graph.

**Kind**: instance method of [<code>KnowledgeGraph</code>](#KnowledgeGraph)  
<a name="KnowledgeGraph+setLocked"></a>

### knowledgeGraph.setLocked([isLocked]) ⇒ <code>Promise</code>
Updates the locked state of the Knowledge Graph.

**Kind**: instance method of [<code>KnowledgeGraph</code>](#KnowledgeGraph)  

| Param | Type | Description |
| --- | --- | --- |
| [isLocked] | <code>boolean</code> | The new locked state of the Knowledge Graph, if not provided then the locked state is toggled. |

<a name="KnowledgeGraph+update"></a>

### knowledgeGraph.update(state) ⇒ <code>Promise</code>
Updates information about the Knowledge Graph.

**Kind**: instance method of [<code>KnowledgeGraph</code>](#KnowledgeGraph)  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> | Information to update the Knowledge Graph with. |

<a name="KnowledgeGraph+getNodes"></a>

### knowledgeGraph.getNodes() ⇒ [<code>Promise.&lt;KnowledgeGraph&gt;</code>](#KnowledgeGraph)
Returns the list of nodes inside of the Knowledge Graph.

**Kind**: instance method of [<code>KnowledgeGraph</code>](#KnowledgeGraph)  
<a name="KnowledgeGraph+addNode"></a>

### knowledgeGraph.addNode(entityIdentifier) ⇒ <code>Promise.&lt;string&gt;</code>
Adds an entity as a node on the Knowledge Graph.

**Kind**: instance method of [<code>KnowledgeGraph</code>](#KnowledgeGraph)  
**Returns**: <code>Promise.&lt;string&gt;</code> - ID of the node.  

| Param | Type | Description |
| --- | --- | --- |
| entityIdentifier | [<code>EntityIdentifier</code>](#EntityIdentifier) | The reference to the entity to add as a node. |

<a name="KnowledgeGraph+removeNode"></a>

### knowledgeGraph.removeNode(nodeId) ⇒ <code>Promise</code>
Removed a node from the Knowledge Graph.

**Kind**: instance method of [<code>KnowledgeGraph</code>](#KnowledgeGraph)  

| Param | Type | Description |
| --- | --- | --- |
| nodeId | <code>string</code> | The ID of the node to remove from the Knowledge Graph. |

<a name="KnowledgeGraph+updateNodeLayout"></a>

### knowledgeGraph.updateNodeLayout(nodeId, updates) ⇒ <code>Promise</code>
Updates the layout information for a node in the Knowledge Graph.

**Kind**: instance method of [<code>KnowledgeGraph</code>](#KnowledgeGraph)  

| Param | Type | Description |
| --- | --- | --- |
| nodeId | <code>string</code> | The ID of the node to update. |
| updates | <code>Object</code> | The changes to make to the layout. |

<a name="KnowledgeGraph+updateGraphLayout"></a>

### knowledgeGraph.updateGraphLayout(updates) ⇒ <code>Promise</code>
Updates the layout information for the graph of the Knowledge Graph.

**Kind**: instance method of [<code>KnowledgeGraph</code>](#KnowledgeGraph)  

| Param | Type | Description |
| --- | --- | --- |
| updates | <code>Object</code> | The changes to make to the layout. |

<a name="Position"></a>

## Position
**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The X position. |
| y | <code>number</code> | The Y position. |

<a name="Implementation"></a>

## Implementation : [<code>Graph</code>](#Graph)
Function implementation union.

**Kind**: global typedef  
<a name="Function"></a>

## Function : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The ID of the Function. |
| name | <code>string</code> | The name of the Function. |
| [nameDescriptor] | <code>string</code> | Name of where the Function comes from (Service/Workspace). |
| [description] | <code>string</code> | Human readable description of the Function. |
| signature | <code>Object</code> | The signature of the Function. |
| service | <code>Object</code> | The service that the Function comes from. |
| service.id | <code>string</code> | The ID of the service. |
| graphqlFunctionType | <code>string</code> | The GraphQL type for the Function. |
| [isPure] | <code>boolean</code> | States the purity of a Function. |
| [implementation] | [<code>Implementation</code>](#Implementation) | The implementation of the Function. |
| [graph] | [<code>Graph</code>](#Graph) | The graph of the Function. |


* [Function](#Function) : <code>Object</code>
    * [.canEdit()](#Function+canEdit) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.lockedBy()](#Function+lockedBy) ⇒ <code>Promise.&lt;(string\|null)&gt;</code>
    * [.setLocked([isLocked])](#Function+setLocked) ⇒ <code>Promise</code>
    * [.update(state)](#Function+update) ⇒ <code>Promise</code>
    * [.updateNodeLayout(nodeId, updates)](#Function+updateNodeLayout) ⇒ <code>Promise</code>
    * [.updateGraphLayout(updates)](#Function+updateGraphLayout) ⇒ <code>Promise</code>
    * [.execute(variables, resolve)](#Function+execute) ⇒ <code>Promise.&lt;Object&gt;</code>

<a name="Function+canEdit"></a>

### function.canEdit() ⇒ <code>Promise.&lt;boolean&gt;</code>
Returns boolean stating if the Function is editable.

**Kind**: instance method of [<code>Function</code>](#Function)  
<a name="Function+lockedBy"></a>

### function.lockedBy() ⇒ <code>Promise.&lt;(string\|null)&gt;</code>
Returns the e-mail of the user who locked the Function.

**Kind**: instance method of [<code>Function</code>](#Function)  
<a name="Function+setLocked"></a>

### function.setLocked([isLocked]) ⇒ <code>Promise</code>
Updates the locked state of the Function.

**Kind**: instance method of [<code>Function</code>](#Function)  

| Param | Type | Description |
| --- | --- | --- |
| [isLocked] | <code>boolean</code> | The new locked state of the Function, if not provided then the locked state is toggled. |

<a name="Function+update"></a>

### function.update(state) ⇒ <code>Promise</code>
Updates information about the Function.

**Kind**: instance method of [<code>Function</code>](#Function)  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> | Information to update the Function with. |

<a name="Function+updateNodeLayout"></a>

### function.updateNodeLayout(nodeId, updates) ⇒ <code>Promise</code>
Updates the layout information for a node in the Function.

**Kind**: instance method of [<code>Function</code>](#Function)  

| Param | Type | Description |
| --- | --- | --- |
| nodeId | <code>string</code> | The ID of the node to update. |
| updates | <code>Object</code> | The changes to make to the layout. |

<a name="Function+updateGraphLayout"></a>

### function.updateGraphLayout(updates) ⇒ <code>Promise</code>
Updates the layout information for the graph of the Function.

**Kind**: instance method of [<code>Function</code>](#Function)  

| Param | Type | Description |
| --- | --- | --- |
| updates | <code>Object</code> | The changes to make to the layout. |

<a name="Function+execute"></a>

### function.execute(variables, resolve) ⇒ <code>Promise.&lt;Object&gt;</code>
Executes a GraphQL request against the Function.

**Kind**: instance method of [<code>Function</code>](#Function)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The results of running the Function.  

| Param | Type | Description |
| --- | --- | --- |
| variables | <code>Object</code> | The variables to send with the request. |
| resolve | <code>string</code> | A string with the fields to resolve on the Function. |

<a name="ServiceLocation"></a>

## ServiceLocation : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL that the locator references. |

<a name="Service"></a>

## Service : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The ID of the Service. |
| name | <code>string</code> | The name of the Service. |
| [description] | <code>string</code> | Human readable description of the Service. |
| location | [<code>ServiceLocation</code>](#ServiceLocation) | The location that the service can be reached at. |
| version | <code>number</code> | The current version of the Service.  This is incremented by catalog each time the service is updated. |


* [Service](#Service) : <code>Object</code>
    * [.getKinds()](#Service+getKinds) ⇒ <code>Promise.&lt;Array.&lt;Kind&gt;&gt;</code>
    * [.getFunctions()](#Service+getFunctions) ⇒ <code>Promise.&lt;Array.&lt;function()&gt;&gt;</code>
    * [.update(changes)](#Service+update) ⇒ <code>Promise</code>

<a name="Service+getKinds"></a>

### service.getKinds() ⇒ <code>Promise.&lt;Array.&lt;Kind&gt;&gt;</code>
Retrieves the list of Kinds that are part of the Service.

**Kind**: instance method of [<code>Service</code>](#Service)  
**Returns**: <code>Promise.&lt;Array.&lt;Kind&gt;&gt;</code> - The list of Kinds in the Service.  
<a name="Service+getFunctions"></a>

### service.getFunctions() ⇒ <code>Promise.&lt;Array.&lt;function()&gt;&gt;</code>
Retrieves the list of Function that are part of the Service.

**Kind**: instance method of [<code>Service</code>](#Service)  
**Returns**: <code>Promise.&lt;Array.&lt;function()&gt;&gt;</code> - The list of Functions in the Service.  
<a name="Service+update"></a>

### service.update(changes) ⇒ <code>Promise</code>
Updates information about the Service.

**Kind**: instance method of [<code>Service</code>](#Service)  

| Param | Type | Description |
| --- | --- | --- |
| changes | <code>Object</code> | Information to update the Service with. |

<a name="Assistant"></a>

## Assistant : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The ID of the Assistant. |
| name | <code>string</code> | The name of the Assistant. |
| [description] | <code>string</code> | Human readable description of the Assistant. |
| location | [<code>ServiceLocation</code>](#ServiceLocation) | The location that the Assistant can be reached at. |
| version | <code>number</code> | The current version of the Assistant.  This is incremented by catalog each time the Assistant is updated. |

<a name="Assistant+update"></a>

### assistant.update(changes) ⇒ <code>Promise</code>
Updates information about the Assistant.

**Kind**: instance method of [<code>Assistant</code>](#Assistant)  

| Param | Type | Description |
| --- | --- | --- |
| changes | <code>Object</code> | Information to update the Assistant with. |

<a name="Workspace"></a>

## Workspace : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The ID of the Workspace. |
| name | <code>string</code> | The name of the Workspace. |
| [description] | <code>string</code> | Human readable description of the Service. |
| location | [<code>ServiceLocation</code>](#ServiceLocation) | The location information about the Workspace. |
| thumbnailUrl | <code>string</code> | the URL to the URL of the thumbnail pic. |
| serviceId | <code>string</code> | The ID of the logic service backing the Workspace. |
| isPublic | <code>boolean</code> | When true others can see this Workspace. |
| isTemplate | <code>boolean</code> | When true it shows up as a template Workspace. |
| tags | <code>Array.&lt;string&gt;</code> | The list of tags for the Workspace. |
| owner | <code>Object</code> | The user that owns the Workspace. |
| owner.id | <code>string</code> | The ID of the user. |
| owner.name | <code>string</code> | The name of the user. |


* [Workspace](#Workspace) : <code>Object</code>
    * [.canEdit()](#Workspace+canEdit) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.lockedBy()](#Workspace+lockedBy) ⇒ <code>Promise.&lt;(string\|null)&gt;</code>
    * [.setLocked([isLocked])](#Workspace+setLocked) ⇒ <code>Promise</code>
    * [.update(state)](#Workspace+update) ⇒ <code>Promise</code>
    * [.triggerRepairEvent()](#Workspace+triggerRepairEvent) ⇒ <code>Promise</code>
    * [.getActiveGraph()](#Workspace+getActiveGraph) ⇒ <code>Promise.&lt;(KnowledgeGraph\|function())&gt;</code>
    * [.getKnowledgeGraphs()](#Workspace+getKnowledgeGraphs) ⇒ <code>Promise.&lt;Array.&lt;KnowledgeGraph&gt;&gt;</code>
    * [.createKnowledgeGraph(input)](#Workspace+createKnowledgeGraph) ⇒ <code>Promise</code>
    * [.createKnowledgeGraphs(input)](#Workspace+createKnowledgeGraphs) ⇒ <code>Promise</code>
    * [.getImportedServices()](#Workspace+getImportedServices) ⇒ <code>Promise.&lt;Array.&lt;Service&gt;&gt;</code>
    * [.getImportedAssistants()](#Workspace+getImportedAssistants) ⇒ <code>Promise.&lt;Array.&lt;Assistant&gt;&gt;</code>
    * [.importService(serviceId)](#Workspace+importService) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.importServices(serviceIds)](#Workspace+importServices) ⇒ <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>
    * [.removeService(serviceId)](#Workspace+removeService) ⇒ <code>Promise</code>
    * [.removeServices(serviceIds)](#Workspace+removeServices) ⇒ <code>Promise</code>
    * [.getFunctions()](#Workspace+getFunctions) ⇒ <code>Promise.&lt;Array.&lt;function()&gt;&gt;</code>
    * [.getFunctionsByName(names)](#Workspace+getFunctionsByName) ⇒ <code>Promise.&lt;Array.&lt;function()&gt;&gt;</code>
    * [.createFunction(input)](#Workspace+createFunction) ⇒ <code>Promise.&lt;function()&gt;</code>
    * [.createFunctions(input)](#Workspace+createFunctions) ⇒ <code>Promise.&lt;Array.&lt;function()&gt;&gt;</code>
    * [.updateFunction(changes)](#Workspace+updateFunction) ⇒ <code>Promise</code>
    * [.updateFunctions(changes)](#Workspace+updateFunctions) ⇒ <code>Promise</code>
    * [.deleteFunction(name)](#Workspace+deleteFunction) ⇒ <code>Promise</code>
    * ~~[.getFunctionGraph(id)](#Workspace+getFunctionGraph) ⇒ <code>Promise.&lt;function()&gt;</code>~~
    * [.getKinds()](#Workspace+getKinds) ⇒ <code>Promise.&lt;Array.&lt;Kind&gt;&gt;</code>
    * [.getKindsByName(names)](#Workspace+getKindsByName) ⇒ <code>Promise.&lt;Array.&lt;Kind&gt;&gt;</code>
    * [.createKind(input)](#Workspace+createKind) ⇒ [<code>Promise.&lt;Kind&gt;</code>](#Kind)
    * [.createKinds(input)](#Workspace+createKinds) ⇒ <code>Promise.&lt;Array.&lt;Kind&gt;&gt;</code>
    * [.updateKind(changes)](#Workspace+updateKind) ⇒ <code>Promise</code>
    * [.updateKinds(changes)](#Workspace+updateKinds) ⇒ <code>Promise</code>
    * [.deleteKind(name)](#Workspace+deleteKind) ⇒ <code>Promise</code>

<a name="Workspace+canEdit"></a>

### workspace.canEdit() ⇒ <code>Promise.&lt;boolean&gt;</code>
Returns boolean stating if the Workspace is editable.

**Kind**: instance method of [<code>Workspace</code>](#Workspace)  
<a name="Workspace+lockedBy"></a>

### workspace.lockedBy() ⇒ <code>Promise.&lt;(string\|null)&gt;</code>
Returns the e-mail of the user who locked the Workspace.

**Kind**: instance method of [<code>Workspace</code>](#Workspace)  
<a name="Workspace+setLocked"></a>

### workspace.setLocked([isLocked]) ⇒ <code>Promise</code>
Updates the locked state of the Workspace.

**Kind**: instance method of [<code>Workspace</code>](#Workspace)  

| Param | Type | Description |
| --- | --- | --- |
| [isLocked] | <code>boolean</code> | The new locked state of the Workspace, if not provided then the locked state is toggled. |

<a name="Workspace+update"></a>

### workspace.update(state) ⇒ <code>Promise</code>
Updates information about the Workspace.

**Kind**: instance method of [<code>Workspace</code>](#Workspace)  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> | Information to update the Workspace with. |

<a name="Workspace+triggerRepairEvent"></a>

### workspace.triggerRepairEvent() ⇒ <code>Promise</code>
Sends a repair event to all assistants.

**Kind**: instance method of [<code>Workspace</code>](#Workspace)  
<a name="Workspace+getActiveGraph"></a>

### workspace.getActiveGraph() ⇒ <code>Promise.&lt;(KnowledgeGraph\|function())&gt;</code>
Gets the currently active graph.

**Kind**: instance method of [<code>Workspace</code>](#Workspace)  
<a name="Workspace+getKnowledgeGraphs"></a>

### workspace.getKnowledgeGraphs() ⇒ <code>Promise.&lt;Array.&lt;KnowledgeGraph&gt;&gt;</code>
Gets all of the Knowledge Graphs in the Workspace.

**Kind**: instance method of [<code>Workspace</code>](#Workspace)  
<a name="Workspace+createKnowledgeGraph"></a>

### workspace.createKnowledgeGraph(input) ⇒ <code>Promise</code>
Creates a new Knowledge Graph in the Workspace.

**Kind**: instance method of [<code>Workspace</code>](#Workspace)  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>Object</code> | Information about the new Knowledge Graph. |

<a name="Workspace+createKnowledgeGraphs"></a>

### workspace.createKnowledgeGraphs(input) ⇒ <code>Promise</code>
Creates a list of new Knowledge Graphs in the Workspace.

**Kind**: instance method of [<code>Workspace</code>](#Workspace)  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>Array.&lt;Object&gt;</code> | Information about the new Knowledge Graphs. |

<a name="Workspace+getImportedServices"></a>

### workspace.getImportedServices() ⇒ <code>Promise.&lt;Array.&lt;Service&gt;&gt;</code>
Gets all of the Services imported into the Workspaces inventory.

**Kind**: instance method of [<code>Workspace</code>](#Workspace)  
<a name="Workspace+getImportedAssistants"></a>

### workspace.getImportedAssistants() ⇒ <code>Promise.&lt;Array.&lt;Assistant&gt;&gt;</code>
Gets all of the Assistants imported into the Workspaces inventory.

**Kind**: instance method of [<code>Workspace</code>](#Workspace)  
<a name="Workspace+importService"></a>

### workspace.importService(serviceId) ⇒ <code>Promise.&lt;string&gt;</code>
Imports a Service or Assistant into the Workspaces inventory.

**Kind**: instance method of [<code>Workspace</code>](#Workspace)  
**Returns**: <code>Promise.&lt;string&gt;</code> - ID of imported Service or Assistant.  

| Param | Type | Description |
| --- | --- | --- |
| serviceId | <code>string</code> | Service or Assistant ID. |

<a name="Workspace+importServices"></a>

### workspace.importServices(serviceIds) ⇒ <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>
Imports a list of Services and/or Assistants into the Workspaces inventory.

**Kind**: instance method of [<code>Workspace</code>](#Workspace)  
**Returns**: <code>Promise.&lt;Array.&lt;string&gt;&gt;</code> - IDs of imported Services and/or Assistants.  

| Param | Type | Description |
| --- | --- | --- |
| serviceIds | <code>Array.&lt;string&gt;</code> | Service and/or Assistant IDs. |

<a name="Workspace+removeService"></a>

### workspace.removeService(serviceId) ⇒ <code>Promise</code>
Removes a Service or Assistant from the Workspaces inventory.

**Kind**: instance method of [<code>Workspace</code>](#Workspace)  

| Param | Type | Description |
| --- | --- | --- |
| serviceId | <code>string</code> | Service or Assistant ID. |

<a name="Workspace+removeServices"></a>

### workspace.removeServices(serviceIds) ⇒ <code>Promise</code>
Removes a list Services and/or Assistants from the Workspaces inventory.

**Kind**: instance method of [<code>Workspace</code>](#Workspace)  

| Param | Type | Description |
| --- | --- | --- |
| serviceIds | <code>Array.&lt;string&gt;</code> | Service and/or Assistant IDs. |

<a name="Workspace+getFunctions"></a>

### workspace.getFunctions() ⇒ <code>Promise.&lt;Array.&lt;function()&gt;&gt;</code>
Gets the list of Functions that live in the Workspace.

**Kind**: instance method of [<code>Workspace</code>](#Workspace)  
<a name="Workspace+getFunctionsByName"></a>

### workspace.getFunctionsByName(names) ⇒ <code>Promise.&lt;Array.&lt;function()&gt;&gt;</code>
Gets a list of Functions that live in the Workspace based on their names.

**Kind**: instance method of [<code>Workspace</code>](#Workspace)  

| Param | Type | Description |
| --- | --- | --- |
| names | <code>Array.&lt;string&gt;</code> | The name of the Functions to return. |

<a name="Workspace+createFunction"></a>

### workspace.createFunction(input) ⇒ <code>Promise.&lt;function()&gt;</code>
Creates a new Function in the Workspace.

**Kind**: instance method of [<code>Workspace</code>](#Workspace)  

| Param | Type |
| --- | --- |
| input | <code>Object</code> | 

<a name="Workspace+createFunctions"></a>

### workspace.createFunctions(input) ⇒ <code>Promise.&lt;Array.&lt;function()&gt;&gt;</code>
Creates a list of new Functions in the Workspace.

**Kind**: instance method of [<code>Workspace</code>](#Workspace)  

| Param | Type |
| --- | --- |
| input | <code>Array.&lt;Object&gt;</code> | 

<a name="Workspace+updateFunction"></a>

### workspace.updateFunction(changes) ⇒ <code>Promise</code>
Updates a Function in the Workspace.

**Kind**: instance method of [<code>Workspace</code>](#Workspace)  

| Param | Type |
| --- | --- |
| changes | <code>Object</code> | 

<a name="Workspace+updateFunctions"></a>

### workspace.updateFunctions(changes) ⇒ <code>Promise</code>
Updates a list of Function in the Workspace.

**Kind**: instance method of [<code>Workspace</code>](#Workspace)  

| Param | Type |
| --- | --- |
| changes | <code>Array.&lt;Object&gt;</code> | 

<a name="Workspace+deleteFunction"></a>

### workspace.deleteFunction(name) ⇒ <code>Promise</code>
Deletes a function in the Workspace.

**Kind**: instance method of [<code>Workspace</code>](#Workspace)  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 

<a name="Workspace+getFunctionGraph"></a>

### ~~workspace.getFunctionGraph(id) ⇒ <code>Promise.&lt;function()&gt;</code>~~
***Deprecated***

Gets the Function based on ID with its implementation and graph information.

**Kind**: instance method of [<code>Workspace</code>](#Workspace)  

| Param | Type |
| --- | --- |
| id | <code>string</code> | 

<a name="Workspace+getKinds"></a>

### workspace.getKinds() ⇒ <code>Promise.&lt;Array.&lt;Kind&gt;&gt;</code>
Gets the list of Kinds that live in the Workspace.

**Kind**: instance method of [<code>Workspace</code>](#Workspace)  
<a name="Workspace+getKindsByName"></a>

### workspace.getKindsByName(names) ⇒ <code>Promise.&lt;Array.&lt;Kind&gt;&gt;</code>
Gets a list of Kinds that live in the Workspace based on their names.

**Kind**: instance method of [<code>Workspace</code>](#Workspace)  

| Param | Type |
| --- | --- |
| names | <code>Array.&lt;string&gt;</code> | 

<a name="Workspace+createKind"></a>

### workspace.createKind(input) ⇒ [<code>Promise.&lt;Kind&gt;</code>](#Kind)
Creates a new Kind in the Workspace.

**Kind**: instance method of [<code>Workspace</code>](#Workspace)  

| Param | Type |
| --- | --- |
| input | <code>Object</code> | 

<a name="Workspace+createKinds"></a>

### workspace.createKinds(input) ⇒ <code>Promise.&lt;Array.&lt;Kind&gt;&gt;</code>
Creates a list of Kinds in the Workspace.

**Kind**: instance method of [<code>Workspace</code>](#Workspace)  

| Param | Type |
| --- | --- |
| input | <code>Array.&lt;Object&gt;</code> | 

<a name="Workspace+updateKind"></a>

### workspace.updateKind(changes) ⇒ <code>Promise</code>
Updates a Kind in the Workspace.

**Kind**: instance method of [<code>Workspace</code>](#Workspace)  

| Param | Type |
| --- | --- |
| changes | <code>Object</code> | 

<a name="Workspace+updateKinds"></a>

### workspace.updateKinds(changes) ⇒ <code>Promise</code>
Updates a list of Kinds in the Workspace.

**Kind**: instance method of [<code>Workspace</code>](#Workspace)  

| Param | Type |
| --- | --- |
| changes | <code>Array.&lt;Object&gt;</code> | 

<a name="Workspace+deleteKind"></a>

### workspace.deleteKind(name) ⇒ <code>Promise</code>
Deletes a Kind in the Workspace.

**Kind**: instance method of [<code>Workspace</code>](#Workspace)  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 

