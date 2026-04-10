import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api', // Update with your Flask backend URL
  timeout: 1000,
  headers: {'Content-Type': 'application/json'},
});

export default apiClient;