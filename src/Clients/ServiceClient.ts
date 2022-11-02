import { SearchCriteria } from '.';
import { QFunction } from '../types';
import { CKGClient } from './CKGClient';

export class ServiceClient {
  private _self: any;
  private _ckgClient: CKGClient;

  constructor(self: Object, ckgClient: CKGClient) {
    this._self = self;
    this._ckgClient = ckgClient;
  }

  get name() {
    return this._self.name;
  }

  get id() {
    return this._self.id;
  }

  async getFunction(searchCriteria: SearchCriteria): Promise<QFunction | null> {
    const throwErr = reason => {
      throw new Error(`Can't find function. ${reason}`);
    };
    const nonNulls = [Object.values(searchCriteria)].filter(x => x != null);
    if (nonNulls.length < 1) throwErr('No search criteria provided');
    if (nonNulls.length > 1) throwErr('Too many search criteria provided');
    const found = this._self.functions?.find(
      func =>
        func.id === searchCriteria.id || func.name === searchCriteria.name,
    );
    return found;
  }

  async hasFunction(searchCriteria): Promise<boolean> {
    const found = await this.getFunction(searchCriteria);
    return found != null;
  }
}
