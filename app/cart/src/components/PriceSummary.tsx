"use client"
import { useGetCartItem } from "../hook"

export default function PriceSummary() {
  const { data, isError, isLoading } = useGetCartItem()
  if (!data) return "No data"
  if (isLoading) return "Loading..."
  if (isError) return "Error"

  return (
    <div className="p-4 space-y-3">
      <div className="flex justify-between">
        <span>상품금액</span>
        <span>19,500원</span>
      </div>
      <div className="flex justify-between">
        <span>배달요금</span>
        <span className="text-orange-500">{data?.deliveryFee}원</span>
      </div>
      <div className="flex justify-between">
        <span>추가할인</span>
        <span className="text-orange-500">-3,000원</span>
      </div>
      <div className="flex justify-between font-bold pt-3 border-t">
        <span>총 결제 금액</span>
        <span>{data?.totalAmount}원</span>
      </div>
    </div>
  )
}
