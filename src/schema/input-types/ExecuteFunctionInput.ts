export type ExecuteFunctionInputType = {
  // ID of function to execute
  functionId: string;
  // input variables
  variables?: Record<string, any>;
  // the fields to resolve from the query
  // ? is this comma-separated? needs testing
  resolve: string;
};
