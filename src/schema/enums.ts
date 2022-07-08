export enum FieldType {
  Id = 'ID',
  String = 'STRING',
  Int = 'INT',
  Float = 'FLOAT',
  Boolean = 'BOOLEAN',
  Date = 'DATE',
  Time = 'TIME',
  Datetime = 'DATETIME',
  Json = 'JSON',
  Kind = 'KIND',
}

export enum FieldModifiers {
  Nonull = 'NONULL',
  List = 'LIST',
  Noidx = 'NOIDX',
  Ephemeral = 'EPHEMERAL',
  Imidx = 'IMIDX',
}

export enum AggregateOp {
  Min = 'MIN',
  Max = 'MAX',
  Sum = 'SUM',
  Count = 'COUNT',
}

export enum Theme {
  Dark = 'DARK',
  Light = 'LIGHT',
}

export enum PortalGraphType {
  Knowledge = 'KNOWLEDGE',
  Query = 'QUERY',
  Function = 'FUNCTION',
}

export enum GraphqlOperationType {
  Query = 'QUERY',
  Mutation = 'MUTATION',
}

export enum FunctionType {
  Service = 'SERVICE',
  Projection = 'PROJECTION',
  Ckg = 'CKG',
}

export enum OperationType {
  Let = 'LET',
  Apply = 'APPLY',
  Map = 'MAP',
  Fold = 'FOLD',
}

export enum BotActionStatus {
  Pending = 'PENDING',
  InProgress = 'IN_PROGRESS',
  Stopping = 'STOPPING',
  Stopped = 'STOPPED',
  Error = 'ERROR',
  Complete = 'COMPLETE',
}

export enum ServiceCategory {
  Assistant = 'ASSISTANT',
  External = 'EXTERNAL',
  Logic = 'LOGIC',
  Model = 'MODEL',
  Workspace = 'WORKSPACE',
}

export enum ServiceDataProvider {
  MaanaKinddb = 'MAANA_KINDDB',
  Prisma = 'PRISMA',
}

export enum ServiceLogicProvider {
  MaanaCkg = 'MAANA_CKG',
  Docker = 'DOCKER',
}

export enum NodeTypeEnum {
  KN_ANNOTATION = 'Annotation',
  KN_FUNCTION = 'Function',
  KN_KIND = 'Kind',
}
