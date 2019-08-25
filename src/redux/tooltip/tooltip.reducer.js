import TooltipActionTypes from "./tooltip.types";

const INITIAL_STATE = {
  active: false
};

const tooltipReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TooltipActionTypes.SET_ACTIVE:
      return {
        ...state,
        active: true
      };
    case TooltipActionTypes.SET_INACTIVE:
      return {
        ...state,
        active: false
      };
    default:
      return state;
  }
};

export default tooltipReducer;
