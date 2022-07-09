import { Maybe } from '../schema/common';
import { ID } from '../schema/scalars';
import { AssistantFunctionsFragment } from './Fragments';

export type FunctionClient = AssistantFunctionsFragment & {
  lockedBy: () => Maybe<string>;
  canEdit: () => Promise<boolean>;
  setLocked: (
    isLocked: boolean
  ) => Promise<{ id: ID; lockedBy: Maybe<string> }>;
};
