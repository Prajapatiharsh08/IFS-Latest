import { takeLatest, put, call } from "redux-saga/effects"
import { contactApi } from "../../api/contactApi"
import { SUBMIT_CONTACT_REQUEST } from "../types"
import { submitContactSuccess, submitContactFailure } from "../actions/contactActions"

// Worker Saga
function* submitContactSaga(action) {
  try {
    const response = yield call(contactApi.submitContactForm, action.payload)
    yield put(submitContactSuccess(response.data))
  } catch (error) {
    yield put(submitContactFailure(error.response?.data?.message || "Failed to submit contact form"))
  }
}

// Watcher Saga
export default function* contactSagas() {
  yield takeLatest(SUBMIT_CONTACT_REQUEST, submitContactSaga)
}
