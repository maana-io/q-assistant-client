import { Maybe } from '../common';
import { ID } from '../scalars';

export type AddWorkspaceInput = {
  id?: Maybe<ID>;
  userId: ID;
  name: string;
  thumbnailUrl: string;
  workspaceServiceId?: Maybe<ID>;
};
