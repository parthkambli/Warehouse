import axios from "axios";

// const api = axios.create({
//   baseURL: "https://warehouse-u37f.onrender.com",
// });

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export default api;
