import Divider from "@/components/common/Divider"
import React from "react"
import PaymentButton from "./src/components/PaymentButton"
import { Select } from "@/components/common/Selector"
import dynamic from "next/dynamic"

import { couponOptions, paymentOptions } from "@/mock/data/CartData"
import CardAddressSkeleton from "./src/components/CardAddressSkeleton"
import PriceSummary from "./src/components/PriceSummary"
import MenuList from "./src/components/MenuList"
import OrderSheet from "./src/components/OrderSheet"
const DynamicCartAddress = dynamic(() => import("./src/components/CartAddress"), {
  ssr: false,
  loading: () => <CardAddressSkeleton />,
})
const CartPage = () => {
  return (
    <div className="p-4">
      {/* Address Section */}
      <DynamicCartAddress />
      <Divider />
      <OrderSheet />
    </div>
  )
}

export default CartPage
