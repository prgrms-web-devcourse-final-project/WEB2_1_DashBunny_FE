import { UserInformation } from "@/types/userInfo"

export default function validateLogin({
  carrier,
  name,
  phoneNumber,
  birthNum,
  genNum,
}: UserInformation) {
  const birthRegex = /^([0-9][0-9])(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/
  const isValidBirth = (birth: string) => {
    if (!birthRegex.test(birth)) return false

    const year = parseInt(birth.slice(0, 2))
    const currentYear = new Date().getFullYear() % 100
    const fullYear = year <= currentYear ? 2000 + year : 1900 + year

    // 100년 전 체크
    if (fullYear < new Date().getFullYear() - 100) return false

    return true
  }
  const carrierRegex = /^(skt|kt|lg u\+|skt 알뜰폰|kt 알뜰폰|lg u\+ 알뜰폰)$/
  const numberRegex = /^[1-4]$/
  const phoneRegex = /^010\d{8}$/
  const nameRegex = /^[가-힣]{2,4}|[a-zA-Z]{2,10}$/
  type ValidationErrors = {
    [K in keyof UserInformation]: string
  }
  const errors: ValidationErrors = {
    birthNum: "",
    genNum: "",
    phoneNumber: "",
    carrier: "",
    name: "",
  }

  if (!isValidBirth(birthNum.toString())) {
    errors.birthNum = "올바른 생년월일을 입력하세요"
  }

  if (!numberRegex.test(genNum.toString())) {
    errors.genNum = "올바른 성별을 선택하세요"
  }

  if (!phoneRegex.test(phoneNumber)) {
    errors.phoneNumber = "올바른 휴대폰 번호를 입력하세요"
  }

  if (!carrierRegex.test(carrier)) {
    errors.carrier = "통신사를 선택하세요"
  }

  if (!nameRegex.test(name)) {
    errors.name = "올바른 이름을 입력하세요"
  }
  return errors
}
