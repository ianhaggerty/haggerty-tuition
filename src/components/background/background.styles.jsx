import styled from "styled-components";

export const BackgroundElement = styled.div`
  position: fixed;
  z-index: -1000;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  opacity: 0.5;
  background-color: #ffffff;

  & > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
