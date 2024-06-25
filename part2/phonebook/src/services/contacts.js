import axios from "axios";
const url = "http://localhost:3001/persons";

const getAll = () => {
  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

const create = (newContact) => {
  return axios
    .post(url, newContact)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export default { getAll, create };
