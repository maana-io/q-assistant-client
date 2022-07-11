import { Maybe } from './common';
import { ID } from './scalars';
import {
  Argument,
  ArgumentValue,
  Field,
  Function,
  FunctionGraphNode,
  Implementation,
  Instance,
  Kind,
  KnowledgeGraphNode,
  Operation,
  PortalGraph,
  PortalGraphNode,
  Service,
  Workspace,
} from './output-types';

// TODO: FIX THESE
export type AddFunctionGraphFragment = {};

export type AddFunctionOutputFragment = {
  newFunctions: [];
  workspaceServiceReferences: ID[];
};

export type ImplementationDetailsFragment = Pick<
  Implementation,
  'id' | 'entrypoint' | 'operations'
>;

export type OperationDetailsFragment = Pick<Operation, 'id' | 'type'> & {
  function?: Maybe<OperationFunctionDetailsFragment>;
  argumentValues: Array<
    Pick<ArgumentValue, 'id' | 'argumentRef'> & {
      argument?: Maybe<Pick<Argument, 'id'>>;
      operation?: Maybe<Pick<Operation, 'id'>>;
    }
  >;
};

export type OperationFunctionDetailsFragment = Pick<
  Function,
  | 'id'
  | 'name'
  | 'graphqlOperationType'
  | 'functionType'
  | 'isGenerated'
  | 'outputKindId'
  | 'outputType'
  | 'outputModifiers'
> & {
  service?: Maybe<Pick<Service, 'id' | 'name'>>;
  arguments: Pick<
    Argument,
    'id' | 'name' | 'type' | 'description' | 'modifiers' | 'typeKindId'
  > & { kind?: Maybe<Pick<Kind, 'id' | 'name'>> };
  implementation?: Maybe<
    Pick<Implementation, 'id'> & {
      operations: Array<
        Pick<Operation, 'id'> & {
          function?: Maybe<
            Pick<Function, 'id'> & {
              service?: Maybe<Pick<Service, 'id'>>;
            }
          >;
        }
      >;
    }
  >;
  kind?: Maybe<Pick<Kind, 'id' | 'name'>>;
};

export type FunctionDetialsFragment = Pick<
  Function,
  | 'id'
  | 'name'
  | 'graphqlOperationType'
  | 'functionType'
  | 'isGenerated'
  | 'outputType'
  | 'outputKindId'
  | 'outputModifiers'
> & {
  service?: Maybe<Pick<Service, 'id' | 'name'>>;
  arguments: Array<
    Pick<
      Argument,
      'id' | 'name' | 'type' | 'description' | 'modifiers' | 'typeKindId'
    > & {
      kind?: Maybe<
        Pick<Kind, 'id' | 'name' | 'isGenerated'> & {
          service?: Maybe<Pick<Service, 'id' | 'name'>>;
        }
      >;
    }
  >;
  implementation?: Maybe<ImplementationDetailsFragment>;
  kind?: Maybe<
    Pick<Kind, 'id' | 'name' | 'isGenerated'> & {
      service?: Maybe<Pick<Service, 'id' | 'name'>>;
    }
  >;
};

export type KindDetailsFragment = Pick<
  Kind,
  | 'id'
  | 'name'
  | 'description'
  | 'isPublic'
  | 'isGenerated'
  | 'nameField'
  | 'serviceId'
> & {
  schema?: Maybe<Array<Maybe<FieldDetailsFragment>>>;
  service?: Maybe<Pick<Service, 'id' | 'name'>>;
};

export type FieldDetailsFragment = Pick<
  Field,
  | 'id'
  | 'name'
  | 'description'
  | 'type'
  | 'typeKindId'
  | 'modifiers'
  | 'hide'
  | 'autoFocus'
  | 'displayAs'
  | 'readonly'
> & {
  kind?: Maybe<
    Pick<Kind, 'id' | 'name' | 'isGenerated'> & {
      service?: Maybe<Pick<Service, 'id' | 'name'>>;
    }
  >;
};

export type AssistantKindsFragment = Pick<
  Kind,
  'id' | 'name' | 'description' | 'isGenerated'
> & {
  service?: Maybe<Pick<Service, 'id' | 'name'>>;
  schema?: Maybe<
    Array<
      Maybe<
        Pick<Field, 'id' | 'name' | 'type' | 'typeKindId' | 'modifiers'> & {
          kind?: Maybe<
            Pick<Kind, 'id' | 'name'> & {
              service?: Maybe<Pick<Service, 'id' | 'name'>>;
            }
          >;
        }
      >
    >
  >;
};

export type AssistantPortalGraphFragment = Pick<
  PortalGraph,
  'id' | 'name' | 'type' | 'lockedBy'
>;

export type AssistantPortalGraphNodeFragment = Pick<
  PortalGraphNode,
  'id' | 'x' | 'y' | 'collapsed'
> & {
  knowledgeGraphNode?: Maybe<
    Pick<KnowledgeGraphNode, 'id'> & {
      instance?: Maybe<InstanceDetailsFragment>;
      innerKind?: Maybe<AssistantKindsFragment>;
      innerFunction?: Maybe<AssistantFunctionsFragment>;
    }
  >;
  functionGraphNode?: Maybe<Pick<FunctionGraphNode, 'id' | 'operationId'>>;
};

export type AssistantFunctionsFragment = Pick<
  Function,
  | 'id'
  | 'name'
  | 'description'
  | 'isDeleted'
  | 'isGenerated'
  | 'functionType'
  | 'graphqlOperationType'
  | 'outputType'
  | 'outputKindId'
  | 'outputModifiers'
> & {
  service?: Maybe<Pick<Service, 'id' | 'name'>>;
  arguments: Array<
    Pick<Argument, 'id' | 'name' | 'type' | 'modifiers' | 'typeKindId'> & {
      kind?: Maybe<
        Pick<Kind, 'id' | 'name'> & {
          service?: Maybe<Pick<Service, 'id' | 'name'>>;
        }
      >;
    }
  >;
  implementation?: Maybe<
    Pick<Implementation, 'id'> & {
      entrypoint?: Maybe<Pick<Operation, 'id'>>;
      operations: Array<
        Pick<Operation, 'id' | 'type'> & {
          function?: Maybe<
            Pick<Function, 'id' | 'name'> & {
              service?: Maybe<Pick<Service, 'id' | 'name'>>;
            }
          >;
          argumentValues: Array<
            Pick<ArgumentValue, 'id' | 'argumentRef'> & {
              argument?: Maybe<Pick<Argument, 'id' | 'name'>>;
              operation?: Maybe<Pick<Operation, 'id'>>;
            }
          >;
        }
      >;
    }
  >;
  kind?: Maybe<
    Pick<Kind, 'id' | 'name'> & {
      service?: Maybe<Pick<Service, 'id' | 'name'>>;
    }
  >;
  graph?: Maybe<
    Pick<PortalGraph, 'id' | 'lockedBy'> & {
      nodes?: Maybe<
        Array<
          Pick<PortalGraphNode, 'id'> & {
            knowledgeGraphNode?: Maybe<Pick<KnowledgeGraphNode, 'id'>>;
            functionGraphNode?: Maybe<
              Pick<FunctionGraphNode, 'id' | 'operationId'>
            >;
          }
        >
      >;
    }
  >;
};

export type AssistantServicesFragment = Pick<
  Service,
  | 'id'
  | 'name'
  | 'description'
  | 'serviceType'
  | 'endpointUrl'
  | 'isDeleted'
  | 'isSystem'
> & {
  aggregatedServices?: Maybe<Array<Maybe<Pick<Service, 'id'>>>>;
};

export type InstanceDetailsFragment = Pick<
  Instance,
  'id' | 'kindId' | 'fieldIds' | 'fieldValues'
>;

export type AssistantWorkspaceInfoFragment = Pick<
  Workspace,
  | 'id'
  | 'name'
  | 'thumbnailUrl'
  | 'workspaceServiceId'
  | 'modelServiceId'
  | 'logicServiceId'
  | 'activeGraphPath'
>;
