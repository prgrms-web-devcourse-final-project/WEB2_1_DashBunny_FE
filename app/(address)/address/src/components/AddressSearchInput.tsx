import SearchGlassesGrayIcon from "@/components/icons/iconComponents/SearchGlassesGrayIcon"
import Link from "next/link"
import React from "react"

export default function GoToAddressSearchButton() {
  return (
    <Link href="/address-search">
      <div className="flex items-center relative">
        <div className="absolute left-3">
          <SearchGlassesGrayIcon />
        </div>
        <input
          type="text"
          name="address"
          placeholder="건물명, 도로명 또는 지번으로 검색"
          className="w-full pl-10 placeholder:text-[14px] px-4 py-2.5 bg-gray-200 rounded-lg placeholder:text-placeholder"
        />
      </div>
    </Link>
  )
}
