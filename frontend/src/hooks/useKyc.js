import { useDispatch, useSelector } from "react-redux"
import { submitKycRequest } from "../redux/actions/kycActions"

const useKyc = () => {
  const dispatch = useDispatch()
  const { loading, error, success, message } = useSelector((state) => state.kyc)

  const submitKyc = (kycData) => {
    dispatch(submitKycRequest(kycData))
  }

  return {
    loading,
    error,
    success,
    message,
    submitKyc,
  }
}

export default useKyc
