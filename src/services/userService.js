import apiClient from '../api/apiClient'

export const getAllUsers = () => {
  return apiClient.get("/users")
}