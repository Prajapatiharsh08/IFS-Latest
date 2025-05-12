import { useDispatch, useSelector } from "react-redux"
import { submitContactRequest } from "../redux/actions/contactActions"

const useContact = () => {
  const dispatch = useDispatch()
  const { loading, error, success, message } = useSelector((state) => state.contact)

  const submitContactForm = (contactData) => {
    dispatch(submitContactRequest(contactData))
  }

  return {
    loading,
    error,
    success,
    message,
    submitContactForm,
  }
}

export default useContact
