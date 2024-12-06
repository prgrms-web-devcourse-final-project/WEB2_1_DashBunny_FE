"use client"

import Image from "next/image"
import QuantityButton from "@/components/common/QuantityButton"
import { useGetCartItem } from "../hook"
import OrderSheetSkeleton from "./OrderSheetSkeleton"
import { CartItem } from "@/types/cart"
interface MenuListProps {
  storeName: string
  cartItems: CartItem[]
}
export default function MenuList({ storeName, cartItems }: MenuListProps) {
  if (!storeName || !cartItems.length) {
    return <div className="p-5 text-center text-gray-500">장바구니가 비어있습니다.</div>
  }

  return (
    <>
      <div className="p-5 border-b">
        <h1 className="font-semibold text-h3 text-black-700">{storeName}</h1>
      </div>
      <div className="p-5 space-y-4">
        {cartItems.map((item) => {
          return (
            <div className="flex items-center gap-3" key={item.cartItemId}>
              <Image
                width={73}
                height={73}
                src={"https://placehold.co/100x100"}
                alt="Menu item"
                className="w-[73px] h-[73px] rounded-md object-cover"
              />
              <div className="flex-1">
                <p className="font-md text-black-700">{item.menuName}</p>
                <p className="text-h3 font-bold text-black-700">{item.price}</p>
              </div>
              <QuantityButton menuId={item.menuId} initialQuantity={item.quantity} />
            </div>
          )
        })}
      </div>
    </>
  )
}
