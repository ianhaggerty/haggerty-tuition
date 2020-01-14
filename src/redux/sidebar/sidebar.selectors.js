import { createSelector } from "reselect";

import { selectQueryString } from "../query-string/query-string.selectors";

export const selectSidebarOpen = createSelector(
  [selectQueryString],
  queryString => queryString.sidebar === "true"
);
