import styled from "styled-components";
import { parser } from "css-math";

export const Wrapper = styled.nav`
  background-color: ${props => props.theme.colorGreyDark};

  position: fixed;
  height: 100vh;
  width: ${props =>
    props.sidebarOpen
      ? props.theme.sidebarWidthOpen
      : props.theme.sidebarWidthClosed};
  left: 0;
  top: 0;

  transition: ${props => props.theme.sidebarTransition};

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  overflow: hidden;
`;

export const HamburgerWrapper = styled.div`
  margin-bottom: auto;
  width: 100%;
  cursor: pointer;

  display: flex;
  justify-content: flex-end;

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

  /* padding: 1rem 0; */
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
    ${props =>
      parser(
        `(${props.theme.sidebarWidthClosed} - ${props.theme.iconWidth}) / 2`
      )};

  display: flex;
  justify-content: center;
  align-content: center;
`;
