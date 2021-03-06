import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "../src/assets/styles/style.scss";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
