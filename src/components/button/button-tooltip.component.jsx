import React from "react";

import {
  ToolTipText,
  TooltipOuterWrap,
  ToolTipInnerWrap,
  ToolTipPointer
} from "./button-tooltip.styles";

// Needs to be in a relatively positioned parent
const ButtonTooltip = ({ children, color, ...props }) => {
  return (
    <TooltipOuterWrap {...props}>
      <ToolTipInnerWrap color={color}>
        <ToolTipPointer color={color} />
        <ToolTipText>{children}</ToolTipText>
      </ToolTipInnerWrap>
    </TooltipOuterWrap>
  );
};

export default ButtonTooltip;
