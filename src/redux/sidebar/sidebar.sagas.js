import { all, call, put, takeEvery } from "redux-saga/effects";
import sidebarActionTypes from "./sidebar.types";
import { setQueryParam } from "../query-string/query-string.actions";

export function* openSidebar() {
  yield put(setQueryParam("sidebar", true));
}

export function* onSidebarOpen() {
  yield takeEvery(sidebarActionTypes.OPEN_SIDEBAR, openSidebar);
}

export function* closeSidebar() {
  yield put(setQueryParam("sidebar", undefined));
}

export function* onSidebarClose() {
  yield takeEvery(sidebarActionTypes.CLOSE_SIDEBAR, closeSidebar);
}

export function* sidebarSagas() {
  yield all([call(onSidebarClose), call(onSidebarOpen)]);
}
