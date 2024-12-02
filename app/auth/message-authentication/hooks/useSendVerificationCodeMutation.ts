import { useMutation } from "@tanstack/react-query"
import { sendVerificationCodeApi } from "../api/verifySMSRequestApi"

export const useSendVerificationCodeMutation = () => {
  const sendVerificationCodeRequest = useMutation({
    mutationFn: sendVerificationCodeApi,
    onSuccess: () => {
      alert("인증번호가 전송되었습니다.")
    },
    onError: () => {
      alert("인증번호가 전송되었습니다.")
      // alert("인증번호 전송에 실패했습니다.")
    },
  })
  return { sendVerificationCodeRequest }
}
