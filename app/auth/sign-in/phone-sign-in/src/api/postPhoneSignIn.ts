import { api } from "@/shared/axios/axiosInstance"

import axios, { AxiosError } from "axios"
// API 에러 타입
interface ApiError {
  message: string
  code: string
}
interface postCartStateDto {
  phone: string
  password: string
}
export const postPhoneSignIn = async ({ phone, password }: postCartStateDto): Promise<void> => {
  try {
    const { data } = await api.post<void>(`/loginForm`, {
      phone,
      password,
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
