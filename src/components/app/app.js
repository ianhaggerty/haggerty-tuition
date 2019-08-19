import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSidebarOpen } from "../../redux/sidebar/sidebar.selectors";

import { Wrap } from "./app.styles";

import LogoType from "../logo-type/logo-type.component";
import AboutMe from "../../sections/about-me/about-me.component";
import Enquire from "../../sections/enquire/enquire.component";
import Background from "../../sections/background/background.component";

import Sidebar from "../sidebar/sidebar.component";

import MainLayout from "../../layout/main/main.component";

const App = props => {
  return (
    <Wrap {...props}>
      <Sidebar />
      <MainLayout>
        <LogoType />
        <AboutMe />
        <Enquire />
        <Background />
      </MainLayout>
    </Wrap>
  );
};

const mapStateToProps = createStructuredSelector({
  sidebarOpen: selectSidebarOpen
});

export default connect(mapStateToProps)(App);
