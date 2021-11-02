import axios from "axios";
const baseUrl = "http://localhost:3001/api/articles";
const timeout = 2000;

const getAll = async () => {
  const request = await axios.get(baseUrl);
  return request.data;
};

const getById = async (id) => {
  const request = await axios.get(`${baseUrl}/${id}`, { timeout });
  return request.data;
};

const create = async (newObject) => {
  const request = await axios.post(baseUrl, newObject, { timeout });
  return request.data;
};

const update = async (newObject) => {
  const request = await axios.put(`${baseUrl}/${newObject.id}`, newObject, { timeout });
  return request.data;
};

const remove = async (id) => {
  const request = await axios.delete(`${baseUrl}/${id}`, { timeout });
  return request.data;
};

const exportedObjet = {
  getAll,
  create,
  update,
  remove,
  getById,
};

export default exportedObjet;
