import { AddKindInput } from '../schema/inputTypes';
import { Kind } from '../schema/outputTypes';
import { MakeOptional } from '../schema/common';

/**
 * `serviceId` is provided by kportal
 */
export type CreateKindInput = MakeOptional<AddKindInput, 'serviceId'>;

export type CreateKindOutput = Pick<
  Kind,
  | 'description'
  | 'id'
  | 'isDeleted'
  | 'isGenerated'
  | 'name'
  | 'schema'
  | 'service'
>;
