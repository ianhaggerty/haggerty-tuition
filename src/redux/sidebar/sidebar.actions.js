import sidebarActionTypes from "./sidebar.types";

export const openSidebar = () => ({
  type: sidebarActionTypes.OPEN
});

export const closeSidebar = () => ({
  type: sidebarActionTypes.CLOSE
});

export const toggleSidebar = () => ({
  type: sidebarActionTypes.TOGGLE
});
