import { PhoneSignUpInfo } from "@/types/phoneSignUp"

export default function validateSignUp({
  name,
  birth,
  genNum,
  phone,
  password,
  passwordConfirm,
}: PhoneSignUpInfo) {
  const birthRegex = /^([0-9][0-9])(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/
  //정규식을 만족하는지, 100년 이내인지 체크
  const isValidBirth = (birth: string) => {
    if (!birthRegex.test(birth)) return false

    const year = parseInt(birth.slice(0, 2))
    const currentYear = new Date().getFullYear() % 100
    const fullYear = year <= currentYear ? 2000 + year : 1900 + year

    // 100년 전 체크
    if (fullYear < new Date().getFullYear() - 100) return false

    return true
  }

  const numberRegex = /^[1-4]$/
  const phoneNumberRegex = /^010-?([0-9]{4})-?([0-9]{4})$/
  const nameRegex = /^[가-힣]{2,4}|[a-zA-Z]{2,10}$/

  const passwordRegex =
    /^(?=(.*[a-z])|.*[A-Z]|.*[!@#$%^&*(),.?":{}|<>])(?=(.*[A-Z])|.*[!@#$%^&*(),.?":{}|<>]|.*[a-z])(?=.*\S).{8,20}$/

  // 비밀번호 확인 검증 함수
  function validatePasswordConfirm(password: string, passwordConfirm: string) {
    return password === passwordConfirm
  }

  type ValidationErrors = {
    [K in keyof PhoneSignUpInfo]: string
  }
  //유저정보 에러 초기값 객체. 에러가 없으면 키의 값은 빈문자열
  const errors: ValidationErrors = {
    name: "",
    birth: "",
    genNum: "",
    phone: "",
    password: "",
    passwordConfirm: "",
  }
  if (!nameRegex.test(name)) {
    errors.name = "올바른 이름을 입력하세요"
  }
  if (!phoneNumberRegex.test(phone)) {
    errors.phone = "올바른 휴대폰 번호를 입력하세요"
  }
  if (!isValidBirth(birth.toString()) || !numberRegex.test(genNum)) {
    errors.birth = "올바른 생년월일을 입력하세요"
  }
  if (!passwordRegex.test(password)) {
    errors.password = "비밀번호는 8~20자리의 영문 대소문자, 숫자, 특수문자를 포함해야 합니다."
  }
  if (!validatePasswordConfirm(password, passwordConfirm)) {
    errors.passwordConfirm = "비밀번호가 일치하지 않습니다."
  }

  return errors
}
