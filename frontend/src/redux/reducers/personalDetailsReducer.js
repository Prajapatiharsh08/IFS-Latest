import { SAVE_PERSONAL_DETAILS_REQUEST, SAVE_PERSONAL_DETAILS_SUCCESS, SAVE_PERSONAL_DETAILS_FAILURE } from "../types"

const initialState = {
  data: null,
  loading: false,
  error: null,
  success: false,
}

const personalDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_PERSONAL_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        success: false,
      }

    case SAVE_PERSONAL_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        success: true,
        error: null,
      }

    case SAVE_PERSONAL_DETAILS_FAILURE:
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

export default personalDetailsReducer
