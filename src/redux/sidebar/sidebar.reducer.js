import SidebarActionTypes from "./sidebar.types";

const INITIAL_STATE = {
  open: false
};

const sidebarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SidebarActionTypes.OPEN:
      return {
        ...state,
        open: true
      };
    case SidebarActionTypes.CLOSE:
      return {
        ...state,
        open: false
      };
    case SidebarActionTypes.TOGGLE:
      return {
        ...state,
        open: !state.open
      };
    default:
      return state;
  }
};

export default sidebarReducer;
