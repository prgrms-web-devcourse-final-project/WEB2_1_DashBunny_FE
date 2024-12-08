interface PriceSummaryProps {
  deliveryFee: number
  totalAmount: number
  totalItemsPrice: number
}
export default function PriceSummary({
  deliveryFee,
  totalAmount,
  totalItemsPrice,
}: PriceSummaryProps) {
  return (
    <div className="p-4 space-y-3">
      <div className="flex justify-between">
        <span>상품금액</span>
        <span>{totalItemsPrice}원</span>
      </div>
      <div className="flex justify-between">
        <span>배달요금</span>
        <span className="text-orange-500">{deliveryFee}원</span>
      </div>
      {/* <div className="flex justify-between">
        <span>추가할인</span>
        <span className="text-orange-500">-3,000원</span>
      </div> */}
      <div className="flex justify-between font-bold pt-3 border-t">
        <span>총 결제 금액</span>
        <span>{totalAmount}원</span>
      </div>
    </div>
  )
}
