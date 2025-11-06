import axios from "axios";

const API = axios.create({
  baseURL: "https://collegedashbooardapp.onrender.com", 
});

export default API;