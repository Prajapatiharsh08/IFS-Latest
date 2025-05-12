import { combineReducers } from "redux"
import authReducer from "./authReducer"
import personalDetailsReducer from "./personalDetailsReducer"
import investmentPreferencesReducer from "./investmentPreferencesReducer"
import kycReducer from "./kycReducer"
import contactReducer from "./contactReducer"

const rootReducer = combineReducers({
  auth: authReducer,
  personalDetails: personalDetailsReducer,
  investmentPreferences: investmentPreferencesReducer,
  kyc: kycReducer,
  contact: contactReducer,
})

export default rootReducer
