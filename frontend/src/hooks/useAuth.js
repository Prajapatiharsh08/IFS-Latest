import { useDispatch, useSelector } from "react-redux"
import { registerRequest, loginRequest, resendOtpRequest, logout, clearErrors } from "../redux/actions/authActions"

const useAuth = () => {
  const dispatch = useDispatch()
  const { isAuthenticated, user, loading, error, message, token } = useSelector((state) => state.auth)

  const register = (userData) => {
    dispatch(registerRequest(userData))
  }

  const login = (credentials) => {
    dispatch(loginRequest(credentials))
  }

  const resendOtp = (email) => {
    dispatch(resendOtpRequest(email))
  }

  const logoutUser = () => {
    dispatch(logout())
  }

  const clearAuthErrors = () => {
    dispatch(clearErrors())
  }

  return {
    isAuthenticated,
    user,
    token,
    loading,
    error,
    message,
    register,
    login,
    resendOtp,
    logout: logoutUser,
    clearErrors: clearAuthErrors,
  }
}

export default useAuth
