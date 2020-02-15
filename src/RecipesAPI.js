/** @format */

const axios = require("axios");

const recipesRequest = param => {
  let api_key = "b2173a8c45c3e825d54308d82f82cc21";
  let api_id = "eff5e213";

  return axios
    .get(
      `https://api.edamam.com/search?q=chicken&app_id=${api_id}&app_key=${api_key}`,
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
