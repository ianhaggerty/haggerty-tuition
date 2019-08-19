import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.styles";
import StyleProvider from "./styles/style.provider";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StyleProvider />
        <App />
      </PersistGate>
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
