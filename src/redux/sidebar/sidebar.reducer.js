import SidebarActionTypes from "./sidebar.types";

const INITIAL_STATE = {
  open: false
};

const sidebarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SidebarActionTypes.SIDEBAR_OPEN:
      return {
        ...state,
        open: true
      };
    case SidebarActionTypes.SIDEBAR_CLOSE:
      return {
        ...state,
        open: false
      };
    default:
      return state;
  }
};

export default sidebarReducer;
