import api from "../api.js";
import authEndpoints from "./endpoints";

const authApi = {
  createUser: async (body) => {
    const res = await api.post(authEndpoints.signUp, body);
    return res.data;
  },
  login: async (body) => {
    const res = await api.post(authEndpoints.signIn, body);
    return res.data;
  },
  logout: async (body, token) => {
    const res = await api.delete(authEndpoints.logout, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  },
};

export default authApi;