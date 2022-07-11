import { Maybe } from '../common';
import { DateTime, ID } from '../scalars';
import {
  User,
  WorkspaceLayout,
  PortalGraph,
  InstanceRef,
  Inventory,
  Service,
} from './';

export type Workspace = {
  id: ID;
  name: string;
  thumbnailUrl: string;
  owner: User;
  isPublic?: Maybe<boolean>;
  isTemplate?: Maybe<boolean>;
  createdOn: DateTime;
  lastOpenedOn: DateTime;
  layout: WorkspaceLayout;
  modelServiceId: ID;
  logicServiceId: ID;
  workspaceServiceId: ID;
  services?: Maybe<Array<Service>>;
  portalGraphs?: Maybe<Array<PortalGraph>>;
  activeGraphPath: Array<ID>;
  instanceRefs?: Maybe<Array<InstanceRef>>;
  inventory?: Maybe<Inventory>;
};
