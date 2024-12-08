"use client"
import Link from "next/link"
import { useUserInfo } from "../hooks/useUserInfo"
import ProfileSkeleton from "./ProfileSkeleton"
import GoToDetailPageArrowIcon from "@/components/icons/iconComponents/GoToDetailPageArrowIcon"

export default function ShowLoginStatus() {
  const { data: userData, isLoading } = useUserInfo()

  if (isLoading) return <ProfileSkeleton />

  return (
    <div className=" p-4 bg-white w-full h-24">
      <div className="text-left">
        {userData ? (
          <>
            <p className=" text-2xl font-semibold text-black-700">안녕하세요, {userData.name}님</p>
            <p className="text-sm text-gray-500 mt-1">오늘도 즐거운 하루 되세요!</p>
          </>
        ) : (
          <Link href="/auth/sign-in" className="flex justify-between items-center">
            <p className="text-2xl font-semibold text-black-700">로그인 후 이용해주세요</p>
            <GoToDetailPageArrowIcon />
          </Link>
        )}
      </div>
    </div>
  )
}
