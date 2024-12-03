import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateCartData } from "../api/cart"

// 쿼리 키를 상수로 관리
const CART_QUERY_KEY = ["CartData"] as const

export const useUpdateCartItem = () => {
  const queryClient = useQueryClient()

  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: updateCartData,
    onError: (error) => {
      console.error("Cart update failed:", error)
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
