import styled from "styled-components";

export const DiscountsPageWrap = styled.div`
  margin: 0rem 8.5rem;
`;

export const DiscountsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 6rem;
  grid-row-gap: 6rem;
  margin-top: 2.4rem;
`;

export const DiscountItem = styled.div`
  /* background-color: white; */
`;

export const DiscountHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: -1.5rem;

  svg {
    margin-bottom: -0.3rem;
    margin-right: 0.4rem;
  }
`;
