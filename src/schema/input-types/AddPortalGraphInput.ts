import { Maybe } from '../common';
import { PortalGraphType } from '../enums';
import { ID } from '../scalars';
import { PortalGraphNodeInput } from './PortalGraphNodeInput';

export type AddPortalGraphInput = {
  workspaceId: ID;
  type?: Maybe<PortalGraphType>;
  name: string;
  id?: Maybe<ID>;
  index?: Maybe<number>;
  offsetX?: Maybe<number>;
  offsetY?: Maybe<number>;
  zoom?: Maybe<number>;
  nodes?: Maybe<Array<PortalGraphNodeInput>>;
};
