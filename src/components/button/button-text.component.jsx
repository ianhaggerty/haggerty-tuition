import React from "react";
import styled from "styled-components";

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
