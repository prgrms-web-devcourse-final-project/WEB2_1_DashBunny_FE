"use client"
import Header from "@/components/common/Header"
import GoToDetailPageArrowIcon from "@/components/icons/iconComponents/GoToDetailPageArrowIcon"
import React from "react"
import UserActionButtons from "./components/UserActionButtons"
import Divider from "@/components/common/Divider"
import MenuList from "./components/MenuList"
import Link from "next/link"
import { useCurrentUser } from "./src/hooks/useUserInfo"

export default function Page() {
  const { data, isLoading } = useCurrentUser()
  if (isLoading) return <div>loading...</div>
  console.log("🚀 ~ page ~ data:", data)
  // if (isLoading) return <div>loading...</div>
  // if (!data) return <div>데이터가 없습니다</div>

  return (
    <>
      <Header title="마이페이지" />
      <Link href={"/myPage/profileUpdate"}>
        <div className="flex items-center justify-between px-5">
          <div className="flex flex-col justify-start  ">
            {/* <span className="font-semibold text-h1 text-black-900">닉네임을 설정해주세요</span>
            <span className="text-sm text-black-500">010-****-0273</span> */}
          </div>
          <GoToDetailPageArrowIcon />
        </div>
      </Link>
      <Link href="/auth/sign-in">로그인 후 이용해주세요</Link>
      <UserActionButtons />
      <Divider />
      <MenuList />
    </>
  )
}
