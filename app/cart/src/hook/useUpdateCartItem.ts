import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateCartData } from "../api/cart"
import axios, { AxiosError } from "axios"
import { ApiError } from "next/dist/server/api-utils"

// 쿼리 키를 상수로 관리
const CART_QUERY_KEY = ["CartData"] as const

export const useUpdateCartItem = () => {
  const queryClient = useQueryClient()

  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: updateCartData,
    onError: async (error: Error | AxiosError<ApiError>) => {
      if (axios.isAxiosError(error)) {
        console.error("API 요청 실패:", error.response?.data?.message)
      } else {
        //네트워크 에러
        console.error("네트워크 에러:", error)
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CART_QUERY_KEY })
    },
  })
  return {
    updateCart: mutate,
    isUpdating: isPending,
    hasError: isError,
    isSuccess,
  }
}
