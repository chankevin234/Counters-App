import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<App />, document.getElementById("root")); //counter component rendered in DOM element
//"Counters" is the root but App.js is the PARENT

reportWebVitals();
