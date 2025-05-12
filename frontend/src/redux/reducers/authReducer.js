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

const initialState = {
  isAuthenticated: false,
  user: null,
  token: localStorage.getItem("token") || null,
  loading: false,
  error: null,
  message: null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case RESEND_OTP_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }

    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
        error: null,
      }

    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token)
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        loading: false,
        error: null,
      }

    case RESEND_OTP_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
        error: null,
      }

    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
    case RESEND_OTP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    case LOGOUT:
      localStorage.removeItem("token")
      return {
        ...initialState,
        token: null,
      }

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
        message: null,
      }

    default:
      return state
  }
}

export default authReducer
