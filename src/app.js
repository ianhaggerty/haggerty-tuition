import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Window } from "./app.styles";

import Overlay from "./components/overlay/overlay.component";
import Sidebar from "./components/sidebar/sidebar.component";
import Navigator from "./components/navigator/navigator.component";
import Background from "./components/background/background.component";
import EnquiryForm from "./components/enquiry-form/enquiry-form.component";

import AboutMe from "./pages/about-me/about-me.component";
import MyBackground from "./pages/my-background/my-background.component";

const App = props => {
  return (
    <React.Fragment>
      <Background />

      <Sidebar />
      <EnquiryForm />

      <Window {...props}>
        <Route exact path="/" render={() => <Redirect to="/about-me" />} />
        <Switch>
          <Route exact path="/about-me" component={AboutMe} />
          <Route exact path="/background" component={MyBackground} />
        </Switch>

        <Navigator />
      </Window>

      <Overlay />
    </React.Fragment>
  );
};

export default App;
