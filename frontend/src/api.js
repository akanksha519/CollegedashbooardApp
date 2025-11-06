import axios from "axios";

const API = axios.create({
  baseURL: "https://college-dashboard-backend-wn3w.onrender.com", 
});

export default API;