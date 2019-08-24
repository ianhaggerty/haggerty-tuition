import styled from "styled-components";

export const RelativeDiv = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  & > *:first-child {
    transition-duration: 0.4s;
    transition-timing-function: ease;
    transform: translateY(1rem);
    opacity: 0;
  }

  &:hover > *:first-child {
    transition-delay: 1.5s;
    transform: translateY(0rem);
    opacity: 1;
  }
`;

export const StyledNavigator = styled.div`
  grid-column: col-left-start / col-right-end;
  grid-row: navigator-row-start / navigator-row-end;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
`;
