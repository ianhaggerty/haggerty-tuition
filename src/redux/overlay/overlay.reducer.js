import OverlayActionTypes from "./overlay.types";

const INITIAL_STATE = {
  visible: false
};

const overlayReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OverlayActionTypes.OVERLAY_OPEN:
      return {
        ...state,
        visible: true
      };
    case OverlayActionTypes.OVERLAY_CLOSE:
      return {
        ...state,
        visible: false
      };
    default:
      return state;
  }
};

export default overlayReducer;
