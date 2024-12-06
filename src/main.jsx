import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import {BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Use window.onload to render the App after the page has fully loaded
window.onload = () => {
  root.render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  );
};


