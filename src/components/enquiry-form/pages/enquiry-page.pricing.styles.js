import styled from "styled-components";

import { subHeadingFontStyles, headerFontStyles } from "./enquiry-page.styles";

export const PricingPageWrap = styled.div`
  margin: 0rem 2rem;

  text-align: center;
`;

export const PricingTable = styled.table`
  ${headerFontStyles}
  text-align: right;
  font-size: 3rem;
  margin: 4rem 3rem;

  tr:first-child {
    th:first-child {
      ${subHeadingFontStyles}
    }
  }

  th:not(first-child),
  td:not(first-child) {
    padding-left: 2.5rem;
  }

  th:first-child,
  td:first-child {
    padding-right: 1rem;
  }

  td:not(first-child) {
    font-style: normal;
  }

  tr:nth-child(4) {
    td:last-child {
      opacity: 0.3;
      font-style: italic;
    }
  }

  p {
    text-align: right;
    letter-spacing: 0rem;
    padding-left: 0.3rem;

    &:first-of-type {
      padding-top: 2rem;
    }
  }

  p:after {
    content: ".";
    position: relative;
    left: 0.7rem;
    margin-left: -0.6rem;
  }

  span {
    font-style: italic;
  }
`;
