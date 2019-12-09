import styled from "styled-components";

export const StyledOverlay = styled.div`
  width: 100%;
  height: 100%;

  background-color: rgba(255, 255, 255, 0.6);
  cursor: pointer;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 250;

  /* TODO - SVG Filter Polyfill? */
  backdrop-filter: blur(1rem);

  transition: 0.3s ease;

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
