import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Button from "./button.component";

const StyledButtonSlide = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;

  svg,
  span {
    padding: 0 !important;
    margin: 0 !important;
  }

  span {
    box-sizing: border-box;
    text-align: left;
    display: inline-block;
    transition: 0.4s ease;
    overflow: hidden;

    width: ${props => (props.hidden ? "0" : props.width)};
    opacity: ${props => (props.hidden ? "0" : "1")};
  }
`;

const ButtonSlide = ({ hidden, width, children, ...otherProps }) => {
  // let child;
  // if (hidden) {
  //   child = children.filter(e => e.type.name === "ButtonIcon");
  // } else {
  //   child = children;
  // }

  return (
    <StyledButtonSlide hidden={hidden} width={width} {...otherProps}>
      {children}
    </StyledButtonSlide>
  );
};

ButtonSlide.propTypes = {
  children: PropTypes.array.isRequired,
  hidden: PropTypes.bool
};

export default ButtonSlide;
