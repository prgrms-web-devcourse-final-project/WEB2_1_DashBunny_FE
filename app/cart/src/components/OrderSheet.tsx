"use client"

import Divider from "@/components/common/Divider"
import MenuList from "./MenuList"
import { Select } from "@/components/common/Selector"
import { couponOptions, paymentOptions } from "@/mock/data/CartData"
import PriceSummary from "./PriceSummary"
import PaymentButton from "./PaymentButton"
import { useGetCartItem } from "../hook"

export default function OrderSheet() {
  const { data, isError, isLoading } = useGetCartItem()
  return (
    <>
      <MenuList />
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
      <PriceSummary />
      {/* Footer Notice */}
      <div className="p-4 text-xs text-gray-500 space-y-1">
        <p>• 개인정보 제3자 제공 내용 및 결제에 동의합니다.</p>
      </div>
      <PaymentButton text="19500원 결제하기" />
    </>
  )
}
