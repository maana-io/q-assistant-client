import {
  LIST_LAMBDAS,
  GET_LAMBDA,
  LIST_RUNTIMES,
  CREATE_LAMBDA,
  CREATE_LAMBDAS,
  DELETE_LAMBDA,
} from '../GraphQL';
import { QLambda, QCreateLambdaInput } from '../types';
import { CKGClient } from './CKGClient';

export class LambdaClient {
  private _url: string;
  private _serviceId: string;
  private _client: CKGClient;

  constructor(serviceId: string, baseUrl: string, ckgClient: () => CKGClient) {
    this._url = baseUrl;
    this._serviceId = serviceId;
    this._client = ckgClient();
  }

  get baseUrl(): string {
    return this._url;
  }

  get id(): string {
    return this._serviceId;
  }

  getLambdas: (serviceId: string) => Promise<QLambda[]> = async (
    serviceId: string,
  ) => {
    try {
      const res = await this._client.executeGraphQL(
        this._serviceId,
        LIST_LAMBDAS,
        { serviceId },
      );
      return res && res.data ? res.data.listLambdas : 'Failed getting lambda';
    } catch (e) {
      console.error('Failed getting lambdas', e);
      throw e;
    }
  };

  getLambda: (functionId: string) => Promise<QLambda> = async (
    functionId: string,
  ) => {
    try {
      const res = await this._client.executeGraphQL(
        this._serviceId,
        GET_LAMBDA,
        {
          lambdaId: functionId,
        },
      );
      return res && res.data ? res.data.getLambda : 'Failed getting lambda';
    } catch (e) {
      console.error('Failed getting lambda', e);
      throw e;
    }
  };

  getRuntimes = async (functionId: string) => {
    const res = await this._client.executeGraphQL(
      this._serviceId,
      LIST_RUNTIMES,
      {
        lambdaId: functionId,
      },
    );

    if (res?.data?.listRuntimes) {
      if (Array.isArray(res.data.runtimes)) {
        return res.data.listRuntimes;
      } else {
        return [res.data.runtimes];
      }
    } else {
      throw new Error('Failed listing runtimes');
    }
  };

  createLambda = async (lambda: QCreateLambdaInput) => {
    let res = null;
    try {
      const result = await this._client.executeGraphQL(
        this._serviceId,
        CREATE_LAMBDA,
        {
          ...lambda,
          kinds: [...lambda.kinds],
        },
      );

      const { data } = result;
      res = data.createLambda;
      return res;
    } catch (e) {
      console.error('Failed to create lambda', e);
      throw e;
    }
  };

  // @ts-ignore
  createLambdas = async lambdas => {
    const res = await this._client.executeGraphQL(
      this._serviceId,
      CREATE_LAMBDAS,
      {
        inputs: lambdas,
      },
    );
    if (res?.data?.createLambdas) {
      return res.data.createLambdas;
    } else {
      // @ts-ignore
      const errorMessages = res.errors?.map(e => e.message).join('. ');
      // eslint-disable-next-line no-throw-literal
      throw `Failed creating lambdas: ${
        errorMessages ?? JSON.stringify(lambdas)
      }`;
    }
  };
  deleteLambda = async (lambdaId: string) => {
    let res = null;
    try {
      const result = await this._client.executeGraphQL(
        this._serviceId,
        DELETE_LAMBDA,
        {
          id: lambdaId,
        },
      );

      const { data } = result;
      res = data.deleteLambda;
      return res;
    } catch (e) {
      console.error('Failed to delete lambda', e);
      throw e;
    }
  };
}
