// GoToPreviousPageButton.tsx
"use client"
import { useRouter } from "next/navigation"
import React, { ReactNode } from "react"

type GoToBackButtonProps = {
  icon: ReactNode
}

export default function GoToPreviousPageButton({ icon }: GoToBackButtonProps) {
  const router = useRouter()

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className=" flex items-center justify-center w-10 h-10 bg-white rounded-full"
    >
      {icon}
    </button>
  )
}
