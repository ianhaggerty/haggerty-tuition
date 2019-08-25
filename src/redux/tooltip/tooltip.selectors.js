import { createSelector } from "reselect";

const selectTooltip = state => state.tooltip;

export const selectTooltipActive = createSelector(
  [selectTooltip],
  tooltip => tooltip.active
);
