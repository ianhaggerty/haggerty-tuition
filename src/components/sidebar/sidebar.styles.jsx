import styled from "styled-components";

import {
  APP_HEIGHT,
  SIDEBAR_WIDTH_OPEN,
  SIDEBAR_WIDTH_CLOSED,
  BOX_SHADOW_DIFFUSE,
  COLOR_PRIMARY,
  COLOR_GREY_MEDIUM,
  COLOR_GREY_DARK,
  COLOR_ACCENT,
  COLOR_WHITE_TINT,
  SIDEBAR_TRANSITION,
  SIDEBAR_ITEM_HEIGHT,
  ICON_WIDTH
} from "../../styles/variables";

import {
  MIXIN_VERTICAL_CENTER_ABSOLUTE_SELF,
  MIXIN_CENTER_FLEX_CHILDREN,
  MIXIN_FONT_MUSEO_BOLD
} from "../../styles/mixins.styles";

export const Wrapper = styled.nav`
  height: ${APP_HEIGHT};
  max-height: 100vh;
  width: ${props =>
    props.sidebarOpen ? SIDEBAR_WIDTH_OPEN : SIDEBAR_WIDTH_CLOSED};

  box-shadow: ${BOX_SHADOW_DIFFUSE};
  background-color: ${COLOR_GREY_DARK};
  transition: ${SIDEBAR_TRANSITION};

  ${MIXIN_VERTICAL_CENTER_ABSOLUTE_SELF}
  left: 0;

  z-index: 250;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  cursor: pointer;
`;

export const HamburgerWrap = styled.div`
  text-align: right;
  width: 100%;
  cursor: pointer;
  margin-bottom: auto;

  flex-grow: 1;
  transition: ${SIDEBAR_TRANSITION};

  &:hover {
    background-color: ${COLOR_GREY_MEDIUM};
  }
`;

export const SidebarItem = styled.div`
  width: ${SIDEBAR_WIDTH_OPEN};
  height: ${SIDEBAR_ITEM_HEIGHT};

  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  align-content: center;

  /* TODO - make accent color dynamic */
  &:nth-child(2) > * {
    color: ${COLOR_ACCENT};

    svg {
      fill: ${COLOR_ACCENT};
    }
  }

  &:last-child {
    background-color: ${COLOR_PRIMARY};
    margin-bottom: calc(${SIDEBAR_ITEM_HEIGHT} / 2);
  }

  white-space: nowrap;
  overflow: hidden;

  transition: 0.5s ease;
  &:hover:not(:last-child) {
    background-color: ${COLOR_GREY_MEDIUM};
  }
`;

export const NavLabel = styled.div`
  ${MIXIN_FONT_MUSEO_BOLD}
  font-size: 1.7rem;
  color: ${COLOR_WHITE_TINT};
  margin: auto 1rem;
`;

export const NavIcon = styled.div`
  padding: 0 calc((${SIDEBAR_WIDTH_CLOSED} - ${ICON_WIDTH}) / 2);

  ${MIXIN_CENTER_FLEX_CHILDREN}
`;
