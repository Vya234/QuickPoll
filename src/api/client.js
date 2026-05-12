import axios from "axios";

/**
 * Single Axios instance for the API so base URL and defaults stay consistent across the app.
 * Set REACT_APP_API_URL in production (e.g. your Render backend URL).
 */
const API_BASE_URL =
  process.env.REACT_APP_API_URL || "http://localhost:5000";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export default api;
export { API_BASE_URL };
