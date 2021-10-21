import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Pizza from "./Pizza";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
    <Pizza />
  </StrictMode>,
  rootElement
);
