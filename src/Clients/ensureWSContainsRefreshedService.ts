import { LambdaClient, WorkspaceClient } from '.';
import AssistantAPIClient from './AssistantAPIClient';

const LAMBDA_SERVICE_ID_POSTFIX = '_lambda';

/**
 * Makes sure this workspace has a local lambda service.
 * This should be called after lambda server has created a valid endpoint.
 * This will also import the service into the workspace and refresh/reload.
 *
 * @param {Workspace} workspace A workspace instance.
 * @return {Promise} Resolves to true if successful, otherwise undefined.
 */
export async function ensureWSContainsRefreshedLambdaSvc(
  wksClient: WorkspaceClient,
  lambdaClient: LambdaClient
) {
  const localLambdaSvcId = wksClient.id + LAMBDA_SERVICE_ID_POSTFIX;
  const hasLocalLambda = await wksClient.hasService({
    id: wksClient.id + LAMBDA_SERVICE_ID_POSTFIX
  });

  if (!hasLocalLambda) {
    const lambdaEndpointBaseUrl = lambdaClient.baseUrl;
    const service = {
      id: localLambdaSvcId,
      name: localLambdaSvcId,
      endpointUrl: lambdaEndpointBaseUrl + wksClient.id + '/graphql',
      serviceType: 'EXTERNAL'
    };

    try {
      // @ts-ignore
      await AssistantAPIClient.createService(service);
    } catch {
      // Don't do anything here, as there is a high chance this just means that
      // you are reusing ID of deleted workspace or that service was removed
      // from the workspace at some point.
    }

    const importedService = await wksClient.importService(service.id);

    if (!importedService) {
      throw new Error('Could not import local lambda service.');
    }
  } else {
    // Refresh if we already have the service.
    await AssistantAPIClient.refreshServiceSchema(localLambdaSvcId);
  }
}
