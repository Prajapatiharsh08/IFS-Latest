import { takeLatest, put, call } from "redux-saga/effects"
import { personalDetailsApi } from "../../api/personalDetailsApi"
import { SAVE_PERSONAL_DETAILS_REQUEST } from "../types"
import { savePersonalDetailsSuccess, savePersonalDetailsFailure } from "../actions/personalDetailsActions"

// Worker Saga
function* savePersonalDetailsSaga(action) {
  try {
    const response = yield call(personalDetailsApi.savePersonalDetails, action.payload)
    yield put(savePersonalDetailsSuccess(response.data))
  } catch (error) {
    yield put(savePersonalDetailsFailure(error.response?.data?.message || "Failed to save personal details"))
  }
}

// Watcher Saga
export default function* personalDetailsSagas() {
  yield takeLatest(SAVE_PERSONAL_DETAILS_REQUEST, savePersonalDetailsSaga)
}
