import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
// import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import configureStore from "redux/configureStore";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Root store={store} />
  </React.StrictMode>,
  document.getElementById("root")
);
// registerServiceWorker();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
