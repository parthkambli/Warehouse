import axios from "axios";

const api = axios.create({
  baseURL: "https://warehouse-u37f.onrender.com/",
});

export default api;
