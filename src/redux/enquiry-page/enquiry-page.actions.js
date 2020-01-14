import enquiryPageActionTypes from "./enquiry-page.types";

export const setVisited = page => ({
  type: enquiryPageActionTypes.ENQUIRY_PAGE_SET_VISITED,
  payload: page
});

export const setValid = page => ({
  type: enquiryPageActionTypes.ENQUIRY_PAGE_SET_VALID,
  payload: page
});

export const setInvalid = page => ({
  type: enquiryPageActionTypes.ENQUIRY_PAGE_SET_INVALID,
  payload: page
});

export const nextEnquiryPage = () => ({
  type: enquiryPageActionTypes.ENQUIRY_PAGE_NEXT
});

export const prevEnquiryPage = () => ({
  type: enquiryPageActionTypes.ENQUIRY_PAGE_PREV
});

export const openEnquiryPage = () => ({
  type: enquiryPageActionTypes.ENQUIRY_PAGE_OPEN
});

export const closeEnquiryPage = () => ({
  type: enquiryPageActionTypes.ENQUIRY_PAGE_CLOSE
});
