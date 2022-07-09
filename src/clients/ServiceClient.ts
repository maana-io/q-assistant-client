import { Maybe, Service } from '../schema';
import { ID } from '../schema/scalars';
import {
  AssistantFunctionsFragment,
  AssistantKindsFragment,
  AssistantServicesFragment,
} from '../schema/Fragments';
import { WorkspaceClient } from './WorkspaceClient';

export type ServiceClient = Pick<
  AssistantServicesFragment,
  'id' | 'name' | 'description' | 'endpointUrl'
> & {
  aggregatedServices?: Array<Pick<Service, 'id'>>;
  getKinds: () => Promise<Array<AssistantKindsFragment>>;
  getFunctions: () => Promise<Array<AssistantFunctionsFragment>>;
  getWorkspace: () => Maybe<WorkspaceClient>;
};
