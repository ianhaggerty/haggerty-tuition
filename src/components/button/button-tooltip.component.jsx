import React from "react";

import camelcase from "camelcase";
import { withTheme } from "styled-components";

import {
  ToolTipText,
  ToolTipWrap,
  ToolTipPointer
} from "./button-tooltip.styles";

// Needs to be in a relatively positioned parent
const ButtonTooltip = ({ children, color, alignment, ...props }) => {
  const colorStr = props.theme[camelcase(["color", color])];
  return (
    <div style={{ position: "absolute" }}>
      <ToolTipWrap color={colorStr} alignment={alignment}>
        <ToolTipPointer color={colorStr} className={alignment} />
        <ToolTipText>{children}</ToolTipText>
      </ToolTipWrap>
    </div>
  );
};

export default withTheme(ButtonTooltip);
