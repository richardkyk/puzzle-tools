import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { StringProvider } from "./contexts/StringContext";

ReactDOM.render(
  <React.StrictMode>
    <StringProvider>
      <App />
    </StringProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
