import api from "./index"

export const contactApi = {
  submitContactForm: (data) => api.post("/api/contact/contact", data),
}
