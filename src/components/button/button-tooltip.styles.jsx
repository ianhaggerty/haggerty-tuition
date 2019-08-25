import styled from "styled-components";

export const TooltipOuterWrap = styled.div`
  transition: 0.4s ease;
  position: absolute;

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
  height: calc(${props => props.theme.navItemHeight} / 2);

  position: relative;
  bottom: calc(${props => props.theme.navItemHeight} * 1.2);

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2rem 1.5rem;
  border-radius: 0.2rem;
  opacity: 0.8;

  box-shadow: ${props => props.theme.shadowDepressed};
`;

export const ToolTipText = styled.span`
  color: #ffffff;
  font-family: museo-sans-rounded, sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 1.7rem;
  white-space: nowrap;
`;

const height = "1.299rem";
const width = "1.5rem";

export const ToolTipPointer = styled.div`
  border-top: ${height} solid ${props => props.color};
  border-left: calc(${width} / 2) solid transparent;
  border-right: calc(${width} / 2) solid transparent;
  width: 0;
  height: 0;

  position: absolute;

  top: 100%;

  &.left {
    left: calc(${props => props.theme.navItemHeight} / 2 - ${width} / 2);
  }

  &.center {
    left: calc(50% - (${width} / 2));
  }

  &.right {
    right: calc(${props => props.theme.navItemHeight} / 2 - ${width} / 2);
  }
`;
