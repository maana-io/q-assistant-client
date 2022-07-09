import { Maybe } from '../common';
import { ID } from '../scalars';

export type Application = {
  id: ID;
  name: string;
  thumbnailUrl?: Maybe<string>;
};
