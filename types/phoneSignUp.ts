export type PhoneSignUpInfo = {
  name: string
  birth: string
  phone: string
  password: string
  passwordConfirm: string
  genNum: string
}
export type PhoneSignInInfo = Pick<PhoneSignUpInfo, "password" | "phone">
