import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

const api = axios.create({ baseURL: API_URL });

export const signupUser = (userData) => api.post('users/signup/', userData);  // Ensure correct endpoint path
export const loginUser = (userData) => api.post('users/login/', userData);    // Ensure correct endpoint path

export default api;
