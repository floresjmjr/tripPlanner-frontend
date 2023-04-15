import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_BASE_URL || "http://localhost:8080"

const axiosConfig = axios.create({
  baseURL: BASE_URL
})

export default axiosConfig;