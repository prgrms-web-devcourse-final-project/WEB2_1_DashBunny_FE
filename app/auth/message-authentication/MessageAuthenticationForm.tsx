"use client"

import { useEffect, useState } from "react"
import useForm from "@/hooks/useForm"
import { useRouter } from "next/navigation"
import InfoForm from "@/components/common/InfoForm"
import { authenticationNumber } from "@/types/authentication"
import AuthenticationNumberValidation from "@/validation/AuthenticationNumberValidation"
import { useQueryClient } from "@tanstack/react-query"
import { useMessageVerificationMutation } from "./hooks/useMessageVerificationMutation"
import ColorButton from "@/components/common/ColorButton"
import { useSendVerificationCodeMutation } from "./hooks/useSendVerificationCodeMutation"

//@=>다시받기, 남은시간
interface phoneNumberQueryData {
  phoneNumber: string
}
export default function UserInfoForm() {
  const login = useForm<authenticationNumber>({
    initialValues: {
      authenticationNumber: "",
    },
    validate: AuthenticationNumberValidation,
  })
  //@=> step, handler 훅으로

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }
  const queryClient = useQueryClient()
  const state = queryClient.getQueryState<phoneNumberQueryData>(["signUp", "phone"])
  const { postPhoneSignUpRequest } = useMessageVerificationMutation()
  const { sendVerificationCodeRequest } = useSendVerificationCodeMutation()
  useEffect(() => {
    sendVerificationCodeRequest.mutate({ phone: state?.data?.phoneNumber ?? "" })
  }, [])

  const onSubmitHandler = () => {
    if (login.errors.authenticationNumber) {
      console.log(login.errors.authenticationNumber)
      return alert("인증번호가 올바르지 않습니다.")
    }
    postPhoneSignUpRequest.mutate({
      phone: state?.data?.phoneNumber ?? "",
      verificationCode: login.values.authenticationNumber,
    })
  }

  return (
    <div className="p-6 flex flex-col h-full">
      <h1 className="text-2xl font-bold mb-6 whitespace-pre-wrap">
        {"문자로 받은\n인증번호를 입력해주세요"}
      </h1>
      <form onSubmit={handleSubmit} className="h-full">
        <div className="flex flex-col gap-2 mb-4">
          <InfoForm
            label="휴대폰 번호"
            maxLength={6}
            errorMessage=""
            // value={state?.data?.phoneNumber ?? ""}
            value="010-9433-0273"
            enabled={true}
          />
          <InfoForm
            errorMessage={login.errors.authenticationNumber}
            label="인증번호"
            maxLength={6}
            onChange={login.getTextInputProps("authenticationNumber").onChange}
            value={login.getTextInputProps("authenticationNumber").value}
            onBlur={login.getTextInputProps("authenticationNumber").onBlur}
            touched={login.touched.authenticationNumber}
          />
          <ColorButton text={"본인인증"} onClick={onSubmitHandler} size="large" />
        </div>
      </form>
    </div>
  )
}
