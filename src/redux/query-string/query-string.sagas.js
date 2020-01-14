import { all, call, takeEvery } from "redux-saga/effects";
import { history } from "../root.reducer";
import qs from "query-string";

import QueryStringActionTypes from "./query-string.types";

export function setQueryString(action) {
  const queryHash = qs.parse(history.location.search);
  queryHash[action.payload.key] = action.payload.value;
  const newQuery = qs.stringify(queryHash);

  history.push({ search: newQuery });
}

export function* onSetQueryParam() {
  yield takeEvery(QueryStringActionTypes.SET_QUERY_PARAM, setQueryString);
}

export function* queryParamSagas() {
  yield all([call(onSetQueryParam)]);
}
