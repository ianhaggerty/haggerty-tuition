import React from "react";
import ReactDOM from "react-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/root.reducer";
import { Provider as StoreProvider } from "react-redux";

import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import StyleProvider from "./styles/style.provider";

import App from "./app";

ReactDOM.render(
  <StoreProvider store={store}>
    <PersistGate persistor={persistor}>
      <StyleProvider />
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </PersistGate>
  </StoreProvider>,
  document.getElementById("root")
);
