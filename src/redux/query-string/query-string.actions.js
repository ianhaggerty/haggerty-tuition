import QueryStringActionTypes from "./query-string.types";

export const setQueryParam = (key, value) => ({
  type: QueryStringActionTypes.SET_QUERY_STRING,
  payload: {
    key,
    value
  }
});

export const openSideBar = () => setQueryParam("overlay", "sidebar");
export const openEnquiryForm = () => setQueryParam("overlay", "enquiry-form");
export const closeOverlay = () => setQueryParam("overlay", undefined);
