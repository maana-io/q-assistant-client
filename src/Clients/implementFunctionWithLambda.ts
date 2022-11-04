import { LambdaClient, WorkspaceClient } from '.';
import { QFunction, QOperationArgumentValue } from '../types';
import { v4 as uuid } from 'uuid';

// * Helper function to format QFunction argument values
const getLambdaArgumentValues: (
  lambda: QFunction,
  wsFunction: QFunction
) => QOperationArgumentValue[] = (lambda: QFunction, wsFunction: QFunction) =>
  lambda.arguments.map((arg, key) => ({
    argument: arg.id,
    operation: null,
    argumentRef: wsFunction.arguments[key].id
  }));

export const implementFunctionWithLambda = async (
  parentFunctionId: string,
  lambda: any,
  wksClient: WorkspaceClient,
  lambdaClient: LambdaClient
) => {
  const lambdaEndpointBaseUrl = lambdaClient.baseUrl;

  const serviceToImport = {
    id: lambda.serviceId + '_lambda',
    name: wksClient.id + '_lambda',
    endpointUrl: lambdaEndpointBaseUrl + lambda.serviceId + '/graphql',
    serviceType: 'EXTERNAL'
  };

  // * Makes sure the imported service has the latest schema
  await wksClient.reloadService(serviceToImport.id);
  const lambdaService = await wksClient.getService({
    id: lambda.serviceId + '_lambda'
  });

  // * The lambda service function:
  // @ts-ignore
  const lambdaFunction: QFunction | null = lambdaService?.getFunction({
    name: lambda.name
  });
  const workspaceFunction: QFunction | null = await wksClient.getFunction({
    id: parentFunctionId
  });

  // * Update the workspace function to include the lambda implementation:
  if (lambdaFunction && workspaceFunction) {
    // * Assemble array of argument values the function takes:
    const argumentValues = getLambdaArgumentValues(
      lambdaFunction,
      workspaceFunction
    );

    const operationId = uuid();
    await wksClient.updateFunction({
      id: workspaceFunction.id,
      name: workspaceFunction.name,
      // @ts-ignore
      implementation: {
        entrypoint: operationId,
        operations: [
          {
            id: operationId,
            function: lambdaFunction.id,
            type: 'APPLY',
            argumentValues
          }
        ]
      }
    });
  } else {
    throw new Error(
      `Could not create function implementation for ${lambda.name}`
    );
  }
};
