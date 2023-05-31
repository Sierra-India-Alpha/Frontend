import axios from "axios";

const api = axios.create({
    baseURL: "https://backend-production-08bb.up.railway.app"
})

export default api