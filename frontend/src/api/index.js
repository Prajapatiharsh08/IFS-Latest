import axios from "axios"

// Create axios instance with base URL
const api = axios.create({
  baseURL: "https://ifs-latest.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
})

// Add request interceptor to include auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token")
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  (error) => Promise.reject(error),
)

export default api
