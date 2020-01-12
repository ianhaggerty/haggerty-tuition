import { createSelector } from "reselect";
import enquiryPageMap from "./enquiry-page-map";

export const selectEnquiryPage = state => state.enquiryPage;

export const selectInvalidEnquiryPages = createSelector(
  [selectEnquiryPage],
  enquiryPage => enquiryPage.invalid
);

export const selectVisitedEnquiryPages = createSelector(
  [selectEnquiryPage],
  enquiryPage => enquiryPage.visited
);

export const selectMaxVisitedEnquiryPageIndex = createSelector(
  [selectVisitedEnquiryPages],
  visitedPages =>
    Math.max.apply(
      this,
      visitedPages.map(page => enquiryPageMap[page]).concat(0)
    )
);

export const selectMaxInvalidEnquiryPageIndex = createSelector(
  [selectInvalidEnquiryPages],
  invalidPages =>
    Math.max.apply(
      this,
      invalidPages.map(page => enquiryPageMap[page]).concat(0)
    )
);
