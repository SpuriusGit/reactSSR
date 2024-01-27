import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AppServer from "./AppServer";

ReactDOM.hydrate(
  <BrowserRouter>
    <AppServer />
  </BrowserRouter>,
  document.getElementById("root")
);
