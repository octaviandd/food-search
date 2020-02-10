/** @format */

import React, { Component } from "react";

export default class Calculator extends Component {
  constructor(props) {
    super(props);
  }

  watchProtein = e => {
    let value = e.target.value;
    this.props.checkProtein(value);
  };

  watchCarbs = e => {
    let value = e.target.value;
    this.props.checkCarbs(value);
  };

  watchFat = e => {
    let value = e.target.value;
    this.props.checkFat(value);
  };

  render() {
    return (
      <React.Fragment>
        <section className="macro-calculator-calculator">
          <div className="carbs">
            <label>CARBS(g)</label>
            <input type="number" onChange={this.watchCarbs} min="0"></input>
          </div>
          <div className="protein">
            <label>PROTEIN(g)</label>
            <input type="number" onChange={this.watchProtein} min="0"></input>
          </div>
          <div className="fat">
            <label>FAT(g)</label>
            <input type="number" onChange={this.watchFat} min="0"></input>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
