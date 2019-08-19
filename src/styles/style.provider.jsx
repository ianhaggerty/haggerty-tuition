import React from "react";

import { GlobalStyle } from "./global.styles";
import { UtilityStyle } from "./utility.styles";
import { ResetStyle } from "./reset.styles";

const StyleProvider = () => (
  <React.Fragment>
    <GlobalStyle />
    <UtilityStyle />
    <ResetStyle />
  </React.Fragment>
);

export default StyleProvider;
