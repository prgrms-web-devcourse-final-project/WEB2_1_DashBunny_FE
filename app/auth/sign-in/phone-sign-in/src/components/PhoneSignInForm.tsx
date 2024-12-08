"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import useForm from "@/hooks/useForm"

import InfoForm from "@/components/common/InfoForm"
import ColorButton from "@/components/common/ColorButton"
import { PhoneSignInInfo } from "@/types/phoneSignUp"
import validateSignIn from "@/validation/PhoneSignInValidation"
import { usePostPhoneSignIn } from "../hooks/usePostPhoneSignIn"

export default function PhoneSignInForm() {
  const phoneInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)
  const getNextInputRef = (currentStep: number) => {
    switch (currentStep) {
      case 1:
        return phoneInputRef
      case 2:
        return passwordInputRef
      default:
        return null
    }
  }

  const [step, setStep] = useState(1)

  const login = useForm<PhoneSignInInfo>({
    initialValues: {
      phone: "",
      password: "",
    },
    validate: validateSignIn,
  })
  const { postPhoneSignInMutation } = usePostPhoneSignIn()
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep((prev) => prev + 1)
      const currentRef = getNextInputRef(step + 1)
      setTimeout(() => {
        currentRef?.current?.focus()
      }, 100)
    }
    postPhoneSignInMutation.mutate(login.values)
  }

  const createKeyDownHandler =
    (currentStep: number) => (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault()

        if (step === currentStep && step < 3) {
          setStep((prev) => prev + 1)
          const currentRef = getNextInputRef(step + 1)
          console.log("🚀 ~ PhoneSignInForm ~ currentRef:", currentRef)
          setTimeout(() => {
            currentRef?.current?.focus()
          }, 100)
        }
      }
    }

  return (
    <div className="p-6 flex flex-col h-full">
      <h1 className="text-2xl font-bold mb-6 whitespace-pre-wrap">
        {step === 1 ? "휴대폰 번호를\n입력해주세요" : "비밀번호를\n입력해주세요"}
      </h1>

      <form onSubmit={handleSubmit} className="h-full">
        <div className="flex flex-col gap-2 mb-4">
          <AnimatePresence mode="popLayout">
            {step >= 2 && (
              <motion.div
                key="birth-section"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.3 }}
              >
                <InfoForm
                  ref={passwordInputRef}
                  type="password"
                  onKeyDown={createKeyDownHandler(2)}
                  errorMessage={login.errors.password}
                  label="비밀번호"
                  maxLength={20}
                  onChange={login.getTextInputProps("password").onChange}
                  value={login.getTextInputProps("password").value}
                  onBlur={login.getTextInputProps("password").onBlur}
                  touched={login.touched.password}
                />
              </motion.div>
            )}

            <InfoForm
              ref={phoneInputRef}
              onKeyDown={createKeyDownHandler(1)}
              errorMessage={login.errors.phone}
              label="휴대폰 번호"
              maxLength={11}
              onChange={login.getTextInputProps("phone").onChange}
              value={login.getTextInputProps("phone").value}
              onBlur={login.getTextInputProps("phone").onBlur}
              touched={login.touched.phone}
            />
          </AnimatePresence>
        </div>

        <ColorButton
          onClick={() => handleSubmit}
          size="large"
          text={step >= 2 ? "로그인" : "다음"}
        />
      </form>
    </div>
  )
}
