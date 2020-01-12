import QueryStringActionTypes from "./query-string.types";

export const setQueryParam = (key, value) => ({
  type: QueryStringActionTypes.SET_QUERY_STRING,
  payload: {
    key,
    value
  }
});

export const openSideBar = () => setQueryParam("sidebar", "true");
export const closeSidebar = () => setQueryParam("sidebar", undefined);

export const openEnquiryForm = () => setQueryParam("enquiry-page", "true");
export const closeEnquiryForm = () => setQueryParam("enquiry-page", undefined);
