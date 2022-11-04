import { v4 as uuid } from 'uuid';
import { SearchCriteria, CKGClient, ServiceClient } from '.';
import {
  CreateServiceInput,
  UpdateFunctionInput
} from './AssistantAPIClient/models';
import {
  QFunction,
  QUpdateFunctionInput,
  CreateFunctionInput,
  QKind
} from '../types';
import { AssistantAPIClient } from './AssistantAPIClient/AssistantAPIClient';
import { KindClient } from './KindClient';
import { FunctionClient } from './FunctionClient';

export interface ILocalWorkspace {
  id: string;
  allKinds: any[];
  functions: any[];
  kinds: any[];
  services: ServiceClient[];
  endpointServiceId: string;
  currentSelection: any;
  knowledgeGraphs: any[];
  updateFunction?: (input: UpdateFunctionInput) => Promise<any>;
  updateFunctions?: (input: UpdateFunctionInput[]) => Promise<any>;
  importService?: (id: string) => Promise<any>;
  createFunction?: (input: CreateFunctionInput) => Promise<any>;
  createKind?: (input: any) => Promise<any>;
  getKinds?: () => Promise<KindClient[]>;
  getFunctions?: () => Promise<FunctionClient[]>;
}

export class WorkspaceClient {
  private _self: ILocalWorkspace;
  private _client: CKGClient;

  constructor(input: ILocalWorkspace, ckgClient: () => CKGClient) {
    this._self = input;
    this._client = ckgClient();
  }

  get serviceId(): string {
    return this._self.endpointServiceId;
  }

  get id(): string {
    return this._self.id;
  }

  /**
   * @deprecated Not found to be used by any assistant.
   */
  async addFunctionToGraph(
    kgFunction: UpdateFunctionInput,
    implementationFunction: UpdateFunctionInput
  ) {
    // ! no idea where this came from or where the types are from - Eric
    // ! Darrell made this but apparently nothing uses it? - Eric
    // if (!implementationFunction.arguments) {
    //   throw new Error('implementationFunction.arguments must be defined');
    // }
    // if (!kgFunction || !kgFunction.arguments) {
    //   throw new Error('kgFunction.arguments must be defined');
    // }
    // const operationId = uuid();
    // const argumentValues = implementationFunction.arguments.map(
    //   (argument, key) => {
    //     return {
    //       argument: argument.id,
    //       operation: null,
    //       // @ts-ignore
    //       argumentRef: kgFunction.arguments[key].id
    //     };
    //   }
    // );
    // const updatedFunction: UpdateFunctionInput = {
    //   id: kgFunction.id,
    //   name: kgFunction.name,
    //   implementation: {
    //     entrypoint: operationId,
    //     operations: [
    //       {
    //         id: operationId,
    //         function: implementationFunction.id,
    //         type: 'APPLY',
    //         argumentValues
    //       }
    //     ]
    //   }
    // };
    // const node = await this._self.updateFunction(updatedFunction);
    // return node;
  }

  async addServiceToWorkspace(service: CreateServiceInput) {
    try {
      const createdService = await AssistantAPIClient.createService(service);
      console.log('CREATED SERVICE', createdService);
    } catch (e) {
      console.log('didnt create service', e);
    }

    await this._self.importService(service.id);
    const updatedWorkspace = await AssistantAPIClient.getWorkspace();
    console.log(updatedWorkspace);
    return service;
  }

  async reloadService(serviceId: string): Promise<void> {
    console.log('RELOADING');
    await AssistantAPIClient.refreshServiceSchema(serviceId);
    await AssistantAPIClient.reloadServiceSchema(serviceId);
    console.log('RELOADING done');
  }

  async clearWorkspaceCache(serviceId: string) {
    try {
      await AssistantAPIClient.executeGraphql({
        serviceId,
        query: 'mutation { clearCache } ',
        variables: {}
      });
    } catch (e) {
      console.error('Failed clearing cache', e);
    }
  }

  async hasFunction(searchCriteria: SearchCriteria): Promise<boolean> {
    const found = await this.getFunction(searchCriteria);
    return found != null;
  }

  async hasKind(searchCriteria: SearchCriteria): Promise<boolean> {
    const found = await this.getKind(searchCriteria);
    return found != null;
  }

  async hasService(searchCriteria: SearchCriteria): Promise<boolean> {
    const found = await this.getService(searchCriteria);
    return found != null;
  }

  async updateFunction(input: UpdateFunctionInput): Promise<void> {
    if (this._self.updateFunction)
      return await this._self.updateFunction(input);
    return;
  }

  async updateFunctions(inputs: UpdateFunctionInput[]): Promise<void> {
    if (this._self.updateFunctions)
      return await this._self.updateFunctions(inputs);
    return;
  }

  async getService(
    searchCriteria: SearchCriteria
  ): Promise<null | ServiceClient> {
    const throwErr = (reason: string) => {
      throw new Error(`Can't find service. ${reason}`);
    };
    const nonNulls = [Object.values(searchCriteria)].filter((x) => x != null);
    if (nonNulls.length < 1) throwErr('No search criteria provided');
    if (nonNulls.length > 1) throwErr('Too many search criteria provided');
    const found = this._self.services?.find(
      (func) =>
        func.id === searchCriteria.id || func.name === searchCriteria.name
    );
    return found ?? null;
  }

  async importService(serviceId: string): Promise<any> {
    if (this._self.importService) return this._self.importService(serviceId);
    return;
  }

  async getKind(searchCriteria: SearchCriteria): Promise<null | QKind> {
    const throwErr = (reason: string) => {
      throw new Error(`Can't find kind. ${reason}`);
    };
    const nonNulls = [Object.values(searchCriteria)].filter((x) => x != null);
    if (nonNulls.length < 1) throwErr('No search criteria provided');
    if (nonNulls.length > 1) throwErr('Too many search criteria provided');
    const found = this._self.kinds?.find(
      (k) => k.id === searchCriteria.id || k.name === searchCriteria.name
    );
    return found;
  }

  async getServices(): Promise<ServiceClient[]> {
    return this._self.services.map((x) => new ServiceClient(x, this._client));
  }

  async createFunction(input: CreateFunctionInput): Promise<any> {
    if (this._self.createFunction) return this._self.createFunction(input);
    return;
  }

  async createKind(input: any): Promise<any> {
    if (this._self.createKind) return this._self.createKind(input);
    return;
  }

  async getFunction(searchCriteria: SearchCriteria): Promise<null | QFunction> {
    const throwErr = (reason: string) => {
      throw new Error(`Can't find function. ${reason}`);
    };
    const nonNulls = [Object.values(searchCriteria)].filter((x) => x != null);
    if (nonNulls.length < 1) throwErr('No search criteria provided');
    if (nonNulls.length > 1) throwErr('Too many search criteria provided');
    const found = this._self.functions?.find(
      (func) =>
        func.id === searchCriteria.id || func.name === searchCriteria.name
    );
    return found;
  }

  /**
   * Clears the workspace cache.
   *
   * @param {string} serviceId The workspace service id.
   */
  clearCache = async (serviceId: string) => {
    await this._client.executeGraphQL(
      this.serviceId,
      'mutation { clearCache } ',
      {}
    );
  };

  async refresh(): Promise<void> {
    this._self = await AssistantAPIClient.getWorkspace();
  }
}
