"use client"
import { useManageAddress } from "@/app/(address)/address-save/src/hooks/useManageAddress"
import MapPinColorIcon from "@/components/icons/iconComponents/MapPinColorIcon"
import React from "react"

export default function CartAddress() {
  const { getMainAddress } = useManageAddress()
  const address = getMainAddress()

  return (
    <div className="px-4 pb-4 p">
      <div className="flex gap-2">
        <MapPinColorIcon />
        <div>
          <h2 className="font-semibold text-h3 inline-block">
            {address}
            <span className="text-sm text-black-600"> (으)로 배달</span>
          </h2>
        </div>
      </div>
    </div>
  )
}
