import axios from "axios";
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

export default { getAll, getCountry };