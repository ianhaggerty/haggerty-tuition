import { all, call, put } from "redux-saga/effects";
import { closeSidebar, openSidebar } from "./sidebar.actions";

export function* onSidebarOpen() {
  yield put(openSidebar());
}

export function* onSidebarClose() {
  yield put(closeSidebar());
}

export function* sidebarSagas() {
  yield all([call(onSidebarClose)]);
}
