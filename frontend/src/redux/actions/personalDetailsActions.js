import { SAVE_PERSONAL_DETAILS_REQUEST, SAVE_PERSONAL_DETAILS_SUCCESS, SAVE_PERSONAL_DETAILS_FAILURE } from "../types"

export const savePersonalDetailsRequest = (data) => ({
  type: SAVE_PERSONAL_DETAILS_REQUEST,
  payload: data,
})

export const savePersonalDetailsSuccess = (response) => ({
  type: SAVE_PERSONAL_DETAILS_SUCCESS,
  payload: response,
})

export const savePersonalDetailsFailure = (error) => ({
  type: SAVE_PERSONAL_DETAILS_FAILURE,
  payload: error,
})
