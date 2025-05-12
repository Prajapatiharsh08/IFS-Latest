import { takeLatest, put, call } from "redux-saga/effects"
import { investmentPreferencesApi } from "../../api/investmentPreferencesApi"
import { SAVE_INVESTMENT_PREFERENCES_REQUEST } from "../types"
import {
  saveInvestmentPreferencesSuccess,
  saveInvestmentPreferencesFailure,
} from "../actions/investmentPreferencesActions"

// Worker Saga
function* saveInvestmentPreferencesSaga(action) {
  try {
    const response = yield call(investmentPreferencesApi.saveInvestmentPreferences, action.payload)
    yield put(saveInvestmentPreferencesSuccess(response.data))
  } catch (error) {
    yield put(
      saveInvestmentPreferencesFailure(error.response?.data?.message || "Failed to save investment preferences"),
    )
  }
}

// Watcher Saga
export default function* investmentPreferencesSagas() {
  yield takeLatest(SAVE_INVESTMENT_PREFERENCES_REQUEST, saveInvestmentPreferencesSaga)
}
