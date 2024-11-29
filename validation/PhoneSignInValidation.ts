import { PhoneSignInInfo } from "@/types/phoneSignUp"

export default function validateSignIn({ phone, password }: PhoneSignInInfo) {
  const phoneNumberRegex = /^010-?([0-9]{4})-?([0-9]{4})$/

  const passwordRegex =
    /^(?=(.*[a-z])|.*[A-Z]|.*[!@#$%^&*(),.?":{}|<>])(?=(.*[A-Z])|.*[!@#$%^&*(),.?":{}|<>]|.*[a-z])(?=.*\S).{12,20}$/

  type ValidationErrors = {
    [K in keyof PhoneSignInInfo]: string
  }
  //유저정보 에러 초기값 객체. 에러가 없으면 키의 값은 빈문자열
  const errors: ValidationErrors = {
    phone: "",
    password: "",
  }

  if (!passwordRegex.test(password)) {
    errors.password = "비밀번호는 12~20자리의 영문 대소문자, 숫자, 특수문자를 포함해야 합니다."
  }

  if (!phoneNumberRegex.test(phone)) {
    errors.phone = "올바른 휴대폰 번호를 입력하세요"
  }
  return errors
}
