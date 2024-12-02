import { useMutation } from "@tanstack/react-query"
import { updateCartData } from "../api/cart"

export const useUpdateCartItem = () => {
  const patchCartState = useMutation({
    mutationFn: updateCartData,

    onError: (error, variables, context) => {
      console.log(error)
      // An error happened!
      //   console.log(`rolling back optimistic update with id ${context.id}`)
    },
    onSuccess: (data, variables, context) => {
      // Boom baby!
    },
    onSettled: (data, error, variables, context) => {
      // Error or success... doesn't matter!
    },
  })

  return { patchCartState }
}
/**
 * 쿼리키를 const로 선언하고
 * 장바구니 관려 react query를 한곳에서 관리하면
 *
 */
