import axios from "axios";

const API_BASE = import.meta.env.PROD
  ? "https://ifsc-lookup-backend.onrender.com/"
  : "http://localhost:5000/api";

export const getIFSCDetails = (code) =>
  axios.get(`${API_BASE}/ifsc/${code}`);
