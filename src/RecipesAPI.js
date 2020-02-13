/** @format */

const axios = require("axios");

const recipesRequest = param => {
  let api_key = "22fc1c61be0e6c110d102bfb3579025a";
  let api_id = "f36dfa25";

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
