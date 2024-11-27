"use client"

import { ReactNode, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { useManageAddress } from "@/app/(address)/address-save/src/hooks/useManageAddress"
export function AddressInitializer({ children }: { children: ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()

  const { getItem } = useManageAddress()

  // 메모이제이션 없이 매 렌더링마다 새로운 함수 생성
  useEffect(() => {
    const checkAddressAndRedirect = () => {
      const addresses = getItem("address")
      const hasMainAddress = addresses?.some((addr) => addr.marker === "Main")
      if (!hasMainAddress && pathname !== "/address-save") {
        router.push("/address-search")
      }
    }
    checkAddressAndRedirect()
    // 매 렌더링마다 새로운 객체 생성
  }, [pathname])

  return <>{children}</>
}
