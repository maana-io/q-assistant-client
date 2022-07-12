import {
  AddKindInput,
  AddServiceInput,
  AddWorkspaceInput,
  ExecuteFunctionInputType,
  FunctionInput,
  UpdateKindInput,
} from '../schema/input-types';
import { AssistantState, RenderMode } from '../constants';
import { InstanceRef, User } from '../schema/output-types';
import { MakeOptional, Maybe } from '../schema/common';
import { ServiceClient, WorkspaceClient } from './';

import { EventEmitter } from 'events';
import { ID } from '../schema/scalars';
import { KindDetailsFragment } from '../schema';
import postRobot from 'post-robot';

/** Generic event listener; should be more strongly typed if possible */
type EventListenerCallback = (e: any) => Promise<any>;

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
  clearState = (): void => {
    eventEmitter.removeAllListeners();
  };

  //
  // User Info
  //
  getUserInfo = () =>
    APICall<void, Pick<User, 'email' | 'name'>>('getUserInfo');

  //
  // Selection
  //
  addSelectionChangedListener = (cb: EventListenerCallback): void => {
    eventEmitter.addListener('selectionChanged', cb);
  };

  removeSelectionChangedListener = (cb: EventListenerCallback): void => {
    // If the callback is not provided, then remove all of the listeners.
    if (cb) {
      eventEmitter.removeListener('selectionChanged', cb);
    } else {
      eventEmitter.removeAllListeners('selectionChanged');
    }
  };

  getCurrentSelection = () =>
    APICall<void, Pick<InstanceRef, 'id' | 'kindId' | 'kindName'>>(
      'getCurrentSelection'
    );

  //
  // Services
  //
  getServiceById = (id: string): Promise<Maybe<ServiceClient>> =>
    APICall('getServiceById', id);

  createService = (input: AddServiceInput) =>
    APICall<AddServiceInput, ServiceClient>('createService', input);

  /**
   * @param id string value of service ID to refresh
   */
  refreshServiceSchema = (id: string) =>
    APICall<string, void>('refreshServiceSchema', id);

  reloadServiceSchema = (id: string) =>
    APICall<string, void>('reloadServiceSchema', id);

  deleteService = (id: string) => APICall<string, ID>('deleteService', id);

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
  getWorkspace = (id: string) =>
    APICall<string, WorkspaceClient>('getWorkspace', id);

  /**
   * Returns a list of user accessible Workspaces.  By default it will just be
   * the user owned Workspaces, but can be configured to also return all the
   * public workspaces.
   *
   * @param {boolean} includePublic When true the returned list includes public Workspaces.
   * @return {Array<Workspace>} The list of Workspaces.
   */
  getUserAccessibleWorkspaces = (includePublic = false) =>
    APICall<boolean, WorkspaceClient>(
      'getUserAccessibleWorkspaces',
      includePublic
    );

  /**
   * Creates a new Workspace.  The id, name, and serviceId can optionally be
   * set, or they can be left undefined to use the defaults.
   *
   * @param {Object} workspace The Workspace information, can container {id, name, serviceId}
   * @return {Workspace} The new Workspace.
   */
  createWorkspace = (
    workspace: Pick<AddWorkspaceInput, 'name' | 'id' | 'workspaceServiceId'>
  ) =>
    APICall<
      Pick<AddWorkspaceInput, 'name' | 'id' | 'workspaceServiceId'>,
      WorkspaceClient
    >('createWorkspace', workspace);

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
  executeFunction = <O = any>(input: ExecuteFunctionInputType) =>
    APICall<ExecuteFunctionInputType, O>('executeFunction', input);

  // todo
  createFunction = (input: FunctionInput) => APICall('createFunction', input);

  // todo
  updateFunction = (input) => APICall('updateFunction', input);

  // todo
  deleteFunction = (input) => APICall('deleteFunction', input);

  // todo
  getFunctionById = (id) => APICall('getFunctionById', id);

  // todo
  getFunctionsById = (ids) => APICall('getFunctionsById', ids);

  addFunctionExecutionListener = (
    id: string,
    cb: EventListenerCallback
  ): void => {
    eventEmitter.addListener(`function:${id}`, cb);
  };

  removeFunctionExecutionListener = (
    id: string,
    cb: EventListenerCallback
  ): void => {
    // If the callback is not provided, then remove all of the listeners.
    if (cb) {
      eventEmitter.removeListener(`function:${id}`, cb);
    } else {
      eventEmitter.removeAllListeners(`function:${id}`);
    }
  };

  //
  // Kinds
  //
  /**
   * Creates a Kind based on an input object. Returns a promise that resolves to the created Kind object.
   */
  createKind = (input: MakeOptional<AddKindInput, 'serviceId'>) =>
    APICall<MakeOptional<AddKindInput, 'serviceId'>, KindDetailsFragment>(
      'createKind',
      input
    );

  /**
   * Updates a Kind based on an input object.
   *
   * Update Semantics: Only properties specified will be updated. If updating the schema, the entire schema must be
   * specified as it will be replaced in its entirety.
   *
   * Returns a promise that resolves to the updated `Kind` object.
   */
  updateKind = (input: UpdateKindInput) =>
    APICall<UpdateKindInput, KindDetailsFragment>('updateKind', input);

  // todo
  /**
   * Deletes a Kind given a kind ID.
   */
  deleteKind = (id: string) => APICall('deleteKind', id);

  /**
   * Returns a promise that resolves to a Kind object given the specified kind ID.
   */
  getKindById = (id: string) =>
    APICall<string, KindDetailsFragment>('getKindById', id);

  /**
   * Same as `getKindById` but works for multiple Kind IDs provided.
   */
  getKindsById = (ids: string[]) =>
    APICall<string[], KindDetailsFragment[]>('getKindsById', ids);

  /**
   * Recursively collects all kinds that are referenced in a kind's schema, starting with a
   * kind ID. For example if the ID of kind A is supplied as an input, and Kind `A` contains
   * a field of type Kind `B`, and `B` contains a field of type Kind `C`, an array containing
   * the kinds objects for `A`, `B`, `C` will be returned (as a promise).
   */
  getAllReferencedKinds = (input: {
    ids: Array<ID>;
    maxDepth?: Maybe<number>;
    idsToSkip?: Maybe<Array<ID>>;
  }) =>
    APICall<
      {
        ids: Array<ID>;
        maxDepth?: Maybe<number>;
        idsToSkip?: Maybe<Array<ID>>;
      },
      KindDetailsFragment[]
    >('getAllReferencedKinds', input);

  //
  // Inventory
  //
  addInventoryChangedListener = (cb: EventListenerCallback) => {
    eventEmitter.addListener('inventoryChanged', cb);
  };

  removeInventoryChangedListener = (cb: EventListenerCallback) => {
    // If the callback is not provided, then remove all of the listeners.
    if (cb) {
      eventEmitter.removeListener('inventoryChanged', cb);
    } else {
      eventEmitter.removeAllListeners('inventoryChanged');
    }
  };

  /**
   * Moves a collection of Kinds and Functions from the origin Workspace to the
   * target Workspace.
   *
   * @param {string} originId The ID of the origin Workspace.
   * @param {string} targetId The ID of the target Workspace.
   * @param {Array<string>} kindIds An array of the IDs of the kinds to move.
   * @param {Array<string>} functionIds An array of the IDs of the functions to move.
   */
  // todo
  moveKindsAndFunctions = (originId, targetId, kindIds, functionIds) =>
    APICall('moveKindsAndFunctions', {
      originId,
      targetId,
      kindIds,
      functionIds,
    });

  //
  // Graphs
  //
  // todo
  getFunctionGraph = (id) => APICall('getFunctionGraph', id);

  //
  // Render Mode
  //
  addRenderModeChangedListener = (cb: EventListenerCallback): void => {
    eventEmitter.addListener('renderModeChanged', cb);
  };

  removeRenderModeChangedListener = (cb: EventListenerCallback): void => {
    // If the callback is not provided, then remove all of the listeners.
    if (cb) {
      eventEmitter.removeListener('renderModeChanged', cb);
    } else {
      eventEmitter.removeAllListeners('renderModeChanged');
    }
  };

  getRenderMode = () => APICall<void, RenderMode>('getRenderMode');

  //
  // Repair
  //
  addRepairListener = (cb: EventListenerCallback): void => {
    eventEmitter.addListener('repair', cb);
  };

  removeRepairListener = (cb: EventListenerCallback): void => {
    // If the callback is not provided, then remove all of the listeners.
    if (cb) {
      eventEmitter.removeListener('repair', cb);
    } else {
      eventEmitter.removeAllListeners('repair');
    }
  };

  //
  // Errors
  //
  reportError = (error) => APICall<Error, void>('reportError', error);

  //
  // Locking
  //

  /**
   * Adds a callback function to be called every time the locking changed event
   * is triggered.
   *
   * @param {Function} cb The callback function to call
   */
  addLockingChangedListener = (cb): void => {
    eventEmitter.addListener(EventTypes.LOCKING_CHANGED, cb);
  };

  /**
   * Removes a callback function from the list be called every time the locking
   * changed event is triggered.  If no callback is passed in, then all
   * listeners are removed for the locking changed event.
   *
   *
   * @param {Function|undefined} cb The callback function to remove
   */
  removeLockingChangedListener = (cb: EventListenerCallback) => {
    // If the callback is not provided, then remove all of the listeners.
    if (cb) {
      eventEmitter.removeListener(EventTypes.LOCKING_CHANGED, cb);
    } else {
      eventEmitter.removeAllListeners(EventTypes.LOCKING_CHANGED);
    }
  };

  //
  // Undocumented
  //
  getEventEmitter = () => eventEmitter;

  executeGraphql = <I, O>(input) => APICall<I, O>('executeGraphql', input);
}
