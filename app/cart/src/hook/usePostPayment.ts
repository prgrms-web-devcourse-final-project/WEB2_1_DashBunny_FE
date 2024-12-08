import { useMutation } from "@tanstack/react-query"
import axios, { AxiosError } from "axios"
import { ApiError } from "next/dist/server/api-utils"
import { postPayment } from "../api/payment"
import { useRouter } from "next/navigation"

export const usePostPayment = () => {
  const router = useRouter()
  const { mutate } = useMutation({
    mutationFn: postPayment,
    onError: async (error: Error | AxiosError<ApiError>, variables) => {
      if (axios.isAxiosError(error)) {
        alert("결제 실패")
      } else {
        console.error("네트워크 에러:", error)
      }
    },
    onSuccess: (data) => {
      router.push(data.paymentInfo.checkout.url)
    },
  })

  return {
    postPayment: mutate,
  }
}
