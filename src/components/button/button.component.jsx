import React from "react";
import PropTypes from "prop-types";

import { StyledButton } from "./button.styles";
import { SIDEBAR_ITEM_HEIGHT, COLOR_PRIMARY } from "../../styles/variables";

const Button = props => <StyledButton {...props} />;

Button.defaultProps = {
  backgroundColor: COLOR_PRIMARY,
  size: SIDEBAR_ITEM_HEIGHT,
  active: true
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  active: PropTypes.bool,
  size: PropTypes.string
};

export default Button;
