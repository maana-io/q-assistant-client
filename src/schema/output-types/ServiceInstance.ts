import { ID } from '../scalars';

export type ServiceInstance = {
  id: ID;
  dockerServiceName: string;
  hostName: string;
  desiredState: string;
  currentState: string;
};
