import React from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.min.css";
import App from "./App.js";
import "./index.css"


ReactDOM.render(
     //using browser router for entire app.
        <div className="fullhouse">
            <App />
            </div>,
    document.getElementById("root")
);