import { useRouter } from "next/navigation"
import React from "react"
import PreviousPageArrowIcon from "../icons/iconComponents/PreviousPageArrow"
import GoToPreviousPageButton from "./GoToPreviousPageButton"

type HeaderProps = {
  title: string
  previousRoute?: string
}
export default function Header({ title, previousRoute }: HeaderProps) {
  return (
    <header className="sticky top-0 w-full h-16 z-10 bg-white">
      <div className="relative w-full h-full flex items-center px-4">
        {/* 왼쪽 버튼 */}
        {previousRoute && <GoToPreviousPageButton previousRoute={previousRoute} />}

        {/* 중앙 제목 */}
        <h1 className="w-full text-h2 text-black-700 font-semibold text-center">{title}</h1>
      </div>
    </header>
  )
}
