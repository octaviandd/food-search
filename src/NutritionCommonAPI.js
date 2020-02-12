/** @format */

const nutritionRequest = param => {
  let api_key = "4f16add0b27c446ec23f670ff0c898c1";
  let api_id = "e573d4a8";
  let configBody = { query: param };
  return fetch(`https://trackapi.nutritionix.com/v2/natural/nutrients`, {
    method: "post",
    body: JSON.stringify(configBody),
    headers: {
      "x-app-id": api_id,
      "x-app-key": api_key,
      "Content-Type": "application/json"
    }
  }).then(res => {
    return res.json();
  });
};

export default nutritionRequest;
