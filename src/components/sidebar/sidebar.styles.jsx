import styled from "styled-components";

export const Wrapper = styled.nav`
  height: ${props => props.theme.appHeight};
  max-height: 100vh;
  width: ${props =>
    props.sidebarOpen
      ? props.theme.sidebarWidthOpen
      : props.theme.sidebarWidthClosed};

  box-shadow: ${props => props.theme.shadowLong};
  background-color: ${props => props.theme.colorGreyDark};
  transition: ${props => props.theme.sidebarTransition};

  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  z-index: 1000;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const HamburgerWrap = styled.div`
  text-align: right;
  width: 100%;
  cursor: pointer;
  margin-bottom: auto;

  transition: 0.5s ease;

  &:hover {
    background-color: ${props => props.theme.colorGreyMedium};
  }
`;

export const NavItem = styled.div`
  align-self: flex-end;
  width: ${props => props.theme.sidebarWidthOpen};
  margin-bottom: 1rem;

  cursor: pointer;

  height: ${props => props.theme.navItemHeight};

  display: flex;
  justify-content: flex-end;
  align-content: center;

  /* TODO - make accent color dynamic */
  &:nth-child(2) > * {
    color: ${props => props.theme.colorAccent};

    svg {
      fill: ${props => props.theme.colorAccent};
    }
  }

  &:last-child {
    background-color: ${props => props.theme.colorPrimary};
    margin-bottom: ${props => props.theme.iconWidth};
  }

  white-space: nowrap;
  overflow: hidden;

  transition: 0.5s ease;
  &:hover:not(:last-child) {
    background-color: ${props => props.theme.colorGreyMedium};
  }
`;

export const NavLabel = styled.div`
  font-family: museo-sans-rounded, sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 1.7rem;
  color: ${props => props.theme.colorWhiteTint};
  margin: auto 1rem;
`;

export const NavIcon = styled.div`
  padding: 0
    calc(
      (
          ${props => props.theme.sidebarWidthClosed} -
            ${props => props.theme.iconWidth}
        ) / 2
    );

  display: flex;
  justify-content: center;
  align-items: center;
`;
