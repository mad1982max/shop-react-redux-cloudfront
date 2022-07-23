import { Product } from "./../models/Product";
import axios from "axios";
import API_PATHS from "../constants/apiPaths";

export const productsAPI = {
  getAll: async () => await axios.get(`${API_PATHS.main}/products`),
  getById: async (id: string) => await axios.get(`${API_PATHS.main}/products/${id}`),
  createProduct: async (body: Product) => await axios.post(`${API_PATHS.main}/products`, body),
};
