import axios from "axios";
import API_PATHS from "../constants/apiPaths";

export const productsAPI = {
  getAll: async () => {
    return await axios.get(`${API_PATHS.bff}/products`);
  },
};
