import React from "react";
import PropTypes from "prop-types";

import { StyledInlineButton } from "./inline-button.styles";
import colors from "../../styles/colors.json";
import kebabCase from "kebab-case";

const InlineButton = ({ children, color, ...otherProps }) => (
  <StyledInlineButton color={color} {...otherProps}>
    {children}
  </StyledInlineButton>
);

InlineButton.propTypes = {
  color: PropTypes.oneOf(Object.keys(colors).map(kebabCase))
};

export default InlineButton;
