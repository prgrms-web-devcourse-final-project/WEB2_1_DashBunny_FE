"use client"
import ColorButton from "@/components/common/ColorButton"
import PreviousPageArrowIcon from "@/components/icons/iconComponents/PreviousPageArrow"
import SaveHeartEmptyIcon from "@/components/icons/iconComponents/SaveHeartEmptyIcon"
import { RestaurantHeader } from "@/components/restaurant/Header"
import { MenuItem } from "@/components/restaurant/MenuItem"
import Link from "next/link"
import React from "react"
import { useDetailStoreData } from "../hooks/useDetailStoreData"
import GoToBackButton from "@/components/common/GoToPreviousPageButton"
import { UsersMenuDto, UsersMenuGroupDto } from "@/types/Store"
interface DetailStoreProps {
  pathname: string
}
//@=>ssr
export default function DetailStore({ pathname }: DetailStoreProps) {
  const { data: detailStoreData, error, isLoading } = useDetailStoreData(pathname)

  const menus: UsersMenuDto[] =
    detailStoreData?.usersMenuGroup.flatMap((group) => group.menus) ?? []

  if (isLoading) return <div>로딩중...</div>
  return (
    <div className="pb-24">
      <header className=" mx-auto fixed top-0 w-[400px] left-0 right-0  z-10 p-[10px] flex justify-between">
        <div className=" flex justify-between items-center w-full ">
          <GoToBackButton icon={<PreviousPageArrowIcon />} />
          <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
            <SaveHeartEmptyIcon />
          </div>
        </div>
      </header>
      <RestaurantHeader
        name={detailStoreData?.storeName ?? ""}
        rating={detailStoreData?.rating ?? 0}
        minOrderAmount={detailStoreData?.minimumOrderPrice ?? 0}
        deliveryFee={detailStoreData?.defaultDeliveryTip ?? 0}
        storeImage={detailStoreData?.storeImage ?? ""}
      />
      <div className="space-y-4">
        {menus.map((menu) => {
          return (
            <MenuItem
              key={menu.menuId}
              name={menu.menuName}
              price={menu.price}
              description={menu.menuContent}
              image={menu.menuImage}
              menuId={menu.menuId}
              storeId={detailStoreData?.storeId ?? ""}
            />
          )
        })}
      </div>
      <Link
        href="/cart"
        className="p-3 bg-white fixed bottom-0 max-w-[400px] w-full mx-auto flex justify-center items-center "
      >
        {/* <ColorButton onClick={() => null} size="large" text={"19500원 · 장바구니 보기"} /> */}
        <ColorButton onClick={() => null} size="large" text={"장바구니 보기"} />
      </Link>
    </div>
  )
}
