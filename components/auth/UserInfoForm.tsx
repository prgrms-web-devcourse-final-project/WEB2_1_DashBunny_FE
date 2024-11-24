"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import ColorButton from "../common/ColorButton"
import useForm from "@/hooks/useForm"
import { UserInformation } from "@/types/userInfo"
import validateLogin from "@/validation/UserInfoValidation"
import InfoForm from "../common/InfoForm"

export default function UserInfoForm() {
  //@=> 예외처리 더 필요함. 엔터 치면 다음 스텝으로 넘어가벼려서..
  const [step, setStep] = useState(1)

  const login = useForm<UserInformation>({
    initialValues: {
      phoneNumber: "",
      birth: "",
      genNum: "",
      name: "",
    },
    validate: validateLogin,
  })

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
      <h1 className="text-2xl font-bold mb-6">
        {step === 1
          ? "이름을 입력해주세요"
          : step === 2
            ? "생년월일을 입력해주세요"
            : step === 3
              ? "핸드폰 번호를 입력해주세요"
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
                  onKeyDown={createKeyDownHandler(3)}
                  label="핸드폰 번호"
                  maxLength={11}
                  errorMessage={login.errors.phoneNumber}
                  onChange={login.getTextInputProps("phoneNumber").onChange}
                  value={login.getTextInputProps("phoneNumber").value}
                  onBlur={login.getTextInputProps("phoneNumber").onBlur}
                  touched={login.touched.phoneNumber}
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
                <div className="flex gap-2 items-start">
                  <InfoForm
                    onKeyDown={createKeyDownHandler(2)}
                    errorMessage={login.errors.birth}
                    label="주민등록번호"
                    maxLength={6}
                    onChange={login.getTextInputProps("birth").onChange}
                    value={login.getTextInputProps("birth").value}
                    onBlur={login.getTextInputProps("birth").onBlur}
                    touched={login.touched.birth}
                  />

                  <div className="pt-4">-</div>
                  <InfoForm
                    onKeyDown={createKeyDownHandler(2)}
                    errorMessage={login.errors.genNum}
                    label=""
                    maxLength={1}
                    onChange={login.getTextInputProps("genNum").onChange}
                    value={login.getTextInputProps("genNum").value}
                    onBlur={login.getTextInputProps("genNum").onBlur}
                    touched={login.touched.genNum}
                  />
                  <p className="text-xxs tracking-widest pt-5">●●●●●●</p>
                </div>
              </motion.div>
            )}

            {/* Name Section */}

            <InfoForm
              onKeyDown={createKeyDownHandler(1)}
              errorMessage={login.errors.name}
              label="이름"
              maxLength={12}
              onChange={login.getTextInputProps("name").onChange}
              value={login.getTextInputProps("name").value}
              onBlur={login.getTextInputProps("name").onBlur}
              touched={login.touched.name}
            />
          </AnimatePresence>
        </div>

        <ColorButton
          onClick={() => null}
          size="large"
          text={step === 4 ? "본인 인증하기" : "확인"}
        />
      </form>
    </div>
  )
}
