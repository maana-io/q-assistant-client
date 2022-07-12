import { AssistantAPIClient } from '.';
import { GraphqlOperationType, ID, Maybe } from '../schema';

export type DeleteLambdaInput = {
  id: ID;
  sequenceNo: number;
};

export enum LambdaModifier {
  NONULL = 'NONULL',
  LIST = 'LIST',
  NOIDX = 'NOIDX',
  EPHEMERAL = 'EPHEMERAL',
  IMIDX = 'IMIDX',
}

export type LambdaField = {
  name: string;
  kind: string;
  modifiers: LambdaModifier[];
};

export type LambdaFieldInput = {
  name?: Maybe<string>;
  kind?: string;
  modifiers?: Maybe<LambdaModifier[]>;
};

export type LambdaKind = {
  name: string;
  fields: LambdaField[];
};

export type Runtime = {
  id: ID;
  host: string;
  language: string;
};

export type Lambda = {
  id: ID;
  name: string;
  serviceId: ID;
  runtime: Runtime;
  code: string;
  input: LambdaField[];
  outputKind: string;
  outputModifiers: LambdaModifier[];
  kinds: LambdaKind[];
  graphQLOperationType: GraphqlOperationType;
  timeout: Maybe<number>;
  sequenceNo: number;
};

export type LambdaInput = {
  id: ID;
  name: string;
  serviceId: ID;
  runtimeId: ID;
  code: string;
  input: LambdaFieldInput[];
  outputKind: string;
  outputModifiers: LambdaModifier[];
  kinds: LambdaKind[];
  graphQLOperationType: GraphqlOperationType;
  timeout: Maybe<number>;
  sequenceNo: number;
};

export type LambdaAPIClient = {
  getLambdas: (serviceId: string) => Promise<Lambda[]>;
  getLambda: (functionId: string) => Promise<Lambda[]>;
  getRuntimes: () => Promise<Runtime[]>;
  addLambda: (input: LambdaInput) => Promise<Maybe<Lambda>>;
  addLambdas: (input: LambdaInput[]) => Promise<Lambda>;
  deleteLambda: (input: DeleteLambdaInput) => Promise<number>;
  deleteLambdas: (input: DeleteLambdaInput[]) => Promise<number[]>;
};

export async function getLambdaClient(
  assistant: AssistantAPIClient
): Promise<LambdaAPIClient> {
  const LAMBDA_SERIVCE_ID: string = '';

  async function executeGQL(gql: string, variables: Record<string, any>) {
    try {
      const result = await assistant.executeGraphql({
        serviceId: LAMBDA_SERIVCE_ID,
        query: gql,
        variables,
      });
      return result;
    } catch (e) {
      console.error('Failed executing GraphQL Query', e);
      throw new Error(e);
    }
  }

  const lambdaFunctionFragment: string =
    'id name serviceId runtime { id name language} code input { name kind modifiers } outputKind outputModifiers kinds graphQLOperationType sequenceNo';

  return {
    getLambda: async (lambdaId: ID) => {
      try {
        const res = await assistant.executeGraphql<
          void,
          { data?: { getLambda: Maybe<Lambda> }; errors?: string[] }
        >({
          query: `query getLambda($lambdaId: ID!) { getLambda( id: $lambdaId) { ${lambdaFunctionFragment} }}`,
          variables: {
            lambdaId,
          },
        });
        if (res && res.data) return res.data.getLambda;
        throw new Error(res.errors ? res.errors[0] : 'Unexpected failure');
      } catch (e) {
        console.error('Failed getting lambda', e);
        return e;
      }
    },
    getRuntimes: async () => {
      try {
        const res = await assistant.executeGraphql<
          void,
          { data?: { getRuntimes: Runtime[] }; errors?: string[] }
        >({
          query: `query { getRuntimes{ id host language }}`,
          variables: {},
        });
        if (res && res.data) return res.data.getRuntimes;
        throw new Error(res.errors ? res.errors[0] : 'Unexpected failure');
      } catch (e) {
        console.error('Failed getting lambdas', e);
        return e;
      }
    },
    addLambda: async (input: LambdaInput) => {
      try {
        const res = await assistant.executeGraphql<
          void,
          { data?: { createLambda: LambdaInput }; errors?: string[] }
        >({
          query: `mutation createLambda($input: LambdaInput!) { createLambda( input: $input) { ${lambdaFunctionFragment} }}`,
          variables: {
            input,
          },
        });
        if (res && res.data) return res.data.createLambda;
        throw new Error(res.errors ? res.errors[0] : 'Unexpected failure');
      } catch (e) {
        console.error('Failed creating lambda', e);
        return e;
      }
    },
    addLambdas: async (input: LambdaInput[]) => {
      try {
        const res = await assistant.executeGraphql<
          void,
          { data?: { createLambdas: LambdaInput[] }; errors?: string[] }
        >({
          query: `mutation createLambdas($input: [LambdaInput!]!) { createLambdas( input: $input) { ${lambdaFunctionFragment} }}`,
          variables: {
            input,
          },
        });
        if (res && res.data) return res.data.createLambdas;
        throw new Error(res.errors ? res.errors[0] : 'Unexpected failure');
      } catch (e) {
        console.error('Failed creating lambdas', e);
        return e;
      }
    },
    deleteLambda: async (input: DeleteLambdaInput) => {
      try {
        const res = await assistant.executeGraphql<
          void,
          { data?: { deleteLambda: number }; errors?: string[] }
        >({
          query: `mutation deleteLambda($input: DeleteLambdaInput!) { deleteLambda( input: $input) }`,
          variables: {},
        });
        if (res && res.data) return res.data.deleteLambda;
        throw new Error(res.errors ? res.errors[0] : 'Unexpected failure');
      } catch (e) {
        console.error('Failed deleting lambda', e);
        return e;
      }
    },
    deleteLambdas: async (input: DeleteLambdaInput[]) => {
      try {
        const res = await assistant.executeGraphql<
          void,
          { data?: { deleteLambdas: number[] }; errors?: string[] }
        >({
          query: `mutation deleteLambdas($input: [DeleteLambdaInput!]!) { deleteLambdas( input: $input) }`,
          variables: {},
        });
        if (res && res.data) return res.data.deleteLambdas;
        throw new Error(res.errors ? res.errors[0] : 'Unexpected failure');
      } catch (e) {
        console.error('Failed deleting lambdas', e);
        return e;
      }
    },
    getLambdas: async (serviceId: string) => {
      try {
        const res = await assistant.executeGraphql<
          void,
          { data?: { listLambdas: Lambda[] }; errors?: string[] }
        >({
          query: `query listLambdas($serviceId: ID!) { listLambdas(serviceId: $serviceId) { ${lambdaFunctionFragment} }}`,
          variables: {
            serviceId,
          },
        });
        if (res && res.data) return res.data.listLambdas;
        throw new Error(res.errors ? res.errors[0] : 'Unexpected failure');
      } catch (e) {
        console.error('Failed getting lambdas', e);
        return e;
      }
    },
  };
}
