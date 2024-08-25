import axios from 'axios';
const URL = '/api/persons';
const getAll = () => {
  return axios.get(URL);
};

const create = (personsObject) => {
  return axios.post(URL, personsObject);
};

const remove = (id) => {
  return axios.delete(`${URL}/${id}`);
};

export default { getAll, create, remove };
