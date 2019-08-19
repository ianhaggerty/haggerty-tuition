import React from "react";
import styled from "styled-components";

export const Heading = styled.h3`
  font-family: museo-sans-rounded, sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 2.4rem;
  color: ${props => props.theme.colorGreyMedium};
  margin-bottom: 1rem;
`;
