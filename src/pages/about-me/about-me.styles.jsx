import styled from "styled-components";
import { GRID_COL_GAP, GRID_COL_WIDTH } from "../../styles/variables";

export const Grid = styled.main`
  display: grid;
  grid-column-gap: ${GRID_COL_GAP};
  justify-content: center;

  grid-template-columns:
    [page-left-start]
    1fr
    [page-left-end col-left-start]
    ${GRID_COL_WIDTH}
    [col-left-end col-right-start]
    ${GRID_COL_WIDTH}
    [col-right-end page-right-start]
    1fr
    [page-right-end];

  grid-template-rows:
    [header-start]
    25rem
    [header-end about-me-start]
    auto
    [about-me-end];
`;
