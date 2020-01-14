import QueryStringActionTypes from "./query-string.types";

export const setQueryParam = (key, value) => ({
  type: QueryStringActionTypes.SET_QUERY_PARAM,
  payload: {
    key,
    value
  }
});
