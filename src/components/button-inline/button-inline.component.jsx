import React from "react";
import PropTypes from "prop-types";

import { StyledButtonInline } from "./button-inline.styles";
import { COLOR_PRIMARY } from "../../styles/variables";

const ButtonInline = ({ children, color, ...props }) => (
  <StyledButtonInline color={color} {...props}>
    {children}
  </StyledButtonInline>
);

ButtonInline.defaultProps = {
  color: COLOR_PRIMARY
};

ButtonInline.propTypes = {
  color: PropTypes.string
};

export default ButtonInline;
