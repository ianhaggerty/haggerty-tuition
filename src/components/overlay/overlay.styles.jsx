import styled from "styled-components";

export const StyledOverlay = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: rgba(255, 255, 255, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  /* TODO - SVG Filter Polyfill? */
  backdrop-filter: blur(1rem);

  transition: ${props => props.theme.sidebarTransition};

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
