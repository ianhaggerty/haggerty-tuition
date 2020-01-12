import { createSelector } from "reselect";
import qs from "query-string";

const selectQueryString = state => qs.parse(state.router.location.search);

export const selectSidebarOpen = createSelector(
  [selectQueryString],
  queryString => queryString.sidebar === "true"
);

export const selectCurrentEnquiryPage = createSelector(
  [selectQueryString],
  queryString => queryString["enquiry-page"]
);

export const selectEnquiryPageOpen = createSelector(
  [selectCurrentEnquiryPage],
  enquiryPage => !!enquiryPage
);
