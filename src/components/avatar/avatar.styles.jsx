import styled, { css } from "styled-components";

import { GRID_COL_WIDTH, BOX_SHADOW_FLAT } from "../../styles/variables";
import { MIXIN_CENTER_FLEX_CHILDREN } from "../../styles/mixins.styles";

const MIXIN_SIZE = css`
  width: ${GRID_COL_WIDTH};
  height: ${GRID_COL_WIDTH};
  border-radius: 50%;
`;

export const Circle = styled.div`
  ${MIXIN_SIZE}
  overflow: hidden;
  position: relative;

  box-shadow: ${BOX_SHADOW_FLAT};

  ${MIXIN_CENTER_FLEX_CHILDREN}
`;

export const Img = styled.img`
  ${MIXIN_SIZE}

  /* position: absolute; */
  transition: 1s ease;

  ${Circle}:hover & {
    transform: scale(1.2);
    transition: 16s linear;
  }
`;
