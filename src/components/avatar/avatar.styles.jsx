import styled from "styled-components";

import { GRID_COL_WIDTH, BOX_SHADOW_FLAT } from "../../styles/variables";
import { MIXIN_CENTER_FLEX_CHILDREN } from "../../styles/mixins.styles";

export const Circle = styled.div`
  width: ${GRID_COL_WIDTH};
  height: ${GRID_COL_WIDTH};
  border-radius: 50%;
  overflow: hidden;
  position: relative;

  box-shadow: ${BOX_SHADOW_FLAT};

  ${MIXIN_CENTER_FLEX_CHILDREN}
`;

export const Img = styled.img`
  width: ${GRID_COL_WIDTH};
  height: ${GRID_COL_WIDTH};

  /* safari render bug - need 50% here so no overflow */
  border-radius: 50%;

  position: absolute;
  transition: 1s ease;

  ${Circle}:hover & {
    transform: scale(1.2);
    transition: 16s linear;
  }
`;
