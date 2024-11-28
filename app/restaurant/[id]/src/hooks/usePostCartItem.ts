import { useMutation } from "@tanstack/react-query"
import { postCartItem } from "../api/postCartItem"

export const usePostCartItem = () => {
  const postCartItemMutation = useMutation({
    mutationFn: postCartItem,

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

  return { postCartItemMutation }
}
