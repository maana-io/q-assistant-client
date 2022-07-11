import { AssistantAPIClient } from './clients/AssistantAPIClient';

const Client = new AssistantAPIClient();

export default Client;
export * from './clients/WorkspaceClient';
export * from './clients/GraphClient';
export * from './clients/ServiceClient';
export * from './clients/FunctionClient';
export * from './constants';
export * from './schema';
