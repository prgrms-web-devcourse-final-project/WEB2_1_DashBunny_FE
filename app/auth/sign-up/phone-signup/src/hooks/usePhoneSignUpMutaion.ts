import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { phoneSignUpRequestApi } from "../api/phoneSignUpRequestApi"
import { useRouter } from "next/navigation"
interface usePhoneSignUpMutationData {
  phone: string
}
export const usePhoneSignUpMutation = (phone: string) => {
  const queryClient = useQueryClient()

  const router = useRouter()
  const postPhoneSignUpRequest = useMutation({
    mutationFn: phoneSignUpRequestApi,
    onSuccess: (data) => {
      queryClient.setQueryData(["signUp", "phone"], { phoneNumber: phone })
      router.push("/auth/message-authentication")
    },
  })
  return { postPhoneSignUpRequest }
}
export const useStoredPhoneNumber = () => {
  const { data } = useQuery<{ phoneNumber: string }>({
    queryKey: ["signUp", "phone"],
    staleTime: Infinity,
  })

  return data?.phoneNumber
}
