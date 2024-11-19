"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ColorButton from "../common/ColorButton"
import HomeNavEmptyIcon from "../icons/iconComponents/HomeNavEmptyIcon"
import useForm from "@/hooks/useForm"
import { carrier } from "../../constants"
import { UserInformation } from "@/types/userInfo"
import validateLogin from "@/validation/UserInfoValidation"

export default function UserInfoForm() {
  const [step, setStep] = useState(1)
  // const [form, setForm] = useState<UserInformation>({
  //   carrier: "",
  //   birthNum: "",
  //   genNum: "",
  //   phoneNumber: "",
  //   name: "",
  // })

  const login = useForm<UserInformation>({
    initialValues: { carrier: "skt", phoneNumber: "", birthNum: "", genNum: "", name: "" },
    validate: validateLogin,
  })
  //   const handleSubmit = (e: React.FormEvent) => {
  //     e.preventDefault()
  //     if (step < 4) setStep((prev) => prev + 1)
  //   }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      if (step < 4) setStep((prev) => prev + 1)
    }
  }
  const onChangeHandler = (attr: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [attr]: e.target.value })
  }

  return (
    <div className="p-6 flex flex-col h-full">
      <h1 className="text-2xl font-bold mb-6">
        정보가 맞다면
        <br />
        {step === 4 ? "인증하기" : "확인"} 버튼을 눌러주세요
      </h1>

      <form
        //   onSubmit={handleSubmit}
        className="h-full"
      >
        <AnimatePresence>
          <div className="space-y-4 flex flex-col">
            {step >= 4 && (
              <motion.div
                key="carrier"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <label className="text-sm text-gray-500">통신사</label>
                  <button className="w-full p-4 border rounded-lg text-left flex justify-between items-center">
                    {login.values.carrier}
                    ⬇️
                  </button>
                </div>
              </motion.div>
            )}
            {/* 휴대폰 번호 */}
            {step >= 3 && (
              <motion.div
                key="phone"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <label className="text-sm text-gray-500">휴대폰 번호</label>
                  <input
                    onKeyDown={handleKeyDown}
                    type="tel"
                    className="w-full p-4 border rounded-lg"
                    value={login.values.phoneNumber}
                    onChange={onChangeHandler("phone")}
                  />
                </div>
              </motion.div>
            )}

            {/* 주민등록번호 */}
            {step >= 2 && (
              <motion.div
                key="birth"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex gap-2 items-start">
                  <div className="flex-1">
                    <label className="text-sm text-gray-500">주민등록번호</label>
                    <input
                      type="text"
                      className="w-full p-4 border rounded-lg"
                      maxLength={6}
                      value={form.birthFirst}
                      onChange={onChangeHandler("birthFirst")}
                    />
                  </div>
                  <div className="flex-none pt-6">-</div>
                  <div className="flex-none w-16 pt-6">
                    <input
                      onKeyDown={handleKeyDown}
                      type="password"
                      className="w-full p-4 border rounded-lg"
                      maxLength={1}
                      value={form.birthLast}
                      onChange={onChangeHandler("birthLast")}
                    />
                  </div>
                  <div className="flex-none pt-8">●●●●●●</div>
                </div>
              </motion.div>
            )}
            <motion.div
              key="name"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <label className="text-sm text-gray-500">이름</label>
                <input
                  onKeyDown={handleKeyDown}
                  type="text"
                  className="w-full p-4 border rounded-lg"
                  value={form.name}
                  onChange={onChangeHandler("name")}
                />
              </div>
            </motion.div>
          </div>
        </AnimatePresence>
        <ColorButton
          onClick={() => null}
          size="large"
          text={step === 4 ? "본인 인증하기" : "확인"}
        />
      </form>
    </div>
  )
}
