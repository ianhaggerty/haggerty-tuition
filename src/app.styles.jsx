import styled from "styled-components";
import { rgba } from "polished";

import {
  APP_HEIGHT,
  APP_WIDTH,
  BOX_SHADOW_DIFFUSE,
  COLOR_WHITE_PURE,
  SIDEBAR_WIDTH_CLOSED
} from "./styles/variables";
import {
  MIXIN_CENTER_FLEX_CHILDREN,
  MIXIN_CENTER_ABSOLUTE_SELF
} from "./styles/mixins.styles";

export const Window = styled.div`
  background-color: ${rgba(COLOR_WHITE_PURE, 0.96)};
  box-shadow: ${BOX_SHADOW_DIFFUSE};

  width: ${APP_WIDTH};
  max-width: 100vw;

  height: ${APP_HEIGHT};
  max-height: 100vh;

  display: flex;
  flex-direction: column;

  position: relative;
`;
