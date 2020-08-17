import React from "react";
import "./App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { MainPage, CartUI, ConfirmationUI } from "./components";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/cart">
            <CartUI />
          </Route>
          <Route path="/confirmation">
            <ConfirmationUI />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
