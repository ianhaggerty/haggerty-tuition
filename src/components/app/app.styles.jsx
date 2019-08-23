import styled from "styled-components";

export const Wrap = styled.div`
  background-color: rgba(255, 255, 255, 0.96);
  width: ${props => props.theme.appWidth};
  max-width: 100vw;
  height: ${props => props.theme.appHeight};
  box-shadow: 0 0.5rem 5rem rgba(0, 0, 0, 0.15);

  display: flex;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
