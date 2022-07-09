import { Maybe } from '../common';
import { ID } from '../scalars';
import { Application, Service, User } from './';

export type Tenant = {
  id: ID;
  name: string;
  users?: Maybe<Array<Maybe<User>>>;
  services?: Maybe<Array<Maybe<Service>>>;
  applications?: Maybe<Array<Maybe<Application>>>;
};
