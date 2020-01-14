import styled, { css } from "styled-components";

import { COLOR_WHITE_PURE, COLOR_ACCENT } from "../../../styles/variables";
import {
  MIXIN_FONT_CASLON_NORMAL,
  MIXIN_FONT_CASLON_ITALIC,
  MIXIN_FONT_CASLON_SEMIBOLD
} from "../../../styles/mixins.styles";

export const EnquiryPageWrap = styled.main`
  position: absolute;
  top: 0rem;

  transition: all 300ms cubic-bezier(0.25, 0.1, 0.25, 1);
  transition-delay: 300ms;

  /* transition: 400ms linear; */

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

export const subHeadingFontStyles = css`
  ${MIXIN_FONT_CASLON_SEMIBOLD}
  color: ${COLOR_ACCENT};
  font-size: 2.7rem;
  letter-spacing: .2rem;
  margin-top: 1.7rem;
`;

export const EnquiryFormSubHeading = styled.h3`
  ${subHeadingFontStyles}
`;

export const messageFontStyles = css`
  ${MIXIN_FONT_CASLON_ITALIC}
  font-size: 2.7rem;
  margin-top: 2rem;
  line-height: 3.5rem;
`;

export const EnquiryFormMessage = styled.p`
 ${messageFontStyles}
  color: ${COLOR_WHITE_PURE};
`;

export const EnquiryFormParagraph = styled.p`
 ${MIXIN_FONT_CASLON_NORMAL}
  color: ${COLOR_WHITE_PURE};
  font-size: 2.5rem;
  line-height: 3.3rem;
  margin-top: 2rem;
`;

export const EnquiryFormHighlight = styled.i`
  ${messageFontStyles}
  color: ${COLOR_ACCENT}
`;

export const EnquiryFormSignature = styled.h3`
  ${MIXIN_FONT_CASLON_NORMAL}
  color: ${COLOR_ACCENT};
  font-size: 2.7rem;
  letter-spacing: .0rem;
  margin-top: 1.7rem;
`;

export const headerFontStyles = css`
  ${MIXIN_FONT_CASLON_ITALIC}
  color: ${COLOR_WHITE_PURE};
  font-size: 3.5rem;
  letter-spacing: .3rem;
`;
export const EnquiryFormHeader = styled.header`
  ${headerFontStyles}
  width: 100%;
  text-align: center;
  margin-top: 4rem;
`;

export const EnquiryFormHeaderLine = styled.span`
  width: 21rem;
  height: 0.1rem;
  background-color: ${COLOR_WHITE_PURE};
  margin: 0 2rem;
  display: inline-block;
  position: relative;
  bottom: 1rem;
`;
