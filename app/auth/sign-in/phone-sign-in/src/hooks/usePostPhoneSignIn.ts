import { useMutation } from "@tanstack/react-query"
import { postPhoneSignIn } from "../api/postPhoneSignIn"
import { useRouter } from "next/navigation"

export const usePostPhoneSignIn = () => {
  const router = useRouter()
  const postPhoneSignInMutation = useMutation({
    mutationFn: postPhoneSignIn,
    onError: (error) => {
      alert("로그인 실패!")
      console.log(error)
    },
    onSuccess: (data) => {
      alert("로그인 성공!")
      router.push("/")
    },
  })

  return { postPhoneSignInMutation }
}
