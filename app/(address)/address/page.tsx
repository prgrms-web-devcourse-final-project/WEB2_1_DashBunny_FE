import SearchGlassesGrayIcon from "@/components/icons/iconComponents/SearchGlassesGrayIcon"
import React from "react"
import AddressSearchInput from "./src/components/AddressSearchInput"
import AddressList from "./src/components/AddressList"
import dynamic from "next/dynamic"
const DynamicAddressBar = dynamic(() => import("./src/components/AddressList"), {
  ssr: false,
  loading: () => <div>loading...</div>,
})
export default function page() {
  return (
    <>
      <AddressSearchInput />
      <DynamicAddressBar />
    </>
  )
}
