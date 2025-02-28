import { all, call, takeEvery, put, select } from "redux-saga/effects";
import { selectCurrentEnquiryPage } from "../enquiry-page/enquiry-page.selectors";
import { selectLastVisitedEnquiryPage } from "./enquiry-page.selectors";
import { setQueryParam } from "../query-string/query-string.actions";

import enquiryPageMap from "./enquiry-page-map";
import EnquiryPageActionTypes from "./enquiry-page.types";

const getNextPage = currPage => {
  const currPageIndex = enquiryPageMap[currPage];
  const nextPageIndex =
    currPageIndex + 1 < enquiryPageMap.length
      ? currPageIndex + 1
      : currPageIndex;
  const nextPage = enquiryPageMap[nextPageIndex];
  return nextPage;
};

export function* setNextEnquiryPage() {
  const currPage = yield select(selectCurrentEnquiryPage);
  yield put(setQueryParam("enquiry-page", getNextPage(currPage)));
}

export function* onEnquiryPageNext() {
  yield takeEvery(EnquiryPageActionTypes.ENQUIRY_PAGE_NEXT, setNextEnquiryPage);
}

const getPrevPage = currPage => {
  const currPageIndex = enquiryPageMap[currPage];
  const prevPageIndex =
    currPageIndex - 1 >= 0 ? currPageIndex - 1 : currPageIndex;
  const prevPage = enquiryPageMap[prevPageIndex];
  return prevPage;
};

export function* setPrevEnquiryPage() {
  const currPage = yield select(selectCurrentEnquiryPage);
  yield put(setQueryParam("enquiry-page", getPrevPage(currPage)));
}

export function* onEnquiryPagePrev() {
  yield takeEvery(EnquiryPageActionTypes.ENQUIRY_PAGE_PREV, setPrevEnquiryPage);
}

export function* openEnquiryPage() {
  const lastVisited = yield select(selectLastVisitedEnquiryPage);
  yield put(setQueryParam("enquiry-page", lastVisited));
}

export function* onEnquiryPageOpen() {
  yield takeEvery(EnquiryPageActionTypes.ENQUIRY_PAGE_OPEN, openEnquiryPage);
}

export function* openEnquiryClose() {
  yield put(setQueryParam("enquiry-page", undefined));
}

export function* onEnquiryPageClose() {
  yield takeEvery(EnquiryPageActionTypes.ENQUIRY_PAGE_CLOSE, openEnquiryClose);
}

export function* enquiryPageSagas() {
  yield all([
    call(onEnquiryPageNext),
    call(onEnquiryPagePrev),
    call(onEnquiryPageOpen),
    call(onEnquiryPageClose)
  ]);
}
