// GoToPreviousPageButton.tsx
"use client"
import { useRouter } from "next/navigation"
import React, { ReactNode } from "react"

type GoToPreviousPageButtonProps = {
  previousRoute: string
  icon: ReactNode
}

export default function GoToPreviousPageButton({
  previousRoute,
  icon,
}: GoToPreviousPageButtonProps) {
  const router = useRouter()

  return (
    <button type="button" onClick={() => router.back()} className="absolute left-4">
      {icon}
    </button>
  )
}
