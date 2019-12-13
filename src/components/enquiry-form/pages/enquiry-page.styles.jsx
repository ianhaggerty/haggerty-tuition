import styled from "styled-components";

import { COLOR_WHITE_PURE, COLOR_ACCENT } from "../../../styles/variables";
import {
  MIXIN_FONT_CASLON_ITALIC,
  MIXIN_FONT_CASLON_SEMIBOLD
} from "../../../styles/mixins.styles";

export const EnquiryPageWrap = styled.main`
  position: absolute;
  top: 11rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  transition: all 250ms cubic-bezier(0.25, 0.1, 0.25, 1);
  transition-delay: 250ms;

  &.fade-enter,
  &.fade-appear {
    opacity: 0;
  }

  &.fade-enter-active,
  &.fade-appear-active {
    opacity: 1;
  }

  &.fade-exit {
    opacity: 1;
    transition-delay: 0ms;
  }

  &.fade-exit-active {
    opacity: 0;
  }
`;

export const EnquiryFormSubHeading = styled.h3`
  ${MIXIN_FONT_CASLON_SEMIBOLD}
  color: ${COLOR_ACCENT};
  font-size: 2.7rem;
  letter-spacing: .2rem;
  margin-top: 1.7rem;
`;

export const EnquiryFormParagraph = styled.p`
  ${MIXIN_FONT_CASLON_ITALIC}
  color: ${COLOR_WHITE_PURE};
  text-align: center;
  font-size: 2.7rem;
  margin-top: 2rem;
  line-height: 3.5rem;
  letter-spacing: .0rem;
`;
