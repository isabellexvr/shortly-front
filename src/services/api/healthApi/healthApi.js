import api from "../api.js"

export default async function apiHealth(){
    const res = await api.get("/health");
    return res.data;
}