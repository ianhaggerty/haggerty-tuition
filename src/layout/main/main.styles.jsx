import styled from "styled-components";
import { parser } from "css-math";

export const gridColWidth = "33rem";

export const Grid = styled.main`
  flex-grow: 1;

  display: grid;
  grid-template-columns:
    [page-left-start]
    1fr
    [page-left-end col-left-start]
    ${props => props.theme.gridColWidth}
    [col-left-end col-right-start]
    ${props => props.theme.gridColWidth}
    [col-right-end page-right-start]
    1fr
    [page-right-end];
  grid-template-rows: auto auto;
  grid-template-rows:
    [header-start]
    25rem
    [header-end about-me-start]
    auto
    [about-me-end navigator-start]
    calc(${props => props.theme.navItemHeight} * 1.5)
    [navigator-end];
  grid-column-gap: ${props => props.theme.gridColGap};
  justify-content: center;
`;
