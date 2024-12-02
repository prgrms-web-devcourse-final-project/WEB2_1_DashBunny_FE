"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import useForm from "@/hooks/useForm"
import InfoForm from "@/components/common/InfoForm"
import ColorButton from "@/components/common/ColorButton"
import { PhoneSignUpInfo } from "@/types/phoneSignUp"
import validateSignUp from "@/validation/PhoneSignUpValidation"
import { usePhoneSignUpMutation } from "../hooks/usePhoneSignUpMutaion"
import { useRouter } from "next/navigation"

export default function PhoneSignUpForm() {
  const router = useRouter()
  //@=> 예외처리 더 필요함. 엔터 치면 다음 스텝으로 넘어가벼려서..
  const [step, setStep] = useState(1)
  const login = useForm<PhoneSignUpInfo>({
    initialValues: {
      name: "",
      birth: "",
      genNum: "",
      phone: "",
      password: "",
      passwordConfirm: "",
    },
    validate: validateSignUp,
  })
  const { postPhoneSignUpRequest } = usePhoneSignUpMutation(login.values.phone)

  const handleForm = (e: React.FormEvent) => {
    e.preventDefault()
  }
  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 6) setStep((prev) => prev + 1)
    if (!login.isValid) {
      return console.log("error", login.errors)
    }
    postPhoneSignUpRequest.mutate({
      name: login.values.name,
      phone: login.values.phone,
      birthday: login.values.birth + "-" + login.values.genNum,
      password: login.values.password,
    })
  }

  const createKeyDownHandler =
    (currentStep: number) => (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault()
        if (step === currentStep && step < 6) {
          setStep((prev) => prev + 1)
        }
      }
    }

  return (
    <div className="p-6 flex flex-col h-full">
      <h1 className="text-2xl font-bold mb-6 whitespace-pre-wrap">
        {step === 1
          ? "이름을\n입력해주세요"
          : step === 2
            ? "휴대폰 번호를\n입력해주세요"
            : step === 3
              ? "주민번호 앞 7자리를\n입력해주세요"
              : step === 4
                ? "비밀번호를\n입력해주세요"
                : step === 5
                  ? "비밀번호를 다시 \n입력해주세요"
                  : "정보가 맞다면\n인증하기 버튼을 눌러주세요"}
      </h1>

      <form className="h-full" onSubmit={handleForm}>
        <div className="flex flex-col gap-2 mb-4">
          <AnimatePresence mode="popLayout">
            {/* Phone Number Section */}
            {step >= 5 && (
              <motion.div
                key="phone-confirm-section"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.3 }}
              >
                <InfoForm
                  type="password"
                  onKeyDown={createKeyDownHandler(5)}
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
            {step >= 4 && (
              <motion.div
                key="password-section"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.3 }}
              >
                <InfoForm
                  type="password"
                  onKeyDown={createKeyDownHandler(4)}
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

            {step >= 3 && (
              <motion.div
                key="birth-section"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex gap-2 items-start">
                  <InfoForm
                    onKeyDown={createKeyDownHandler(3)}
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
                    onKeyDown={createKeyDownHandler(3)}
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
            {step >= 2 && (
              <motion.div
                key="phone-section"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.3 }}
              >
                <InfoForm
                  onKeyDown={createKeyDownHandler(2)}
                  errorMessage={login.errors.phone}
                  label="휴대폰 번호"
                  maxLength={11}
                  onChange={login.getTextInputProps("phone").onChange}
                  value={login.getTextInputProps("phone").value}
                  onBlur={login.getTextInputProps("phone").onBlur}
                  touched={login.touched.phone}
                />
              </motion.div>
            )}
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
          onClick={onSubmitHandler}
          size="large"
          text={`${step < 6 ? "확인" : "본인 인증하기"}`}
        />
        {/* <ColorButton
          onClick={() => router.push("/auth/message-authentication")}
          size="large"
          text={`${step < 6 ? "확인" : "본인 인증하기"}`}
        /> */}
      </form>
    </div>
  )
}
