export interface Address {
  roadAddress: string
  detailAddress: string
  jibunAddress: string
}

export interface AddedAddress {
  marker: "Main" | "Sub"
  addressData: Address
  id: string
}
