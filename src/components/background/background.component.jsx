import React from "react";

import { BackgroundElement } from "./background.styles";

import paper from "../../assets/photos/compressed/a4-paper.jpg";

const Background = props => {
  return (
    <BackgroundElement>
      <img src={paper} alt="Background" />
    </BackgroundElement>
  );
};

export default Background;
