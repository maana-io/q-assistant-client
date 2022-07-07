import { Service } from './schema';

export type ServiceFragment = Pick<
  Service,
  'aggregatedServices' | 'description' | 'endpointUrl' | 'id' | 'name'
> & {
  getFunctions: () => Promise<any>;
  getKinds: () => Promise<any>;
  getParentService: () => Promise<any>;
  getWorkspace: () => Promise<any>;
};
