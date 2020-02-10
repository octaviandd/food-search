/** @format */

import React from "react";
import nutritionRequest from "../NutritionBrandedAPI";

export default function Dropdowncommon({ name, thumbnail }) {
  //   const getOnClick = async () => {
  //     await nutritionRequest(name).then(response => {
  //       console.log(response);
  //     });
  //   };

  return (
    <td className="single" style={{ width: "300px" }}>
      <span>{name}</span>
      <img
        src={thumbnail}
        alt="thumb"
        height="25px"
        width="25px"
        style={{ float: "right", marginRight: "5px", borderRadius: "1px" }}
      ></img>
    </td>
  );
}
