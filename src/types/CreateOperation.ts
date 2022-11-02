import { QCreateOperationArgumentValue } from '.';

export interface QCreateOperation {
  id: string;
  type: 'MAP' | 'APPLY';
  function: string;
  argumentValues: QCreateOperationArgumentValue[];
}
