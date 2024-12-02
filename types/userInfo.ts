export type UserInformation = {
  phoneNumber: string
  genNum: "1" | "2" | "3" | "4" | ""
  birth: string
  name: string
}
export interface User {
  phone: string
  password: string | null
  name: string
  birthday: string
  email: string
  profileImageUrl: string
}
