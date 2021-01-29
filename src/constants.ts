/**
 * The different states that the assistant can be in.
 */
export enum AssistantState {
  WORKING = 'WORKING',
  IDLE = 'IDLE'
}

/**
 * The mode in which a custom Assistant should be rendering in.
 */
export enum RenderMode {
  DISPLAY = 'DISPLAY',
  BACKGROUND = 'BACKGROUND'
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

/**
 * The types of a functions.
 */
export enum FunctionType {
  EXTERNAL = 'EXTERNAL',
  CKG = 'CKG'
}

/**
 * The different GraphQL operations that the function can be used for.
 */
export enum GraphQLFunctionType {
  QUERY = 'QUERY',
  MUTATION = 'MUTATION',
  SUBSCRIPTION = 'SUBSCRIPTION',
  NONE = 'NONE'
}

/**
 * The different types implementations that can be used on a CKG function.
 */
export enum ImplementationType {
  FUNCTION_GRAPH = 'FUNCTION_GRAPH'
}

/**
 * The different types of nodes that can be created or show up on the graphs.
 *
 * Knowledge Graphs only use ENTITY nodes.
 *
 * Function graphs comes with two ARGUMENT nodes and no more should be created.
 * OPERATION nodes are used to add functions onto the function graph.
 */
export enum NodeType {
  ARGUMENT = 'ARGUMENT',
  ENTITY = 'ENTITY',
  OPERATION = 'OPERATION'
}

/**
 * The different types of graph references used for the connections on a
 * function graph implementation.
 */
export enum GraphRefInputType {
  ARGUMENT = 'ARGUMENT',
  FUNCTION_RESULT = 'FUNCTION_RESULT',
  OPERATION_ARGUMENT = 'OPERATION_ARGUMENT',
  OPERATION_RESULT = 'OPERATION_RESULT',
  OUTPUT_ARGUMENT_REF = 'OUTPUT_ARGUMENT_REF'
}
