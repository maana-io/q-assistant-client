export interface QOperationArgumentValue {
  id?: string;
  argument:
    | {
        id: string;
        name: string;
      }
    | string;
  operation: {
    id: string;
  } | null;
  argumentRef: string;
}
