import React from "react"

type HeaderProps = {
  title: string
}
export default function Header({ title }: HeaderProps) {
  return (
    <header className="sticky top-0  w-full h-16 z-10   flex items-center justify-center bg-white">
      <h1 className="text-h2 text-black-700 font-semibold text-center">{title}</h1>
    </header>
  )
}
