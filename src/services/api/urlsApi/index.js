import api from "../api.js";
import { urlsEndpoints } from "./endpoints.js";

const urlsApi = {
  createUrl: async (body, token) => {
    const res = await api.post(urlsEndpoints.create, body, {
      headers: { Authorization: "Bearer " + token },
    });
    return res.data;
  },
  deleteUrl: async (params, token) => {
    if (params) {
      const url = `${urlsEndpoints.delete}${params}`;
      const res = await api.delete(url, {
        headers: { Authorization: "Bearer " + token },
      });
      return res.data;
    }
  },
};

export default urlsApi;
