// GoToPreviousPageButton.tsx
"use client"
import { pre } from "framer-motion/client"
import { useRouter } from "next/navigation"
import React, { ReactNode } from "react"

type GoToPreviousPageButtonProps = {
  previousRoute: string
  icon: ReactNode
}

export default function ExitButton({ previousRoute, icon }: GoToPreviousPageButtonProps) {
  const router = useRouter()

  return (
    <button type="button" onClick={() => router.push(previousRoute)} className="absolute left-4">
      {icon}
    </button>
  )
}
