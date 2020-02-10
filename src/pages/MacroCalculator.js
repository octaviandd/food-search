/** @format */

import React from "react";
import Calculator from "../components/Calculator";
import MacroResults from "../components/MacroResults";

export default class MacroCalculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      protein: 0,
      carbs: 0,
      fat: 0,
      proteinShow: true,
      carbsShow: false,
      fatShow: false
    };

    this.checkProtein = this.checkProtein.bind(this);
    this.checkCarbs = this.checkCarbs.bind(this);
    this.checkFat = this.checkFat.bind(this);
    this.showCarbs = this.showCarbs.bind(this);
    this.showProtein = this.showProtein.bind(this);
    this.showFat = this.showFat.bind(this);
  }

  checkCarbs = e => {
    this.setState({
      carbs: e
    });
  };

  checkProtein = e => {
    this.setState({
      protein: e
    });
    console.log(this.state.protein);
  };

  checkFat = e => {
    this.setState({
      fat: e
    });
  };

  showCarbs = () => {
    this.setState({
      carbsShow: true,
      proteinShow: false,
      fatShow: false
    });
  };

  showProtein = () => {
    this.setState({
      carbsShow: false,
      proteinShow: true,
      fatShow: false
    });
  };

  showFat = () => {
    this.setState({
      carbsShow: false,
      proteinShow: false,
      fatShow: true
    });
  };

  render() {
    const carbs = (
      <div>
        <p>
          Commonly speaking, carbs are largely divided into simple and complex
          carbohydrates depending on how easily the body can break them down.
          Good carb sources such as fruit, vegetables and grains all provide our
          body with energy by storing themselves as glycogen whilst often also
          being very dense in vitamins and fiber. Some good examples of Protein
          sources include:
        </p>
        <ul>
          <li>Oats</li>
          <li>Fruits</li>
          <li>Potatoes</li>
        </ul>
      </div>
    );

    const fat = (
      <div>
        <p>
          Fats assist in the absorption of vitamins, brain function, hormone
          regulation and much more. Some good example of fat sources include:
        </p>
        <ul>
          <li>Meat</li>
          <li>Nut butter</li>
          <li>Oil</li>
        </ul>
      </div>
    );

    const protein = (
      <div>
        <p>
          Protein helps build and prevent muscle loss whilst keeping you fuller
          for longer. It requires more energy from your body to digest than any
          other macro effectively burning more calorie per gram consumed. Some
          good examples of Protein sources include:
        </p>
        <ul>
          <li>Meat</li>
          <li>Eggs</li>
          <li>Protein Shakes</li>
          <li>Dairy</li>
        </ul>
      </div>
    );

    return (
      <React.Fragment>
        <div className="macro-container">
          <div className="macro-title">
            <h1>Macro Calculator</h1>
          </div>
          <section className="macro-description">
            <p>
              Quickly calculate the amount of calories any food item or meal
              yields by entering the amount of protein, carbohydrates and fat by
              grams. Details can often be found on the back of food packs per
              serving.
            </p>
          </section>
          <section className="macro-calculator">
            <Calculator
              checkProtein={e => this.checkProtein(e)}
              checkCarbs={e => this.checkCarbs(e)}
              checkFat={e => this.checkFat(e)}
            ></Calculator>
            <h1 className="acolade">}</h1>
            <div>
              <MacroResults
                protein={this.state.protein}
                carbs={this.state.carbs}
                fat={this.state.fat}
              ></MacroResults>
            </div>
          </section>

          <section>
            <div className="macro-details">
              <h3
                onClick={this.showCarbs}
                className={this.state.carbsShow ? "h3-border" : null}
              >
                Carbohydrates
              </h3>
              <h3
                onClick={this.showProtein}
                className={this.state.proteinShow ? "h3-border" : null}
              >
                Protein
              </h3>
              <h3
                onClick={this.showFat}
                className={this.state.fatShow ? "h3-border" : null}
              >
                Fats
              </h3>
            </div>
            <div className="macro-details-box">
              {this.state.proteinShow ? protein : null}
              {this.state.fatShow ? fat : null}
              {this.state.carbsShow ? carbs : null}
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}
