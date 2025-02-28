import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { closeSidebar, openSidebar } from "../../redux/sidebar/sidebar.actions";
import { openEnquiryPage } from "../../redux/enquiry-page/enquiry-page.actions";
import { selectSidebarOpen } from "../../redux/sidebar/sidebar.selectors";

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
  toggleSidebar = () => {
    const { openSidebar, closeSidebar, sidebarOpen } = this.props;

    if (sidebarOpen) {
      closeSidebar();
    } else {
      openSidebar();
    }
  };

  render() {
    const { sidebarOpen, openEnquiryForm } = this.props;

    return (
      <Wrapper sidebarOpen={sidebarOpen}>
        <HamburgerWrap onClick={this.toggleSidebar}>
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
        <SidebarItem onClick={openEnquiryForm}>
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
  openSidebar: () => dispatch(openSidebar()),
  closeSidebar: () => dispatch(closeSidebar()),
  openEnquiryForm: () => dispatch(openEnquiryPage())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Sidebar)
);
