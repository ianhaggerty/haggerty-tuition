import React from "react";
import { connect } from "react-redux";

import { BackgroundElement } from "./background.styles";

import paper from "../../assets/photos/a4-paper.jpg";

const BG_PATH = "assets/photos/backgrounds";

const Background = props => {
  return (
    <BackgroundElement>
      <img src={paper} />
    </BackgroundElement>
  );
};

export default Background;
