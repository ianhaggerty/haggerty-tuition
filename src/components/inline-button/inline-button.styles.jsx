import styled from "styled-components";
import camelCase from "camelcase";

export const StyledInlineButton = styled.span`
  font-family: museo-sans-rounded, sans-serif;
  font-weight: 500;
  color: ${props =>
    props.color
      ? props.theme[camelCase(["color", props.color])]
      : props.theme.colorPrimary};
  cursor: pointer;
  margin-bottom: -0.4rem;

  transition: 0.2s ease;
  border-bottom: 0.2rem solid rgba(0, 0, 0, 0);

  &:hover {
    border-bottom: 0.2rem solid
      ${props =>
        props.color
          ? props.theme[camelCase(["color", props.color])]
          : props.theme.colorPrimary};
  }
`;
