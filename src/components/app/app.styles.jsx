import styled from "styled-components";

export const Wrap = styled.div`
  background-color: rgba(255, 255, 255, 0.96);
  width: ${props => props.theme.appWidth};
  max-width: 100vw;
  max-height: ${props => props.theme.appHeight};
  box-shadow: 0 0.5rem 5rem rgba(0, 0, 0, 0.15);

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  transition: ${props => props.theme.sidebarTransition};

  display: grid;
  grid-template-columns:
    [sidebar-col-start]
    ${props =>
      props.sidebarOpen
        ? props.theme.sidebarWidthOpen
        : props.theme.sidebarWidthClosed}
    [sidebar-col-end main-col-start]
    1fr
    [main-col-end];
`;
