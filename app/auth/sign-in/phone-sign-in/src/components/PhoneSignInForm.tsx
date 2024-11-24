"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import useForm from "@/hooks/useForm"

import InfoForm from "@/components/common/InfoForm"
import ColorButton from "@/components/common/ColorButton"
import { PhoneSignInInfo, PhoneSignUpInfo } from "@/types/phoneSignUp"
import validateSignIn from "@/validation/PhoneSignInValidation"

export default function PhoneSignInForm() {
  //@=> 예외처리 더 필요함. 엔터 치면 다음 스텝으로 넘어가벼려서..
  const [step, setStep] = useState(1)

  const login = useForm<PhoneSignInInfo>({
    initialValues: {
      phoneNumber: "",
      password: "",
    },
    validate: validateSignIn,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) setStep((prev) => prev + 1)
  }

  const createKeyDownHandler =
    (currentStep: number) => (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault()
        if (step === currentStep && step < 3) {
          setStep((prev) => prev + 1)
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
            {/* Phone Number Section */}

            {/* Birth Registration Section */}
            {step >= 2 && (
              <motion.div
                key="birth-section"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.3 }}
              >
                <InfoForm
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

            {/* Name Section */}

            <InfoForm
              onKeyDown={createKeyDownHandler(1)}
              errorMessage={login.errors.phoneNumber}
              label="휴대폰 번호"
              maxLength={11}
              onChange={login.getTextInputProps("phoneNumber").onChange}
              value={login.getTextInputProps("phoneNumber").value}
              onBlur={login.getTextInputProps("phoneNumber").onBlur}
              touched={login.touched.phoneNumber}
            />
          </AnimatePresence>
        </div>

        <ColorButton onClick={() => null} size="large" text={step === 2 ? "로그인" : "다음"} />
      </form>
    </div>
  )
}
