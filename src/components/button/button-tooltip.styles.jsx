import styled from "styled-components";
import { math } from "polished";

import { MIXIN_CENTER_FLEX_CHILDREN } from "../../styles/mixins.styles";

import {
  SIDEBAR_ITEM_HEIGHT,
  BOX_SHADOW_DEPRESSED,
  COLOR_WHITE_PURE
} from "../../styles/variables";

// Absolutely positioned relative to parent element
export const TooltipOuterWrap = styled.div`
  position: absolute;

  transition: 0.4s ease;
  &.tooltip-enter {
    transform: translateY(1rem);
    opacity: 0;
  }

  &.tooltip-enter-active {
    transform: translateY(0rem);
    opacity: 1;
  }

  &.tooltip-exit {
    transform: translateY(0rem);
    opacity: 1;
  }

  &.tooltip-exit-active {
    transform: translateY(1rem);
    opacity: 0;
  }
`;

export const ToolTipInnerWrap = styled.div`
  background-color: ${props => props.color};
  height: ${math(`${SIDEBAR_ITEM_HEIGHT} / 2`)};

  position: relative;
  bottom: ${math(`${SIDEBAR_ITEM_HEIGHT} * 1.2`)};

  ${MIXIN_CENTER_FLEX_CHILDREN}

  padding: 2rem 1.5rem;
  border-radius: 0.2rem;
  opacity: 0.8;

  box-shadow: ${BOX_SHADOW_DEPRESSED};
`;

export const ToolTipText = styled.span`
  color: ${COLOR_WHITE_PURE};
  font-family: museo-sans-rounded, sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 1.7rem;
  white-space: nowrap;
`;

// Triangle dimensions === Equilateral
const height = "1.299rem";
const width = "1.5rem";

// Positioned relative to outerwrap
export const ToolTipPointer = styled.div`
  position: absolute;
  top: 100%;

  width: 0;
  height: 0;
  left: calc(50% - (${width} / 2));

  border-top: ${height} solid ${props => props.color};
  border-left: calc(${width} / 2) solid transparent;
  border-right: calc(${width} / 2) solid transparent;
`;
