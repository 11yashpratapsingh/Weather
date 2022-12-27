const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4c34362f92mshec82f03f5e82c26p1e1623jsn082ccef46733",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
