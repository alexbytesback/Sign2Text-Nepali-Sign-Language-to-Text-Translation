// src/axiosInstance.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:5000/api', // Base URL for your Flask API
});

export default instance;
