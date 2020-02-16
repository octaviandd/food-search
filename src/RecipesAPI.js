/** @format */

const axios = require("axios");

const recipesRequest = param => {
  let api_key = "70449e4d68b24be9fb1f9d4da3b7cb72";
  let api_id = "8540b488";

  return axios
    .get(
      `https://api.edamam.com/search?q=${param}&app_id=${api_id}&app_key=${api_key}`,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    .then(function(response) {
      return response.data.hits;
    });
};

export default recipesRequest;
