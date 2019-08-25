import {
  put,
  delay,
  takeLatest,
  take,
  fork,
  cancel,
  call,
  all
} from "redux-saga/effects";

import { setActive, setInactive } from "./tooltip.actions";
import TooltipActionTypes from "./tooltip.types";

export function* setActiveTimer() {
  yield delay(2000);
  yield put(setActive());
}

export function* startActiveTimer() {
  const setActiveTask = yield fork(setActiveTimer);

  yield take(TooltipActionTypes.CANCEL_ACTIVE_TIMER);
  yield cancel(setActiveTask);
}

export function* setInactiveTimer() {
  yield delay(1000);
  yield put(setInactive());
}

export function* startInactiveTimer() {
  const setInactiveTask = yield fork(setInactiveTimer);

  yield take(TooltipActionTypes.CANCEL_INACTIVE_TIMER);
  yield cancel(setInactiveTask);
}

export function* onTooltipStartActiveTimer() {
  yield takeLatest(TooltipActionTypes.START_ACTIVE_TIMER, startActiveTimer);
}

export function* onTooltipStartInactiveActiveTimer() {
  yield takeLatest(TooltipActionTypes.START_INACTIVE_TIMER, startInactiveTimer);
}

export function* tooltipSagas() {
  yield all([
    call(onTooltipStartActiveTimer),
    call(onTooltipStartInactiveActiveTimer)
  ]);
}
