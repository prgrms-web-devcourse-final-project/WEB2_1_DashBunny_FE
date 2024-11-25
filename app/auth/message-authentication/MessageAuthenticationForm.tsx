"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import useForm from "@/hooks/useForm"
import { UserInformation } from "@/types/userInfo"
import validateLogin from "@/validation/UserInfoValidation"
import { useRouter } from "next/navigation"
import Link from "next/link"
import InfoForm from "@/components/common/InfoForm"
import { authenticationNumber } from "@/types/authentication"
import AuthenticationNumberValidation from "@/validation/AuthenticationNumberValidation"

//@=>다시받기, 남은시간
export default function UserInfoForm() {
  const router = useRouter()
  const login = useForm<authenticationNumber>({
    initialValues: {
      authenticationNumber: "",
    },
    validate: AuthenticationNumberValidation,
  })
  //@=> step, handler 훅으로
  const [step, setStep] = useState(1)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("인증완료")
    router.push("/")
  }

  const authenticationHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      const { authenticationNumber } = AuthenticationNumberValidation(login.values)
      if (authenticationNumber !== "") return alert("인증번호가 올바르지 않습니다.")
      alert("인증완료")
      router.push("/")
    }
  }

  return (
    <div className="p-6 flex flex-col h-full">
      <h1 className="text-2xl font-bold mb-6 whitespace-pre-wrap">
        {"문자로 받은\n인증번호를 입력해주세요"}
      </h1>
      <form onSubmit={handleSubmit} className="h-full">
        <div className="flex flex-col gap-2 mb-4">
          <InfoForm
            onKeyDown={authenticationHandler}
            errorMessage={login.errors.authenticationNumber}
            label="인증번호"
            maxLength={6}
            onChange={login.getTextInputProps("authenticationNumber").onChange}
            value={login.getTextInputProps("authenticationNumber").value}
            onBlur={login.getTextInputProps("authenticationNumber").onBlur}
            touched={login.touched.authenticationNumber}
          />
        </div>
      </form>
    </div>
  )
}
