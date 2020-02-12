/** @format */

const axios = require("axios");

const recipesRequest = param => {
  let api_key = "5afc892716085e550976cd29a6843beb 	";
  let api_id = "697b97d8";
  return fetch(
    `https://api.edamam.com/search/q=${param}&app_id=${api_id}&app_key=${api_key}`,
    {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    }
  ).then(res => {
    console.log(res.json());
    return res.json();
  });
};

export default recipesRequest;
