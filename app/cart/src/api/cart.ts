import { api } from "@/shared/axios/axiosInstance"
import { CartData } from "@/types/cart"
import axios, { AxiosError } from "axios"
// API 에러 타입
interface ApiError {
  message: string
  code: string
}
export const getCartData = async (): Promise<CartData> => {
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
interface postCartDto {
  menuId: number
  quantity: number
}
export const postCartData = async ({ menuId, quantity }: postCartDto): Promise<CartData> => {
  try {
    const { data } = await api.post<CartData>(`/users/items?menuId=${menuId}?quantity=${quantity}`)
    return data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || "장바구니 데이터 전송 실패")
    }
    throw error
  }
}
interface updateCartDto {
  menuId: number
  quantity: number
}
export const updateCartData = async ({ menuId, quantity }: updateCartDto): Promise<CartData> => {
  try {
    const { data } = await api.patch<CartData>(
      `/users/items/${menuId}?menuId=${menuId}?quantity=${quantity}`,
    )
    return data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || "장바구니 데이터 전송 실패")
    }
    throw error
  }
}
interface updateCartDataWithOverWriteDto extends updateCartDto {
  overwrite: boolean
}
export const addCartDataWithOverwrite = async ({
  menuId,
  quantity,
  overwrite,
}: updateCartDataWithOverWriteDto): Promise<CartData> => {
  try {
    const { data } = await api.post<CartData>(
      `/users/items?menuId=${menuId}?quantity=${quantity}?overwrite=${overwrite}`,
    )
    return data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || "장바구니 데이터 전송 실패")
    }
    throw error
  }
}
