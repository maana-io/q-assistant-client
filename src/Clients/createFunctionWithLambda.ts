import { CreateFunctionInput, QUpdateFunctionInput } from '../types';
import { WorkspaceClient, LambdaClient } from '.';
import { ensureWSContainsRefreshedLambdaSvc } from './ensureWSContainsRefreshedService';
import { implementFunctionWithLambda } from './implementFunctionWithLambda';
import { makeCreateLambdaInput } from '.';

export async function createFunctionWithLambda(
  functionToCreate: CreateFunctionInput,
  code: string,
  updateIfExists: boolean,
  wksClient: WorkspaceClient,
  lambdaClient: LambdaClient,
): Promise<any> {
  const preExistingFunction = await wksClient.getFunction({
    name: functionToCreate.name,
  });

  if (preExistingFunction) {
    if (!updateIfExists) return;
    wksClient.updateFunction({
      ...functionToCreate,
      id: preExistingFunction!.id,
    });
  } else {
    wksClient.createFunction(functionToCreate);
  }

  const existingFunction = await wksClient.getFunction({
    name: functionToCreate.name,
  });
  const lambdaToCreate = await makeCreateLambdaInput(
    wksClient,
    code,
    existingFunction,
    0,
  );

  await wksClient.refresh();
  await lambdaClient.createLambda({
    ...lambdaToCreate,
    id: existingFunction!.id,
  });
  await ensureWSContainsRefreshedLambdaSvc(wksClient, lambdaClient);
  await implementFunctionWithLambda(
    existingFunction!.id,
    lambdaToCreate,
    wksClient,
    lambdaClient,
  );
}
