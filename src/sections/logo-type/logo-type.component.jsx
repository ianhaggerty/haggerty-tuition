import React from "react";
import { LogoBox, Title, Subtitle } from "./logo-type.styles";

const LogoType = () => (
  <LogoBox
    style={{
      gridColumn: "col-left-start / col-right-end",
      gridRow: "header-start / header-end"
    }}
  >
    <Title>Haggerty</Title>
    <Subtitle>Maths & Physics Tuition</Subtitle>
  </LogoBox>
);

export default LogoType;
