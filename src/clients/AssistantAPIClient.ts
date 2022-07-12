import {
  AddKindInput,
  AddServiceInput,
  AddWorkspaceInput,
  ExecuteFunctionInputType,
  FunctionInput,
  UpdateFunctionInput,
  UpdateKindInput,
} from '../schema/input-types';
import { AssistantState, RenderMode } from '../constants';
import {
  FunctionClient,
  GraphClient,
  ServiceClient,
  WorkspaceClient,
} from './';
import { InstanceRef, User } from '../schema/output-types';
import { MakeOptional, Maybe } from '../schema/common';

import { EventEmitter } from 'events';
import { ID } from '../schema/scalars';
import { KindDetailsFragment } from '../schema';
import { MoveKindsAndFunctionsInput } from '../schema/input-types/MoveKindsAndFunctions';
import postRobot from 'post-robot';

/** Generic event listener; should be more strongly typed if possible */
type EventListenerCallback<T = any> = (e: any) => Promise<T>;

const eventEmitter = new EventEmitter();

// The collection of event types used in the API
const EventTypes = Object.freeze({
  LOCKING_CHANGED: 'lockingChanged',
});

// Wrapper for post-robot async client -> API call.
async function APICall<I, O>(callName: string, arg?: I): Promise<O> {
  const { source, origin, data } = await postRobot.send(
    window.parent,
    callName,
    arg as any
  );

  return data as unknown as O;
}

// pulled and condensed from @types/post-robot
type PostRobotHandlerType<T = any> = (event: {
  source: Window;
  origin: string;
  data: T;
}) => Promise<any>;

// Wrapper for post-robot listener.
const createAPIListener = async (
  callName: string,
  cb: PostRobotHandlerType
) => {
  postRobot.on(callName, cb);
};

/**
 * Class that exposes concrete API calls to the parent API.
 * These calls are made over post-message via post-robot to the parent window.
 */
export class AssistantAPIClient {
  constructor() {
    // Attach selection event emmiter to API listener
    createAPIListener('selectionChanged', async function (event) {
      eventEmitter.emit('selectionChanged', event.data);
    });

    // Attach function execution event emmiter to API listener.
    // Use convention to filter by function ID.
    createAPIListener('functionExecuted', async function (event) {
      eventEmitter.emit(`function:${event.data.id}`, event.data.result);
    });

    // Attach inventory event emitter to API listener.
    createAPIListener('inventoryChanged', async function (event) {
      eventEmitter.emit('inventoryChanged', event.data);
    });

    // Attach render mode event emitter to API listener.
    createAPIListener('renderModeChanged', async function (event) {
      eventEmitter.emit('renderModeChanged', event.data);
    });

    // Attach repair listener.
    createAPIListener('repair', async function (event) {
      eventEmitter.emit('repair', event.data);
    });

    // Attach locking changed listener.
    createAPIListener(EventTypes.LOCKING_CHANGED, async function (event) {
      eventEmitter.emit(EventTypes.LOCKING_CHANGED, event.data);
    });
  }

  //
  // Assistant State
  //

  /**
   * Updates the current state of the Assistant.
   *
   * @param {AssistantState} state The new state of the assistant.
   */
  setAssistantState(state: AssistantState): Promise<void> {
    return APICall('setAssistantState', state);
  }

  //
  // State management
  //
  /**
   * Remove all registered state listeners.
   */
  clearState() {
    eventEmitter.removeAllListeners();
  }

  //
  // User Info
  //
  /**
   * Returns a Userinfo object pertaining to the logged in user.
   */
  getUserInfo() {
    return APICall<void, Pick<User, 'email' | 'name'>>('getUserInfo');
  }

  //
  // Selection
  //
  /**
   * Adds a callback function to be executed upon a valid workspace selection change.

   * Callback value is an array of Selection objects:
   */
  addSelectionChangedListener(cb: EventListenerCallback<Selection[]>) {
    eventEmitter.addListener('selectionChanged', cb);
  }

  /**
   * Remove a single selection-changed callback listener (if provided) or all listeners if none are provided.
   */
  removeSelectionChangedListener(cb: EventListenerCallback<Selection[]>) {
    // If the callback is not provided, then remove all of the listeners.
    if (cb) {
      eventEmitter.removeListener('selectionChanged', cb);
    } else {
      eventEmitter.removeAllListeners('selectionChanged');
    }
  }

  /**
   * Returns the current selection instance ref.
   */
  getCurrentSelection() {
    return APICall<void, Selection>('getCurrentSelection');
  }

  //
  // Services
  //
  /**
   * This will return a service that exists within the scope of the workspace.
   * Assistant services will return null. Services outside the scope of the workspace will cause an error to be returned
   * as: 'Unable to load a Service from outside of the workspace.'
   */
  getServiceById(id: string) {
    return APICall<string, ServiceClient>('getServiceById', id);
  }

  /**
   * Creates a service in Q; returns a ServiceClient ref.
   *
   * Note: This will create the service, but does NOT import it into the workspace.
   * You will need to use `importService` on the Workspace object to import it.
   */
  createService(input: AddServiceInput) {
    return APICall<AddServiceInput, ServiceClient>('createService', input);
  }

  /**
   * Refreshes a service by fetching its schema.
   * This will also reload the service inventory in the currently visible workspace.
   *
   * @param id string value of service ID to refresh
   */
  refreshServiceSchema(id: string) {
    return APICall<string, void>('refreshServiceSchema', id);
  }

  /**
   * Reloads a service in the inventory in the currently visible workspace.
   *
   * @param id string value of service ID to reload
   */
  reloadServiceSchema(id: string) {
    return APICall<string, void>('reloadServiceSchema', id);
  }

  /**
   * Deletes a service from the current workspace (does not delete it in Q).
   * @param id ID of service to delete
   * @returns ID of deleted service
   */
  deleteService(id: string) {
    return APICall<string, ID>('deleteService', id);
  }

  //
  // Workspace
  //

  /**
   * Returns the requested Workspace, if no Workspace ID is specified it returns
   * the Workspace that the user is currently using.
   *
   * @param {string} id The ID of the Workspace to load. (optional)
   * @return {Workspace} The requested Workspace.
   */
  getWorkspace(id?: string) {
    return APICall<string, WorkspaceClient>('getWorkspace', id);
  }

  /**
   * Returns a list of user accessible Workspaces.  By default it will just be
   * the user owned Workspaces, but can be configured to also return all the
   * public workspaces.
   *
   * @param {boolean} includePublic When true the returned list includes public Workspaces.
   * @return {Array<Workspace>} The list of Workspaces.
   */
  getUserAccessibleWorkspaces(includePublic = false) {
    return APICall<boolean, WorkspaceClient>(
      'getUserAccessibleWorkspaces',
      includePublic
    );
  }

  /**
   * Creates a new Workspace.  The id, name, and serviceId can optionally be
   * set, or they can be left undefined to use the defaults.
   *
   * @param {Object} workspace The Workspace information, can container {id, name, serviceId}
   * @return {Workspace} The new Workspace.
   */
  createWorkspace(
    workspace: Pick<AddWorkspaceInput, 'name' | 'id' | 'workspaceServiceId'>
  ) {
    return APICall<
      Pick<AddWorkspaceInput, 'name' | 'id' | 'workspaceServiceId'>,
      WorkspaceClient
    >('createWorkspace', workspace);
  }

  //
  // Functions
  //

  /**
   * Executes a function based on its id, with optional inputs for variables and a resolve string (this specifies the
   * fields to be returned, which must be valid based on the result).
   *
   * Returns : JSON matching shape of result , unless no sub-selection of fields is required in the execution.
   *
   * The following piece of code will execute a Function given a function ID, and pass in variables for `example`,
   * requesting back `id` and `name` fields.
   *
   * ```js
   * const res = await AssistantAPIClient.executeFunction({
   *   functionId: func.id,
   *   variables: {
   *     "variableName": "variableValue"
   *   },
   *   resolve: "{ id name }"
   * });
   * ```
   */
  executeFunction<O = any>(input: ExecuteFunctionInputType) {
    return APICall<ExecuteFunctionInputType, O>('executeFunction', input);
  }

  createFunction(input: FunctionInput) {
    return APICall<FunctionInput, FunctionClient>('createFunction', input);
  }

  updateFunction(input: UpdateFunctionInput) {
    return APICall<UpdateFunctionInput, FunctionClient>(
      'updateFunction',
      input
    );
  }

  deleteFunction(id: string) {
    return APICall<string, undefined>('deleteFunction', id);
  }

  getFunctionById(id: string) {
    return APICall<string, FunctionClient>('getFunctionById', id);
  }

  getFunctionsById(ids: string[]) {
    return APICall<string[], FunctionClient[]>('getFunctionsById', ids);
  }

  addFunctionExecutionListener(id: string, cb: EventListenerCallback) {
    eventEmitter.addListener(`function:${id}`, cb);
  }

  removeFunctionExecutionListener(id: string, cb: EventListenerCallback) {
    // If the callback is not provided, then remove all of the listeners.
    if (cb) {
      eventEmitter.removeListener(`function:${id}`, cb);
    } else {
      eventEmitter.removeAllListeners(`function:${id}`);
    }
  }

  //
  // Kinds
  //
  /**
   * Creates a Kind based on an input object. Returns a promise that resolves to the created Kind object.
   */
  createKind(input: MakeOptional<AddKindInput, 'serviceId'>) {
    return APICall<
      MakeOptional<AddKindInput, 'serviceId'>,
      KindDetailsFragment
    >('createKind', input);
  }

  /**
   * Updates a Kind based on an input object.
   *
   * Update Semantics: Only properties specified will be updated. If updating the schema, the entire schema must be
   * specified as it will be replaced in its entirety.
   *
   * Returns a promise that resolves to the updated `Kind` object.
   */
  updateKind(input: UpdateKindInput) {
    return APICall<UpdateKindInput, KindDetailsFragment>('updateKind', input);
  }

  /**
   * Deletes a Kind given a kind ID.
   */
  deleteKind(id: string) {
    return APICall<string, undefined>('deleteKind', id);
  }

  /**
   * Returns a promise that resolves to a Kind object given the specified kind ID.
   */
  getKindById(id: string) {
    return APICall<string, KindDetailsFragment>('getKindById', id);
  }

  /**
   * Same as `getKindById` but works for multiple Kind IDs provided.
   */
  getKindsById(ids: string[]) {
    return APICall<string[], KindDetailsFragment[]>('getKindsById', ids);
  }

  /**
   * Recursively collects all kinds that are referenced in a kind's schema, starting with a
   * kind ID. For example if the ID of kind A is supplied as an input, and Kind `A` contains
   * a field of type Kind `B`, and `B` contains a field of type Kind `C`, an array containing
   * the kinds objects for `A`, `B`, `C` will be returned (as a promise).
   */
  getAllReferencedKinds(input: {
    ids: Array<ID>;
    maxDepth?: Maybe<number>;
    idsToSkip?: Maybe<Array<ID>>;
  }) {
    return APICall<
      {
        ids: Array<ID>;
        maxDepth?: Maybe<number>;
        idsToSkip?: Maybe<Array<ID>>;
      },
      KindDetailsFragment[]
    >('getAllReferencedKinds', input);
  }

  //
  // Inventory
  //
  addInventoryChangedListener(cb: EventListenerCallback) {
    eventEmitter.addListener('inventoryChanged', cb);
  }

  removeInventoryChangedListener(cb: EventListenerCallback) {
    // If the callback is not provided, then remove all of the listeners.
    if (cb) {
      eventEmitter.removeListener('inventoryChanged', cb);
    } else {
      eventEmitter.removeAllListeners('inventoryChanged');
    }
  }

  /**
   * Moves a collection of Kinds and Functions from the origin Workspace to the
   * target Workspace.
   *
   * @param {string} sourceWorkspaceId The ID of the origin Workspace.
   * @param {string} targetWorkspaceId The ID of the target Workspace.
   * @param {Array<string>} kindIds An array of the IDs of the kinds to move.
   * @param {Array<string>} functionIds An array of the IDs of the functions to move.
   */
  moveKindsAndFunctions(
    sourceWorkspaceId: string,
    targetWorkspaceId: string,
    kindIds: string[],
    functionIds?: string[]
  ) {
    return APICall<MoveKindsAndFunctionsInput, undefined>(
      'moveKindsAndFunctions',
      {
        originId: sourceWorkspaceId,
        targetId: targetWorkspaceId,
        kindIds,
        functionIds,
      }
    );
  }

  //
  // Graphs
  //
  getFunctionGraph(id: string) {
    return APICall<string, GraphClient>('getFunctionGraph', id);
  }

  //
  // Render Mode
  //
  addRenderModeChangedListener(cb: EventListenerCallback) {
    eventEmitter.addListener('renderModeChanged', cb);
  }

  removeRenderModeChangedListener(cb: EventListenerCallback) {
    // If the callback is not provided, then remove all of the listeners.
    if (cb) {
      eventEmitter.removeListener('renderModeChanged', cb);
    } else {
      eventEmitter.removeAllListeners('renderModeChanged');
    }
  }

  getRenderMode() {
    return APICall<void, RenderMode>('getRenderMode');
  }

  //
  // Repair
  //
  addRepairListener(cb: EventListenerCallback) {
    eventEmitter.addListener('repair', cb);
  }

  removeRepairListener(cb: EventListenerCallback) {
    // If the callback is not provided, then remove all of the listeners.
    if (cb) {
      eventEmitter.removeListener('repair', cb);
    } else {
      eventEmitter.removeAllListeners('repair');
    }
  }

  //
  // Errors
  //
  reportError(error) {
    return APICall<Error, void>('reportError', error);
  }

  //
  // Locking
  //

  /**
   * Adds a callback function to be called every time the locking changed event
   * is triggered.
   *
   * @param {Function} cb The callback function to call
   */
  addLockingChangedListener(cb) {
    eventEmitter.addListener(EventTypes.LOCKING_CHANGED, cb);
  }

  /**
   * Removes a callback function from the list be called every time the locking
   * changed event is triggered.  If no callback is passed in, then all
   * listeners are removed for the locking changed event.
   *
   *
   * @param {Function|undefined} cb The callback function to remove
   */
  removeLockingChangedListener(cb: EventListenerCallback) {
    // If the callback is not provided, then remove all of the listeners.
    if (cb) {
      eventEmitter.removeListener(EventTypes.LOCKING_CHANGED, cb);
    } else {
      eventEmitter.removeAllListeners(EventTypes.LOCKING_CHANGED);
    }
  }

  //
  // Undocumented
  //
  getEventEmitter() {
    return eventEmitter;
  }

  executeGraphql<I, O>(input) {
    return APICall<I, O>('executeGraphql', input);
  }
}
