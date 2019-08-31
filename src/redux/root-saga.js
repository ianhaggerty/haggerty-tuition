import { all, call } from "redux-saga/effects";

import { tooltipSagas } from "./tooltip/tooltip.sagas";
import { sidebarSagas } from "./sidebar/sidebar.sagas";

export default function* rootSaga() {
  yield all([call(tooltipSagas), call(sidebarSagas)]);
}
