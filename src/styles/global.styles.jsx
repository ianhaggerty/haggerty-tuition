import { createGlobalStyle } from "styled-components";

import {
  COLOR_GREY_DARK,
  COLOR_PRIMARY,
  COLOR_WHITE_PURE,
  SIDEBAR_WIDTH_CLOSED
} from "./variables";
import {
  MIXIN_FONT_MUSEO_NORMAL,
  MIXIN_CENTER_FLEX_CHILDREN
} from "./mixins.styles";

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    /* This defines what 1rem is */
    font-size: 62.5%; // 1 rem == 10px;
  }

  body {
    ${MIXIN_FONT_MUSEO_NORMAL}
    color: ${COLOR_GREY_DARK};
    line-height: 1.7;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  ::selection {
    background-color: ${COLOR_PRIMARY};
    color: ${COLOR_WHITE_PURE};
  }

  #root {
    height: 100vh;
    padding-left: ${SIDEBAR_WIDTH_CLOSED};
    ${MIXIN_CENTER_FLEX_CHILDREN};
  }
`;
