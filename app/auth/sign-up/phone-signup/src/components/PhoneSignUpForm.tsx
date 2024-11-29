"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import useForm from "@/hooks/useForm"

import InfoForm from "@/components/common/InfoForm"
import ColorButton from "@/components/common/ColorButton"
import { PhoneSignUpInfo } from "@/types/phoneSignUp"
import validateSignUp from "@/validation/PhoneSignUpValidation"
import Link from "next/link"

export default function PhoneSignUpForm() {
  //@=> 예외처리 더 필요함. 엔터 치면 다음 스텝으로 넘어가벼려서..
  const [step, setStep] = useState(1)

  const login = useForm<PhoneSignUpInfo>({
    initialValues: {
      phone: "",
      password: "",
      passwordConfirm: "",
    },
    validate: validateSignUp,
  })
  console.log(login.values)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 4) setStep((prev) => prev + 1)
  }

  const createKeyDownHandler =
    (currentStep: number) => (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault()
        if (step === currentStep && step < 4) {
          setStep((prev) => prev + 1)
        }
      }
    }

  return (
    <div className="p-6 flex flex-col h-full">
      <h1 className="text-2xl font-bold mb-6 whitespace-pre-wrap">
        {step === 1
          ? "휴대폰 번호를\n입력해주세요"
          : step === 2
            ? "비밀번호를\n입력해주세요"
            : step === 3
              ? "비밀번호를\n다시 입력해주세요"
              : ""}
      </h1>
      {step >= 4 && (
        <h1 className="text-2xl font-bold mb-6">
          정보가 맞다면 <br />
          인증하기 버튼을 눌러주세요
        </h1>
      )}

      <form onSubmit={handleSubmit} className="h-full">
        <div className="flex flex-col gap-2 mb-4">
          <AnimatePresence mode="popLayout">
            {/* Phone Number Section */}
            {step >= 3 && (
              <motion.div
                key="phone-section"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.3 }}
              >
                <InfoForm
                  type="password"
                  onKeyDown={createKeyDownHandler(3)}
                  errorMessage={login.errors.passwordConfirm}
                  label="비밀번호 확인"
                  maxLength={20}
                  onChange={login.getTextInputProps("passwordConfirm").onChange}
                  value={login.getTextInputProps("passwordConfirm").value}
                  onBlur={login.getTextInputProps("passwordConfirm").onBlur}
                  touched={login.touched.passwordConfirm}
                />
              </motion.div>
            )}

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
        <Link href="/auth/sign-up/user-info">
          <ColorButton
            onClick={() => {}}
            size="large"
            text={step === 4 ? "본인 인증하기" : "확인"}
          />
        </Link>
      </form>
    </div>
  )
}
