import { api } from "@/shared/axios/axiosInstance"
interface PhoneSignUpRequestDto {
  name: string
  phone: string
  birthday: string
  password: string
}
//@=> 관련된 API호출은 같은 곳에서 관리하자.
export const phoneSignUpRequestApi = async (formData: PhoneSignUpRequestDto) => {
  console.log(formData)
  try {
    const response = await api.post("/auth/signUp", formData)
    return response.data
  } catch (error) {
    throw error
  }
}
