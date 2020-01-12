import React from "react";
import styled from "styled-components";

const StyledText = styled.span`
  &:not(:only-child):last-child {
    padding-left: 1rem;
    padding-right: 1.5rem;
  }

  &:not(:only-child):first-child {
    padding-left: 2.2rem;
    padding-right: 1rem;
  }

  &:not(:only-child):first-child ~ * {
    margin-right: 1.1rem !important;
  }
`;

const ButtonText = props => <StyledText {...props} />;

export default ButtonText;
