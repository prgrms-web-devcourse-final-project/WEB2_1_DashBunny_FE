import Link from "next/link"
import AlertIcon from "../icons/iconComponents/AlertIcon"
import MainCartIcon from "../icons/iconComponents/MainCartIcon"

// components/layout/Header.tsx
export default function Header() {
  return (
    <header className="bg-white  top-0 flex justify-between items-center z-10 sticky">
      <h1 className="text-orange-700 text-mainLogo font-bold">DASH</h1>
      <div className="flex gap-4">
        <Link href="/cart">
          <MainCartIcon />
        </Link>
        <Link href="/alert">
          <AlertIcon />
        </Link>
      </div>
    </header>
  )
}
