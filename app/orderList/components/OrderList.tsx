"use client"

import Divider from "@/components/common/Divider"
import { useGetWishList } from "../hooks/useGetOrderList"
import OrderCard from "./OrderCard"
import OrderSkeleton from "./OrderCardSkeleton"
import Link from "next/link"

export default function OrderList() {
  const { data: orderList, isError, isLoading } = useGetWishList()

  if (isLoading) {
    return (
      <section className="mt-4">
        <OrderSkeleton />
        <OrderSkeleton />
        <OrderSkeleton />
      </section>
    )
  }

  if (isError) {
    return <div>에러가 발생했습니다.</div>
  }

  if (!orderList || orderList.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <div className="w-16 h-16 mb-4 text-gray-300">
          <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V8h16v10zm-2-1h-6v-2h6v2zM7 8H5v2h2V8zm0 4H5v2h2v-2zm0 4H5v2h2v-2zm4-8H9v2h2V8zm0 4H9v2h2v-2zm0 4H9v2h2v-2z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-1">아직 주문 내역이 없어요</h3>
        <p className="text-sm text-gray-500 text-center mb-6">첫 주문을 시작해보세요!</p>
        <Link
          href="/"
          className="px-6 py-2.5 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
        >
          주문하러 가기
        </Link>
      </div>
    )
  }
  return (
    <section className=" mt-4 pb-12">
      {orderList!.map((order, index) => (
        <div key={index}>
          <OrderCard key={index} {...order} />
          <Divider />
        </div>
      ))}
    </section>
  )
}
