import { api } from "@/shared/axios/axiosInstance"
import { User } from "@/types/userInfo"
import axios, { AxiosError } from "axios"
// API 에러 타입
interface ApiError {
  message: string
  code: string
}
export const getUserInfo = async (): Promise<User> => {
  try {
    const response = await api.get<User>(`/api/user/currentUser`)
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || "유저정보 조회 실패")
    }
    throw error
  }
}
