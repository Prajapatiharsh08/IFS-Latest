import { SUBMIT_KYC_REQUEST, SUBMIT_KYC_SUCCESS, SUBMIT_KYC_FAILURE } from "../types"

export const submitKycRequest = (data) => ({
  type: SUBMIT_KYC_REQUEST,
  payload: data,
})

export const submitKycSuccess = (response) => ({
  type: SUBMIT_KYC_SUCCESS,
  payload: response,
})

export const submitKycFailure = (error) => ({
  type: SUBMIT_KYC_FAILURE,
  payload: error,
})
