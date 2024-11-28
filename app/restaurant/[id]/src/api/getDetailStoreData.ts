import { api } from "@/shared/axios/axiosInstance"
import { UsersStoreDetailResponseDto } from "@/types/Store"
import axios, { AxiosError } from "axios"
// API 에러 타입
interface ApiError {
  message: string
  code: string
}
export const getDetailStoreData = async (storeId: string): Promise<UsersStoreDetailResponseDto> => {
  try {
    const response = await api.get<UsersStoreDetailResponseDto>(
      `/users/stores/details?storeId=${storeId}`,
    )
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || "주소 조회 실패")
    }
    throw error
  }
}
