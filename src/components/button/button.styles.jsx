import styled from "styled-components";
import camelCase from "camelcase";

export const StyledButton = styled.button`
  background-color: ${props =>
    props.theme[camelCase(["color", props.backgroundColor])]};
  border-radius: calc(${props => props.theme.navItemHeight} / 2);

  display: inline-block;
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


  line-height: ${props => props.theme.navItemHeight};

  cursor: pointer;

  * {
    vertical-align: middle;
  }
/* 
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
  } */
`;
