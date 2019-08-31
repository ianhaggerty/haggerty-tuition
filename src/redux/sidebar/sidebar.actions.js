import sidebarActionTypes from "./sidebar.types";

export const openSidebar = () => ({
  type: sidebarActionTypes.SIDEBAR_OPEN
});

export const closeSidebar = () => ({
  type: sidebarActionTypes.SIDEBAR_CLOSE
});

export const toggleSidebar = () => ({
  type: sidebarActionTypes.SIDEBAR_TOGGLE
});
