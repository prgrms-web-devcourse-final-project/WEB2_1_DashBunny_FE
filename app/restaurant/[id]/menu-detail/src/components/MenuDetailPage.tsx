"use client"

import React from "react"
import { useSearchParams } from "next/navigation"
import ColorButton from "@/components/common/ColorButton"
import Image from "next/image"
import { useAddCartItem } from "@/app/cart/src/hook"

export default function MenuDetailPage() {
  const searchParams = useSearchParams()
  //@=>훅으로 뺴기
  const menuDetail = {
    name: searchParams.get("name") || "",
    price: Number(searchParams.get("price")) || 0,
    description: searchParams.get("description") || "",
    image: searchParams.get("image") || "",
    menuId: Number(searchParams.get("menuId")) || 0,
    storeId: searchParams.get("storeId") || "",
  }
  const [quantity, setQuantity] = React.useState(1)
  const quantityHandler = (type: string) => {
    if (type === "plus") {
      setQuantity(quantity + 1)
    } else {
      if (quantity > 1) {
        setQuantity(quantity - 1)
      }
    }
  }
  const { addCart } = useAddCartItem()

  const addToCartHandler = (menuId: number, quantity: number) => {
    addCart({ menuId, quantity })
  }
  return (
    <div className="flex flex-col  bg-white">
      <Image alt="" src={"https://placehold.co/100x100"} width={360} height={360} />
      <div className="flex flex-col p-4 space-y-4">
        <h1 className="text-xl font-medium">{menuDetail.name}</h1>
        <p className="text-gray-600 text-sm">{menuDetail.description}</p>
        <div className="flex justify-between items-center">
          <span className="font-medium">가격</span>
          <span className="font-medium">{menuDetail.price}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="font-medium">수량</span>
          <div className="flex items-center space-x-3">
            <button
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500"
              onClick={() => quantityHandler("minus")}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500"
              onClick={() => quantityHandler("plus")}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="p-3 bg-white fixed bottom-0 max-w-[360px] w-full mx-auto flex justify-center items-center ">
        <ColorButton
          onClick={() => addToCartHandler(menuDetail.menuId, quantity)}
          size="large"
          text={"장바구니 담기"}
        />
      </div>
    </div>
  )
}
