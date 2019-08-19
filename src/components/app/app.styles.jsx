import styled from "styled-components";

export const Wrap = styled.div`
  padding-left: ${props =>
    props.sidebarOpen
      ? props.theme.sidebarWidthOpen
      : props.theme.sidebarWidthClosed};
  transition: ${props => props.theme.sidebarTransition};
`;
