import { SUBMIT_CONTACT_REQUEST, SUBMIT_CONTACT_SUCCESS, SUBMIT_CONTACT_FAILURE } from "../types"

const initialState = {
  loading: false,
  error: null,
  success: false,
  message: null,
}

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_CONTACT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        success: false,
      }

    case SUBMIT_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        message: action.payload.message,
        error: null,
      }

    case SUBMIT_CONTACT_FAILURE:
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

export default contactReducer
