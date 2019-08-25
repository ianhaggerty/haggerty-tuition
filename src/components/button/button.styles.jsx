import styled from "styled-components";
import camelCase from "camelcase";

export const StyledButton = styled.button`
  background-color: ${props =>
    props.theme[camelCase(["color", props.backgroundColor])]};
  border-radius: calc(${props => props.size} / 2);

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  height: ${props => props.size};
  min-width: ${props => props.size};

  font-family: museo-sans-rounded, sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 1.7rem;

  color: ${props => props.theme.colorWhiteTint};
  box-shadow: ${props => props.theme.shadowFlat};

  cursor: ${props => (props.active ? "cursor" : "not-allowed")};
  opacity: ${props => (props.active ? 1 : 0.5)};

  z-index: 100;

  &,
  & > * {
    transition: 0.2s ease;
  }

  transform-origin: bottom;

  &:hover.active {
    transform: scale(1.03);
    box-shadow: ${props => props.theme.shadowElevated};
  }

  &:active.active {
    transform: scale(0.98);
    box-shadow: ${props => props.theme.shadowDepressed};
  }
`;
