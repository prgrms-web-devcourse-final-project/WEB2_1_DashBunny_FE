import { useMutation } from "@tanstack/react-query"
import { postPhoneSignIn } from "../api/postPhoneSignIn"

export const usePostPhoneSignIn = () => {
  const postPhoneSignInMutation = useMutation({
    mutationFn: postPhoneSignIn,
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

  return { postPhoneSignInMutation }
}
