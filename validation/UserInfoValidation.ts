import { UserInformation } from "@/types/userInfo"

export default function validateLogin({ name, phoneNumber, birth, genNum }: UserInformation) {
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
  const phoneRegex = /^010\d{8}$/
  const nameRegex = /^[가-힣]{2,4}|[a-zA-Z]{2,10}$/
  type ValidationErrors = {
    [K in keyof UserInformation]: string
  }
  //유저정보 에러 초기값 객체. 에러가 없으면 키의 값은 빈문자열
  const errors: ValidationErrors = {
    birth: "",
    genNum: "",
    phoneNumber: "",
    name: "",
  }

  if (!isValidBirth(birth.toString()) || !numberRegex.test(genNum)) {
    errors.birth = "올바른 생년월일을 입력하세요"
  }

  if (!numberRegex.test(genNum)) {
    errors.genNum = " "
  }

  if (!phoneRegex.test(phoneNumber)) {
    errors.phoneNumber = "올바른 휴대폰 번호를 입력하세요"
  }

  if (!nameRegex.test(name)) {
    errors.name = "올바른 이름을 입력하세요"
  }
  return errors
}
