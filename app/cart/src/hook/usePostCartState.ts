import { useMutation } from "@tanstack/react-query"
import { postCartState } from "../api/postCartState"

export const usePostCartState = () => {
  const patchCartState = useMutation({
    mutationFn: postCartState,
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
