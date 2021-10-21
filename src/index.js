import React from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.min.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css"
import Tree from "./treeback.png";
import Samantha from"./legato.png"
ReactDOM.render(
     //using browser router for entire app.
    <BrowserRouter >
        <div className="fullhouse">
            <img
                src={Tree}
                alt="tree"
                className="back-screen1 cropped1"
            />
            <App />
            </div>
    </BrowserRouter>,
    document.getElementById("root")
);