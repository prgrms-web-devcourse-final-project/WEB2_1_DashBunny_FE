import { api } from "@/shared/axios/axiosInstance"
import { Store } from "@/shared/model/restaurant"
import axios, { AxiosError } from "axios"
import { Order } from "../model/order"
// API 에러 타입
interface ApiError {
  message: string
  code: string
}
export const getOrderList = async (): Promise<Order[]> => {
  try {
    const response = await api.get<Order[]>("/order/list")
    console.log(response.data)
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || "주문리스트 조회 실패")
    }
    throw error
  }
}
