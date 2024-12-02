"use client"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import MenuQuantityMinusIcon from "../icons/iconComponents/MenuQuantityMinusIcon"
import MenuQuantityPlusIcon from "../icons/iconComponents/MenuQuantityPlusIcon"
import TrashIcon from "../icons/iconComponents/TrashIcon"
import { useUpdateCartItem } from "@/app/cart/src/hook"

interface QuantityButtonProps {
  size?: "small" | "large"
  initialQuantity: number
  menuId: number
}

export default function QuantityButton({
  size = "large",
  initialQuantity,
  menuId,
}: QuantityButtonProps) {
  const QUANTITY_CALCULATION = { PLUS: "PLUS", MINUS: "MINUS" }
  const [quantity, setQuantity] = useState(initialQuantity)
  const { patchCartState } = useUpdateCartItem()
  const patchCartStateHandler = (type: string) => {
    patchCartState.mutate({
      menuId: menuId,
      quantity: type === QUANTITY_CALCULATION.PLUS ? 1 : -1,
    })
  }
  const handleQuantityPlus = () => {
    setQuantity(quantity + 1)
    patchCartStateHandler(QUANTITY_CALCULATION.PLUS)
  }
  const handleQuantityMinus = () => {
    setQuantity(quantity - 1)
    patchCartStateHandler(QUANTITY_CALCULATION.MINUS)
  }
  return (
    <AnimatePresence>
      <motion.div
        className="flex"
        initial={{ width: "2rem" }}
        animate={{ width: quantity === 0 ? "2rem" : "5rem" }}
        transition={{ duration: 0.3 }}
      >
        <div
          className={`${quantity === 0 ? "w-8 h-8" : "w-20 h-8"} bg-white grid ${quantity === 0 ? "grid-cols-1" : "grid-cols-3"} rounded-lg shadow`}
        >
          {quantity > 0 && (
            <button onClick={handleQuantityMinus} className="flex items-center justify-center">
              {quantity === 1 ? <TrashIcon /> : <MenuQuantityMinusIcon />}
            </button>
          )}
          {quantity > 0 && (
            <span className="flex justify-center items-center text-black-900 text-md font-normal">
              {quantity}
            </span>
          )}
          <button
            onClick={handleQuantityPlus}
            className={`flex items-center justify-center ${quantity === 0 ? "w-8 h-8" : ""}`}
          >
            <MenuQuantityPlusIcon />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
