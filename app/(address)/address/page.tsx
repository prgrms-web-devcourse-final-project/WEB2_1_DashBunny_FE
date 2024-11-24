import SearchGlassesGrayIcon from "@/components/icons/iconComponents/SearchGlassesGrayIcon"
import React from "react"
import AddressSearchInput from "./src/components/AddressSearchInput"
import AddressList from "./src/components/AddressList"

export default function page() {
  return (
    <>
      <AddressSearchInput />
      <AddressList />
    </>
  )
}
