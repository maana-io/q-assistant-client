export * from './CreateFunctionInput';
export * from './CreateImplementation';
export * from './CreateLambdaKindInput';
export * from './CreateOperation';
export * from './CreateQOperationArgumentValue';
export * from './LambdaField';
export * from './LambdaKindInput';
export * from './QCreateFunctionWithLambdaInput';
export * from './QCurrentSelection';
export * from './QFunction';
export * from './QFunctionArgument';
export * from './QGraphNode';
export * from './QImplementation';
export * from './QKind';
export * from './QKnowledgeGraph';
export * from './QLambda';
export * from './QOperation';
export * from './QOperationArgumentValue';
export * from './QService';
export * from './QWorkspace';
export * from './Schema';
export * from './Service';
export * from './QUpdateFunctionInput';

export type UntypedObject = Record<string, any>;

export type UnknownFunction = (...args: any[]) => any;

export type Modifier = 'NONULL' | 'LIST'; // * Is this complete?

export type GraphqlOperationType = 'QUERY' | 'MUTATION';

export type SnackType = 'error' | 'alert' | 'in-progress' | 'success';

export type QNodeType = 'Function' | 'Kind';

// Todo: Augment? Replace with official interface?
