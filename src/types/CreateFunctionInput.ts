import {
  ArgumentFieldSelectionInput,
  CreateGraphInput,
  Function,
  GraphQLFunctionType,
  ImplementationTypeInput,
  Maybe
} from './all-types';
import { FunctionType } from '@io-maana/typesystem-utils';

/** CreateFunction input - info needed to create a new Function */
export type CreateFunctionInput = {
  id?: string;
  name: string;
  description?: string;
  signature: FunctionType;
  isPure?: boolean;
  graphqlFunctionType: GraphQLFunctionType;
  implementation: ImplementationTypeInput;
  /**
   * Setup the implementation for CKG functions at the same time as creating the
   * function
   */
  graphImplementation?: Maybe<CreateGraphInput>;
  inputMask?: Maybe<Array<ArgumentFieldSelectionInput>>;
};
