import React from "react";

import { Circle, Img } from "./avatar.styles";
import selfy from "../../assets/photos/compressed/avatar.jpg";

const Avatar = props => (
  <Circle {...props}>
    <Img src={selfy} alt="Avatar" />
  </Circle>
);

export default Avatar;
