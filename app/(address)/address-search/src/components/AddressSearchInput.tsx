"use client"
import SearchGlassesGrayIcon from "@/components/icons/iconComponents/SearchGlassesGrayIcon"
import React, { useState } from "react"
import AddressSearchResults from "./AddressSearchResults"
import { useGetRestaurantListByCategory } from "../hooks/useGetRestaurantListByCategory"
import Divider from "@/components/common/Divider"
import SearchGuide from "./SearchGuide"
import { useRouter } from "next/navigation"
import { useAddressStore } from "@/shared/store/useAddressStore"

export interface Address {
  roadAddress: string
  jibunAddress: string
}
export default function AddressSearchInput() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")

  const { data, isError, isLoading } = useGetRestaurantListByCategory(searchTerm)
  const setSelectedAddress = useAddressStore((state) => state.setSelectedAddress)
  const selectedAddress = useAddressStore((state) => state.selectedAddress)

  const addressSelectHandler = ({ jibunAddress, roadAddress }: Address) => {
    const newAddress = { roadAddress, jibunAddress }
    setSelectedAddress(newAddress)
    setSearchTerm("")
    router.push("/address-save")
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center mb-5 relative ">
        <div className="absolute left-3">
          <SearchGlassesGrayIcon />
        </div>
        <input
          type="text"
          name="address"
          placeholder="건물명, 도로명 또는 지번으로 검색"
          className="w-full pl-10 placeholder:text-[14px] px-4 py-2.5 bg-gray-200 rounded-lg placeholder:text-placeholder focus:outline-none"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Divider />
      <div className="text-sm w-full text-gray-500 relative overflow-y-auto h-96">
        {searchTerm && (
          <AddressSearchResults
            searchTerm={searchTerm}
            data={data}
            isLoading={isLoading}
            isError={isError}
            onClick={addressSelectHandler}
          />
        )}
        {searchTerm == "" && selectedAddress == null && <SearchGuide />}
      </div>
    </div>
  )
}
/**
 *
 */
