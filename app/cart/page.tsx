import Divider from "@/components/common/Divider"
import React from "react"
import PaymentButton from "./src/components/PaymentButton"
import { Select } from "@/components/common/Selector"
import dynamic from "next/dynamic"
import OrderSheet from "./src/components/OrderSheet"
import { useDetailStoreData } from "./src/hook/useGetCartState"
const DynamicCartAddress = dynamic(() => import("./src/components/CartAddress"), {
  ssr: false,
  loading: () => <div>loading...</div>,
})
const OrderSummary = () => {
  const paymentOptions = [
    { value: "card", label: "카드 결제" },
    { value: "bank", label: "계좌 이체" },
    { value: "phone", label: "휴대폰 결제" },
  ]
  const couponOptions = [
    { value: "coupon1", label: "쿠폰 1" },
    { value: "coupon2", label: "쿠폰 2" },
    { value: "coupon3", label: "쿠폰 3" },
  ]

  return (
    <div className="p-4">
      {/* Address Section */}
      <DynamicCartAddress />
      <Divider />
      <OrderSheet />
      <Divider />
      {/* Store Request */}
      <div className="p-5">
        <p className="text-black-700 text-h3 font-semibold">가게 요청사항</p>
        <input
          type="text"
          placeholder="예) 견과류 빼주세요"
          className="w-full mt-2 p-2 bg-gray-50 rounded-md"
        />
      </div>
      <Divider />
      {/* Payment Method */}
      <div className="p-5">
        <div className="flex flex-col gap-3 justify-start items-start">
          <p className="text-black-700 text-h3 font-semibold">결제수단</p>
          <Select options={paymentOptions} />
        </div>
      </div>
      <Divider />
      {/* Coupon */}
      <div className="p-5 ">
        <div className="flex flex-col gap-3 justify-start   items-start">
          <p className="text-black-700 text-h3 font-semibold">쿠폰</p>
          <Select options={couponOptions} />
        </div>
      </div>
      <Divider />
      {/* Price Summary */}
      <div className="p-4 space-y-3">
        <div className="flex justify-between">
          <span>상품금액</span>
          <span>19,500원</span>
        </div>
        <div className="flex justify-between">
          <span>배달요금</span>
          <span className="text-orange-500">2,000원</span>
        </div>
        <div className="flex justify-between">
          <span>추가할인</span>
          <span className="text-orange-500">-3,000원</span>
        </div>
        <div className="flex justify-between font-bold pt-3 border-t">
          <span>총 결제 금액</span>
          <span>18,500원</span>
        </div>
      </div>

      {/* Footer Notice */}
      <div className="p-4 text-xs text-gray-500 space-y-1">
        <p>• 개인정보 제3자 제공 내용 및 결제에 동의합니다.</p>
      </div>
      <PaymentButton text="19500원 결제하기" />
    </div>
  )
}

export default OrderSummary
