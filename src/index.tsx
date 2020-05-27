import * as React from "react";
import { render } from "react-dom";
import AppState from "./AppState";
import App from "./components/App";
import "antd/dist/antd.css";
import "./styles.css";

import { BrowserRouter as Router } from "react-router-dom";
const rootElement = document.getElementById("root");
render(
  <AppState>
    <Router>
      <App />
    </Router>
  </AppState>,
  rootElement
);
