import { api } from "@/shared/axios/axiosInstance"
import axios, { AxiosError } from "axios"
// API 에러 타입
interface ApiError {
  message: string
  code: string
}
interface updateWishListDto {
  storeId: string
}
export const updateWishApi = async ({ storeId }: updateWishListDto): Promise<void> => {
  try {
    await api.post<void>(`/user/wishModification?storeId=${storeId}`)
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || "찜 업데이트 실패")
    }
    throw error
  }
}
