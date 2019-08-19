import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSidebarOpen } from "../../redux/sidebar/sidebar.selectors";
import { toggleSidebar } from "../../redux/sidebar/sidebar.actions";

import {
  Wrapper,
  HamburgerWrapper,
  NavItem,
  NavLabel,
  NavIcon
} from "./sidebar.styles";

import Hamburger from "../hamburger/hamburger.component";
import Icon from "../icon/icon.component";

class Sidebar extends React.Component {
  render() {
    const { sidebarOpen } = this.props;
    return (
      <Wrapper sidebarOpen={sidebarOpen}>
        <HamburgerWrapper onClick={this.props.toggleSidebar}>
          <Hamburger
            icon={this.props.sidebarOpen ? "arrow-left" : "menu"}
            style={{ marginBottom: "auto" }}
          />
        </HamburgerWrapper>

        <NavItem>
          <NavLabel>About Me</NavLabel>
          <NavIcon>
            <Icon name="person" />
          </NavIcon>
        </NavItem>
        <NavItem>
          <NavLabel>Background</NavLabel>
          <NavIcon>
            <Icon name="medal" />
          </NavIcon>
        </NavItem>
        <NavItem>
          <NavLabel>Approach</NavLabel>
          <NavIcon>
            <Icon name="people" />
          </NavIcon>
        </NavItem>
        <NavItem>
          <NavLabel>Get in touch</NavLabel>
          <NavIcon>
            <Icon name="mail" />
          </NavIcon>
        </NavItem>
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
