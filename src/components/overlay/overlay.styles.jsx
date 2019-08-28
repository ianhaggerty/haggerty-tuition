import styled from "styled-components";

import { SIDEBAR_TRANSITION } from "../../styles/variables";

export const StyledOverlay = styled.div`
  width: 100%;
  height: 100%;

  background-color: rgba(255, 255, 255, 0.7);

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  /* TODO - SVG Filter Polyfill? */
  backdrop-filter: blur(1rem);

  transition: ${SIDEBAR_TRANSITION};

  &.fade-enter {
    opacity: 0;
  }

  &.fade-enter-active {
    opacity: 1;
  }

  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit-active {
    opacity: 0;
  }
`;
