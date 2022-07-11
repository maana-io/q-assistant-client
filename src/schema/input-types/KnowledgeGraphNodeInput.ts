import { Maybe } from '../common';
import { ID } from '../scalars';

export type KnowledgeGraphNodeInput = {
  id?: Maybe<ID>;
  instanceId: ID;
  kindId?: Maybe<ID>;
  kindName?: Maybe<string>;
};
