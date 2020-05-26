import * as React from "react";
import { render } from "react-dom";
import AppState from "./AppState";
import App from "./components/App";
import "antd/dist/antd.css";
import "./styles.css";

const rootElement = document.getElementById("root");
render(
  <AppState>
    <App />
  </AppState>,
  rootElement
);
