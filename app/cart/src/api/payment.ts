import { api } from "@/shared/axios/axiosInstance"
import { PaymentResponse } from "../types/payment"
export interface PostPaymentDto {
  storeRequirement: string
  deliveryRequirement: string
}
export const postPayment = async ({
  storeRequirement,
  deliveryRequirement,
}: PostPaymentDto): Promise<PaymentResponse> => {
  const { data } = await api.post<PaymentResponse>(
    `/users/carts/checkout?storeRequirement=${storeRequirement}&deliveryRequirement=${deliveryRequirement}`,
  )
  return data
  //TODO: 에러 핸들링
}
