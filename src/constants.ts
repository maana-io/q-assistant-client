/**
 * The different states that the assistant can be in.
 */
export enum AssistantState {
  WORKING = 'WORKING',
  IDLE = 'IDLE'
}

/**
 * ID of the io.maana.core service
 */
export const CORE_SERVICE_ID = 'io.maana.core';

/**
 * Names of the default Scalars
 */
export enum Scalars {
  INT = 'Int',
  LONG = 'Long',
  FLOAT = 'Float',
  DOUBLE = 'Double',
  BOOLEAN = 'Boolean',
  DATE = 'Date',
  TIME = 'Time',
  DATETIME = 'DateTime',
  JSON = 'JSON',
  ID = 'ID',
  STRING = 'String'
}

/**
 * The different entity types used in entity identifiers, like the ones returned
 * from selection or used in graph nodes.
 */
export enum EntityType {
  FILE = 'FILE',
  FUNCTION = 'FUNCTION',
  KNOWLEDGE_GRAPH = 'KNOWLEDGE_GRAPH',
  SERVICE = 'SERVICE',
  TYPE = 'TYPE',
  VALUE = 'VALUE',
  WORKSPACE = 'WORKSPACE',

  // UI only Entities
  CONNECTION = 'CONNECTION',
  FUNCTION_ARGUMENTS = 'FUNCTION_ARGUMENTS',
  FUNCTION_OUTPUT = 'FUNCTION_OUTPUT',
  GRAPH_NODE = 'GRAPH_NODE',
  ACTIVITY = 'ACTIVITY'
}

/**
 * The different types of possible services
 */
export enum ServiceType {
  ASSISTANT = 'AssistantService',
  EXTERNAL_GRAPHQL = 'ExternalGraphQLService',
  LOGIC = 'LogicService',
  MODEL = 'ModelService'
}
