import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Room from "./Pages/Room";
import CreateCall from "./Pages/CreateCall";
import JoinCall from "./Pages/JoinCall";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/call/:id">
            <Room />
          </Route>
          <Route path="/create-call">
            <CreateCall />
          </Route>
          <Route path="/join-call">
            <JoinCall />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
