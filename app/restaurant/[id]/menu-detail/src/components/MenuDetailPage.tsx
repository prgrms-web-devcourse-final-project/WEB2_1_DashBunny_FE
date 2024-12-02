"use client"

import React from "react"
import { useSearchParams } from "next/navigation"
import ColorButton from "@/components/common/ColorButton"
import Image from "next/image"
import useCartStore from "@/shared/store/useCartStore"
export default function MenuDetailPage() {
  const searchParams = useSearchParams()
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
  const { addToCart } = useCartStore()
  const addToCartHandler = (menuId: number, quantity: number) => {
    addToCart(menuId, quantity)
  }
  return (
    <div className="flex flex-col  bg-white">
      {/* 상품 이미지 영역 */}
      <Image alt="" src={menuDetail.image} width={360} height={360} />
      {/* 상품 정보 영역 */}
      <div className="flex flex-col p-4 space-y-4">
        {/* 상품명 */}
        <h1 className="text-xl font-medium">{menuDetail.name}</h1>
        {/* 상품 설명 */}
        <p className="text-gray-600 text-sm">{menuDetail.description}</p>

        {/* 가격 영역 */}
        <div className="flex justify-between items-center">
          <span className="font-medium">가격</span>
          <span className="font-medium">{menuDetail.price}</span>
        </div>

        {/* 수량 선택 */}
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
      {/* 장바구니 버튼 */}{" "}
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
