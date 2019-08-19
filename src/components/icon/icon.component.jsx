import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";

import { getIconSVG, iconDict } from "./icons.dict";

const Icon = ({ name, theme, ...otherProps }) => {
  const IconSVG = getIconSVG(name);

  return (
    <IconSVG
      fill={theme.iconColor}
      {...otherProps}
      style={{ width: theme.iconWidth }}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(iconDict)).isRequired
};

export default withTheme(Icon);
