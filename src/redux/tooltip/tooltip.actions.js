import tooltipActionTypes from "./tooltip.types";

export const setActive = () => ({
  type: tooltipActionTypes.SET_ACTIVE
});

export const setInactive = () => ({
  type: tooltipActionTypes.SET_INACTIVE
});

export const startActiveTimer = () => ({
  type: tooltipActionTypes.START_ACTIVE_TIMER
});

export const cancelActiveTimer = () => ({
  type: tooltipActionTypes.CANCEL_ACTIVE_TIMER
});

export const startInactiveTimer = () => ({
  type: tooltipActionTypes.START_INACTIVE_TIMER
});

export const cancelInactiveTimer = () => ({
  type: tooltipActionTypes.CANCEL_INACTIVE_TIMER
});
