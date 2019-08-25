import styled from "styled-components";

export const ButtonWithTooltip = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledNavigator = styled.div`
  grid-column: col-left-start / col-right-end;
  grid-row: navigator-start / navigator-end;
  text-align: center;
  align-self: start;

  display: flex;
  justify-content: center;
  align-items: center;
`;
