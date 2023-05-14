import axios from "axios";

const api = axios.create({
  baseURL: "https://warehouse-rhe2.onrender.com",
});

export default api;
