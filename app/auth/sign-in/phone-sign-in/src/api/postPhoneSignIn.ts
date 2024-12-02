import { api, loginApi } from "@/shared/axios/axiosInstance"

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
    const { data } = await loginApi.post<void>(`/login`, {
      phone,
      password,
    })
    return data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || "일반 로그인 실패")
    }
    throw error
  }
}
