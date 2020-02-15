/** @format */

import React from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import FoodSearch from "./pages/FoodSearch";
import MacroCalculator from "./pages/MacroCalculator";
import Recipes from "./pages/Recipes";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={FoodSearch}></Route>
          <Route
            exact
            path="/macro-calculator"
            component={MacroCalculator}
          ></Route>
          <Route exact path="/recipes" component={Recipes}></Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
