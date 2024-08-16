import requester from "./requester";
const BASE_URL = "http://localhost:3030/jsonstore/catalog";
const buildUrl = (gameId) => `${BASE_URL}/${gameId}/review`;
const create = async (gameId, username, text) =>
  requester.post(buildUrl(gameId), { username, text });
const getAll = async (gameId) => {
  const resutlt = await requester.get(buildUrl(gameId));
  const reviews = Object.values(resutlt);
  return reviews;
};
export default {
  create,
  getAll,
};
