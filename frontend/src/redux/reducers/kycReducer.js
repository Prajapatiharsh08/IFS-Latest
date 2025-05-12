import { SUBMIT_KYC_REQUEST, SUBMIT_KYC_SUCCESS, SUBMIT_KYC_FAILURE } from "../types"

const initialState = {
  loading: false,
  error: null,
  success: false,
  message: null,
}

const kycReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_KYC_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        success: false,
      }

    case SUBMIT_KYC_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        message: action.payload.message,
        error: null,
      }

    case SUBMIT_KYC_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
      }

    default:
      return state
  }
}

export default kycReducer
