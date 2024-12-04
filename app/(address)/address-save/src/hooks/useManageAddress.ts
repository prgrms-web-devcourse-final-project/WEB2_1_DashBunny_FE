import { useEffect, useState } from "react"
import { AddedAddress } from "../model/addedAddress"

export interface Address {
  roadAddress: string
  jibunAddress: string
  detailAddress: string
}

export interface SearchAddress {
  marker: "Main" | "Sub"
  addressData: Address
}

export const LOCAL_STORAGE_KEY = "address"
export const useManageAddress = () => {
  const [addresses, setAddresses] = useState<AddedAddress[]>([])

  useEffect(() => {
    const storedAddresses = getItem(LOCAL_STORAGE_KEY) ?? []
    setAddresses(storedAddresses)
  }, [])

  const setItem = (key: string) => (value: AddedAddress[]) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.log(error)
    }
  }

  const getItem = (key: string): AddedAddress[] | null => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : null
    } catch (error) {
      console.log(error)
      return null // 에러 발생 시 명시적으로 null 리턴
    }
  }
  const getMainAddress = (): string | null => {
    try {
      const addresses = getItem(LOCAL_STORAGE_KEY)
      if (!addresses) return null
      const mainAddress = addresses?.find((address) => address.marker === "Main")
      if (mainAddress) {
        const realAddress =
          mainAddress.addressData.roadAddress + mainAddress.addressData.detailAddress
        return realAddress || null
      }
      return null
    } catch (error) {
      console.log(error)
      return null
    }
  }
  //주소 저장
  const saveAddress = ({ addressData, id }: Omit<AddedAddress, "marker">) => {
    // 1. api 응답이 아니라면 리턴
    if (!addressData.roadAddress) return
    // 2. 주소가 없으면 빈 값 반환
    const prevAddresses = getItem(LOCAL_STORAGE_KEY) ?? []
    // 3. 중복 주소 확인
    const isDuplicateAddress = prevAddresses.some(
      (item) =>
        item.addressData.roadAddress + item.addressData.detailAddress ===
        addressData.roadAddress + addressData.detailAddress,
    )
    // 4. 중복된 주소가 있으면 저장하지 않음
    if (isDuplicateAddress) {
      return
    }
    // 5. 새로운 주소 생성
    const newAddress = {
      marker: prevAddresses.length === 0 ? ("Main" as const) : ("Sub" as const),
      id,
      addressData,
    }
    // 6. 주소 목록 업데이트 (최대 5개까지)
    const updatedAddresses = [newAddress, ...prevAddresses].slice(0, 5)
    // 7. 저장
    setItem(LOCAL_STORAGE_KEY)(updatedAddresses)
  }

  // 검색어 삭제
  const deleteAddress = (id: string) => {
    const prevAddresses = getItem(LOCAL_STORAGE_KEY) ?? []
    const newAddresses = prevAddresses.filter((item) => item.id !== id)
    setItem(LOCAL_STORAGE_KEY)(newAddresses)
    setAddresses(newAddresses) // 상태 업데이트로 리렌더링 트리거
  }

  // 메인 주소 변경
  const updateAddress = (id: string) => {
    const prevAddresses = getItem(LOCAL_STORAGE_KEY) ?? []
    const newAddress = prevAddresses.map((item) => {
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
    setItem(LOCAL_STORAGE_KEY)(newAddress)
    localStorage.setItem("address", JSON.stringify(newAddress))
  }

  // 모든 검색 기록 삭제
  const clearAddress = () => {
    try {
      window.localStorage.removeItem(LOCAL_STORAGE_KEY)
    } catch (error) {
      console.log(error)
    }
  }
  return {
    getItem,
    saveAddress,
    deleteAddress,
    updateAddress,
    clearAddress,
    getMainAddress,
  }
}
