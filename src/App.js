import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import BelajarPage from "./pages/belajarpage/belajarpage";
import NumberPage from "./pages/numberpage/numberpage";
import "./App.css";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/belajar" component={BelajarPage} />
        <Route path="/belajar/:numberId" component={NumberPage} />
      </Switch>
    </div>
  );
};

export default App;
