// src/config/apiConfig.js
export const API_URL = import.meta.env.VITE_API_URL;
const configURL = {
  login: `${API_URL}/auth/login`, // Adjust the endpoint as needed
  register: `${API_URL}/auth/register`, // Adjust the endpoint as needed
};

export default configURL;
