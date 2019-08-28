import React from "react";
import PropTypes from "prop-types";

import camelCase from "camelcase";

import iconDict from "./icon.dictionary";
import { ICON_WIDTH, ICON_COLOR } from "../../styles/variables";

const Icon = ({ name, color, size, ...props }) => {
  const IconSVG = iconDict[camelCase(name)];

  return <IconSVG style={{ fill: color, width: size }} {...props} />;
};

Icon.defaultProps = {
  color: ICON_COLOR,
  size: ICON_WIDTH
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string
};

export default Icon;
