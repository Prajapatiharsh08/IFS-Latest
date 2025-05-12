import { SUBMIT_CONTACT_REQUEST, SUBMIT_CONTACT_SUCCESS, SUBMIT_CONTACT_FAILURE } from "../types"

export const submitContactRequest = (data) => ({
  type: SUBMIT_CONTACT_REQUEST,
  payload: data,
})

export const submitContactSuccess = (response) => ({
  type: SUBMIT_CONTACT_SUCCESS,
  payload: response,
})

export const submitContactFailure = (error) => ({
  type: SUBMIT_CONTACT_FAILURE,
  payload: error,
})
