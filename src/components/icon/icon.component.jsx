import React from "react";
import PropTypes from "prop-types";

import { withTheme } from "styled-components";
import colors from "../../styles/colors.json";

import { getIconSVG, iconDict } from "./icons.dict";
import kebabCase from "kebab-case";

const Icon = ({ name, color, size, theme, ...otherProps }) => {
  const IconSVG = getIconSVG(name);
  const iconColor = color || theme.iconColor;
  const iconSize = size || theme.iconWidth;

  return (
    <IconSVG style={{ fill: iconColor, width: iconSize }} {...otherProps} />
  );
};

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(iconDict).map(kebabCase)).isRequired,
  color: PropTypes.oneOf(Object.keys(colors)),
  size: PropTypes.string
};

export default withTheme(Icon);
