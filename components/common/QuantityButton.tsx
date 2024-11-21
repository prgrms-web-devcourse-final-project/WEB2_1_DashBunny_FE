"use client"
import React, { useState } from "react"
import MenuQuantityMinusIcon from "../icons/iconComponents/MenuQuantityMinusIcon"
import MenuQuantityPlusIcon from "../icons/iconComponents/MenuQuantityPlusIcon"
interface QuantityButtonProps {
  size?: "small" | "large"
}
export default function QuantityButton({ size = "large" }: QuantityButtonProps) {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className={`w-20 h-8  bg-white grid grid-cols-3 rounded-lg shadow`}>
      <button
        onClick={() => setQuantity(Math.max(1, quantity - 1))}
        className=" flex items-center justify-center "
      >
        <MenuQuantityMinusIcon />
      </button>
      <span className=" flex justify-center items-center  text-black-900 text-md font-normal">
        {quantity}
      </span>
      <button
        onClick={() => setQuantity(quantity + 1)}
        className=" flex items-center justify-center "
      >
        <MenuQuantityPlusIcon />
      </button>
    </div>
  )
}
