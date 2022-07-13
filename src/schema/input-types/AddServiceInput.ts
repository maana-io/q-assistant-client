import { Maybe } from '../common';
import { ServiceCategory } from '../enums';
import { ID } from '../scalars';

export type AddServiceInput = {
  id?: Maybe<ID>;
  name: string;
  description?: Maybe<string>;
  isSystem: boolean;
  isReadOnly?: Maybe<boolean>;
  thumbnailUrl?: string;
  endpointUrl: string;
  subscriptionEndpointUrl?: Maybe<string>;
  tags?: Maybe<Array<Maybe<string>>>;
  schema?: Maybe<string>;
  serviceType: ServiceCategory;
};
