/** @format */

const axios = require("axios");

const recipesRequest = param => {
  let api_key = "65d4a64c86dc77d4623bdaf07be5df23";
  let api_id = "7d8bd401";

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
