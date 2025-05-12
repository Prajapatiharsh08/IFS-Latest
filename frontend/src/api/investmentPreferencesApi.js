import api from "./index"

export const investmentPreferencesApi = {
  saveInvestmentPreferences: (data) => api.post("/api/investment_preferences", data),
}
