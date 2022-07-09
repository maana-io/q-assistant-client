import { AssistantAPIClient } from './clients/AssistantAPIClient';

const Client = new AssistantAPIClient();

export default Client;
export { FunctionClient, GraphClient, WorkspaceClient } from './clients';

export * from './constants';
