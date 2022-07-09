import { Maybe } from '../common';
import {
  ServiceCategory,
  ServiceDataProvider,
  ServiceLogicProvider,
} from '../enums';
import { DateTime, ID } from '../scalars';
import {
  Kind,
  Function,
  ServiceImport,
  ServiceExport,
  ServiceInstance,
  Workspace,
} from '.';

export type Service = {
  id: ID;
  name: string;
  description?: Maybe<string>;
  isManaged: boolean;
  isSystem: boolean;
  isReadOnly: boolean;
  endpointUrl: string;
  subscriptionEndpointUrl?: Maybe<string>;
  assistantUrl?: Maybe<string>;
  thumbnailUrl?: Maybe<string>;
  tags: Array<string>;
  created: DateTime;
  modified?: Maybe<DateTime>;
  schema: string;
  serviceType: ServiceCategory;
  provider?: Maybe<ServiceDataProvider>;
  logicType?: Maybe<ServiceLogicProvider>;
  logicTemplate?: Maybe<JSON>;
  aggregatedServices?: Maybe<Array<Maybe<Service>>>;
  refreshPeriod?: Maybe<number>;
  lastChecked?: Maybe<DateTime>;
  lastConnectionResult?: Maybe<number>;
  imports?: Maybe<Array<Maybe<ServiceImport>>>;
  exports?: Maybe<Array<Maybe<ServiceExport>>>;
  externalServiceInstances?: Maybe<Array<Maybe<ServiceInstance>>>;
  kinds?: Maybe<Array<Maybe<Kind>>>;
  functions?: Maybe<Array<Maybe<Function>>>;
  workspace?: Maybe<Workspace>;
  isDeleted: boolean;
};
