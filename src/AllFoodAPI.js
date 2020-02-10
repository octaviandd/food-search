/** @format */
const axios = require("axios");

const AllFoodAPI = param => {
  let api_key = "a20d53435af76ba14e77ae390ac8754b";
  let api_id = "084df480";
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

export default AllFoodAPI;
