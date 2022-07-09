import { Maybe } from '../common';
import { DateTime, ID } from '../scalars';
import {
  Application,
  InstanceRef,
  Workspace,
  Tenant,
  TenantUserRole,
} from './';

export type User = {
  id: ID;
  name: string;
  givenName?: Maybe<string>;
  familyName?: Maybe<string>;
  email?: Maybe<string>;
  picture?: Maybe<string>;
  tenants?: Maybe<Array<Maybe<Tenant>>>;
  tenantUserRoles?: Maybe<Array<Maybe<TenantUserRole>>>;
  createdOn?: Maybe<DateTime>;
  activities?: Maybe<Array<InstanceRef>>;
  recentItems?: Maybe<Array<InstanceRef>>;
  favoriteItems?: Maybe<Array<InstanceRef>>;
  workspaces?: Maybe<Array<Workspace>>;
  applications?: Maybe<Array<Application>>;
  theme?: Maybe<string>;
  openWorkspaces?: Maybe<Array<Workspace>>;
  activeWorkspace?: Maybe<Workspace>;
};
