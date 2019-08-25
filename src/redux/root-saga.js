import { all, call } from "redux-saga/effects";

import { tooltipSagas } from "./tooltip/tooltip.sagas";

export default function* rootSaga() {
  yield all([call(tooltipSagas)]);
}
