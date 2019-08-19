import React from "react";
import styled from "styled-components";

export const Paragraph = styled.p`
  font-family: museo-sans-rounded, sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 1.8rem;
  line-height: 2.7rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.colorGreyMedium};
`;
