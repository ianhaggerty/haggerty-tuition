import { all, call } from "redux-saga/effects";

import { tooltipSagas } from "./tooltip/tooltip.sagas";
import { queryParamSagas } from "./query-string/query-string.sagas";

export default function* rootSaga() {
  yield all([call(tooltipSagas), call(queryParamSagas)]);
}
