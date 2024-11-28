import { api } from "@/shared/axios/axiosInstance"
import { CartData } from "@/types/cart"

import axios, { AxiosError } from "axios"
// API 에러 타입
interface ApiError {
  message: string
  code: string
}
interface postCartStateDto {
  menuId: number
  quantity: number
}
export const postCartState = async ({ menuId, quantity }: postCartStateDto): Promise<CartData> => {
  try {
    const { data } = await api.post<CartData>(`/users/items`, {
      menuId,
      quantity,
    })
    return data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || "장바구니 데이터 전송 실패")
    }
    throw error
  }
}
