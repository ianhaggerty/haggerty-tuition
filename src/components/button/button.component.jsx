import React from "react";
import PropTypes from "prop-types";

import kebabCase from "kebab-case";

import colors from "../../styles/colors";
import theme from "../../styles/theme.styles";

import { StyledButton } from "./button.styles";

const Button = props => (
  <StyledButton {...props} className={props.active ? "active" : "inactive"} />
);

Button.defaultProps = {
  backgroundColor: "primary",
  active: true,
  size: theme.navItemHeight
};

Button.propTypes = {
  backgroundColor: PropTypes.oneOf(Object.keys(colors).map(kebabCase)),
  active: PropTypes.bool,
  size: PropTypes.string
};

export default Button;
