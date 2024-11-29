export type PhoneSignUpInfo = {
  phone: string
  password: string
  passwordConfirm: string
}
export type PhoneSignInInfo = Omit<PhoneSignUpInfo, "passwordConfirm">
