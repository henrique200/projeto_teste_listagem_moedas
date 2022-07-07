import axios from "axios";

const URL = 'https://api.binance.com/api/';

const api = axios.create({
    baseURL: URL,
    timeout: 0,
    headers: {
      'Content-Type': 'application/json',
    }
});
  

  export default api;