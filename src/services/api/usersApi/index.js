import api from "../api.js";
import { usersEndpoints } from "./endpoints.js";

export const usersApi = {
  createUser: async (body) => {
    const res = await api.post(usersEndpoints.create, body);
    return res.data;
  },
  signInUser: async (body) => {
    const res = await api.post(usersEndpoints.signIn, body);
    return res.data;
  },
  userUrls: async (token) => {
    const res = await api.get(usersEndpoints.userUrls, {
      headers: { Authorization: "Bearer " + token },
    });
    return res.data;
  },
};
