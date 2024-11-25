import { authenticationNumber } from "@/types/authentication"

export default function AuthenticationNumberValidation({
  authenticationNumber,
}: authenticationNumber) {
  const pattern = /^\d{4}$/

  const errors: authenticationNumber = {
    authenticationNumber: "",
  }

  if (!pattern.test(authenticationNumber)) {
    errors.authenticationNumber = "인증번호가 올바르지 않습니다."
  }

  return errors
}
