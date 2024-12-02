import { api } from "@/shared/axios/axiosInstance"
interface VerifySMSRequestDto {
  phone: string
  verificationCode: string
}
//@=> 관련된 API호출은 같은 곳에서 관리하자.
export const verifySMSRequestApi = async (body: VerifySMSRequestDto) => {
  try {
    const response = await api.post("/auth/verify-sms", body)
    return response.data
  } catch (error) {
    throw error
  }
}
interface sendVerificationCodeDto {
  phone: string
}
export const sendVerificationCodeApi = async (phone: sendVerificationCodeDto) => {
  try {
    const response = await api.post("/auth/send-one", phone)
    return response.data
  } catch (error) {
    throw error
  }
}
