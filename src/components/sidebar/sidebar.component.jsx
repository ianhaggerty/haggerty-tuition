import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import qs from "query-string";

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
    const { history, location } = this.props;

    const currentQuery = location.search;
    const currentQueryParsed = qs.parse(currentQuery);

    let newQueryParsed;
    if (currentQueryParsed.overlay === "sidebar") {
      newQueryParsed = {
        ...currentQueryParsed,
        overlay: undefined
      };
    } else {
      newQueryParsed = {
        ...currentQueryParsed,
        overlay: "sidebar"
      };
    }

    const newQuery = qs.stringify(newQueryParsed);
    history.push({ search: newQuery });
  };

  isSidebarOpen = () => {
    const { location } = this.props;

    const currentQuery = location.search;
    const currentQueryParsed = qs.parse(currentQuery);
    return currentQueryParsed.overlay === "sidebar";
  };

  render() {
    const sidebarOpen = this.isSidebarOpen();

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
  // sidebarOpen: selectSidebarOpen
});

const mapDispatchToProps = dispatch => ({
  // toggleSidebar: () => dispatch(toggleSidebar())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Sidebar)
);
