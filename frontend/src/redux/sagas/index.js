import { all } from "redux-saga/effects"
import authSagas from "./authSagas"
import personalDetailsSagas from "./personalDetailsSagas"
import investmentPreferencesSagas from "./investmentPreferencesSagas"
import kycSagas from "./kycSagas"
import contactSagas from "./contactSagas"

export default function* rootSaga() {
  yield all([authSagas(), personalDetailsSagas(), investmentPreferencesSagas(), kycSagas(), contactSagas()])
}
