"use client"
import React from "react"
import Image from "next/image"
import QuantityButton from "@/components/common/QuantityButton"
import { useDetailStoreData } from "../hook/useGetCartState"

export default function OrderSheet() {
  const { data: cartData, isLoading, isError } = useDetailStoreData()
  if (isLoading) return <div>Loading...</div>
  return (
    <>
      <div className="p-5 border-b ">
        <h1 className="font-semibold text-h3 text-black-700">{cartData?.storeName}</h1>
      </div>
      <div className="p-5 space-y-4">
        {cartData?.cartItems.map((item) => {
          return (
            <div className="flex items-center gap-3" key={item.cartItemId}>
              <Image
                width={73}
                height={73}
                src={item?.menuImage}
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
