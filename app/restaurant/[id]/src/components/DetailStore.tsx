"use client"
import ColorButton from "@/components/common/ColorButton"

import { RestaurantInfo } from "@/app/restaurant/[id]/src/components/RestaurantInfo"
import { MenuItem } from "@/components/restaurant/MenuItem"
import Link from "next/link"
import React from "react"
import { useDetailStoreData } from "../hooks/useDetailStoreData"

import { UsersMenuDto } from "@/types/Store"
import RestaurantHeader from "./RestaurantHeader"
import MenuItemList from "./MenuItemList"

interface DetailStoreProps {
  pathname: string
}
//@=>ssr
export default function DetailStore({ pathname }: DetailStoreProps) {
  const { data: detailStoreData, error, isLoading } = useDetailStoreData(pathname)
  console.log("🚀 ~ DetailStore ~ detailStoreData:", detailStoreData)

  const menus: UsersMenuDto[] =
    detailStoreData?.usersMenuGroup.flatMap((group) => group.menus) ?? []

  if (isLoading) return <div>로딩중...</div>
  return (
    <div className="pb-24">
      <RestaurantHeader pathname={pathname} />
      <RestaurantInfo
        name={detailStoreData?.storeName ?? ""}
        rating={detailStoreData?.rating ?? 0}
        minOrderAmount={detailStoreData?.minimumOrderPrice ?? 0}
        deliveryFee={detailStoreData?.defaultDeliveryTip ?? 0}
        storeImage={detailStoreData?.storeImage ?? ""}
      />
      <MenuItemList menus={menus} storeId={detailStoreData?.storeId ?? ""} />
      <Link
        href="/cart"
        className="p-3 bg-white fixed bottom-0 max-w-[400px] w-full mx-auto flex justify-center items-center "
      >
        <ColorButton onClick={() => null} size="large" text={`장바구니 보기`} />
      </Link>
    </div>
  )
}
