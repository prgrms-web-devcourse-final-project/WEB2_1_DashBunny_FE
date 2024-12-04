import Divider from "@/components/common/Divider"
import React from "react"
import dynamic from "next/dynamic"
import CardAddressSkeleton from "./src/components/CardAddressSkeleton"
import OrderSheet from "./src/components/OrderSheet"
const DynamicCartAddress = dynamic(() => import("./src/components/CartAddress"), {
  ssr: false,
  loading: () => <CardAddressSkeleton />,
})
const CartPage = () => {
  return (
    <div className="p-4">
      <DynamicCartAddress />
      <Divider />
      <OrderSheet />
    </div>
  )
}

export default CartPage
