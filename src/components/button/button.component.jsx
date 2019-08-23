import React from "react";
import PropTypes from "prop-types";

import colors from "../../styles/colors";

import { StyledButton } from "./button.styles";

const Button = props => <StyledButton {...props} />;

Button.defaultProps = {
  backgroundColor: "primary"
};

Button.propTypes = {
  backgroundColor: PropTypes.oneOf(Object.keys(colors))
};

export default Button;
