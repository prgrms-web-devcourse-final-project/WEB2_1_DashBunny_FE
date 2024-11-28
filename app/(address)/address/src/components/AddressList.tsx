"use client"
import MapPinColorIcon from "@/components/icons/iconComponents/MapPinColorIcon"
import { useManageAddress } from "../../../address-save/src/hooks/useManageAddress"
import Divider from "@/components/common/Divider"
import MapPinEmptyIcon from "@/components/icons/iconComponents/MapPinEmptyIcon"
import { useSendAddress } from "@/app/(address)/address-save/src/hooks/useSendAddress"
import { AddedAddress } from "@/app/(address)/address-save/src/model/addedAddress"

export default function AddressList() {
  const { getItem, deleteAddress, updateAddress } = useManageAddress()
  const { sendAddressMutation } = useSendAddress()

  const address = getItem("address") ?? []
  const sortedAddress = [...address].sort((a, b) => {
    if (a.marker === "Main" && b.marker !== "Main") {
      return -1 // a가 앞에
    }
    if (a.marker !== "Main" && b.marker === "Main") {
      return 1 // b가 앞에
    }
    // 둘 다 Main이 아니거나 둘 다 Main일 때, date 기준으로 정렬
    return new Date(a.id).getTime() - new Date(b.id).getTime()
  })
  const mainAddressHandler = ({ id, addressData }: Omit<AddedAddress, "marker">) => {
    const address = addressData.roadAddress + addressData.detailAddress
    updateAddress(id)
    sendAddressMutation.mutate(address)
  }
  return (
    <div className="flex flex-col ">
      {sortedAddress.map(({ addressData, id, marker }, index) => (
        <div key={index} className="pt-7">
          <div className="flex items-start gap-2">
            {marker === "Main" ? <MapPinColorIcon /> : <MapPinEmptyIcon />}
            <div className=" w-[300px]">
              <div className="flex items-center gap-2 relative">
                <span
                  className={`text-black-900 ${addressData.detailAddress.length > 6 && "whitespace-pre-wrap"} text-md font-semibold`}
                >
                  {addressData.roadAddress + "\n" + addressData.detailAddress}
                </span>
              </div>
              <p className="text-sm text-gray-500">[지번] {addressData.jibunAddress}</p>
            </div>
            {marker == "Main" && (
              <span
                className={`px-1.5 py-0.5 bg-orange-100 text-xxs rounded font-bold text-orange-700 `}
              >
                DASH
              </span>
            )}
          </div>
          <div className="flex gap-2 mt-2 mb-4  pl-6">
            {marker !== "Main" && (
              <>
                <button
                  className="px-3 py-1 border border-gray-300 rounded-full text-xs text-black-900"
                  onClick={() => mainAddressHandler({ id, addressData })}
                >
                  선택
                </button>
                <button
                  className="px-3 py-1 border border-gray-300 rounded-full text-xs text-black-900"
                  onClick={() => deleteAddress(id)}
                >
                  삭제
                </button>
              </>
            )}
          </div>
          <Divider />
        </div>
      ))}
    </div>
  )
}
