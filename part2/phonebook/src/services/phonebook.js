import axios from 'axios';
const URL = 'http://localhost:3001/persons';
const getAll = () => {
  return axios.get('http://localhost:3001/persons');
};

const create = (personsObject) => {
  return axios.post(URL, personsObject);
};
export default { getAll, create };
