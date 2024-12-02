"use client"

import Image from "next/image"
import QuantityButton from "@/components/common/QuantityButton"
import { useGetCartItem } from "../hook"
import OrderSheetSkeleton from "./OrderSheetSkeleton"

export default function MenuList() {
  const { data, isError, isLoading } = useGetCartItem()

  if (isLoading) {
    return <OrderSheetSkeleton />
  }

  if (isError) {
    return (
      <div className="p-5 text-center">
        <p className="text-red-500">주문 정보를 불러오는데 실패했습니다.</p>
        <button onClick={() => window.location.reload()} className="mt-2 text-blue-500 underline">
          다시 시도하기
        </button>
      </div>
    )
  }

  if (!data || !data.cartItems.length) {
    return <div className="p-5 text-center text-gray-500">장바구니가 비어있습니다.</div>
  }

  return (
    <>
      <div className="p-5 border-b">
        <h1 className="font-semibold text-h3 text-black-700">{data.storeName}</h1>
      </div>
      <div className="p-5 space-y-4">
        {data.cartItems.map((item) => {
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
