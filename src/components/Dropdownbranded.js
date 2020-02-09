/** @format */

import React from "react";

export default function Dropdownbranded({ thumbnail, name, calories }) {
  return (
    <td className="single" style={{ width: "675px" }}>
      <span>{name}</span>
      <div style={{ float: "right", display: "flex", alignItems: "center" }}>
        <span style={{ marginRight: "5px" }}>{Math.floor(calories)}Kcal</span>
        <img
          style={{ marginRight: "5px" }}
          src={thumbnail}
          alt="thumb"
          height="25px"
          width="25px"
        ></img>
      </div>
    </td>
  );
}
