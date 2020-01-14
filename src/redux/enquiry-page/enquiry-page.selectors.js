import { createSelector } from "reselect";
import enquiryPageMap from "./enquiry-page-map";
import { selectQueryString } from "../query-string/query-string.selectors";

export const selectEnquiryPage = state => state.enquiryPage;

export const selectCurrentEnquiryPage = createSelector(
  [selectQueryString],
  queryString => queryString["enquiry-page"]
);

export const selectEnquiryPageOpen = createSelector(
  [selectCurrentEnquiryPage],
  enquiryPage => !!enquiryPage
);

export const selectLastVisitedEnquiryPage = createSelector(
  [selectEnquiryPage],
  enquiryPage => enquiryPage.lastVisited
);

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

/* Form Validation */
// Contact
const selectForm = state => state.form;
const selectContactForm = createSelector(
  [selectForm],
  form => form && form.contact
);
export const selectContactFormErrors = createSelector(
  [selectContactForm],
  contactForm => contactForm && contactForm.syncErrors
);
export const selectContactFormValidated = createSelector(
  [selectContactFormErrors],
  errors => !(errors && Object.keys(errors).length)
);

// Location
const selectLocationForm = createSelector(
  [selectForm],
  form => form && form.location
);
export const selectLocationFormErrors = createSelector(
  [selectLocationForm],
  locationForm => locationForm && locationForm.syncErrors
);
export const selectLocationFormValidated = createSelector(
  [selectLocationFormErrors],
  errors => !(errors && Object.keys(errors).length)
);

// Details
const selectDetailsForm = createSelector(
  [selectForm],
  form => form && form.details
);
export const selectDetailsFormErrors = createSelector(
  [selectDetailsForm],
  detailsForm => detailsForm && detailsForm.syncErrors
);
export const selectDetailsFormValidated = createSelector(
  [selectDetailsFormErrors],
  errors => !(errors && Object.keys(errors).length)
);
