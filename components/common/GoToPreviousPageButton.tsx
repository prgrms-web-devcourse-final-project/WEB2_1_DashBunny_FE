"use client"
import { useRouter } from "next/navigation"
import React from "react"
import PreviousPageArrowIcon from "../icons/iconComponents/PreviousPageArrow"
type GoToPreviousPageButtonProps = {
  previousRoute: string
}
export default function GoToPreviousPageButton({ previousRoute }: GoToPreviousPageButtonProps) {
  const router = useRouter()
  return (
    <button type="button" onClick={() => router.push(previousRoute)} className="absolute left-4">
      <PreviousPageArrowIcon />
    </button>
  )
}
