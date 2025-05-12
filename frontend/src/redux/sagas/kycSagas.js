import { takeLatest, put, call } from "redux-saga/effects"
import { kycApi } from "../../api/kycApi"
import { SUBMIT_KYC_REQUEST } from "../types"
import { submitKycSuccess, submitKycFailure } from "../actions/kycActions"

// Worker Saga
function* submitKycSaga(action) {
  try {
    // Create FormData for file uploads
    const formData = new FormData()

    // Add all fields to FormData
    Object.keys(action.payload).forEach((key) => {
      if (key === "documents") {
        // Handle file uploads
        action.payload.documents.forEach((doc) => {
          formData.append("documents", doc)
        })
      } else {
        formData.append(key, action.payload[key])
      }
    })

    const response = yield call(kycApi.submitKYC, formData)
    yield put(submitKycSuccess(response.data))
  } catch (error) {
    yield put(submitKycFailure(error.response?.data?.message || "Failed to submit KYC"))
  }
}

// Watcher Saga
export default function* kycSagas() {
  yield takeLatest(SUBMIT_KYC_REQUEST, submitKycSaga)
}
