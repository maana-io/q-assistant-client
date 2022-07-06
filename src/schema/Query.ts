import {ID} from './scalars'
import { Maybe } from "./common";
import {
  Service,
  User,
  Kind,
  KindBoilerplate,
  Instance,
  InstanceRef,
  InstanceSet,
  Relation,
  Link,
  Info,
  Workspace,
  WorkspaceLayout,
  PortalGraph,
  SearchResult,
  EntitySearchResult,
  EntitySearchActionResult,
  Image,
  BotAction,
  InstanceIdsByKind,
} from "./outputTypes";

import {
  KindQueryInput,
  InstanceRefInput,
  EntitySearchInput } from './inputTypes'

import {
  ServiceCategory,
  ServiceDataProvider,
  ServiceLogicProvider
} from './enums'

export type Query = {
  componentVersions: () => Promise<Array<string>>;
  service: (id: ID) => Promise<Maybe<Service> | undefined>;
  services: (ids: Array<ID>) => Promise<Array<Service>>;
  allAssistantServices: (
    take?: Maybe<number>,
    offset?: Maybe<number>
  ) => Promise<Maybe<Array<Maybe<Service>>> | undefined>;
  allServices: (
    take?: Maybe<number>,
    offset?: Maybe<number>
  ) => Promise<Maybe<Array<Maybe<Service>>> | undefined>;
  allSystemServices: (
    take?: Maybe<number>,
    offset?: Maybe<number>
  ) => Promise<Maybe<Array<Maybe<Service>>> | undefined>;
  allNonSystemServices: (
    take?: Maybe<number>,
    offset?: Maybe<number>
  ) => Promise<Maybe<Array<Maybe<Service>>> | undefined>;
  servicesFiltered: (
    name?: Maybe<string>,
    ids?: Maybe<Array<Maybe<ID>>>,
    isReadOnly?: Maybe<boolean>,
    isManaged?: Maybe<boolean>,
    isSystem?: Maybe<boolean>,
    isDeleted?: Maybe<boolean>,
    isLogic?: Maybe<boolean>,
    isModel?: Maybe<boolean>,
    serviceType?: Maybe<ServiceCategory>,
    provider?: Maybe<ServiceDataProvider>,
    logicType?: Maybe<ServiceLogicProvider>,
    aggregates?: Maybe<Array<Maybe<ID>>>,
    tags?: Maybe<Array<Maybe<string>>>,
    take?: Maybe<number>,
    offset?: Maybe<number>
  ) => Promise<Array<Service>>;
  user: (id: ID) => Promise<Maybe<User> | undefined>;
  userByEmail: (email: string) => Promise<Maybe<User> | undefined>;
  users: (ids: Array<ID>) => Promise<Maybe<Array<Maybe<User>>> | undefined>;
  usersByEmail: (
    emails: Array<string>
  ) => Promise<Maybe<Array<Maybe<User>>> | undefined>;
  allUsers: () => Promise<Maybe<Array<Maybe<User>>> | undefined>;
  kind: (
    tenantId: ID,
    id?: Maybe<ID>,
    name?: Maybe<string>
  ) => Promise<Maybe<Kind> | undefined>;
  kinds: (
    tenantId: ID,
    ids: Array<ID>
  ) => Promise<Maybe<Array<Maybe<Kind>>> | undefined>;
  allKinds: (
    tenantId: ID,
    serviceId?: Maybe<string>,
    take?: Maybe<number>
  ) => Promise<Maybe<Array<Maybe<Kind>>> | undefined>;
  allReferencedKinds: (
    tenantId: ID,
    ids: Array<ID>,
    maxDepth?: Maybe<number>,
    idsToSkip?: Maybe<Array<ID>>
  ) => Promise<Array<Kind>>;
  boilerplateForKinds: (kindIds: Array<ID>) => Promise<KindBoilerplate>;
  /** Query KindDB for Kinds using a Kind Query. Only Kinds are returned. Instances are not supported. */
  kindDBKindQuery: (
    kindQuery: KindQueryInput
  ) => Promise<Maybe<Array<Maybe<Kind>>> | undefined>;
  instance: (
    tenantId: ID,
    instanceRef: InstanceRefInput
  ) => Promise<Maybe<Instance> | undefined>;
  allReferencedInstances: (
    tenantId: ID,
    instanceIdsByKind: Array<InstanceIdsByKind>,
    maxDepth?: Maybe<number>,
    instancesToSkipByKind?: Maybe<Array<InstanceIdsByKind>>
  ) => Promise<Array<Instance>>;
  instanceRef: (
    tenantId: ID,
    id: ID
  ) => Promise<Maybe<InstanceRef> | undefined>;
  populateInstanceRef: (
    tenantId: ID,
    instanceRef: InstanceRefInput
  ) => Promise<Maybe<InstanceRef> | undefined>;
  instances: (
    tenantId: ID,
    ids: Array<ID>,
    kindId?: Maybe<ID>,
    kindName?: Maybe<string>,
  ) => Promise<Maybe<InstanceSet> | undefined>;
  instancesByRef: (
    tenantId: ID,
    instanceRefs: Array<InstanceRefInput>
  ) => Promise<Maybe<Array<Maybe<Instance>>> | undefined>;
  allInstances: (
    tenantId: ID,
    kindId?: Maybe<ID>,
    kindName?: Maybe<string>,
    fieldIds?: Maybe<Array<ID>>,
    take?: Maybe<number>,
    drop?: Maybe<number>,
    token?: Maybe<string>
  ) => Promise<Maybe<InstanceSet> | undefined>;
  relation: (tenantId: ID, id: ID) => Promise<Maybe<Relation> | undefined>;
  relations: (
    tenantId: ID,
    ids: Array<Maybe<ID>>
  ) => Promise<Maybe<Array<Maybe<Relation>>> | undefined>;
  allRelations: (
    tenantId: ID
  ) => Promise<Maybe<Array<Maybe<Relation>>> | undefined>;
  classification: (id: ID) => Promise<Array<Link>>;
  link: (tenantId: ID, id: ID) => Promise<Maybe<Link> | undefined>;
  links: (
    tenantId: ID,
    ids: Array<Maybe<ID>>
  ) => Promise<Maybe<Array<Maybe<Link>>> | undefined>;
  allLinks: (
    tenantId: ID,
    relationId?: Maybe<ID>
  ) => Promise<Maybe<Array<Maybe<Link>>> | undefined>;
  info: () => Promise<Info>;
  workspace: (id: ID) => Promise<Maybe<Workspace> | undefined>;
  allPublicWorkspaces: (
    userId: ID
  ) => Promise<Maybe<Array<WorkspaceLayout>> | undefined>;
  /** @deprecated Deprecated in favor of allPublicWorkspaces. */
  allSharedWorkspaces: (
    userId: ID
  ) => Promise<Maybe<Array<Workspace>> | undefined>;
  allTemplateWorkspaces: (
    userId: ID
  ) => Promise<Maybe<Array<Workspace>> | undefined>;
  allKindsOfService: (
    tenantId: ID,
    serviceId: ID
  ) => Promise<Maybe<Array<Maybe<Kind>>> | undefined>;
  portalGraph: (id: ID) => Promise<Maybe<PortalGraph> | undefined>;
  kindDBQuery: (
    kindQuery: KindQueryInput
  ) => Promise<Maybe<InstanceSet> | undefined>;
  comment: (id: ID) => Promise<Maybe<Comment> | undefined>;
  search: (
    text: string,
    userId: string
  ) => Promise<Maybe<Array<Maybe<SearchResult>>> | undefined>;
  entitySearch: (
    input: EntitySearchInput
  ) => Promise<Maybe<Array<EntitySearchResult>> | undefined>;
  entitySearchResult: (
    resultKey: string,
    token?: Maybe<string>,
    take?: Maybe<number>
  ) => Promise<EntitySearchActionResult>;
  document: (id: ID) => Promise<Maybe<Document> | undefined>;
  documents: (
    ids: Array<ID>
  ) => Promise<Maybe<Array<Maybe<Document>>> | undefined>;
  file: (id: ID) => Promise<Maybe<File> | undefined>;
  files: (ids: Array<ID>) => Promise<Maybe<Array<Maybe<File>>> | undefined>;
  image: (id: ID) => Promise<Maybe<Image> | undefined>;
  images: (ids: Array<ID>) => Promise<Maybe<Array<Maybe<Image>>> | undefined>;
  function: (id: ID) => Promise<Maybe<Function> | undefined>;
  functions: (ids: Array<ID>) => Promise<Array<Function>>;
  botAction: (id: ID) => Promise<Maybe<BotAction> | undefined>;
  botActions: (ids: Array<ID>) => Promise<Array<BotAction>>;
  botActionsForServicesOnKind: (
    serviceIds: Array<ID>,
    kindId: ID,
    take?: Maybe<number>,
    token?: Maybe<string>
  ) => Promise<Array<BotAction>>;
};
