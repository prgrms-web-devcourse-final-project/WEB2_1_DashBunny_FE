import { loginApi } from "@/shared/axios/axiosInstance"
interface PhoneSignUpRequestDto {
  name: string
  phone: string
  birthday: string
  password: string
}
//@=> 관련된 API호출은 같은 곳에서 관리하자.
export const phoneSignUpRequestApi = async (formData: PhoneSignUpRequestDto) => {
  try {
    const response = await loginApi.post("/auth/signUp", formData)
    return response.data
  } catch (error) {
    throw error
  }
}
