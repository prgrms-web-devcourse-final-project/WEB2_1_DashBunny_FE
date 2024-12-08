"use client"

import { useState, useEffect } from "react"
import { Address } from "../../../address-search/src/components/AddressSearchInput"
import ColorButton from "@/components/common/ColorButton"
import { useAddressStore } from "@/shared/store/useAddressStore"
import { useManageAddress } from "../hooks/useManageAddress"
import { useRouter } from "next/navigation"
import { AddedAddress } from "../model/addedAddress"
import { useSendAddress } from "../hooks/useSendAddress"

export default function DetailAddressInputForm() {
  const router = useRouter()
  const [detailAddress, setDetailAddress] = useState("")
  const { saveAddress } = useManageAddress()
  const selectedAddress = useAddressStore((state) => state.selectedAddress)
  const { sendAddressMutation } = useSendAddress()
  useEffect(() => {
    if (!selectedAddress) {
      router.push("/address-search")
    }
  }, [selectedAddress, router])

  const saveAddressHandler = () => {
    if (!selectedAddress) return

    const newAddress: Omit<AddedAddress, "marker"> = {
      addressData: {
        roadAddress: selectedAddress.roadAddress,
        jibunAddress: selectedAddress.jibunAddress,
        detailAddress,
      },
      id: Date.now().toString(),
    }
    saveAddress(newAddress)
    sendAddressMutation.mutate({
      address: newAddress.addressData.roadAddress,
      detailAddress: newAddress.addressData.detailAddress,
    })

    router.push("/address") // 저장 후 이동할 페이지
  }

  if (!selectedAddress) return null
  //메인주소 서버요청
  return (
    <>
      <div className="my-10">
        <p className="text-h3 font-semibold text-black-900">{selectedAddress.roadAddress}</p>
        <p className="text-lg text-black-900">{selectedAddress.jibunAddress}</p>
        <input
          type="text"
          name="address"
          placeholder="건물명, 동/호수 등의 상세주소 입력"
          className="mt-2 w-full placeholder:text-[14px] px-4 py-2.5 bg-gray-200 rounded-lg placeholder:text-placeholder focus:outline-none"
          onChange={(e) => setDetailAddress(e.target.value)}
        />
      </div>
      <ColorButton onClick={saveAddressHandler} text="저장" size="large" />
      <div className="p-3 bg-white fixed bottom-0 max-w-[360px] w-full mx-auto flex justify-center items-center" />
    </>
  )
}
