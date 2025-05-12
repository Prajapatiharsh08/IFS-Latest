import { takeLatest, put, call } from "redux-saga/effects"
import { authApi } from "../../api/authApi"
import { REGISTER_REQUEST, LOGIN_REQUEST, RESEND_OTP_REQUEST } from "../types"
import {
  registerSuccess,
  registerFailure,
  loginSuccess,
  loginFailure,
  resendOtpSuccess,
  resendOtpFailure,
} from "../actions/authActions"

// Worker Sagas
function* registerSaga(action) {
  try {
    const response = yield call(authApi.register, action.payload)
    yield put(registerSuccess(response.data.message))
  } catch (error) {
    yield put(registerFailure(error.response?.data?.message || "Registration failed"))
  }
}

function* loginSaga(action) {
  try {
    const response = yield call(authApi.login, action.payload)
    yield put(loginSuccess(response.data))
  } catch (error) {
    yield put(loginFailure(error.response?.data?.message || "Login failed"))
  }
}

function* resendOtpSaga(action) {
  try {
    const response = yield call(authApi.resendOtp, action.payload)
    yield put(resendOtpSuccess(response.data.message))
  } catch (error) {
    yield put(resendOtpFailure(error.response?.data?.message || "Failed to resend OTP"))
  }
}

// Watcher Saga
export default function* authSagas() {
  yield takeLatest(REGISTER_REQUEST, registerSaga)
  yield takeLatest(LOGIN_REQUEST, loginSaga)
  yield takeLatest(RESEND_OTP_REQUEST, resendOtpSaga)
}
