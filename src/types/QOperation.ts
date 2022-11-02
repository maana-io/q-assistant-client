import { QOperationArgumentValue } from './QOperationArgumentValue';

export interface QOperation {
  id: string;
  type: string;
  function: {
    id: string;
    name: string;
    service: {
      id: string;
      name: string;
    };
    argumentValues: QOperationArgumentValue[];
  };
}
