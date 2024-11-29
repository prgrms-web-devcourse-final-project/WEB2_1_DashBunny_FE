import { api } from "@/shared/axios/axiosInstance"
import { UsersStoreListResponseDto } from "@/types/Store"
import axios, { AxiosError } from "axios"
// API 에러 타입
interface ApiError {
  message: string
  code: string
}
export const getRestaurantListByCategory = async (
  category: string,
  address: string | null,
): Promise<UsersStoreListResponseDto[]> => {
  try {
    const response = await api.get<UsersStoreListResponseDto[]>(
      `/users/stores/${category}?address=${address}`,
    )
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || "음식리스트 조회 실패")
    }
    throw error
  }
}
