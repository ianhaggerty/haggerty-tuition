import { createSelector } from "reselect";

const selectSidebar = state => state.sidebar;

export const selectSidebarOpen = createSelector(
  [selectSidebar],
  sidebar => sidebar.open
);
