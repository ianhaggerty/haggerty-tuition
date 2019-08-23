import React from "react";
import PropTypes from "prop-types";

import Button from "./button.component";

const ButtonSlide = ({ hidden, children }) => {
  let child;
  if (hidden) {
    child = children.filter(e => e.type.name === "ButtonIcon");
  } else {
    child = children;
  }

  return <Button>{child}</Button>;
};

ButtonSlide.propTypes = {
  children: PropTypes.array.isRequired,
  hidden: PropTypes.bool
};

export default ButtonSlide;
