import axios from "axios";

const SERVER_URL = "http://127.0.0.1:8080";
const instance = axios.create({
  baseURL: SERVER_URL,
});

export default instance;
