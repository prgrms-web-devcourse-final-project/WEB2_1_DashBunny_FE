import { api } from "@/shared/axios/axiosInstance"
import { Store } from "@/shared/model/restaurant"
import axios, { AxiosError } from "axios"
import { OrderHistory } from "../model/order"
// API 에러 타입
interface ApiError {
  message: string
  code: string
}
export const getOrderList = async (): Promise<OrderHistory[]> => {
  try {
    const response = await api.get<OrderHistory[]>("/order/history")
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || "주문리스트 조회 실패")
    }
    throw error
  }
}
