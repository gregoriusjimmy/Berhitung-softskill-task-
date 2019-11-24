import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import BelajarPage from "./pages/belajarpage/belajarpage.component";
import NumberPage from "./pages/numberpage/numberpage.component";
import LevelPage from "./pages/levelpage/levelpage.component";
import Level1Page from "./pages/level1page/level1page.component";
import Level2Page from "./pages/level2page/level2page.component";
import Level3Page from "./pages/level3page/level3page.component";
import "./App.css";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/belajar" component={BelajarPage} />
        <Route path="/belajar/:numberId" component={NumberPage} />
        <Route exact path="/menu" component={LevelPage} />
        <Route exact path="/menu:level" component={LevelPage} />
        <Route exact path="/menu/level1" component={Level1Page} />
        <Route exact path="/menu/level2" component={Level2Page} />
        <Route exact path="/menu/level3" component={Level3Page} />
      </Switch>
    </div>
  );
};

export default App;
