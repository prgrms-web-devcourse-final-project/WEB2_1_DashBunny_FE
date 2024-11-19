"use client"

import { useState } from "react"
import kfc from "@/public/image/kfc.png"
import Image from "next/image"
import MenuQuantityMinusIcon from "../icons/iconComponents/MenuQuantityMinusIcon"
import MenuQuantityPlusIcon from "../icons/iconComponents/MenuQuantityPlusIcon"
interface MenuItemProps {
  name: string
  price: number
  description: string
  image: string
}
export const MenuItem = ({ name, price, description, image }: MenuItemProps) => {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="p-4 pt-0 ">
      <div className="flex justify-between border-b pb-4">
        <div className="space-y-1 flex-1">
          <h3 className="font-bold text-lg text-black-700">{name}</h3>
          <p className="text-md font-semibold text-black-900">{price.toLocaleString()}원</p>
          <p className="text-black-500 text-sm font-medium">{description}</p>
        </div>
        <div className="relative w-24 h-24">
          <Image src={kfc} alt={name} className="w-full h-full object-cover rounded-lg" />
          <div className="absolute w-20 -bottom-2 left-7 flex items-center bg-white rounded-full shadow">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-8 h-8 flex items-center justify-center"
            >
              <MenuQuantityMinusIcon />
            </button>
            <span className="w-6 text-center text-black-900 text-md font-normal">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 flex items-center justify-center"
            >
              <MenuQuantityPlusIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
