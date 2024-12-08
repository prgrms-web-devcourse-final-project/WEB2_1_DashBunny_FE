"use client"

import { useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import useForm from "@/hooks/useForm"
import InfoForm from "@/components/common/InfoForm"
import ColorButton from "@/components/common/ColorButton"
import { PhoneSignUpInfo } from "@/types/phoneSignUp"
import validateSignUp from "@/validation/PhoneSignUpValidation"
import { usePhoneSignUpMutation } from "../hooks/usePhoneSignUpMutaion"
import { useRouter } from "next/navigation"
import PhoneSignUpHeader from "./PhoneSignUpHeader"
//TODO: 주민번호 6자리 입력하면 genNum으로 포커스 가게.
export default function PhoneSignUpForm() {
  // input에 대한 ref 생성
  const nameInputRef = useRef<HTMLInputElement>(null)
  const phoneInputRef = useRef<HTMLInputElement>(null)
  const birthInputRef = useRef<HTMLInputElement>(null)
  const genNumInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)
  const passwordConfirmInputRef = useRef<HTMLInputElement>(null)

  // 현재 step에 따라 적절한 ref를 반환하는 함수
  const getNextInputRef = (currentStep: number) => {
    switch (currentStep) {
      case 1:
        return nameInputRef
      case 2:
        return phoneInputRef
      case 3:
        return birthInputRef
      case 4:
        return passwordInputRef
      case 5:
        return passwordConfirmInputRef
      default:
        return null
    }
  }
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

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 6) {
      setStep((prev) => prev + 1)
      setTimeout(() => {
        const nextRef = getNextInputRef(step + 1)
        nextRef?.current?.focus()
      }, 100)
    }
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
          setTimeout(() => {
            const nextRef = getNextInputRef(step + 1)
            nextRef?.current?.focus()
          }, 100)
        }
      }
    }

  return (
    <div className="p-6 flex flex-col h-full">
      <PhoneSignUpHeader step={step} />

      <form className="h-full">
        <div className="flex flex-col gap-2 mb-4">
          <AnimatePresence mode="popLayout">
            {step >= 5 && (
              <motion.div
                key="phone-confirm-section"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.3 }}
              >
                <InfoForm
                  ref={passwordConfirmInputRef}
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

            {step >= 4 && (
              <motion.div
                key="password-section"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.3 }}
              >
                <InfoForm
                  ref={passwordInputRef}
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
                    ref={birthInputRef}
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
                  ref={phoneInputRef}
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
              ref={nameInputRef}
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
      </form>
    </div>
  )
}
