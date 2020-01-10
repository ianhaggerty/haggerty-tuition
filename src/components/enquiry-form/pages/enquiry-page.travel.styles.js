import styled from "styled-components";

export const TravelPageWrap = styled.div`
  margin: 3rem 2rem;
  display: flex;
`;

export const TravelPageColLeft = styled.div`
  width: 37%;
  text-align: right;
  margin-right: 2.8rem;
  margin-top: 1rem;

  h3 + p {
    margin-top: 0rem;
  }

  h3 {
    margin-top: 2.1rem;
  }

  p.hanging-punctuation:after {
    content: ".";
    position: relative;
    left: 0.7rem;
    margin-left: -0.6rem;
  }
`;

export const TravelPageColRight = styled.div`
  width: 60%;
`;

export const MAP_HEIGHT = "45rem";
export const MAP_WIDTH = "48rem";
