import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
import { createGlobalStyle } from "styled-components";

const store = setupStore();

const Global = createGlobalStyle`
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #b5b5b5;
  border-radius: 15px;
}
`

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <Global />
    <App />
  </Provider>
);
