import Header from "@/components/common/Header"
import React from "react"

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Header title="찜" />
      {children}
    </div>
  )
}
