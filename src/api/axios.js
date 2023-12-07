import axios from "axios";

const SERVER_URL = "http://localhost:3000";
const instance = axios.create({
  baseURL: SERVER_URL,
});

export default instance;
