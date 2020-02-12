/** @format */

const axios = require("axios");

const recipesRequest = param => {
  let api_key = "5afc892716085e550976cd29a6843beb 	";
  let api_id = "697b97d8";
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = `https://api.edamam.com/search/q=chicken&app_id=${api_id}&app_key=${api_key}`;
  return fetch(proxyurl + url)
    .then(res => {
      return res.json();
    })
    .then(function(data) {
      console.log(data);
    });
};

export default recipesRequest;
