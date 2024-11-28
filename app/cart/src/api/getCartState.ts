import { api } from "@/shared/axios/axiosInstance"
import { CartData } from "@/types/cart"
import axios, { AxiosError } from "axios"
// API 에러 타입
interface ApiError {
  message: string
  code: string
}
export const getCartState = async (): Promise<CartData> => {
  try {
    const response = await api.get<CartData>(`/users/carts`)
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || "장바구니 조회 실패")
    }
    throw error
  }
}
