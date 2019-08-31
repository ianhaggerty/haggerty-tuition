import overlayActionTypes from "./overlay.types";

export const openOverlay = () => ({
  type: overlayActionTypes.OVERLAY_OPEN
});

export const closeOverlay = () => ({
  type: overlayActionTypes.OVERLAY_CLOSE
});
