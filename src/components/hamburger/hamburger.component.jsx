import React from "react";
import PropTypes from "prop-types";

import { Wrap, Line } from "./hamburger.styles";

const Hamburger = ({ icon, ...props }) => {
  return (
    <Wrap {...props} className={icon}>
      <Line />
      <Line />
      <Line />
    </Wrap>
  );
};

Hamburger.propTypes = {
  icon: PropTypes.oneOf(["menu", "close"])
};

export default Hamburger;
