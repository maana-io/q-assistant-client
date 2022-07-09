import { Maybe } from '../common';
import { ID } from '../scalars';
import { Instance, Kind, Function } from './';

export type InstanceRef = {
  id: ID;
  kindId?: Maybe<ID>;
  kindName?: Maybe<string>;
  name?: Maybe<string>;
  url?: Maybe<string>;
  kind?: Maybe<Kind>;
  instance?: Maybe<Instance>;
  innerKind?: Maybe<Kind>;
  innerFunction?: Maybe<Function>;
};
