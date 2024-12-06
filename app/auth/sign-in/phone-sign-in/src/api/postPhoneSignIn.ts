import { api, loginApi } from "@/shared/axios/axiosInstance"

import axios, { AxiosError } from "axios"
// API 에러 타입
interface ApiError {
  message: string
  code: string
}
interface SignInRequestDto {
  phone: string
  password: string
}

interface SignInResponse {
  accessToken: string
  refreshToken: string
}
export const postPhoneSignIn = async ({ phone, password }: SignInRequestDto): Promise<void> => {
  try {
    const { data } = await loginApi.post<SignInResponse>(`/auth/login`, {
      phone,
      password,
    })

    localStorage.setItem("token", data.accessToken)
    localStorage.setItem("refreshToken", data.refreshToken)
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || "일반 로그인 실패")
    }
    throw error
  }
}
