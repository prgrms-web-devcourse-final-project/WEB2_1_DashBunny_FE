export type PhoneSignUpInfo = {
  phoneNumber: string
  password: string
  passwordConfirm: string
}
export type PhoneSignInInfo = Omit<PhoneSignUpInfo, "passwordConfirm">
