import { all, call } from "redux-saga/effects";

import { tooltipSagas } from "./tooltip/tooltip.sagas";
import { queryParamSagas } from "./query-string/query-string.sagas";
import { enquiryPageSagas } from "./enquiry-page/enquiry-page.sagas";

export default function* rootSaga() {
  yield all([
    call(tooltipSagas),
    call(queryParamSagas),
    call(enquiryPageSagas)
  ]);
}
