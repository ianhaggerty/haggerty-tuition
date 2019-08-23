import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSidebarOpen } from "../../redux/sidebar/sidebar.selectors";

import { Wrap } from "./app.styles";

import LogoType from "../../sections/logo-type/logo-type.component";
import AboutMe from "../../sections/about-me/about-me.component";
import Enquire from "../../sections/enquire/enquire.component";
import MyBackground from "../../sections/background/background.component";

import Sidebar from "../sidebar/sidebar.component";
import Navigator from "../navigator/navigator.component";
import Background from "../background/background.component";

import MainLayout from "../../layout/main/main.component";

const App = props => {
  return (
    <React.Fragment>
      <Background />
      <Wrap {...props}>
        <Sidebar />
        <MainLayout>
          <LogoType />
          <AboutMe />
          <Navigator />
        </MainLayout>
      </Wrap>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  sidebarOpen: selectSidebarOpen
});

export default connect(mapStateToProps)(App);
