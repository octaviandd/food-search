/** @format */
import React from "react";
import Dropdownbranded from "./Dropdownbranded";
import Loading from "./Loading";
import Dropdowncommon from "./Dropdowncommon";

export default function Dropdown({ branded_data, common_data }) {
  if (branded_data === undefined) {
    return <Loading />;
  }

  const common_food_data = common_data.map((item, key) => {
    return (
      <tr key={key}>
        <Dropdowncommon
          name={item.food_name}
          serving={item.serving_unit}
          thumbnail={item.photo.thumb}
        />
      </tr>
    );
  });

  const branded_food_data = branded_data.map((item, key) => {
    return (
      <tr key={key}>
        <Dropdownbranded
          name={item.brand_name_item_name}
          calories={item.nf_calories}
          thumbnail={item.photo.thumb}
          id={item.nix_item_id}
        />
      </tr>
    );
  });

  return (
    <div className="tables-container">
      <table className="data-table" style={{ color: "white" }}>
        <thead>
          <tr></tr>
        </thead>
        <tbody>{branded_food_data}</tbody>
      </table>
      <br></br>
      <table className="data-table">
        <thead>
          <tr></tr>
        </thead>
        <tbody>{common_food_data}</tbody>
      </table>
    </div>
  );
}
