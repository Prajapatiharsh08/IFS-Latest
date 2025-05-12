import api from "./index"

export const authApi = {
  register: (userData) => api.post("/api/register", userData),
  login: (credentials) => api.post("/api/login", credentials),
  resendOtp: (email) => api.post("/api/resend-otp", { email }),
}
