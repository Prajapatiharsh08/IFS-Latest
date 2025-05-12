import { useDispatch, useSelector } from "react-redux"
import { savePersonalDetailsRequest } from "../redux/actions/personalDetailsActions"

const usePersonalDetails = () => {
  const dispatch = useDispatch()
  const { data, loading, error, success } = useSelector((state) => state.personalDetails)

  const savePersonalDetails = (detailsData) => {
    dispatch(savePersonalDetailsRequest(detailsData))
  }

  return {
    personalDetails: data,
    loading,
    error,
    success,
    savePersonalDetails,
  }
}

export default usePersonalDetails
