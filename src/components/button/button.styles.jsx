import styled, { css } from "styled-components";

import {
  MIXIN_CENTER_FLEX_CHILDREN,
  MIXIN_FONT_MUSEO_BOLD
} from "../../styles/mixins.styles";

import {
  COLOR_WHITE_TINT,
  BOX_SHADOW_FLAT,
  BOX_SHADOW_ELAVATED,
  BOX_SHADOW_DEPRESSED
} from "../../styles/variables";

const activeStyles = css`
  &:hover {
    transform: scale(1.03);
    box-shadow: ${BOX_SHADOW_ELAVATED};
  }

  &:active {
    transform: scale(0.98);
    box-shadow: ${BOX_SHADOW_DEPRESSED};
  }
`;

export const StyledButton = styled.button`
  background-color: ${props => props.backgroundColor};
  border-radius: calc(${props => props.size} / 2);
  outline: none;

  ${MIXIN_CENTER_FLEX_CHILDREN}
  ${MIXIN_FONT_MUSEO_BOLD}
  font-size: 1.7rem;

  position: relative;
  height: ${props => props.size};
  min-width: ${props => props.size};

  color: ${COLOR_WHITE_TINT};
  box-shadow: ${BOX_SHADOW_FLAT};

  cursor: ${props => (props.active ? "cursor" : "not-allowed")};
  opacity: ${props => (props.active ? 1 : 0.5)};

  z-index: 100;

  &,
  & > * {
    transition: 0.2s ease;
  }

  transform-origin: bottom;

  ${props => (props.active ? activeStyles : null)}
`;
