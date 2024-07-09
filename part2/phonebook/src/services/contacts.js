import axios from "axios";
const url = "/api/persons";

const getAll = () => {
  return axios.get(url).then((response) => response.data);
};

const create = (newContact) => {
  return axios.post(url, newContact).then((response) => response.data);
};

const deleteContact = (id) => {
  return axios.delete(`${url}/${id}`).then((response) => response.data);
};

const update = (id, updatedContact) => {
  return axios
    .put(`${url}/${id}`, updatedContact)
    .then((response) => response.data);
};

export default { getAll, create, deleteContact, update };
