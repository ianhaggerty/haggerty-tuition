import styled from "styled-components";
import { parser } from "css-math";

export const Grid = styled.main`
  width: 100%;
  display: grid;

  grid-template-columns:
    [col-left-start]
    ${props => props.theme.gridColWidth}
    [col-left-end col-right-start]
    ${props => props.theme.gridColWidth}
    [col-right-end];

  grid-template-rows:
    [header-start]
    ${props => props.theme.headerHeight}
    [header-end about-me-start]
    /* Viewport - header - twice icon width */
    minmax(
      calc(
        100vh - ${props => props.theme.headerHeight} -
          ${props => props.theme.iconWidth} -
          ${props => props.theme.navItemHeight}
      ),
      auto
    )
    [about-me-end enquire-1-start]
    /* Twice icon width + 2 * NavItem Padding */
    calc(
      ${props => props.theme.iconWidth} + ${props => props.theme.navItemHeight}
    )
    [enquire-1-end background-start]
    auto
    [background-end];

  grid-column-gap: 8.8rem;
  justify-content: center;
`;
