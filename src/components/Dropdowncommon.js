/** @format */

import React from "react";
import nutritionRequest from "../NutritionBrandedAPI";
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
      console.log(response);
    });
  };

  return (
    <td className="single" style={{ width: "400px" }}>
      <div className="item-container">
        <span className="item-title">{name}</span>
        <div className="section">
          <span className="info-button">
            <i className="fas fa-info-circle" onClick={getOnClick}></i>
          </span>
          <img src={thumbnail} alt="thumb" height="25px" width="25px"></img>
        </div>
      </div>
    </td>
  );
}
