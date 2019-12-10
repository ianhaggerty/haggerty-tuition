import styled from "styled-components";

import {
  COLOR_GREY_DARK,
  COLOR_WHITE_PURE,
  COLOR_ACCENT
} from "../../styles/variables";
import {
  MIXIN_FONT_CASLON_ITALIC,
  MIXIN_FONT_CASLON_SEMIBOLD
} from "../../styles/mixins.styles";

export const EnquiryFormWrapper = styled.div`
  position: fixed;
  background-color: ${COLOR_GREY_DARK};
  width: 80rem;
  height: 65rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 300;

  transform-origin: bottom center;
  transition: all 600ms ease;

  &.grow-enter {
    opacity: 0;
    transform: scale(0);
  }

  &.grow-enter-active {
    opacity: 1;
    transform: scale(1);
  }

  &.grow-exit {
    opacity: 1;
    transform: scale(1);
  }

  &.grow-exit-active {
    opacity: 0;
    transform: scale(0);
  }
`;

export const EnquiryFormHeader = styled.header`
  width: 100%;
  ${MIXIN_FONT_CASLON_ITALIC}

  color: ${COLOR_WHITE_PURE};
  text-align: center;
  font-size: 3.5rem;
  letter-spacing: .3rem;
  margin-top: 4rem;
`;

export const Line = styled.span`
  width: 16rem;
  height: 0.1rem;
  background-color: ${COLOR_WHITE_PURE};
  margin: 0 2rem;
  display: inline-block;
  position: relative;
  bottom: 1rem;
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

  transition: all 500ms cubic-bezier(0.25, 0.1, 0.25, 1);
  transition-delay: 500ms;
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
  font-size: 2.4rem;
  letter-spacing: .1rem;
  margin-top: 3rem;
`;

export const EnquiryFormParagraph = styled.p`
  ${MIXIN_FONT_CASLON_ITALIC}
  color: ${COLOR_WHITE_PURE};
  text-align: center;
  font-size: 2.5rem;
  margin-top: 1.9rem;
  line-height: 3.5rem;
`;
