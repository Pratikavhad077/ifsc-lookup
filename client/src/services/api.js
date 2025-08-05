import axios from "axios";

const API_BASE = import.meta.env.PROD
  ? "/api" // Vercel proxy to backend
  : "http://localhost:5000/api";

export const getIFSCDetails = (code) =>
  axios.get(`${API_BASE}/ifsc/${code}`);
