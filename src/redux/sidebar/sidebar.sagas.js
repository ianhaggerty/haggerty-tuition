import { call, all, takeLatest, put, select } from "redux-saga/effects";

import SidebarActionTypes from "./sidebar.types";
import {
  closeSidebar as closeSidebarAction,
  openSidebar as openSidebarAction
} from "./sidebar.actions";
import { selectSidebarOpen } from "./sidebar.selectors";

import {
  openOverlay as openOverlayAction,
  closeOverlay as closeOverlayAction
} from "../overlay/overlay.actions";

export function* closeOverlay() {
  yield put(closeOverlayAction());
}

export function* openOverlay() {
  yield put(openOverlayAction());
}

export function* toggleSidebar() {
  const sidebarOpen = yield select(selectSidebarOpen);

  if (sidebarOpen) {
    yield put(closeSidebarAction());
  } else {
    yield put(openSidebarAction());
  }
}

export function* onSidebarClose() {
  yield takeLatest(SidebarActionTypes.SIDEBAR_CLOSE, closeOverlay);
}

export function* onSidebarOpen() {
  yield takeLatest(SidebarActionTypes.SIDEBAR_OPEN, openOverlay);
}

export function* onSidebarToggle() {
  yield takeLatest(SidebarActionTypes.SIDEBAR_TOGGLE, toggleSidebar);
}

export function* sidebarSagas() {
  yield all([call(onSidebarOpen), call(onSidebarClose), call(onSidebarToggle)]);
}
