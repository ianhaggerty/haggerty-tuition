import { createSelector } from "reselect";

const selectQueryString = state => state.queryString;

export const selectOverlay = createSelector(
  [selectQueryString],
  queryString => queryString.overlay
);

export const selectOverlayOpen = createSelector(
  [selectQueryString],
  queryString => !!queryString.overlay
);

export const selectSidebarOpen = createSelector(
  [selectQueryString],
  queryString => queryString.overlay === "sidebar"
);

export const selectEnquiryFormOpen = createSelector(
  [selectQueryString],
  queryString => queryString.overlay === "enquiry-form"
);
