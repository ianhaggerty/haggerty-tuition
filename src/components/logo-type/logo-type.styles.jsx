import styled from "styled-components";

import { COLOR_GREY_DARK } from "../../styles/variables";
import {
  MIXIN_FONT_CASLON_NORMAL,
  MIXIN_FONT_CASLON_BOLD_ITALIC
} from "../../styles/mixins.styles";

export const LogoBox = styled.header`
  text-align: center;
  margin-top: 4rem;
  transform-origin: top;
  transform: scale(1.08);
`;

export const Title = styled.h1`
  ${MIXIN_FONT_CASLON_NORMAL}
  text-transform: uppercase;
  font-size: 4rem;
  letter-spacing: 6.4rem;
  margin-right: -6.4rem;
  color: ${COLOR_GREY_DARK};
`;

export const Subtitle = styled.h1`
  ${MIXIN_FONT_CASLON_BOLD_ITALIC}
  font-size: 6.4rem;
  margin-top: -3.2rem;
  color: ${COLOR_GREY_DARK};
`;
