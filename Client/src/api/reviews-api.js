import requester from "./requester";
const BASE_URL = "http://localhost:3030/data/review";
const create = async (gameId, text) =>
  requester.post(BASE_URL, { gameId, text });
const getAll = async (gameId) => {
  const params = new URLSearchParams({
    where: `gameId="${gameId}"`,
  });

  console.log(`${BASE_URL}?${params.toString()}`);

  return requester.get(`${BASE_URL}?${params.toString()}`);
};
export default {
  create,
  getAll,
};
