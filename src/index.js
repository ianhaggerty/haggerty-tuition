import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { Provider as StoreProvider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

import StyleProvider from "./styles/style.provider";

ReactDOM.render(
  <StoreProvider store={store}>
    <PersistGate persistor={persistor}>
      <StyleProvider />
      <App />
    </PersistGate>
  </StoreProvider>,
  document.getElementById("root")
);
