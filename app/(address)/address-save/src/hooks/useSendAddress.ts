import { useMutation } from "@tanstack/react-query"
import { sendMainAddress } from "../api/sendMainAddress"

export const useSendAddress = () => {
  const sendAddressMutation = useMutation({
    mutationFn: sendMainAddress,

    onError: (error, variables, context) => {
      console.log(error)
    },
  })

  return { sendAddressMutation }
}
