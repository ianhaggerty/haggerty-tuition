import styled from "styled-components";
import camelCase from "camelcase";

export const StyledButton = styled.button`
  background-color: ${props =>
    props.theme[camelCase(["color", props.backgroundColor])]};
  border-radius: calc(${props => props.theme.navItemHeight} / 2);
  height: ${props => props.theme.navItemHeight};
  min-width: ${props => props.theme.navItemHeight};
  padding: 0
    calc(
      (
          ${props => props.theme.navItemHeight} -
            ${props => props.theme.iconWidth}
        ) / 2
    );

  font-family: museo-sans-rounded, sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 1.7rem;
  color: ${props => props.theme.colorWhiteTint};
  box-shadow: ${props => props.theme.shadowFlat};

  display: inline-block;
  line-height: ${props => props.theme.navItemHeight};

  cursor: pointer;

  * {
    vertical-align: middle;
  }

  svg {
    width: calc(${props => props.theme.iconWidth} * 0.85) !important;

    &:not(:only-child):first-child {
      margin-left: 1rem;
    }

    &:not(:only-child):last-child {
      margin-right: 0.5rem;
    }
  }

  span {
    &:not(:only-child):last-child {
      padding-left: 1rem;
      padding-right: 1.5rem;
    }
    &:not(:only-child):first-child {
      padding-left: 1.5rem;
      padding-right: 1rem;
    }
  }

  &,
  & > * {
    transition: 0.3s ease;
  }

  transform-origin: bottom;

  &:hover {
    transform: scale(1.03);
    box-shadow: ${props => props.theme.shadowElevated};
  }

  &:active {
    transform: scale(0.98);
    box-shadow: ${props => props.theme.shadowDepressed};
  }

  &:active {
    svg {
      fill: ${props => props.theme.colorAccent};
    }
    span {
      color: ${props => props.theme.colorAccent};
    }
  }
`;
