import styled from "styled-components";

import { COLOR_GREY_DARK, COLOR_WHITE_PURE } from "../../styles/variables";
import { MIXIN_FONT_CASLON_ITALIC } from "../../styles/mixins.styles";

export const EnquiryFormWrapper = styled.div`
  position: relative;

  background-color: ${COLOR_GREY_DARK};
  width: 90rem;
  height: 72rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EnquiryFormCloseButton = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
`;

export const EnquiryPageWrap = styled.main`
  position: absolute;
  top: 10rem;

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
