/** @format */
const axios = require("axios");

const foodItemRequest = param => {
  let api_key = "4f16add0b27c446ec23f670ff0c898c1";
  let api_id = "e573d4a8";
  return axios
    .get(`https://trackapi.nutritionix.com/v2/search/instant?query=${param}`, {
      headers: {
        "x-app-id": api_id,
        "x-app-key": api_key
      }
    })
    .then(function(response) {
      return response;
    });
};

export default foodItemRequest;
