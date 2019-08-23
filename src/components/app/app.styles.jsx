import styled from "styled-components";

export const Wrap = styled.div`
  background-color: rgba(255, 255, 255, 0.96);
  width: ${props => props.theme.appWidth};
  max-width: 100vw;
  height: ${props => props.theme.appHeight};
  max-height: 100vh;
  box-shadow: ${props => props.theme.shadowLong};

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  transition: ${props => props.theme.sidebarTransition};

  display: flex;
`;
