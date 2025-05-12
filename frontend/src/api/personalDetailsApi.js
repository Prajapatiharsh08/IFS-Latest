import api from "./index"

export const personalDetailsApi = {
  savePersonalDetails: (data) => api.post("/api/personal_details/personal-details", data),
}
