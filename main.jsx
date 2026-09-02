import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from "./App";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import "./App.css";

import store from "./store";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route
            path="/plants"
            element={<ProductList />}
          />
          <Route
            path="/cart"
            element={<CartItem />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
