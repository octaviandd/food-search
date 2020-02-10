/** @format */

import React from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import FoodSearch from "./pages/FoodSearch";
import MacroCalculator from "./pages/MacroCalculator";
import Receipes from "./pages/Receipes";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/food-search" component={FoodSearch}></Route>
          <Route
            exact
            path="/macro-calculator"
            component={MacroCalculator}
          ></Route>
          <Route exact path="/receipes" component={Receipes}></Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
