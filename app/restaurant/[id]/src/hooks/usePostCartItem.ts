import { useMutation } from "@tanstack/react-query"
import { postCartItem } from "../api/postCartItem"

export const usePostCartItem = () => {
  const postCartItemMutation = useMutation({
    mutationFn: postCartItem,

    onError: (error, variables, context) => {},
    onSuccess: (data, variables, context) => {},
  })

  return { postCartItemMutation }
}
