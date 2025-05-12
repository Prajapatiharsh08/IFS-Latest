import {
  SAVE_INVESTMENT_PREFERENCES_REQUEST,
  SAVE_INVESTMENT_PREFERENCES_SUCCESS,
  SAVE_INVESTMENT_PREFERENCES_FAILURE,
} from "../types"

const initialState = {
  data: null,
  loading: false,
  error: null,
  success: false,
}

const investmentPreferencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_INVESTMENT_PREFERENCES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        success: false,
      }

    case SAVE_INVESTMENT_PREFERENCES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        success: true,
        error: null,
      }

    case SAVE_INVESTMENT_PREFERENCES_FAILURE:
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

export default investmentPreferencesReducer
