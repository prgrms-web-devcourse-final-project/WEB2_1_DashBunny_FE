import { api } from "@/shared/axios/axiosInstance"
import { CartData } from "@/types/cart"
import { UsersStoreDetailResponseDto } from "@/types/Store"
import axios, { AxiosError } from "axios"
// API 에러 타입
interface ApiError {
  message: string
  code: string
}
interface PostCartItemRequestDto {
  menuId: number
  quantity: number
}
export const postCartItem = async ({
  menuId,
  quantity,
}: PostCartItemRequestDto): Promise<CartData> => {
  try {
    const response = await api.post<CartData>("/users/items", {
      menuId,
      quantity,
    })
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || "주소 조회 실패")
    }
    throw error
  }
}
