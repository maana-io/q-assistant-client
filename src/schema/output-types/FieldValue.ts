import { Maybe } from '../common';
import { DateTime, ID, ScalarDate, ScalarTime } from '../scalars';

export type FieldValue = {
  ID?: Maybe<ID>;
  STRING?: Maybe<string>;
  INT?: Maybe<number>;
  FLOAT?: Maybe<number>;
  BOOLEAN?: Maybe<boolean>;
  DATE?: Maybe<ScalarDate>;
  TIME?: Maybe<ScalarTime>;
  DATETIME?: Maybe<DateTime>;
  JSON?: Maybe<JSON>;
  KIND?: Maybe<ID>;
  l_ID?: Maybe<Array<Maybe<ID>>>;
  l_STRING?: Maybe<Array<Maybe<string>>>;
  l_INT?: Maybe<Array<Maybe<number>>>;
  l_FLOAT?: Maybe<Array<Maybe<number>>>;
  l_BOOLEAN?: Maybe<Array<Maybe<boolean>>>;
  l_DATE?: Maybe<Array<Maybe<ScalarDate>>>;
  l_TIME?: Maybe<Array<Maybe<ScalarTime>>>;
  l_DATETIME?: Maybe<Array<Maybe<DateTime>>>;
  l_JSON?: Maybe<Array<Maybe<JSON>>>;
  l_KIND?: Maybe<Array<Maybe<ID>>>;
};
