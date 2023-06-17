import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import MyProvider from "./context/provider.jsx";
import TagsProvider from "./context/TagsProvider.jsx";
import SpinnerProvider from "./context/SpinnerProvider.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MyProvider>
    <TagsProvider>
      <SpinnerProvider>
        <React.StrictMode>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </React.StrictMode>
      </SpinnerProvider>
    </TagsProvider>
  </MyProvider>
);
