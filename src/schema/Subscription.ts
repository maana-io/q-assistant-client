import {
  BotActionAddedEvent,
  BotActionUpdatedEvent,
  Link,
} from './outputTypes';

import { ID } from './scalars';
import { Maybe } from './common';

export type Subscription = {
  botActionAdded: (
    serviceId?: Maybe<ID>,
    kindId?: Maybe<ID>,
    botId?: Maybe<ID>
  ) => Promise<BotActionAddedEvent>;
  botActionUpdated: (
    serviceIds?: Maybe<Array<ID>>,
    kindIds?: Maybe<Array<ID>>,
    botIds?: Maybe<Array<ID>>,
    botActionIds?: Maybe<Array<ID>>
  ) => Promise<BotActionUpdatedEvent>;
  linkAdded: (
    kindIds?: Maybe<Array<ID>>,
    relationIds?: Maybe<Array<ID>>,
    instanceIds?: Maybe<Array<ID>>,
    fieldIds?: Maybe<Array<ID>>
  ) => Promise<Link>;
};
