import { Maybe } from '../common';
import { ID } from '../scalars';
import { Role, Tenant, User } from './';

export type TenantUserRole = {
  userId: ID;
  user?: Maybe<User>;
  tenantId: ID;
  tenant?: Maybe<Tenant>;
  roles?: Maybe<Array<Maybe<Role>>>;
};
