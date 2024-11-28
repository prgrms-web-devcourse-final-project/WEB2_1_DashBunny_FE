// import { useMutation } from "@tanstack/react-query"
// import { sendMainAddress } from "../api/sendMainAddress"
// import { useRouter } from "next/router"

import { useMutation } from "@tanstack/react-query"
import { sendMainAddress } from "../api/sendMainAddress"

// const router = useRouter()
// export const addressMutation = useMutation({
//   mutationFn: sendMainAddress,
//   onSuccess: () => {
//     router.push("/address")
//   },
//   onError: (err) => {},
// })
// // /api/users/stores/checking?address= 서울시 동작구 ~~

export const useSendAddress = () => {
  const sendAddressMutation = useMutation({
    mutationFn: sendMainAddress,

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

  return { sendAddressMutation }
}
