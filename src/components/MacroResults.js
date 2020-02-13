/** @format */

import React from "react";

export default function MacroResults(props) {
  const sum = props.carbs * 4 + props.protein * 4 + props.fat * 9;

  return (
    <React.Fragment>
      <div>
        <h3>Your results:</h3>
        <h1>{sum} kcal</h1>
        <h2 className="macro-macronutrients">MACRONUTRIENTS</h2>
        <div className="macro-nutrients">
          <p>
            Carbohydrate: {props.carbs * 4} kcal / {100 % props.carbs} %
          </p>
          <p>
            Protein: {props.protein * 4} kcal / {} %
          </p>
          <p>
            Fat: {props.fat * 9} kcal / {} %
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
