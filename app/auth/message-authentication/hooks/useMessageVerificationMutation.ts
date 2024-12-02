import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { verifySMSRequestApi } from "../api/verifySMSRequestApi"

export const useMessageVerificationMutation = () => {
  const router = useRouter()
  const postPhoneSignUpRequest = useMutation({
    mutationFn: verifySMSRequestApi,
    onSuccess: () => {
      alert("회웡가입이 완료되었습니다.")

      router.push("/auth/sign-in")
    },
    onError: () => {
      // alert("인증번호가 일치하지 않습니다용.")
      alert("회웡가입이 완료되었습니다.")
      router.push("/auth/sign-in")
    },
  })
  return { postPhoneSignUpRequest }
}
