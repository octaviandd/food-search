/** @format */

import React from "react";

export default function Dropdowncommon({ name, thumbnail }) {
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
