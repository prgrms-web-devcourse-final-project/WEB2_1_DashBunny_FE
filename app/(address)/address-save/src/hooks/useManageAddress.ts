// useSearchAddress.ts
import { useState, useEffect } from "react"
export interface Address {
  roadAddress: string
  jibunAddress: string
  detailAddress: string
}

export interface SearchAddress {
  marker: "Main" | "Sub"
  addressData: Address
}

export const useManageAddress = () => {
  const [address, setAddress] = useState<SearchAddress[]>([])

  // 로컬 스토리지에서 검색 기록 로드
  useEffect(() => {
    const storedAddress = localStorage.getItem("addressList")
    if (storedAddress) {
      setAddress(JSON.parse(storedAddress))
    }
  }, [])

  // 검색어 저장
  const saveAddress = ({ addressData }: SearchAddress) => {
    console.log(address)
    if (!addressData.roadAddress) return
    const sameAddress = address.find(
      (item) =>
        item.addressData.roadAddress + item.addressData.detailAddress ===
        addressData.roadAddress + addressData.detailAddress,
    )
    if (sameAddress) return
    const newAddress = [
      { marker: address.length == 0 ? ("Main" as const) : ("Sub" as const), addressData },
      ...address,
    ].slice(0, 5) // 최근 5개만
    setAddress(newAddress)
    localStorage.setItem("address", JSON.stringify(newAddress))
  }

  // 검색어 삭제
  const deleteAddress = (marker: string) => {
    const newAddress = address.filter((item) => item.marker !== marker)
    setAddress(newAddress)
    localStorage.setItem("address", JSON.stringify(newAddress))
  }

  // // 검색어 수정
  // const updateAddress = (oldTerm: string, newTerm: string) => {
  //   const newAddress = address.map((item) =>
  //     item.term === oldTerm ? { ...item, term: newTerm } : item,
  //   )
  //   setAddress(newAddress)
  //   localStorage.setItem("address", JSON.stringify(newAddress))
  // }

  // 모든 검색 기록 삭제
  const clearAddress = () => {
    setAddress([])
    localStorage.removeItem("address")
  }

  return {
    address,
    saveAddress,
    deleteAddress,
    // updateAddress,
    clearAddress,
  }
}
