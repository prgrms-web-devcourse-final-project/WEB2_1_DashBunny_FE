"use client"

import Divider from "@/components/common/Divider"
import { useGetWishList } from "../hooks/useGetOrderList"
import OrderCard from "./OrderCard"

export default function OrderList() {
  const { data: orderList, isError, isLoading } = useGetWishList()
  if (isLoading) {
    return <div>로딩중...</div>
  }
  return (
    <section className=" mt-4">
      <Divider />
      {orderList!.map((order, index) => (
        <>
          <OrderCard key={index} {...order} />
          <Divider />
        </>
      ))}
    </section>
  )
}
