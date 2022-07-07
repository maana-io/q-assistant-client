import {
  AddServiceInput,
  CreateFunctionInGraphInput,
  Service,
  User,
  Workspace,
} from './schema';
import { AssistantState, EntityType } from './constants';

import { EventEmitter } from 'events';
import { InstanceRef } from './schema/outputTypes';
import { Maybe } from './models';
import { ServiceFragment } from './fragments';
import { WorkspaceClient } from './types/workspaceClient';
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

  return (data as unknown) as O;
}

// Wrapper for post-robot listener.
const createAPIListener = async (
  callName: string,
  cb: EventListenerCallback
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
  getServiceById = (id: string): Promise<Maybe<ServiceFragment>> =>
    APICall('getServiceById', id);

  createService = (input: AddServiceInput) =>
    APICall<AddServiceInput, ServiceFragment>('createService', input);

  /**
   * @param id string value of service ID to refresh
   */
  refreshServiceSchema = (id: string) =>
    APICall<void, void>('refreshServiceSchema', id);

  reloadServiceSchema = (id: string) =>
    APICall<void, void>('reloadServiceSchema', id);

  deleteService = (id: string) =>
    APICall<string, ServiceFragment>('deleteService', id);

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
  getWorkspace(id: string): Promise<WorkspaceClient> {
    return APICall('getWorkspace', id);
  }

  /**
   * Returns a list of user accessible Workspaces.  By default it will just be
   * the user owned Workspaces, but can be configured to also return all the
   * public workspaces.
   *
   * @param {boolean} includePublic When true the returned list includes public Workspaces.
   * @return {Array<Workspace>} The list of Workspaces.
   */
  getUserAccessibleWorkspaces(
    includePublic = false
  ): Promise<Array<WorkspaceClient>> {
    return APICall('getUserAccessibleWorkspaces', includePublic);
  }

  /**
   * Creates a new Workspace.  The id, name, and serviceId can optionally be
   * set, or they can be left undefined to use the defaults.
   *
   * @param {Object} workspace The Workspace information, can container {id, name, serviceId}
   * @return {Workspace} The new Workspace.
   */
  createWorkspace(workspace: {
    name: string;
    id?: string;
    serviceId?: string;
  }): Promise<WorkspaceClient> {
    return APICall('createWorkspace', workspace);
  }

  //
  // Functions
  //
  executeFunction = (input: {
    // ID of function to execute
    functionId: string;
    // input variables
    variables?: Record<string, any>;
    // the fields to resolve from the query
    // ? is this comma-separated? needs testing
    resolve: string;
  }) => APICall('executeFunction', input);

  createFunction = (input: CreateFunctionInGraphInput) =>
    APICall('createFunction', input);

  updateFunction = (input) => APICall('updateFunction', input);

  deleteFunction = (input) => APICall('deleteFunction', input);

  getFunctionById = (id) => APICall('getFunctionById', id);

  getFunctionsById = (ids) => APICall('getFunctionsById', ids);

  addFunctionExecutionListener = async (id, cb) => {
    eventEmitter.addListener(`function:${id}`, cb);
  };

  removeFunctionExecutionListener = async (id, cb) => {
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
  createKind = (input) => APICall('createKind', input);

  updateKind = (input) => APICall('updateKind', input);

  deleteKind = (input) => APICall('deleteKind', input);

  getKindById = (id) => APICall('getKindById', id);

  getKindsById = (ids) => APICall('getKindsById', ids);

  getAllReferencedKinds = (input) => APICall('getAllReferencedKinds', input);

  //
  // Inventory
  //
  addInventoryChangedListener = async (cb) => {
    eventEmitter.addListener('inventoryChanged', cb);
  };

  removeInventoryChangedListener = async (cb) => {
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
  moveKindsAndFunctions(originId, targetId, kindIds, functionIds) {
    return APICall('moveKindsAndFunctions', {
      originId,
      targetId,
      kindIds,
      functionIds,
    });
  }

  //
  // Graphs
  //
  getFunctionGraph = (id) => APICall('getFunctionGraph', id);

  //
  // Render Mode
  //
  addRenderModeChangedListener = async (cb) => {
    eventEmitter.addListener('renderModeChanged', cb);
  };

  removeRenderModeChangedListener = async (cb) => {
    // If the callback is not provided, then remove all of the listeners.
    if (cb) {
      eventEmitter.removeListener('renderModeChanged', cb);
    } else {
      eventEmitter.removeAllListeners('renderModeChanged');
    }
  };

  getRenderMode = () => APICall('getRenderMode');

  //
  // Repair
  //
  addRepairListener = async (cb) => {
    eventEmitter.addListener('repair', cb);
  };

  removeRepairListener = async (cb) => {
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
  reportError = (error) => APICall('reportError', error);

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
  removeLockingChangedListener(cb) {
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

  getEventEmitter = () => eventEmitter;

  executeGraphql = (input) => APICall('executeGraphql', input);
}
