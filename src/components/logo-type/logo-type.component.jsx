import React from "react";

import { LogoBox, Title, Subtitle } from "./logo-type.styles";
import { COLOR_GREY_DARK } from "../../styles/variables";

const LogoType = ({ color = COLOR_GREY_DARK, ...props }) => (
  <LogoBox {...props}>
    <Title color={color}>Haggerty</Title>
    <Subtitle color={color}>Maths & Physics Tuition</Subtitle>
  </LogoBox>
);

export default LogoType;
