import React from "react";
import PropTypes from "prop-types";

import { iconDict } from "../icon/icons.dict";
import colors from "../../styles/colors";

import { StyledButton } from "./button.styles";

const Button = props => <StyledButton {...props} />;

Button.defaultProps = {
  backgroundColor: "primary",
  revealOnHover: false,
  size: "medium"
};

Button.propTypes = {
  backgroundColor: PropTypes.oneOf(Object.keys(colors)),
  revealOnHover: PropTypes.bool,
  size: PropTypes.oneOf(["medium", "large"])
};

export default Button;
