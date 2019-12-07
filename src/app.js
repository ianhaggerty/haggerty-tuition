import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Window } from "./app.styles";

import Overlay from "./components/overlay/overlay.component";
import Sidebar from "./components/sidebar/sidebar.component";
import Navigator from "./components/navigator/navigator.component";
import Background from "./components/background/background.component";

import AboutMe from "./pages/about-me/about-me.component";
import MyBackground from "./pages/my-background/my-background.component";

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
        <Route exact path="/" render={() => <Redirect to="/about-me" />} />
        <Switch>
          <Route exact path="/about-me" component={AboutMe} />
          <Route exact path="/background" component={MyBackground} />
        </Switch>

        {/* TODO: Update navigator on route */}
        <Navigator />
      </Window>

      {/* The overlay responds to the sidebar and enquiry form */}
      <Overlay />
    </React.Fragment>
  );
};

export default App;
