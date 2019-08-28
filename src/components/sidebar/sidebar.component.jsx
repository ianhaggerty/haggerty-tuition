import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSidebarOpen } from "../../redux/sidebar/sidebar.selectors";
import { toggleSidebar } from "../../redux/sidebar/sidebar.actions";

import {
  Wrapper,
  HamburgerWrap,
  SidebarItem,
  NavLabel,
  NavIcon
} from "./sidebar.styles";

import Hamburger from "../hamburger/hamburger.component";
import Icon from "../icon/icon.component";

class Sidebar extends React.Component {
  render() {
    const { sidebarOpen, toggleSidebar } = this.props;

    return (
      <Wrapper sidebarOpen={sidebarOpen}>
        <HamburgerWrap onClick={toggleSidebar}>
          <Hamburger icon={sidebarOpen ? "arrow-left" : "menu"} />
        </HamburgerWrap>

        <SidebarItem>
          <NavLabel>About Me</NavLabel>
          <NavIcon>
            <Icon name="person" />
          </NavIcon>
        </SidebarItem>
        <SidebarItem>
          <NavLabel>Background</NavLabel>
          <NavIcon>
            <Icon name="medal" />
          </NavIcon>
        </SidebarItem>
        <SidebarItem>
          <NavLabel>Approach</NavLabel>
          <NavIcon>
            <Icon name="people" />
          </NavIcon>
        </SidebarItem>
        <SidebarItem>
          <NavLabel>Get in touch</NavLabel>
          <NavIcon>
            <Icon name="mail" />
          </NavIcon>
        </SidebarItem>
      </Wrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  sidebarOpen: selectSidebarOpen
});

const mapDispatchToProps = dispatch => ({
  toggleSidebar: () => dispatch(toggleSidebar())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
