import { Maybe } from '../common';
import {
  FieldModifiers,
  FieldType,
  FunctionType,
  GraphqlOperationType,
} from '../enums';
import { ID } from '../scalars';
import { Argument, Kind, Service, PortalGraph, Implementation } from './';

export type Function = {
  id: ID;
  name: string;
  description?: Maybe<string>;
  arguments: Array<Argument>;
  outputType: FieldType;
  outputKindId?: Maybe<ID>;
  outputModifiers?: Maybe<Array<Maybe<FieldModifiers>>>;
  graph?: Maybe<PortalGraph>;
  isGenerated: boolean;
  kind?: Maybe<Kind>;
  graphqlOperationType?: Maybe<GraphqlOperationType>;
  functionType: FunctionType;
  implementation?: Maybe<Implementation>;
  service?: Maybe<Service>;
  isDeleted: boolean;
};
