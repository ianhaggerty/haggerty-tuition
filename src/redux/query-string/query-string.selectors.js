import qs from "query-string";

export const selectQueryString = state =>
  qs.parse(state.router.location.search);
