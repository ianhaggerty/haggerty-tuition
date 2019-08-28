import styled from "styled-components";

import { SIDEBAR_ITEM_HEIGHT } from "../../styles/variables";
import { MIXIN_CENTER_FLEX_CHILDREN } from "../../styles/mixins.styles";

export const ButtonWithTooltip = styled.div`
  position: relative;
  ${MIXIN_CENTER_FLEX_CHILDREN}
`;

export const StyledNavigator = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(${SIDEBAR_ITEM_HEIGHT} * 3.75);
  position: absolute;
  bottom: calc(${SIDEBAR_ITEM_HEIGHT} * 0.5);

  left: 50%;
  transform: translateX(-50%);
`;
