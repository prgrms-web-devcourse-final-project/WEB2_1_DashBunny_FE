"use client"
import Link from "next/link"
import MainAddressSelectorArrowIcon from "../icons/iconComponents/MainAddressSelectorArrowIcon"
import { useManageAddress } from "@/app/(address)/address-save/src/hooks/useManageAddress"
import { useState } from "react"

export default function AddressBar() {
  const { mainAddress } = useManageAddress()
  console.log("🚀 ~ AddressBar ~ mainAddress:", mainAddress)
  const [address, setAddress] = useState(mainAddress)
  return (
    <Link href="/address">
      <div className=" py-2">
        <p className="text-md font-bold text-orange-500 opacity-70">즐거움이 도착할 곳</p>
        <div className="flex items-center gap-2  top-1">
          <p className="flex items-center text-h3 text-black-700 font-semibold sticky top-0">
            {mainAddress?.addressData.roadAddress}
          </p>
          <MainAddressSelectorArrowIcon />
        </div>
      </div>
    </Link>
  )
}
