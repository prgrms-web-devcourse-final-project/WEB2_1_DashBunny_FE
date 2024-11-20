import { api } from "@/shared/axios/axiosInstance"
import { Store } from "@/shared/model/restaurant"
import axios, { AxiosError } from "axios"
// API 에러 타입
interface ApiError {
  message: string
  code: string
}
export const getRestaurantListByCategory = async (): Promise<Store[]> => {
  try {
    const response = await api.get<Store[]>(`/users/store`)
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || "위시리스트 조회 실패")
    }
    throw error
  }
}
