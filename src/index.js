// Import all of the exported functions as AssistantAPIClient so that it can be
// exported as the default.  This is done to keep backwards compatibility with
// previous versions of the library.
import * as APIClient from './AssistantAPIClient';
export const AssistantAPIClient = APIClient;
export default AssistantAPIClient;

export * from './constants';
