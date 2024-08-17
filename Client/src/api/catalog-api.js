import * as request from "./requester.js";
const BASE_URL = "http://localhost:3030/data/catalog";
export const getAll = async () => {
  const result = await request.get(BASE_URL);
  const CatalogItems = Object.values(result);
  return CatalogItems;
};

export const getOne = (itemId) => request.get(`${BASE_URL}/${itemId}`);

export const createItem = (itemId) => request.post(`${BASE_URL}`, itemId);

export const remove=(itemId)=>request.del(`${BASE_URL}/${itemId}`)

export const update=(itemId,itemData)=>request.put( `${BASE_URL}/${itemId}`,itemData)

const itemApi = {
  getAll,
  getOne,
  createItem,
  remove,
  update
};
export default itemApi;
