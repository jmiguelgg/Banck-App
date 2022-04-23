import axios from 'axios';

const API_URL = 'https://api.jsonbin.io/b/604006e581087a6a8b95b784';

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export default axiosInstance;
