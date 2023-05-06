import api from "../api.js"

export default async function rankingApi(){
    const res = await api.get("/ranking");
    return res.data
}