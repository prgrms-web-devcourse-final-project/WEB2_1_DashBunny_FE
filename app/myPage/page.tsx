import Header from "@/components/common/Header"
import GoToDetailPageArrowIcon from "@/components/icons/iconComponents/GoToDetailPageArrowIcon"
import React from "react"
import UserActionButtons from "./components/UserActionButtons"
import Divider from "@/components/common/Divider"
import MenuList from "./components/MenuList"
import Link from "next/link"
import ShowLoginStatus from "./src/components/ShowLoginStatus"

export default function Page() {
  return (
    <>
      <Header title="마이페이지" />

      <ShowLoginStatus />

      <UserActionButtons />
      <Divider />
      <MenuList />
    </>
  )
}
