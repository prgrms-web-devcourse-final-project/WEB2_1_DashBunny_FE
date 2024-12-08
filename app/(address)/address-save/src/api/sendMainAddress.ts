import { api } from "@/shared/axios/axiosInstance"
import { Store } from "@/shared/model/restaurant"
import axios, { AxiosError } from "axios"
// API 에러 타입
interface ApiError {
  message: string
  code: string
}
interface SendMainAddressDto {
  address: string
  detailAddress: string
}
export const sendMainAddress = async ({
  address,
  detailAddress,
}: SendMainAddressDto): Promise<void> => {
  try {
    await api.post<string>(
      `/users/stores/checking?address=${address}&detailAddress=${detailAddress}`,
    )
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || "주소 데이터 전송 실패")
    }
    throw error
  }
}
