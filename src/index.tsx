import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "../src/styles/GlobalStyle";
import {StarsBackground} from "./components"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <StarsBackground />
    <App />
  </React.StrictMode>
);
