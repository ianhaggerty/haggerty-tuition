import styled from "styled-components";

export const Wrapper = styled.nav`
  height: 100%;
  width: ${props =>
    props.sidebarOpen
      ? props.theme.sidebarWidthOpen
      : props.theme.sidebarWidthClosed};
  grid-column: sidebar-col-start / sidebar-col-end;

  background-color: ${props => props.theme.colorGreyDark};
  transition: ${props => props.theme.sidebarTransition};

  display: grid;
  grid-template-columns:
    [label-col-start]
    1fr
    [label-col-end icon-col-start]
    ${props =>
      props.sidebarOpen
        ? props.theme.sidebarWidthOpen
        : props.theme.sidebarWidthClosed}
    [icon-col-end];
  grid-template-rows:
    [menu-row-start]
    ${props => props.theme.sidebarWidthClosed}
    [menu-row-end spacing-row-start]
    1fr
    [spacing-row-end nav-item-start-1]
    ${props => props.theme.navItemHeight}
    [nav-item-end-1 nav-item-start-2]
    ${props => props.theme.navItemHeight}
    [nav-item-end-2 nav-item-start-3]
    ${props => props.theme.navItemHeight}
    [nav-item-end-3 nav-item-start-4]
    ${props => props.theme.navItemHeight}
    [nav-item-end-4 margin-bottom-start]
    ${props => props.theme.iconWidth}
    [margin-bottom-end];

  justify-content: end;

  align-items: center;
  justify-items: center;

  overflow: hidden;
`;

export const HamburgerWrap = styled.div`
  text-align: right;
  width: 100%;
  cursor: pointer;

  transition: 0.5s ease;

  &:hover {
    background-color: ${props => props.theme.colorGreyMedium};
  }

  grid-row: menu-row-start / menu-row-end;
  grid-column: icon-col-start / icon-col-end;
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
