// todo: fix
// @ts-nocheck
import AssistantAPIClient from './AssistantAPIClient';
import { WorkspaceClient, ILocalWorkspace, LambdaClient } from '.';
import { flatten } from 'lodash';
import { recursivelyRemoveKeys } from './helpers';

export class CKGClient {
  _api = AssistantAPIClient;

  async getActiveWorkspace(): Promise<WorkspaceClient> {
    const workspace = await AssistantAPIClient.getWorkspace();

    // @ts-ignore
    window.ws = workspace;

    const currentSelection = await AssistantAPIClient.getCurrentSelection();

    const kinds = await workspace.getKinds();
    // console.log('Kinds:', kinds)
    const functions = await workspace.getFunctions();
    const fids = functions.map((f) => f.id);

    const functionsWithEverything = await Promise.all(
      fids.map(async (fid: string) => {
        const res = await AssistantAPIClient.getFunctionById(fid);
        return JSON.parse(JSON.stringify(res));
      })
    );

    const importedServices = await workspace.getImportedServices();
    const services: IService[] = await Promise.all(
      // todo: importedService should have its type declared
      importedServices.map(async (importedService: IService) => {
        const { id, name } = importedService;

        const kinds = await importedService.getKinds();
        const functions = await importedService.getFunctions();
        return {
          id,
          name,
          kinds,
          functions
        };
      })
    );

    const servicesKinds = flatten(services.map((service) => service.kinds));
    const allKinds = [...kinds, ...servicesKinds];
    // todo: fix
    // @ts-ignore
    const graphPromises = await workspace.getKnowledgeGraphs();

    const knowledgeGraphs = await Promise.all(
      // todo: fix
      // @ts-ignore
      graphPromises.map(async (graphPromise: Promise<unknown>) => {
        const graph = await graphPromise;
        // console.log('graph', graph)
        // todo: fix
        // @ts-ignore
        const nodes = graph ? await graph.getNodes() : null;
        // console.log('nodes', JSON.stringify(nodes))

        return graph && nodes
          ? Promise.all(
              nodes.map(
                // todo: update this type definition
                (node: {
                  knowledgeGraphNode: { innerFunction: { id: any } };
                }) => {
                  return node.knowledgeGraphNode.innerFunction
                    ? // todo: update this type definition
                      functions.filter((func: { id: any }) => {
                        return (
                          func.id === node.knowledgeGraphNode.innerFunction.id
                        );
                      })
                    : null;
                }
              )
            )
          : [];
      })
    );

    let localWorkspace: ILocalWorkspace = {
      id: workspace.id,
      kinds,
      allKinds,
      functions: functionsWithEverything,
      services,
      endpointServiceId: workspace.endpointUrl
        .split('/service/')[1]
        .split('/graphql')[0],
      currentSelection: currentSelection.selection[0],
      knowledgeGraphs
    };

    localWorkspace = recursivelyRemoveKeys(localWorkspace, ['__typename']);

    return new WorkspaceClient(localWorkspace, () => this);
  }

  async getLambdaClient(): Promise<LambdaClient> {
    const LAMBDA_SERIVCE_ID = 'io.maana.lambda-server';
    async function getLambdaServiceBaseUrl(): Promise<string> {
      try {
        const lambdaServiceQueryResult = await AssistantAPIClient.executeGraphql(
          {
            serviceId: 'io.maana.catalog',
            query:
              'query getLambda($lambdaServiceId: ID!){ service(id: $lambdaServiceId) { endpointUrl } }',
            variables: {
              lambdaServiceId: LAMBDA_SERIVCE_ID
            }
          }
        );

        const { data } = lambdaServiceQueryResult;
        const { service } = data;
        const { endpointUrl } = service;

        return endpointUrl.replace('graphql', '');
      } catch (e) {
        console.error('Failed getting lambda service endpoint', e);
        throw e;
      }
    }

    const lambdaBaseUrl: string = await getLambdaServiceBaseUrl();

    return new LambdaClient(LAMBDA_SERIVCE_ID, lambdaBaseUrl, () => this);
  }

  async executeGraphQL(
    serviceId: string,
    query: string,
    variables?: Record<string, any>
  ) {
    try {
      const result = await AssistantAPIClient.executeGraphql({
        serviceId,
        query,
        variables
      });
      return result;
    } catch (e) {
      console.error('Failed executing GraphQL Query', e);
      throw e;
    }
  }
}
