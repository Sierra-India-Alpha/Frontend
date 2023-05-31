import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3333'
})

const setUserInfo = (token) => {
 api.defaults.headers.common={
    "Authorization": "Bearer "+sessionStorage.getItem("token"),
 }
}

export default api