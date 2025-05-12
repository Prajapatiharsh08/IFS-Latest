import {
  SAVE_INVESTMENT_PREFERENCES_REQUEST,
  SAVE_INVESTMENT_PREFERENCES_SUCCESS,
  SAVE_INVESTMENT_PREFERENCES_FAILURE,
} from "../types"

export const saveInvestmentPreferencesRequest = (data) => ({
  type: SAVE_INVESTMENT_PREFERENCES_REQUEST,
  payload: data,
})

export const saveInvestmentPreferencesSuccess = (response) => ({
  type: SAVE_INVESTMENT_PREFERENCES_SUCCESS,
  payload: response,
})

export const saveInvestmentPreferencesFailure = (error) => ({
  type: SAVE_INVESTMENT_PREFERENCES_FAILURE,
  payload: error,
})
