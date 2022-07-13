import { AssistantAPIClient } from './clients/AssistantAPIClient';

const Client = new AssistantAPIClient();

export default Client;
export * from './clients';
export * from './constants';
export * from './schema';
export * from './utilities/code-generation';
