import React from "react";

import { Window } from "./app.styles";

import Overlay from "./components/overlay/overlay.component";
import Sidebar from "./components/sidebar/sidebar.component";
import Navigator from "./components/navigator/navigator.component";
import Background from "./components/background/background.component";

import AboutMe from "./pages/about-me/about-me.component";

const App = props => {
  return (
    <React.Fragment>
      {/* TODO: Update background on route */}
      <Background />

      {/* TODO: UPDATE sidebar highlight on route */}
      <Sidebar />

      {/* TODO: UPDATE window background on route */}
      <Window {...props}>
        {/* TODO: Update page on route */}
        <AboutMe />

        {/* TODO: Update navigator on route */}
        <Navigator />
      </Window>

      {/* The overlay responds to the sidebar and enquiry form */}
      <Overlay />
    </React.Fragment>
  );
};

export default App;
