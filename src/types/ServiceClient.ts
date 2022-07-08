import { Maybe } from '../schema';
import { ID } from '../schema/scalars';
import {
  AssistantFunctionsFragment,
  AssistantKindsFragment,
} from './Fragments';
import { WorkspaceClient } from './workspaceClient';

export type ServiceClient = {
  id: ID;
  name: string;
  description?: Maybe<string>;
  endpointUrl: string;
  aggregatedServices?: Array<Maybe<ID>>;
  getKinds: () => Promise<Array<AssistantKindsFragment>>;
  getFunctions: () => Promise<Array<AssistantFunctionsFragment>>;
  getWorkspace: () => Maybe<WorkspaceClient>;
};
