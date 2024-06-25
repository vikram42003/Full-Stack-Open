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

const deleteContact = (id) => {
  return axios
    .delete(`${url}/${id}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

const update = (id, updatedContact) => {
  return axios
    .put(`${url}/${id}`, updatedContact)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export default { getAll, create, deleteContact, update };
