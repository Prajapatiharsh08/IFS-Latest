import { useDispatch, useSelector } from "react-redux"
import { saveInvestmentPreferencesRequest } from "../redux/actions/investmentPreferencesActions"

const useInvestmentPreferences = () => {
  const dispatch = useDispatch()
  const { data, loading, error, success } = useSelector((state) => state.investmentPreferences)

  const saveInvestmentPreferences = (preferencesData) => {
    dispatch(saveInvestmentPreferencesRequest(preferencesData))
  }

  return {
    investmentPreferences: data,
    loading,
    error,
    success,
    saveInvestmentPreferences,
  }
}

export default useInvestmentPreferences
