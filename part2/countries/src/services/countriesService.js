import axios from "axios";
const API_Key = import.meta.env.VITE_WEATHER_API_KEY;
const url = "https://studies.cs.helsinki.fi/restcountries"

const getAll = () => {
  return axios.get(`${url}/api/all`).then((result) => {
    return result.data;
  })
}

const getCountry = (countryCommonName) => {
  return axios.get(`${url}/api/name/${countryCommonName}`).then(result => {
    return result.data;
  })
}

const getWeather = (country) => {
  if (API_Key) {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=${API_Key}`);
  } else {
    console.log("API_Key is not defined! Run the app with the OpenWeatherMap API key");
    console.log("Syntax/Example: export VITE_WEATHER_API_KEY=54l41n3n4v41m34rv0 && npm run dev // For Linux/macOS Bash\n($env:VITE_WEATHER_API_KEY='54l41n3n4v41m34rv0') -and (npm run dev) // For Windows PowerShell\nset 'VITE_WEATHER_API_KEY=54l41n3n4v41m34rv0' && npm run dev // For Windows cmd.exe")
  }
}

export default { getAll, getCountry, getWeather };