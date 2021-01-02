import React from "react";
import ReactDOM from "react-dom";
// import "./testApp/index.css";
import App from "./testApp/App";
import { CanvasProvider } from "./main/CanvasContext";

ReactDOM.render(
  <React.StrictMode>
    <CanvasProvider>
      <App />
    </CanvasProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
