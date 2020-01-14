import sidebarActionTypes from "./sidebar.types";

export const openSidebar = () => ({
  type: sidebarActionTypes.OPEN_SIDEBAR
});

export const closeSidebar = () => ({
  type: sidebarActionTypes.CLOSE_SIDEBAR
});
