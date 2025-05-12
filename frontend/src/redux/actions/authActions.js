import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  RESEND_OTP_REQUEST,
  RESEND_OTP_SUCCESS,
  RESEND_OTP_FAILURE,
  LOGOUT,
  CLEAR_ERRORS,
} from "../types"

// Register actions
export const registerRequest = (userData) => ({
  type: REGISTER_REQUEST,
  payload: userData,
})

export const registerSuccess = (message) => ({
  type: REGISTER_SUCCESS,
  payload: message,
})

export const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: error,
})

// Login actions
export const loginRequest = (credentials) => ({
  type: LOGIN_REQUEST,
  payload: credentials,
})

export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data,
})

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
})

// Resend OTP actions
export const resendOtpRequest = (email) => ({
  type: RESEND_OTP_REQUEST,
  payload: email,
})

export const resendOtpSuccess = (message) => ({
  type: RESEND_OTP_SUCCESS,
  payload: message,
})

export const resendOtpFailure = (error) => ({
  type: RESEND_OTP_FAILURE,
  payload: error,
})

// Logout action
export const logout = () => ({
  type: LOGOUT,
})

// Clear errors
export const clearErrors = () => ({
  type: CLEAR_ERRORS,
})
