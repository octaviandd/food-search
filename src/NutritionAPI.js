/** @format */

const axios = require("axios");

const nutritionRequest = param => {
  let api_key = "4f16add0b27c446ec23f670ff0c898c1";
  let api_id = "e573d4a8";
  return axios
    .get(
      `https://trackapi.nutritionix.com/v2/search/item/?nix_item_id=5caee7e2c0ba1c5f14fe9b38`,
      {
        headers: {
          "x-app-id": api_id,
          "x-app-key": api_key
        }
      }
    )
    .then(function(response) {
      console.log(response);
      return response.data.foods;
    });
};

export default nutritionRequest;
