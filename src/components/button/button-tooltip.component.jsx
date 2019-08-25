import React from "react";

import camelcase from "camelcase";
import { withTheme } from "styled-components";

import {
  ToolTipText,
  TooltipOuterWrap,
  ToolTipInnerWrap,
  ToolTipPointer
} from "./button-tooltip.styles";

// Needs to be in a relatively positioned parent
const ButtonTooltip = ({ children, color, alignment, ...props }) => {
  const colorStr = props.theme[camelcase(["color", color])];
  return (
    <TooltipOuterWrap>
      <ToolTipInnerWrap color={colorStr}>
        <ToolTipPointer color={colorStr} />
        <ToolTipText>{children}</ToolTipText>
      </ToolTipInnerWrap>
    </TooltipOuterWrap>
  );
};

export default withTheme(ButtonTooltip);
