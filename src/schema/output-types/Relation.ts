import { Maybe } from '../common';
import { ID } from '../scalars';
import { Link } from './Link';

export type Relation = {
  id: ID;
  name: string;
  inverseName: string;
  description?: Maybe<string>;
  undirected?: Maybe<boolean>;
  weight?: Maybe<number>;
  links?: Maybe<Array<Maybe<Link>>>;
};
