import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import "./index.css";
import App from "./App";
import { defaultTheme } from "./theme";

const store = configureStore({ reducer: {} });

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={defaultTheme}>
          <App />
        </ThemeProvider>
      </Router>
    </Provider>
  </React.StrictMode>
);
