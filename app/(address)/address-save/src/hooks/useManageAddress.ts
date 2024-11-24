// useSearchAddress.ts
import { useState, useEffect } from "react"
import { AddedAddress } from "../model/addedAddress"
import { m } from "framer-motion"
import { main } from "framer-motion/client"
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
  const [address, setAddress] = useState<AddedAddress[]>([])

  // 로컬 스토리지에서 주소 로드
  useEffect(() => {
    const storedAddress = localStorage.getItem("address")
    if (storedAddress) {
      setAddress(JSON.parse(storedAddress))
    }
  }, [])

  //주소 저장
  const saveAddress = ({ addressData, id }: AddedAddress) => {
    console.log(address)
    if (!addressData.roadAddress) return
    const sameAddress = address.find(
      (item) =>
        item.addressData.roadAddress + item.addressData.detailAddress ===
        addressData.roadAddress + addressData.detailAddress,
    )
    if (sameAddress) return
    const newAddress = [
      { marker: address.length == 0 ? ("Main" as const) : ("Sub" as const), id, addressData },
      ...address,
    ].slice(0, 5) // 최근 5개만
    setAddress(newAddress)
    localStorage.setItem("address", JSON.stringify(newAddress))
  }

  // 검색어 삭제
  const deleteAddress = (id: string) => {
    const newAddress = address.filter((item) => item.id !== id)
    setAddress(newAddress)
    localStorage.setItem("address", JSON.stringify(newAddress))
  }

  // 메인 주소 변경
  const updateAddress = (id: string) => {
    const newAddress = address.map((item) => {
      // type이 main인 객체의 type을 Sub로 변경
      if (item.marker === "Main") {
        return { ...item, marker: "Sub" as const }
      }

      // id가 매개변수와 일치하는 객체의 type을 Main으로 변경
      if (item.id === id) {
        return { ...item, marker: "Main" as const }
      }

      // 나머지는 변경 없이 반환
      return item
    })
    setAddress(newAddress)
    localStorage.setItem("address", JSON.stringify(newAddress))
  }

  // 모든 검색 기록 삭제
  const clearAddress = () => {
    setAddress([])
    localStorage.removeItem("address")
  }
  const mainAddress = address.find((item) => item.marker === "Main")
  return {
    address,
    saveAddress,
    deleteAddress,
    updateAddress,
    clearAddress,
    mainAddress,
  }
}
