import { css } from "styled-components";

export const fadeTransition = (time = 200) => css`
  /* transition: all ${time}ms cubic-bezier(0.25, 0.1, 0.25, 1); */
  transition: opacity ${time}ms ease;

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

export const widthTransition = (time = 300) => css`
  transition: width ${time}ms ease;

  &.width-enter {
    width: calc(100%);
  }

  &.width-enter-active {
    width: calc(100%);
  }

  &.width-exit {
    width: calc(100%);
  }

  &.width-exit-active {
    width: calc(0%);
  }
`;
