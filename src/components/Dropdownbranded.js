/** @format */

import React from "react";
import nutritionRequest from "../NutritionBrandedAPI";
import { useState } from "react";
import styled from "styled-components";

const Show = styled.div`
  display: block;
`;

const DontShow = styled.div`
  display: none;
`;

export default function Dropdownbranded({ thumbnail, id, name, calories }) {
  const [isLoading, setLoadingStatus] = useState(true);
  const [nutritionData, setNutritionData] = useState();
  const [isShowing, setShowing] = useState(false);

  const getOnClick = async () => {
    await nutritionRequest(id).then(response => {
      const {
        nf_cholesterol,
        nf_protein,
        nf_total_fat,
        nf_total_carbohydrate,
        serving_unit,
        serving_weight_grams
      } = response[0];

      setNutritionData({
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

  const changeHeight = e => {
    e.target.style.display === "none"
      ? (e.target.style.height = "block")
      : (e.target.style.height = "none");
  };

  return (
    <td className="single" onClick={getOnClick}>
      <div className="item-container">
        <span className="item-title">{name}</span>
        <div className="section">
          <span onClick={e => changeHeight(e)}>{Math.floor(calories)}Kcal</span>
          <img src={thumbnail} alt="thumb" height="25px" width="25px"></img>
        </div>
      </div>
      {!isLoading ? (
        isShowing ? (
          <Show>
            <span>{nutritionData.nf_cholesterol}</span>
            <span>{nutritionData.nf_protein}</span>
            <span>{nutritionData.nf_total_fat}</span>
            <span>{nutritionData.nf_total_carbohydrate}</span>
            <span>{nutritionData.serving_weight_grams}</span>
            <span>{nutritionData.serving_unit}</span>
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
