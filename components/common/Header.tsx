import React from "react"
import GoToPreviousPageButton from "./GoToPreviousPageButton"
import PreviousPageArrowIcon from "../icons/iconComponents/PreviousPageArrow"
import ExitIcon from "../icons/iconComponents/ExitIcon"

type HeaderProps = {
  title?: string
  previousRoute?: string
  type?: "exit" | "prev"
}

export default function Header({ title, previousRoute, type }: HeaderProps) {
  return (
    <header className="sticky top-0 w-full h-16 z-10 bg-white">
      <div className="relative w-full h-full flex items-center px-4">
        {/* 왼쪽 버튼 */}
        {type === "prev" && previousRoute && (
          <GoToPreviousPageButton previousRoute={previousRoute} icon={<PreviousPageArrowIcon />} />
        )}
        {type === "exit" && previousRoute && (
          <GoToPreviousPageButton previousRoute={previousRoute} icon={<ExitIcon />} />
        )}
        {/* 중앙 제목 */}
        {title && (
          <h1 className="w-full text-h2 text-black-700 font-semibold text-center">{title}</h1>
        )}
      </div>
    </header>
  )
}
