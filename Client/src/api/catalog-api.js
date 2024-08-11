import * as request from "./requester.js";
const BASE_URL = "http://localhost:3030/jsonstore/catalog";
export const getAll = async () => {
  const result = await request.get(BASE_URL);
  const CatalogItems = Object.values(result);
  return CatalogItems;
};
