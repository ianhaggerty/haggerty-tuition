import React from "react";

import selfy from "../../assets/photos/avatar.jpg";
import selfyBW from "../../assets/photos/avatarBW.jpg";

import { AvatarCircle } from "./avatar.styles";

const Avatar = props => (
  <AvatarCircle {...props}>
    <img src={selfy} alt="Avatar" />
    <img src={selfyBW} alt="Avatar" />
  </AvatarCircle>
);

export default Avatar;
