import api from "./index"

export const kycApi = {
  submitKYC: (formData) => {
    // For file uploads, we need to use FormData and set different headers
    return api.post("/api/kyc/submit", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  },
}
