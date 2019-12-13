import { createSelector } from "reselect";

const selectQueryString = state => state.queryString;

export const selectSidebarOpen = createSelector(
  [selectQueryString],
  queryString => queryString.sidebar === "true"
);

export const selectEnquiryFormOpen = createSelector(
  [selectQueryString],
  queryString => queryString["enquiry-form"] === "true"
);
