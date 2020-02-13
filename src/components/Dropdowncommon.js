/** @format */

import React from "react";
import nutritionRequest from "../NutritionCommonAPI.js";
import styled from "styled-components";
import { useState } from "react";

const Show = styled.div`
  display: block;
`;

const DontShow = styled.div`
  display: none;
`;

export default function Dropdowncommon({ name, thumbnail, serving }) {
  const [isLoading, setLoadingStatus] = useState(true);
  const [nutritionData, setNutritionData] = useState();
  const [isShowing, setShowing] = useState(false);

  const getOnClick = async () => {
    await nutritionRequest(name).then(response => {
      let items = response.foods;

      const {
        nf_calories,
        nf_cholesterol,
        nf_protein,
        nf_total_fat,
        nf_total_carbohydrate,
        serving_unit,
        serving_weight_grams
      } = items[0];

      setNutritionData({
        nf_calories,
        nf_cholesterol,
        nf_protein,
        nf_total_fat,
        nf_total_carbohydrate,
        serving_unit,
        serving_weight_grams
      });
      setLoadingStatus(false);
      setShowing(!isShowing);
    });
  };

  return (
    <td className="single">
      <div className="item-container">
        <span className="item-title">{name}</span>
        <div className="section">
          <span className="info-button">
            <i className="fas fa-info-circle" onClick={getOnClick}></i>
          </span>
          <img src={thumbnail} alt="thumb" height="25px" width="25px"></img>
        </div>
      </div>
      {!isLoading ? (
        isShowing ? (
          <Show>
            <div className="nutrition-data">
              <label>Cholesterol:</label>
              <span>{nutritionData.nf_cholesterol}g</span>
              <label>Protein:</label>
              <span>{nutritionData.nf_protein}g</span>
              <label>Fats:</label>
              <span>{nutritionData.nf_total_fat}g</span>
              <label>Carbohydrates:</label>
              <span>{nutritionData.nf_total_carbohydrate}g</span>
              <label>Weight:</label>
              <span>{nutritionData.serving_weight_grams}g</span>
              <label>Unit:</label>
              <span>{nutritionData.serving_unit}</span>
            </div>
          </Show>
        ) : (
          <DontShow>
            <span>{nutritionData.nf_cholesterol}</span>
            <span>{nutritionData.nf_protein}</span>
            <span>{nutritionData.nf_total_fat}</span>
            <span>{nutritionData.nf_total_carbohydrate}</span>
            <span>{nutritionData.serving_weight_grams}</span>
            <span>{nutritionData.serving_unit}</span>
          </DontShow>
        )
      ) : null}
    </td>
  );
}
