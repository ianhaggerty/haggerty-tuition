import React from "react";
import styled from "styled-components";

// overflow: hidden;
// display: inline-block;
// width: 10px;
// padding:0px;
// transition: .2s ease;

const StyledText = styled.span`
  &:not(:only-child):last-child {
    padding-left: 1rem;
    padding-right: 1.5rem;
  }

  &:not(:only-child):first-child {
    padding-left: 1.5rem;
    padding-right: 1rem;
  }
`;

const ButtonText = props => <StyledText {...props} />;

export default ButtonText;
