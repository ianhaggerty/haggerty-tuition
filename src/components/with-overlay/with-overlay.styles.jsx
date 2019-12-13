import styled from "styled-components";

import { SIDEBAR_WIDTH_CLOSED } from "../../styles/variables";

export const TRANSITION_TIME = 100;

export const StyledOverlay = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  z-index: 1000;

  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.5);

  backdrop-filter: blur(1rem);
  transition: ${TRANSITION_TIME}ms ease;

  padding-left: ${SIDEBAR_WIDTH_CLOSED};

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

export const ClickableOverlay = styled.div`
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 100%;
`;
